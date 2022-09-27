'use strict';

import db from '../../models/index';
db.sequelize.sync();
const Quotes = db.Quote;
const Categories = db.Category;

export default async function handler(req, res) {

  const {body, headers, method} = req;
  const {username, password} = body;
  var quotes;

  if (method == 'GET') {
    quotes = await Quotes.findAll({});
  }
  if (method == 'POST') {
    console.log('description ==> ', req.body);
    console.log('fullname ==> ', req.fullname);
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
