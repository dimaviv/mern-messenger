const {Schema, model, ObjectId} = require("mongoose")

const Message = new Schema({
    text: { type: String, required: true, unique: true },
    sender: { type: ObjectId, ref: 'User', required: true },
    chat: { type: ObjectId, ref: 'Chat', required: true },
},
    { timestamps: true })

module.exports = model('Message', Message)