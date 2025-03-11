const mongoose = require('mongoose');

//Krijimi i modelit per user
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique:true
    }
});

const user = mongoose.model('User', userSchema);

module.exports = user;