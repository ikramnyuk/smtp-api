const express = require('express');
const router = express.Router();

const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    auth: {
        user: 'i.kramnyuk@gmail.com',
        pass: 'fxwxylogdseyvdjj'
    }
});

// Routes

router.post('/send', send);

module.exports = router;

function send(req, res, next) {
    sendMail(req.body).then(()=>{
        res.status(200).json({ message: 'Done' });
    });
} 

// Services

async function sendMail(data){
    transporter.sendMail({
        from: data.firstName + ' ' + data.lastName + ' <' + data.email + '>',
        to: 'd.l@justduck.co',
        subject: data.topic,
        text: data.message
    });
    
    console.log('sended mail');
}