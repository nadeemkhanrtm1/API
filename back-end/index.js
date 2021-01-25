const express = require('express');
const fs = require("fs");
const emailJSON = require('./email.json');
const app = express();
const path = require("path");
var bodyParser = require('body-parser');
const cors = require('cors');
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

console.log(emailJSON.email)

app.get('/sendMail',(req,res)=>{
    const sendData = fs.readFileSync(path.join(__dirname,'/email.json'),"utf-8");
    const data = JSON.parse(sendData);
    res.send(data)
})

app.post('/sendMail',(req,res)=>{
    const email = {
        email:req.body.email
    }
    fs.writeFileSync(path.join(__dirname,"/email.json"),JSON.stringify(email))
    console.log(req.body.email)
    res.send('Hellooooooooooooooooooo Mail here post request')
})
app.listen(8080,()=>{
    console.log('port running on :8080');
})