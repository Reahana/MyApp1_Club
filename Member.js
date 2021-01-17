const {Schema, model}= require('mongoose')

const memberSchema = new Schema({
    name: {
        type: String,
        required: true,
        minlength:2
    },
    position: {
        type: String,
        required: true,
        trim: true
    },
    birthday:{
        type: String,
        trim: true
    },
    email:{
        type: String,
        trim: true
    },
    phone:{
        type: String,
        trim: true,
        minlength:9,
        maxlength:15
    }
})

const Member =model('Member', memberSchema)
module.exports= Member