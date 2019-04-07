const express=require('express')
const path=require('path')
const app=express()
//const { User,Product}=require('./db')

app.use(express.json())

app.use(express.urlencoded({extended:true}))

app.use('/',express.static(path.join(__dirname, 'public')))

app.use('/api',require('./routes/api').route)



app.listen(1234,()=>{
    console.log('server started al http://localhost:1234')
})

