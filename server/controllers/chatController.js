const Chat = require("../models/Chat")


class ChatController {

    async create(req, res) {
        const {name, senderId, receiverId} = req.body;
        const newChat = new Chat({
            name,
            users: [senderId, receiverId]
        })
        const savedChat = await newChat.save()
        res.json(savedChat)
    }

    // get All chats of specified user
    async getAll(req, res) {
        const chats = await Chat.find({
            users:{ $in: [req.params.userId] },
        })
        res.json(chats)
    }


}


module.exports = new ChatController()