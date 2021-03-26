
const express =require('express')
const morgan=  require('morgan')
const mongoose= require('mongoose')


const router= require('./Routes')

const app =express()

app.set('view engine','ejs')

app.use(morgan('dev'))
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use('/members',router)

app.get('/',(req,res)=>{
      res.render('home')
})


const PORT = process.env.PORT || 4040

mongoose.connect(`mongodb+srv://Reahana:nodeDB10@my-cluster.vdjli.mongodb.net/testDB?retryWrites=true&w=majority`,
{useNewUrlParser: true, useUnifiedTopology: true}) 

.then(()=>{
    console.log('Database Connected')
    app.listen(PORT,()=>{
        console.log(`Server is working on PORT ${PORT}`)
    })
})
.catch(e =>{
    console.log(e);
})

