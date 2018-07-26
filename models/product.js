   //=========================================================================================================================                                    
  //  DESIGNED AND DEVELOPED BY "SUMIT ARYA" : "<ARYASUMIT145@GMAIL.COM>" "WWW.MEGHAPATH.COM" "WWW.SUMITARYA.TK"
 //===========================================================================================================================
 var mongoose = require("mongoose"); 
 var mongoosePaginate = require('mongoose-paginate');

  // =====================================================================
  //  product beginning
  // =======================================================================


  var productSchema = new mongoose.Schema({

      name: String,
      catid: String,
      price: Number,
      prodetail: String,
      category: String,
      sku: String,
      prodhtml: String,
      image1: String,



  })
  productSchema.plugin(mongoosePaginate);

    module.exports = mongoose.model("Product", productSchema)

 



  // =====================================================================
  //  product ending
  // =======================================================================


    
   //=========================================================================================================================                                    
  //  DESIGNED AND DEVELOPED BY "SUMIT ARYA" : "<ARYASUMIT145@GMAIL.COM>" "WWW.MEGHAPATH.COM" "WWW.SUMITARYA.TK"
 //===========================================================================================================================
  