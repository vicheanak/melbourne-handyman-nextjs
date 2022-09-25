'use strict';

import db from '../../models/index';
db.sequelize.sync();
const Posts = db.Post;

export default async function handler(req, res) {

  const {body, headers} = req;
  const {username, password} = body;

  // if (!username || !password) {
  //   return res.status(400).json({"message":"Missing username/password"});
  // }

  // try {
  //   await db.sequelize.authenticate();
  // } catch (error) {
  //   return res.status(400).json({"message":"Unable to connect to the database:", error});
  // }

  const posts = await Posts.findAll();      

  res.status(200).json({ posts })
}
