let mongoose = require('mongoose');

let Schema = new mongoose.Schema({
    user_send: Number,
    user_receive: Number,
    content: String,
    type: String,
    time: {type: Number, default: Date.now}
}, {collection: 'chatone'});

let Chatone = module.exports = mongoose.model('Chatone', Schema);

module.exports.createChat = (newChat) => {
    newChat.save();
};

module.exports.getChatHistory = (user_id, friend_id, limit, offset, callback) => {
    let query = {
        $or: [
            {$and: [{user_send: user_id}, {user_receive: friend_id}]},
            {$and: [{user_send: friend_id}, {user_receive: user_id}]}
        ]
    };

    let fields = 'user_send user_receive content type time';
    let options = {skip: offset, limit: limit, sort: {time: -1}};

    Chatone.find(query, fields, options, callback);
};