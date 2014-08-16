var express         = require('express');

// Middleware!
var session         = require('express-session');
var bodyParser      = require('body-parser');
var methodOverride  = require('method-override');
var morgan          = require('morgan');
var cookieParser    = require('cookie-parser');

var mongoose        = require('mongoose');
var port            = process.env.PORT || 3000;
var database        = require("./config/database") || { url: "mongodb://localhost:27017"};
var passport        = require('passport');
var util            = require('util');

var authConfig      = require('./config/auth');
var userConfig      = require('./config/user');
var app             = express();

// Connect to mongodb
mongoose.connect(database.url);

// Passport Configuration
require('./passport')(passport);

app.use(morgan('dev'));
app.use(cookieParser());

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

app.use(methodOverride());
app.use(session(authConfig.SESSION_SECRET));

app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(__dirname + '/client'));

// Routers =====================================================================

var apiRouter = express.Router();
require('./server/routes/api')(apiRouter);
app.use('/api', apiRouter);

var authRouter = express.Router();
require('./server/routes/auth')(authRouter, passport);
app.use('/auth', authRouter);

require('./server/routes')(app);

// listen (start app with node server.js) ======================================
app.listen(port);
console.log("App listening on port " + port);

