const { Post } = require("../models");

const postData = [
  {
    title: "Good to be in America",
    post_url: "www.google.com",
    user_id: 1,
  },
  {
    title: "Bacon is awesome and here's my reasons why",
    post_url: "www.yahoo.com",
    user_id: 2,
  },
  {
    title: "I like coffee and so should you",
    post_url: "www.amazon.com",
    user_id: 3,
  },
  {
    title: "Mid-day drinkin",
    post_url: "www.google.com",
    user_id: 4,
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
