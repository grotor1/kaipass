const {Schema, model, Types} = require("mongoose");

const UsersLogSchema = new Schema({
    login: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: false,
        unique: false
    },
}, {
    timestamps: true,
    collection: 'usersLog'
});

module.exports = model('UserLog', UsersLogSchema);