var mongoose = require("mongoose");
var Schema = mongoose.Schema;
const bcrypt = require("bcrypt-nodejs");

var PostSchema = new Schema({
  title: String,
  description: String
});

var UserSchema = new Schema({
  firstName: String,
  lastName: String,
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  summary: String,
  posts: [PostSchema]
});

// On Save Hook, encrypt password
// Before saving a model, run this function
UserSchema.pre('save', function (next) {
  // Getting access to the user model
  var user = this;
  // If password is being modified or is new
  // Generate a salt, then run callback
  if (this.isModified('password') || this.isNew) {
    bcrypt.genSalt(10, function (err, salt) {
      if (err) {
        return next(err);
      }
      // Hash (encrypt) our password using the salt
      bcrypt.hash(user.password, salt, null, function (err, hash) {
        if (err) {
          return next(err);
        }
        // Overwrite plain text password with encrypted password
        user.password = hash;
        next();
      });
    });
  } else {
    return next();
  }
});

UserSchema.methods.comparePassword = function (passw, hash, callback) {
  bcrypt.compare(passw, hash, function(err, res) {
    if(res) {
      console.log("Passwords match");
    } else {
      console.log("Passwords do not match");
    }
  });
};

var User = mongoose.model("User", UserSchema);
var Post = mongoose.model("Post", PostSchema);

var getUserById = function (id, callback) {
  User.findById(id, callback);
};

var getUserByUsername = function (username, callback) {
  const query = { username: username };
  User.findOne(query, callback);
};

var addUser = function (newUser, callback) {
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(newUser.password, salt, (err, hash) => {
      if(err) throw err;
      newUser.password = hash;
      newUser.save(callback);
    });
  });
};

var comparePassword = function(candidatePassword, hash, callback) {
  bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
    if(err) {
      throw err;
    }
    callback(null, isMatch);

  });
};

module.exports = {
  Post,
  User,
  getUserById,
  getUserByUsername,
  addUser,
  comparePassword
};
