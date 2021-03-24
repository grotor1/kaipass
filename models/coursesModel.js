const {Schema, model, Types} = require("mongoose");

const CoursesSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: false
    },
    desc: {
        type: String,
        required: true,
        unique: false
    },
    hours: {
        type: Number,
        required: true,
        unique: false
    },
    previewTitle: {
        type: String,
        required: true,
        unique: false
    },
    previewSrc: {
        type: String,
        required: true,
        unique: false
    },
    usersCount: {
        type: Number,
        required: false,
        unique: false
    },
    lessonCount: {
        type: Number,
        required: true,
        unique: false
    },
    lessons: {
        type: [{
            _id_lesson: Schema.Types.ObjectId
        }],
        required: true,
        unique: true
    },
    achievements: {
        type: [{
            _id_achievements: Schema.Types.ObjectId
        }],
        required: true,
        unique: true
    }
}, {
    timestamps: true,
    collection: 'courses'
});

module.exports = model('Course', CoursesSchema);

