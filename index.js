var express = require('express'),
    consolidate = require('consolidate'),
    http = require('http'),
    favicon = require('serve-favicon'),
    path = require('path'),
    mongoose = require('mongoose');

var app = express();

var db = mongoose.connect('mongodb://VolodymyrSydorov:My_1ntent10ns@ds011705.mlab.com:11705/test_accounts');
var Account = require('./models/accounts.js');
var usDBconnect = mongoose.createConnection('mongodb://VolodymyrSydorov:My_1ntent10ns@ds013014.mlab.com:13014/gmailaccounts');
var frDBConnect = mongoose.createConnection('mongodb://VolodymyrSydorov:My_1ntent10ns@ds011745.mlab.com:11745/french_accounts');

var USAccounts = usDBconnect.model('Account', Account) ;
var FRccounts = frDBConnect.model('Account', Account) ;

var router = express.Router();

router.route('/us-votes')
    .get(function(req, res){
        var now = new Date();
        USAccounts.find({votingDate: {$lt: now}}, function (err, data) {
            if(err){
                console.log(err);
            }else{
                res.json(data);
            }
        });
    });

router.route('/fr-votes')
    .get(function(req, res){
        var now = new Date();
        FRccounts.find({votingDate: {$lt: now}}, function (err, data) {
            if(err){
                console.log(err);
            }else{
                res.json(data);
            }
        });
    });

app.use('/api', router);

var bodyParser = require('body-parser');
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var port = process.env.PORT || 3000;
app.set('port', port);

var routes = require('./routes/index');
app.use('/', routes);
app.use(express.static(path.join(__dirname, 'public')));

app.engine('.html', consolidate.swig);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');

var server = http.createServer(app);

server.listen(port, function(){
    console.log('Listening port...');
});