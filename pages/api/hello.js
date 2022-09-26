'use strict';

import db from '../../models/index';
db.sequelize.sync();
const Posts = db.Post;
const Categories = db.Category;

export default async function handler(req, res) {

  const {body, headers, method} = req;
  const {username, password} = body;
  var posts;
  // if (!username || !password) {
  //   return res.status(400).json({"message":"Missing username/password"});
  // }

  // try {
  //   await db.sequelize.authenticate();
  // } catch (error) {
  //   return res.status(400).json({"message":"Unable to connect to the database:", error});
  // }

  if (method == 'GET') {
    posts = await Posts.findAll({
      include: Categories
    });  
  }
  if (method == 'POST') {
    posts = await Posts.create({ title: "Jane", image_url: "blackie.jpg" });  
  }
       

  res.status(200).json({ posts })
}
