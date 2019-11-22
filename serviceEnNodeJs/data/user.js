const mongoose = require('mongoose');
var Schema = mongoose.Schema;
var UserSchema = new Schema({
    id: Schema.ObjectId,
    username: String,
    password: String,
});
var User = mongoose.model('users', UserSchema);
module.exports = User;