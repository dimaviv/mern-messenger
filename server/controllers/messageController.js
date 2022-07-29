const Message = require("../models/Message")


class MessageController {

    async create(req, res) {
        const {text, sender, chat} = req.body;
        const newMessage = new Message({ text, sender, chat })
        const savedMessage = await newMessage.save()
        res.json(savedMessage)
    }

    // get All messages of specified chat
    async getAll(req, res) {
        const messages = await Message.find({
            chat: req.params.chatId,
        })
        res.json(messages)
    }


}


module.exports = new MessageController()