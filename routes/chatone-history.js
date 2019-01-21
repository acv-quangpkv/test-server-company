const express = require('express');
const router = express.Router();
const ChatoneModel = require('../model/chatone');
const helper = require('../helpers/helper');

router.get('/', function (req, res, next) {
    user_id = parseInt(req.param('user_id'));
    friend_id = parseInt(req.param('friend_id'));
    limit = parseInt(req.param('limit'));
    offset = parseInt(req.param('offset'));

    ChatoneModel.getChatHistory(user_id, friend_id, limit, offset, (err, results) => {
        if (results.length == 0) {
            res.send({
                status: helper.const.STATUS_ERROR,
                data: err
            })
        } else {
            res.send({
                status: helper.const.STATUS_SUCCESS,
                data: results
            })
        }
    });
});

module.exports = router;
