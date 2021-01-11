const express =require('express')
const morgan=  require('morgan')
const mongoose= require('mongoose')

const router= require('./Routes')
const app =express()

app.set('view engine','ejs')

app.use(morgan('dev'))
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.get('/',(res,req)=>{
    res.json({mesage: 'welcome'})
})

const PORT = process.env.PORT || 4040
mongoose.connect(`mongodb+srv://Reahana:nodeDB10@my-cluster.vdjli.mongodb.net/testDB?retryWrites=true&w=majority`)
.then(()=>{
    app.listen(PORT,()=>{
        console.log(`Server is working on PORT ${PORT}`)
    })
})
.catch(e =>{
    console.log(e);
})

