const jwt = require('jsonwebtoken')
const User = require('../models/User.model')

module.exports.authUser = async (req, res, next) => {
    const token = req.header('Authorization')
    const data = await jwt.verify(token, process.env.JWT_KEY)
    
    try {
        const user = await User.findOne({ _id: data._id, 'tokens.token': token })
        if(!user) throw new Error('Cannot to find user id or token')

        req.token = token
        req.user = user
        // req.user = { 
        //     _id: user._id, 
        //     name: user.name, 
        //     email: user.email, 
        //     tokens: user.tokens 
        // }
        
        next()
    } catch (error) {
        res.status(401).send({ error: 'Not authorized to access this resource' })
    }
}