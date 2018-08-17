   //=========================================================================================================================                                    
  //  DESIGNED AND DEVELOPED BY "SUMIT ARYA" : "<ARYASUMIT145@GMAIL.COM>" "WWW.MEGHAPATH.COM" "WWW.SUMITARYA.TK"
 //===========================================================================================================================
  var express = require("express");
 var router = express.Router()
 
 router.get("/", function(req,res){
    //  res.send("home page")
    res.render("about")
 })
 
//  router.get("/about", function(req, res){
//      res.render("about")
//  })
 
//  router.get("/contact", function(req, res) {
//      res.render("contact")
//  })

//  router.get("/faq", function(req, res) {
//      res.render("faq")
//  })
 
//  router.get("/blogs", function(req, res) {
//      res.render("blog")
//  })

//  router.get("/blog", function(req, res) {
//      res.render("blog-single")
//  })
 
 
 
 
module.exports = router;
    
   //=========================================================================================================================                                    
  //  DESIGNED AND DEVELOPED BY "SUMIT ARYA" : "<ARYASUMIT145@GMAIL.COM>" "WWW.MEGHAPATH.COM" "WWW.SUMITARYA.TK"
 //===========================================================================================================================
  