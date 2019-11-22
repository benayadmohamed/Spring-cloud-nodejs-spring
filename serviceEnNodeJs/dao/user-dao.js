var User = require('../data/user');
module.exports = {
    all(callback) {
        User.find(callback)
    },
    add(userData, callback) {
        User.create(userData, callback)
    },
    deleteAll(callback) {
        User.deleteMany({}, callback);
    },
    getOne(id, callback) {
        User.findById(id, callback)
    }
}