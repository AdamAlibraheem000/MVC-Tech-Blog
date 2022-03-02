const { Comment } = require("../models");

const commentData = [
  {
    comment_text: "Oh yeah. Def enjoy that",
    user_id: 1,
    post_id: 2,
  },
  {
    comment_text: "That's just awesome!",
    user_id: 2,
    post_id: 3,
  },
  {
    comment_text: "Interesting. But not really",
    user_id: 3,
    post_id: 4,
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
