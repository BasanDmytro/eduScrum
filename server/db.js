const mongoose = require('mongoose');

const dbRoute = "mongodb://localhost/trello_data";

class Database {
    constructor() {
        this._connect()
    }

    _connect() {
        mongoose.connect(`${dbRoute}`)
            .then(() => {
                console.log('Database connection successful')
            })
            .catch(err => {
                console.error('Database connection error')
            })
    }
}

module.exports = new Database();