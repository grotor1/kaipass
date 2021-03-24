const {Schema, model, Types} = require("mongoose");

const UsersInfSchema = new Schema({
    nickname: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: false,
        unique: false
    },
    surname: {
        type: String,
        required: false,
        unique: false
    },
    aboutMe: {
        type: String,
        required: false,
        unique: false
    },
    email: {
        type: String,
        required: true,
        unique: false
    },
    _id_userLog: {
        type: Schema.Types.ObjectId,
        required: true,
        unique: true
    },
    courses: {
        type: [{
            _id_courses: Schema.Types.ObjectId,
            currentValue: Number
        }],
        required: true,
        unique: false
    },
    achievements: {
        type: [{
            _id_achievements: Schema.Types.ObjectId,
            currentValue: Number
        }],
        required: true,
        unique: false
    },
    points: {
        type: Number,
        required: false,
        unique: false
    },
    rating: {
        type: Number,
        required: false,
        unique: false
    },
    role: {
        type: String,
        required: false,
        unique: false
    },
},{
    timestamps: true,
    collection: 'usersInf'
});

module.exports = model('UserInf', UsersInfSchema);