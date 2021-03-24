const {Schema, model, Types} = require("mongoose");

const ThemesSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    desc: {
        type: String,
        required: true,
        unique: true
    },
    coursesCount: {
        type: String,
        required: false,
        unique: false
    },
    courses: {
        type: [{
            _id_courses: Schema.Types.ObjectId,
        }],
        required: false,
        unique: false
    },
    achievements: {
        type: [{
            _id_achievements: Schema.Types.ObjectId,
        }],
        required:false,
        unique:false
    }
}, {
    timestamps: true,
    collection: 'themes'
});

module.exports = model('Theme', ThemesSchema);