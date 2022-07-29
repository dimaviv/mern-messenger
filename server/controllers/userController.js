const User = require("../models/User")
const jwt = require('jsonwebtoken');
const config = require('config')
const bcrypt = require("bcrypt")


const generateJwt = (data) => {
    return jwt.sign({data}, config.get('TOKEN_SECRET_KEY'), { expiresIn: '24h' });
}

class UserController {
    async registration(req, res) {
        const {username, password} = req.body;
        const hashedPassword = await bcrypt.hash(password, 5)
        const user = new User({username, password: hashedPassword})
        user.save()
            .then(() => {
                const token = generateJwt(username)
                return res.json({token})
            })
            .catch(err => {
                throw new Error(err)
            })
    }

    async login(req, res) {
        const {username, password} = req.body;
        const user = await User.findOne({username});
        if (!user) throw new Error("User with this username doesn't exist")
        const isValid =  bcrypt.compareSync(password, user.password)

        if (!isValid) throw new Error("Invalid password")
        const token = generateJwt(username)
        return res.json({token})
    }

    async check(req, res) {
        const token = generateJwt(req.username)
        return res.json({token})
    }
}

module.exports = new UserController()