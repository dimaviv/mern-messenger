const jwt = require('jsonwebtoken')
const config = require('config')

module.exports = function (req, res, next){
    if (req.method === 'OPTIONS'){
        next()
    }
    try{
        const token = req.headers.authorization.split(' ')[1]
        if (!token){
            return res.status(401).json({message: "Not authorized"})
        }
        const decoded = jwt.verify(token, config.get('TOKEN_SECRET_KEY'))
        req.user = decoded
        next()
    }catch (e) {
        return res.status(401).json({message: "Not authorized"})
    }
}