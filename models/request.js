   //=========================================================================================================================                                    
  //  DESIGNED AND DEVELOPED BY "SUMIT ARYA" : "<ARYASUMIT145@GMAIL.COM>" "WWW.MEGHAPATH.COM" "WWW.SUMITARYA.TK"
 //===========================================================================================================================
  
var mongoose = require("mongoose"); 


    // =====================================================================
  //  request start 
  // =======================================================================

  // ====schema===
  var requestSchema = new mongoose.Schema({

      name: String,
      price: Number,
      prodetail: String,
      category: String,
      sku: String,
      prodhtml: String,
      pref: String,
      rn: Number,
      quantity: String,
      created: {
          type: Date,
          default: Date.now
      },
      userEmail: String,
      userPhone: String,
      userName: String,
      comment: String,


  })

    module.exports = mongoose.model("Request", requestSchema)

  // ====get requests====


    
   //=========================================================================================================================                                    
  //  DESIGNED AND DEVELOPED BY "SUMIT ARYA" : "<ARYASUMIT145@GMAIL.COM>" "WWW.MEGHAPATH.COM" "WWW.SUMITARYA.TK"
 //===========================================================================================================================
  