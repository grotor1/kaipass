const {Router} = require('express')
const config = require('config')
const UserInf = require('../models/usersInfModel')
const UserLog = require('../models/usersLogModel')
const jwt = require('jsonwebtoken')
const {check, validationResult} = require('express-validator')
const router = Router()


router.post('/reg',
    [
        check('login', 'Введите логин').exists(),
        check('email', 'Введите почту').exists().isEmail(),
        check('password', 'Введите пароль').exists(),
        check('passwordRep', 'Повторите пароль').exists(),
    ],
    async (req, res) => {
        try {
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                return res.status(400).json({
                    errors: errors.array(),
                    message: "Некорректные данные при регистрации"
                })
            }
            const {login, email, password, passwordRep} = req.body;
            const candidate = await UserLog.findOne({login})
            if (candidate) {
                return res.status(400).json({message: "Такой логин уже есть"})
            }
            if (password !== passwordRep) {
                return res.status(400).json({message: "Пароли не совпадают"})
            }
            const userLog = new UserLog({login, password})
            await userLog.save()
            const userLogCreated = await UserLog.findOne({login})
            const _id_userLog = userLogCreated._id;
            const userInf = new UserInf({nickname: login, email, role: "user", points: 0, _id_userLog})
            await userInf.save()
            res.status(201).json({message: "Новый пользователь создан"})
        } catch (e) {
            res.status(500).json({message: "Что-то не так", error: e})
        }
    })

router.post('/login',
    [
        check('login', 'Введите логин').exists(),
        check('password', 'Введите пароль').exists(),
    ],
    async (req, res) => {
        try {
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                return res.status(400).json({
                    errors: errors.array(),
                    message: "Некорректные данные при регистрации"
                })
            }
            const {login, password} = req.body;
            const userLog = await UserLog.findOne({login})
            if (!userLog) {
                return res.status(400).json({message: 'Пользователь не обнаружен'})
            }
            if (userLog.password !== password) {
                return res.status(400).json({message: 'Неверный пароль'})
            }
            const userInf = await UserInf.findOne({_id_userLog: userLog._id})
            const token = jwt.sign(
                {_id_userInf: userInf._id},
                config.get('jwtSecret'),
                {expiresIn: "1h"}
            )
            res.json({token, _id_userInf: userInf._id})
        } catch (e) {
            res.status(500).json({message: "Что-то не так"})
        }
    })

module.exports = router