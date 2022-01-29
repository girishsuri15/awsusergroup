'use strict';
let express  = require('express');
const orderdetail=require('./orderdetails');
let app =  express();
app.use(express.json())
app.use(express.urlencoded({
  extended: true
}))

app.get('/data',async(req,res,next) =>{
    let data= {"key":"value"}
    console.log(data)
    res.status(200).send(data);
})
app.get('/healthy',async(req,res,next)=>{
    console.log("health status")
    res.status(200).send("Hello world");
})
app.listen(8080, function (err) {
    console.log("demo service is runing on 8080")
})
