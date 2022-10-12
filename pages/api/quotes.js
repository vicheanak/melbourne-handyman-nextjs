'use strict';

import db from '../../models/index';
db.sequelize.sync();
const Quotes = db.Quote;
const Categories = db.Category;
const nodemailer = require("nodemailer");
const mg = require('nodemailer-mailgun-transport');

export default async function handler(req, res) {

  const {body, headers, method} = req;
  const {username, password} = body;
  var quotes;

  if (method == 'GET') {
    quotes = await Quotes.findAll({});
  }
  if (method == 'POST') {

    let testAccount = await nodemailer.createTestAccount();

    console.log('process.env.SMTP_USER', process.env.SMTP_USER);
    console.log('process.env.SMTP_PASSORD', process.env.SMTP_PASSWORD);

    let transporter = nodemailer.createTransport({
      host: "smtp-relay.sendinblue.com",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER, // generated ethereal user
        pass: process.env.SMTP_PASSWORD, // generated ethereal password
      },
    });

    let htmlContent = `
    <p>Fullname: ${req.body.fullname}</p>
    <p>Email: ${req.body.email}</p>
    <p>Phonenumber: ${req.body.phonenumber}</p>
    <p>Address: ${req.body.address}</p>
    <p>Description: ${req.body.description}</p>
    `;

    let textContent = `
    Fullname: ${req.body.fullname} | 
    Email: ${req.body.email} | 
    Phonenumber: ${req.body.phonenumber} | 
    Address: ${req.body.address} | 
    Description: ${req.body.description} | 
    `
  
    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: req.body.email, // sender address
      to: "sam@melbourne-handyman.com.au", // list of receivers
      cc: "vicheanak@melbourne-handyman.com.au",
      subject: "New Quote", // Subject line
      text: textContent, // plain text body
      html: htmlContent, // html body
    });
    
    if (!info){
      res.status(500).json({ error: 'Network Error' });
      return false;
    }
  
    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
  
    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...


    quotes = await Quotes.create({ 
      description: req.body.description ? req.body.description : '',
      fullname: req.body.fullname ? req.body.fullname : '',
      phonenumber: req.body.phonenumber ? req.body.phonenumber : '',
      email: req.body.email ? req.body.email : '',
      address: req.body.address ? req.body.address : '',
      imageUrl: req.body.imageUrl ? req.body.imageUrl : ''
    });  
  }


  res.status(200).json({ quotes })
}
