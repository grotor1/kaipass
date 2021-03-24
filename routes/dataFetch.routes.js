const {Router} = require('express')
const Task = require("../models/tasksModel");
const Lesson = require("../models/lessonsModel");
const Course = require("../models/coursesModel");
const Theme = require("../models/themesModel");
const Achievements = require("../models/achievementsModel");
const UserInf = require("../models/usersInfModel");
const router = Router()

router.post("/taskAdd", (req, res) => {
    const task = new Task();
    const {taskType, taskQuestion, rightAnswerInput, rightAnswerChoose, achievements} = req.body;
    if (!taskType || !taskQuestion || (!rightAnswerInput && !rightAnswerChoose)) {
        return res.status(400).json({
            success: false,
            message: 'You must provide an taskType, taskQuestion, rightAnswer of any type'
        });
    }
    task.taskType = taskType;
    task.taskQuestion = taskQuestion;
    task.rightAnswerInput = rightAnswerInput || "";
    task.rightAnswerChoose = rightAnswerChoose || [];
    task.achievements = achievements || [];
    task.save(err => {
        if (err) return res.json({success: false, message: err})
        return res.json({success: true});
    });
});

router.post("/lessonAdd", (req, res) => {
    const lesson = new Lesson();
    const {name, desc, previewSrc, text, mediaPhotoSrc, mediaVideoSrc, mediaFileUrl, tasks, achievements} = req.body;
    if (!name || !desc || !previewSrc || !text) {
        return res.json({
            success: false,
            message: 'You must provide an name, desc, previewSrc and text'
        });
    }
    lesson.name = name;
    lesson.desc = desc;
    lesson.previewSrc = previewSrc;
    lesson.text = text;
    lesson.mediaPhotoSrc = mediaPhotoSrc || "";
    lesson.mediaVideoSrc = mediaPhotoSrc || "";
    lesson.mediaFileUrl = mediaFileUrl || "";
    lesson.tasks = tasks || [];
    lesson.achievements = achievements || [];
    lesson.save(err => {
        if (err) return res.json({success: false, message: err})
        return res.json({success: true});
    });
});

router.post("/coursesAdd", (req, res) => {
    const course = new Course();
    const {name, desc, hours, previewTitle,previewSrc,  userCount, lessonCount, lessons, achievements} = req.body;
    if (!name || !desc || !hours || !previewSrc || !previewTitle) {
        return res.json({
            success: false,
            message: 'You must provide an name, desc, hours, previewSrc, maxLessonCount and text'
        });
    }
    course.name = name;
    course.desc = desc;
    course.hours = hours;
    course.previewSrc = previewSrc;
    course.previewTitle = previewTitle;
    course.usersCount = userCount || 0;
    course.lessonCount = lessonCount || 0;
    course.lessons = lessons || [];
    course.achievements = achievements || [];
    course.save(err => {
        if (err) return res.json({success: false, message: err})
        return res.json({success: true});
    });
});

router.post("/themesAdd", (req, res) => {
    const theme = new Theme();
    const {name, desc, coursesCount, courses, achievements} = req.body;
    if (!name || !desc) {
        return res.json({
            success: false,
            message: 'You must provide an name, desc'
        });
    }
    theme.name = name;
    theme.desc = desc;
    theme.coursesCount = coursesCount || 0;
    theme.courses = courses || [];
    theme.achievements = achievements || [];
    theme.save(err => {
        if (err) return res.json({success: false, message: err})
        return res.json({success: true});
    });
});

router.post("/achievementsAdd", ((req, res) => {
    const achievements = new Achievements();
    const {name, desc, maxValue}= req.body;
    if (!name || !desc || !maxValue) {
        return res.json({
            success: false,
            message: 'You must provide an name, desc, maxValue'
        });
    };
    achievements.name = name;
    achievements.desc = desc;
    achievements.maxValue = maxValue;
    achievements.save(err => {
        if (err) return res.json({success: false, message: err})
        return res.json({success: true});
    });
}));

router.get("/usersInfGet/:_id_userInf", (req, res) => {
    const {_id_userInf} = req.params;
    UserInf.findById(_id_userInf, (err, userInf) => {
        if (err) return res.json({success: false, error: err});
        return res.json({success: true, data: userInf});
    });
});

router.get("/themesGet", (req, res) => {
    Theme.find((err, themes) => {
        if (err) return res.json({success: false, message: err});
        return res.json({success: true, data: themes});
    });
});

router.get("/coursesGet", (req, res) => {
    Course.find((err, courses) => {
        if (err) return res.json({success: false, message: err});
        return res.json({success: true, data: courses});
    });
});

router.get("/coursesGet/:_id_course", (req, res) => {
    const {_id_course} = req.params;
    Course.findById(_id_course, (err, course) => {
        if (err) return res.json({success: false, message: err});
        return res.json({success: true, data: course});
    });
});

router.get("/lessonsGet/:_id_lesson", (req, res) => {
    const {_id_lesson} = req.params;
    Lesson.findById(_id_lesson, (err, lesson) => {
        if (err) return res.json({success: false, message: err});
        return res.json({success: true, data: lesson});
    });
});

router.get("/taskGet/:_id_task", (req, res) => {
    const {_id_task} = req.params;
    Task.findById(_id_task, (err, task) => {
        if (err) return res.json({success: false, message: err});
        return res.json({success: true, data: task});
    });
});

router.get("/achievementsGet/:_id_achievements", (req, res) => {
    const {_id_achievements} = req.params;
    Achievements.findById(_id_achievements, (err, achievements) => {
        if (err) return res.json({success: false, message: err});
        return res.json({success: true, data: achievements});
    });
})

module.exports = router