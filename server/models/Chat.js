const {Schema, model, ObjectId} = require("mongoose")

const Chat = new Schema({
    name: { type: String },
    creator: {type: ObjectId, ref: 'User'},
    users: [{ type: ObjectId, ref: 'User', required: true }],
    messages: [{ type: ObjectId, ref: 'Message', required: true }]

})

module.exports = model('Chat', Chat)