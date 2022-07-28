const {Schema, model, ObjectId} = require("mongoose")

const User = new Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    chats: [{ type: ObjectId, ref: 'Chat', required: true }]
})

module.exports = model('User', User)