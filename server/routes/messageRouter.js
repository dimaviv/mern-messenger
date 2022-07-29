const Router = require('express')
const router = new Router()
const messageController = require('../controllers/messageController')


router.post('/', messageController.create)
router.get('/:chatId', messageController.getAll)




module.exports = router