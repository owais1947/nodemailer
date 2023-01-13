const { response } = require('express');
const express = require('express')
const nodemailer = require('nodemailer')
const app = express()

const port = 5000;

function sendEmail(){
    return new Promise ((resolve,reject)=>{
        var transporter = nodemailer.createTransport({
            service:'gmail',
            auth:{
                user:'nismoowais1@gmail.com',
                password:'iwillnottellu',
            }
        })
        const mail_option = {
              from:'',
              to:'',
              subject:'Testing bolte',
              text:'arrey bhaii sono',

        }

        transporter.sendMail(mail_option,function(error,info){
            if(error){
                console.log(error)
                return reject ({message:` A error has occured`})
            }
            return resolve ({message:"email has ben sent successfully"})
        })
    })
}


app.get('/',(req,res)=>{
    sendEmail()
    .then(response => res.send(response.message)).catch(error=>res.status(500).send(error.message))
})
app.listen(port,()=>{
    console.log(` ${port}`)
})