   //=========================================================================================================================                                    
  //  DESIGNED AND DEVELOPED BY "SUMIT ARYA" : "<ARYASUMIT145@GMAIL.COM>" "WWW.MEGHAPATH.COM" "WWW.SUMITARYA.TK"
 //===========================================================================================================================
  


var mongoose = require("mongoose"); 

 // ==================================================================
  //category start
  //===================================================================

  var catSchema = new mongoose.Schema({

      name: String,
      cn: Number

  })

//   var Cat = mongoose.model("Cat", catSchema)



    // var Campground = mongoose.model("Campground", campgroundSchema);
    
    module.exports = mongoose.model("Cat", catSchema)
    
   //=========================================================================================================================                                    
  //  DESIGNED AND DEVELOPED BY "SUMIT ARYA" : "<ARYASUMIT145@GMAIL.COM>" "WWW.MEGHAPATH.COM" "WWW.SUMITARYA.TK"
 //===========================================================================================================================
  