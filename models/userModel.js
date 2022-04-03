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
            user: 'Peter',
            password:
            '$2b$12$RJPe6E/osVbM0URFQBD4JuQyPdcZAF3AbZ5vKMQZE5CDtPiERQh9y'
        });
        return this;
    }
}

const dao = new UserDAO();
dao.init();

module.exports = dao;