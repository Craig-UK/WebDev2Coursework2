const Datastore = require("nedb");
const bcrypt = require('bcrypt');
const saltRounds = 10;

class UserDAO {
    constructor(dbFilePath) {
        if (dbFilePath) {
            //embedded
            this.db = new Datastore({ filename: dbFilePath,
            autoload: true });
        } else {
            //in memory
            this.db = new Datastore();
        }
    }
    // for the demo the password is the bcrypt of the user name
    init() {
        this.db.insert({
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

const dao = new UserDAO();
dao.init();

module.exports = dao;