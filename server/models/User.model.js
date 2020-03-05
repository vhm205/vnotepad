const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const validator = require('validator')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        validate: value => {
            if(!validator.isEmail(value)){
                throw new Error({error: 'Invalid Email address'})
            }
        }
    },
    password: {
        type: String,
        required: true,
        minLength: 6
    },
    tokens: [{
        token: {
            type: String,
            required: true
        }
    }]
}, { timestamps: true })


userSchema.pre('save', async function(next) {
    if(this.isModified('password')){
        const salt = await bcrypt.genSalt(8)
        this.password = await bcrypt.hash(this.password, salt)
    }

    next()
})

userSchema.methods.generateToken = async function() {
    const token = await jwt.sign({_id: this._id}, process.env.JWT_KEY)
    this.tokens = [...this.tokens, { token }]
    await this.save()
    return token
}

userSchema.statics.findByCredentials = async function(email, password){
    const user = await User.findOne({email})
    if(!user) throw new Error({ error: 'Invalid email login credentials' })

    const comparePassword = await bcrypt.compare(password, user.password)
    if(!comparePassword) throw new Error({ error: 'Invalid password login credentials' })

    return user
}

module.exports = mongoose.model('User', userSchema)
