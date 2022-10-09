'use strict';

import db from '../../models/index';
db.sequelize.sync();
const Posts = db.Post;
const Categories = db.Category;

export default async function handler(req, res) {

  const {body, headers, method} = req;
  const {username, password} = body;
  var posts;
  // var filter={};
  // filter['CategoryId'] = req.query.CategoryId;
  // var query={};
  // query['include'] = Categories;
  // if (filter['CategoryId']){
  //   query['where'] = filter;
  // }
  var query = {
    include: Categories,
    limit: 30
  }
  if (req.query.CategoryId || req.query.isCarousel){
    query.where = {}
  }
  if (req.query.CategoryId){
    query.where.CategoryId = req.query.CategoryId;
  }
  if (req.query.isCarousel){
    query.where.isCarousel = req.query.isCarousel;
  }
  
  

  if (method == 'GET') {
    posts = await Posts.findAll(query);  
  }
  if (method == 'POST') {
    posts = await Posts.create({ title: "Jane", image_url: "blackie.jpg" });  
  }
       

  res.status(200).json({ posts })
}
