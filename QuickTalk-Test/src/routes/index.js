const { Router } = require('express');
const router = Router();

const nodemailer = require('nodemailer');

router.post('/send-email', async (req, res) => {
    const { text, email, password } = req.body;

    contentHTML = `
        <h1>Bienvenido a QuickTalk  ${text}</h1>
        <h2>Tu informacion</h2>
        <ul>
            <br>
            <br>
            <li>Username: ${text}</li>
            <li>User Email: ${email}</li>
            <li>Password: ${password}</li>
        </ul>
    `;

    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true, // Use true for port 465, false for all other ports
        auth: {
          user: "quicktalk69@gmail.com",
          pass: "dhsxzltusmsimsng",
        },
        tls: {
            rejectUnauthorized: false
        }
    });

    let info = await transporter.sendMail({
        from: '"QuickTalk" <quicktalk69@gmail.com>', // sender address,
        to: email,
        subject: 'Registro exitoso',
        // text: 'Hello World'
        html: contentHTML
    })

    console.log('Message sent: %s', info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...

    
    res.redirect('/QuickTalk.html');
});

module.exports = router;