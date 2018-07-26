   //=========================================================================================================================                                    
  //  DESIGNED AND DEVELOPED BY "SUMIT ARYA" : "<ARYASUMIT145@GMAIL.COM>" "WWW.MEGHAPATH.COM" "WWW.SUMITARYA.TK"
 //===========================================================================================================================
  

var mongoose = require("mongoose"); 



  // =====================================================================
  //  contact starting
  // =======================================================================

  // ===================================================
  //  Contact model and schema
  //======================================================

  var contactSchema = new mongoose.Schema({
      created: {
          type: Date,
          default: Date.now
      },
      name: String,
      email: String,
      subject: String,
      mobile: String,
      message: String,
      cn: Number
  })

    module.exports = mongoose.model("Contact", contactSchema)

    
   //=========================================================================================================================                                    
  //  DESIGNED AND DEVELOPED BY "SUMIT ARYA" : "<ARYASUMIT145@GMAIL.COM>" "WWW.MEGHAPATH.COM" "WWW.SUMITARYA.TK"
 //===========================================================================================================================
  