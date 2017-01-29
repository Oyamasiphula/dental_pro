var express = require('express'),
    exphbs = require('express-handlebars'),
    bodyParser = require('body-parser'),
    products = require('./routes/products'),
    mysql = require('mysql'),
    nodemailer = require('@nodemailer/pro'),
    myConnection = require('express-myconnection');


var app = express();

var dbOptions = {
  host: 'localhost',
  user: 'Dr_Jones',
  password: 'password',
  port: 3306,
  database: 'DrJones_data'
};



// <layout> basic setup template handlebars as the template engine
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

app.use(express.static(__dirname + '/public'));
app.use('/bower_components', express.static(__dirname + '/bower_components'));
// </layout>

// middleware below
app.use(bodyParser.urlencoded({
    extended: false
  }))
  // parse application/json
app.use(bodyParser.json())
// ...code
app.use(myConnection(mysql, dbOptions, 'single'));
// middleware above

// <requests> now lets get ready for requests
app.get('/', function(req, res) {
    res.render('home');
})
app.get('/about', function(req, res) {
    res.render('about');
})
app.get("/services", function(req, res) {
        res.render("services")
    });
app.get("/sentMailFeedback", function(req, res) {
        res.render("mailFeed")
    });
app.get("/appointment_schedule/addlogRec",function(req,res){
    res.render("appointment_sched");
});
app.post("/appointment_schedule/addlogRec", products.appointmentArrangmentMailer)
    // <portSetup>port delcaration
var port = process.env.port || 2000
    // </portSetup>

// <serveCodeBlocksRun>Lets configure our localhost server's port
app.listen(port, function() {
    console.log('app is listening on' + port);
});
// </serveCodeBlocksRun>
