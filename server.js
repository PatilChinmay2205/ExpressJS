var bodyParser=require('body-parser')
var userRouter=require('./router/user.js')
var tutorialRouter=require('./router/tutorial.js')
var express= require('express')()
var expressClass=require('express')
const PORT=8080
express.use(bodyParser.json())
express.get("/",(req, res)=>{
    res.send("Connected to port")
})
express.use("/user",userRouter)
express.use("/tutorial",tutorialRouter)
express.listen(PORT) 