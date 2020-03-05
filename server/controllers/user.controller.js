const User = require('../models/User.model')
const bcrypt = require('bcryptjs')

profile = (req, res) => {
    res.json({
        body: req.user,
        token: req.token
    })
}

register = async (req, res) => {
    try {
        const user = new User(req.body)
        const token = await user.generateToken()
        await user.save()
        res.status(201).send({ user, token })
    } catch (error) {
        res.status(400).send(error)
    }
}

login = async (req, res) => {
    try {
        const { email, password } = req.body
        const user = await User.findOne({ email })
        if(!user) throw new Error({ error: 'Invalid email login credentials' })

        const comparePassword = await bcrypt.compare(password, user.password)
        if(!comparePassword) throw new Error({ error: 'Invalid password login credentials' })

        const token = await user.generateToken()
        res.send({ user, token })
    } catch (error) {
        res.status(400).send(error)
    }
}

logout = async (req, res) => {
    try {
        req.user.tokens = req.user.tokens.filter(t => t.token !== req.token)
        await req.user.save()
        res.sendStatus(204) 
    } catch (error) {
        res.status(500).send(error)
    }
}

logoutall = async (req, res) => {
    try {
        req.user.tokens = []
        await req.user.save()
        res.sendStatus(204) 
    } catch (error) {
        res.status(500).send(error)
    }
}

module.exports = {
    profile,
    register,
    login,
    logout,
    logoutall
}