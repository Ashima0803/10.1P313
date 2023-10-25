require('dotenv').config();
const express = require('express');
const cors = require('cors');
const formData = require('form-data');
const Mailgun = require('mailgun.js');

const app = express();
const mailgun = new Mailgun(formData);
const mg = mailgun.client({ username: 'api', key: '143f1458cffbea64a782d9bed0f89622-ee16bf1a-9738414d' }); 

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

console.log('Working before the post')


console.log('Working after the post')

app.post('/subscribe', (req, res) => {
    const email = req.body.email;
    console.log(req.body)

    const message = {
        from: "Ashima <ashimakakkar2k4@gmail.com>", 
        to: [email],
        subject: "Thanks for subscribing!",
        text: "Welcome to our newsletter!"
    };

    mg.messages.create('sandbox4865753971e442889e2f592fac6b05ab.mailgun.org', message) 
        .then(() => {
            res.sendStatus(200);
            console.log('email sent !!')
        })
        .catch((error) => {
            console.error("Failed to send email:", error);
            res.sendStatus(500);
        });
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
});
