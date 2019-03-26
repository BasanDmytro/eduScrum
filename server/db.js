const mongoose = require('mongoose');

const dbRoute = "mongodb+srv://lemansproject:refcEk-8wunny-punwyt@lemansproject-pocxh.mongodb.net/trello_data?retryWrites=true";

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
