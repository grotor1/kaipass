const {Schema, model, Types} = require("mongoose");

const TasksSchema = new Schema({
    taskType: {
        type: String,
        required: true,
        unique: false
    },
    taskQuestion: {
        type: String,
        required: true,
        unique: false
    },
    rightAnswerInput: {
        type: String,
        required: true,
        unique: false
    }, //or this
    rightAnswersChoose: {
        type: [{answer: String, rightOne: Boolean}],
        required: false,
        unique: false
    },
    achievements: {
        type: [{_id_achievements: Schema.Types.ObjectId}],
        required: false,
        unique: false
    }
}, {
    timestamps: true,
    collection: 'tasks'
});

module.exports = model('Task', TasksSchema);

