const bcrypt = require('bcrypt');

const password = "test";

bcrypt.hash(password, 12).then(hash => {
    console.log(hash)
});