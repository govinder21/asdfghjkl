  //=========================================================================================================================                                    
  //  DESIGNED AND DEVELOPED BY "SUMIT ARYA" : "<ARYASUMIT145@GMAIL.COM>" "WWW.MEGHAPATH.COM" "WWW.SUMITARYA.TK"
  //===========================================================================================================================
  var express = require("express");
  var app = express();
  var bodyParser = require("body-parser");
  var mongoose = require("mongoose");
  var path = require('path');
  var methodOverride = require("method-override");
  var flash = require("connect-flash");

  var passport = require("passport"), 
      LocalStratregy=require("passport-local"),
      User=require("./models/user");
      
      
  //=========================================================================================================================                                    
 //  PASSPORT CONFIGURATION
//=========================================================================================================================                                    


app.use(require("express-session")({
    secret:"coffeeIsPower",
    resave: false,
    saveUninitialized: false
}))

  app.use(passport.initialize());
  app.use(passport.session());
  passport.use(new LocalStratregy(User.authenticate()))
  passport.serializeUser(User.serializeUser())
  passport.deserializeUser(User.deserializeUser())
  app.use(bodyParser.json());
  
  
  var basicRoutes = require("./routes/basic")



 mongoose.connect("mongodb://root:root1-2@ds153841.mlab.com:53841/evo", { useNewUrlParser: true })

// ====APP.USE====

  app.set("view engine", "ejs");
  app.use(express.static(path.join(__dirname, 'public')));
  app.use(express.static(__dirname + '/views'));
  app.use(bodyParser.json());
  app.use(methodOverride("_method"));
  app.use(bodyParser.urlencoded({
      extended: true
  }));
  
  app.use(function(req, res, next){
      res.locals.currentUser = req.user;
      next();
  });

 app.use(flash());
  // =========================================================end
 




app.use(basicRoutes)



  app.listen(process.env.PORT,process.env.IP, function() {
      console.log("Sumit's Server started! App is running! For assistance ping me at aryasumit145@gmail.com ");

  });



  //=========================================================================================================================                                    
  //  DESIGNED AND DEVELOPED BY "SUMIT ARYA" : "<ARYASUMIT145@GMAIL.COM>" "WWW.MEGHAPATH.COM" "WWW.SUMITARYA.TK"
  //===========================================================================================================================
