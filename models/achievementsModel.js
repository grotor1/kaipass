const {Schema, model, Types} = require("mongoose");

const AchievementsSchema = new Schema({
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
    maxValue: {
        type: Number,
        required: true,
        unique: false
    }
},{
    timestamps: true,
    collection: 'achievements'
});

module.exports = model('Achievements', AchievementsSchema);