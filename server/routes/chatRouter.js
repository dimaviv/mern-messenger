const Router = require('express')
const router = new Router()
const chatController = require('../controllers/chatController')


router.post('/', chatController.create)
router.get('/:userId', chatController.getAll)




module.exports = router