const {Schema, model}= require('mongoose')

const memberSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        minlength:2
    },
    position: {
        type: String,
        required: true,
        trim: true
    },
    birthday:{
        type: String
    },
    email:{
        type: String,
        trim: true
    },
    phone:{
        type: String,
        minlength:9,
        maxlength:16
    }
})

const Member =model('Member',memberSchema)
module.exports= Member