const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    password: String,
    userType: String,
    email: String,
    userInfo: {
        type: mongoose.Schema.Types.ObjectId,
        refPath: 'userType'
    },
    createdAt: { type: Date, default: Date.now}
});

module.exports.User = mongoose.model('User', userSchema);