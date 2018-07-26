    
   //=========================================================================================================================                                    
  //  DESIGNED AND DEVELOPED BY "SUMIT ARYA" : "<ARYASUMIT145@GMAIL.COM>" "WWW.MEGHAPATH.COM" "WWW.SUMITARYA.TK"
 //===========================================================================================================================
  

var mongoose=require("mongoose")
var passportLocalMongoose = require("passport-local-mongoose")
// var bcrypt  =   require("bcrypt-nodejs")

var UserSchema = new mongoose.Schema({
    name: String,
    ip:String,
    password: String,
   username:String,
   email:String,
   resetPasswordToken:String,
   resetPasswordExpires:Date,
   isAdmin:{type:Boolean,default:false}
   
   
    
})

UserSchema.plugin(passportLocalMongoose)

module.exports=mongoose.model("User", UserSchema)

    
   //=========================================================================================================================                                    
  //  DESIGNED AND DEVELOPED BY "SUMIT ARYA" : "<ARYASUMIT145@GMAIL.COM>" "WWW.MEGHAPATH.COM" "WWW.SUMITARYA.TK"
 //===========================================================================================================================
  