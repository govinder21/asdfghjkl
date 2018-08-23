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
 
 router.post("/sendEmail", function(req, res){
     
    //  var name="Sumit"
     var emailId = req.body.emailId;
     var name = req.body.name;
     var mobile = req.body.mobile;
     var message = req.body.message;
     
     console.log("emailId : "+emailId)
     console.log("name : "+name)
     console.log("mobile : "+mobile)
     console.log("message : "+message)
     
     
     const sgMail = require('@sendgrid/mail');
    sgMail.setApiKey("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");
    const msg = {
      to: 'info@evorootz.in',
      from: 'Evo-Rootz-Leads@Evorootz.com',
      subject: ''+name+' Tried to contact you on EvoRootz.com',
    //   text: 'and easy to do anywhere, even with Node.js',
      html: "<h3>EVOROOTZ</h3>"+
            "<h5>Hi Team</h5>"+"<br />"+
      
          "<h5>There is a new message from "+name+"</h5><br />"+
          "<br />"+
          "<h5>Message: "+message+"</h5><br />"+
          
          "<h5><b>Sent by </b>"+name+"<br />"+
          "<h5><b>Email ID: </b>"+ emailId+"<br />"+
          "<h5><b>Mobile No.: </b>" +mobile+"</h5>"
          
      
    };
    sgMail.send(msg);
     
     res.send("OK")
     
     
 })
 
 
module.exports = router;
    
   //=========================================================================================================================                                    
  //  DESIGNED AND DEVELOPED BY "SUMIT ARYA" : "<ARYASUMIT145@GMAIL.COM>" "WWW.MEGHAPATH.COM" "WWW.SUMITARYA.TK"
 //===========================================================================================================================
  