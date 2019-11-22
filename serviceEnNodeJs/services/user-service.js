var UserDao = require('../dao/user-dao')
module.exports = {
    all(req, res, next) {
        UserDao.all((err, data) => {
            if (err) {
                throw new Error("no data");
            }
            res.json(data);
        })
    },
    add(req, res, next) {
        UserDao.add(req.body, (err, data) => {
            if (err) {
                throw new Error(err);

            } else {
                res.json(data);
            }
        });
    },
    deleteAll(req, res, next) {
        UserDao.deleteAll(err => {
            if (err) {
                throw new Error(err);
            } else {
                res.json({})
            }
        });
    },
    getOne(req, res, next) {
        UserDao.getOne(req.params.id, (err, data) => {
            if (err) {
                throw new Error("no data");
            }
            res.json(data);
        });
    }
}
