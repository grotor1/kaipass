const {Schema, model, Types} = require("mongoose");

const LessonsSchema = new Schema({
    name: {
        type: String,
        unique: false,
        required: true
    },
    desc: {
        type: String,
        unique: false,
        required: true
    },
    previewSrc: {
        type: String,
        unique: false,
        required: true
    },
    text: {
        type: String,
        unique: false,
        required: true
    },
    mediaPhotoSrc: {
        type: String,
        unique: false,
        required: false
    },
    mediaVideoSrc: {
        type: [String],
        unique: false,
        required: false
    },
    mediaFileUrl: {
        type: [String],
        unique: false,
        required: false
    },
    tasks: {
        type: [{_id_task: Schema.Types.ObjectId}],
        unique: false,
        required: false
    },
    achievements: {
        type: [{_id_achievements: Schema.Types.ObjectId}],
        unique: false,
        required: false
    },
}, {
    timestamps: true,
    collection: 'lessons'
});

module.exports = model('Lesson', LessonsSchema);