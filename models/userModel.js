const bcrypt = require('bcrypt');
const saltRounds = 10;

const nedb = require('nedb');

class User {
    constructor(dbFilePath) {
        if (dbFilePath) {
            this.db = new nedb({
                filename: dbFilePath,
                autoload: true
            });
            console.log('Database connected to ' + dbFilePath);
        } else {
            this.db = new nedb();
        }
    }
    init() {
        this.db.insert({
            first_name: 'Peter',
            last_name: 'Albert',
            email: 'peter@restaurant.com',
            password:
            '$2b$12$RJPe6E/osVbM0URFQBD4JuQyPdcZAF3AbZ5vKMQZE5CDtPiERQh9y'
        });
        return this;
    }

    lookup(email, cb) {
        this.db.find({'email': email}, function(err, entries) {
            if (err) {
                return cb(null, null);
            } else {
                if(entries.length == 0) {
                    return cb(null, null);
                }
                return cb(null, entries[0]);
            }
        });
    }
}

const dao = new User('staff.db');
// dao.init();

module.exports = dao;