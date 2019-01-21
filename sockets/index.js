let sockets = {};
sockets.init = server => {
    // const chatOne = require('./chat-one');

    const io = require('socket.io')(server);

    // let online_users = [];

    io.on('connection', socket => {
        console.log('1 nguoi vua ket noi')
        socket.on('reg_connected',function (data_connect) {
            socket.on(data_connect.token,function (data) {
                io.emit(data_connect.token,data)
            })
        })

        // socket.on('online-user', data => {
        //     socket.userId = data.user_id;
        //     socket.userName = data.user_name;
        //
        //     online_users.push({
        //         user_id: data.user_id,
        //         socket_id: socket.id
        //     });
        //
        //     console.log('Co them user: ');
        //     console.log('id: ' + data.user_id + ', socket: ' + socket.id);
        //     // OnlineUser(socket, id_user, online_users);
        // });
        //
    });
};

module.exports = sockets;
