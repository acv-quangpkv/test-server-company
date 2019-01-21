const createError = require('http-errors');
const config = require('./config/index');
const db = require('./config/db');
const serverConfig = require('./config/server');
const modules = require('./config/module');
const app = serverConfig.app;
const server = serverConfig.server;
const sockets = require('./sockets/index');
const indexRouter = require('./routes/index');
const testRouter = require('./routes/test');
const addFriendRouter = require('./routes/add-friend');
const historyChatOneRouter = require('./routes/chatone-history');

sockets.init(server);
modules.init(app);
// db.init(config);

// All Router
app.use('/', indexRouter);
app.use('/test', testRouter);
app.use('/add-friend', addFriendRouter);
app.use('/chatone-history', historyChatOneRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
