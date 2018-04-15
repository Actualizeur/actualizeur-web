var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var PostSchema = new Schema({
  title: String,
  description: String
});

var UserSchema = new Schema({
  firstName: String,
  lastName: String,
  username: String,
  password: String,
  summary: String,
  posts: [PostSchema]
});

var User = mongoose.model("User", UserSchema);
var Post = mongoose.model("Post", PostSchema);

module.exports = {
  Post,
  User
};
