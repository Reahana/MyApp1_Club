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
    }
})

const Member =model('Member', memberSchema)
module.exports= Member