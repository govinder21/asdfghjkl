// swal({
//   title: "Success!",
//   text: "Thank you for contacting us. We will get back to you shortly.",
//   icon: "success",
//   button: "Aww yiss!",
// });


/* global $ swal */
 var globalEmail
 var globalCountry
 var globalOtp

$("#submit").on("click", function(){
    
    if($("#fullname").val().length<3){
        swal("Error!", "Please Enter your name", "error")
    }else {
        
    
    
    
    
    ///email start
    
    if($("#email").val().length<3){
        swal("Error!","Please enter an Email Address", "error")
    }else if(globalEmail==false){
        swal("Error!", "Email address should be in the format of abc@xyz.com", "error")
    }else if(globalEmail==true){
        
        if($("#countryCode").val().length==0){
            swal("Error!", "Please enter the Country Code.", "error")
        }else if(globalCountry==false){
            swal("Error!", "Country Code must be at most 3 numeric digits long.")
        }else if(globalCountry==true){
            
            
            if($("#phone").val().length<1){
                 swal("Error!","Please enter your mobile number so that we can contact you.", "error")
            }else if(globalOtp==false){
                 swal("Error!","The Mobile number must be 10 numeric digits long.", "error")
            }else if(globalOtp==true){
                
                
                if($("#message").val().length<25){
                     swal("Error!","The Message should be at least 25 characters long.", "error")
                }else{
                    
                    
                                   
                        var name        =$("#fullname").val()
                        var emailId     =$("#email").val()
                        var mobile      =$("#phone").val()
                        var message     =$("#message").val()
                        
                        
                        $.post("/sendEmail",{name,emailId,mobile,message}, function(data){
                            console.log(data)
                            
                            if(data=="OK"){
                                
                                $("#fullname").val("")
                                $("#email").val("")
                                $("#phone").val("")
                                $("#message").val("")
                                $("#checkOtp").html("")
                                $("#countryCodeText").html("")
                                $("#emailResult").html("")

                                
                                
                                swal("Thank you!","We will get back to you shortly.", "success")
                                
                            }else {
                                swal("Error!", "Something went wrong! Please try again later.")
                            }
                            
                        })
                        
                        
                        

                }
                
                
 

                
            }




    


        }
        
        
    
    
    
    
    
    
    }
   
   //email end
   
   
    }
   
   
   
   
   
   
})





$( "#phone" ).keyup(function() {
  validateOtp()
});



function validateOtp()
{
  var inputOTP = $("#phone").val()
  var otpRGEX = /^[0-9]{10,10}$/;
  var otpResult = otpRGEX.test(inputOTP);
  var otpRegTrue = "Mobile Number is in the correct format." 
  var otpRegFalse = "Mobile Number must be 10 numeric digits long." 
  console.log("otp :"+otpResult );
  
  if(otpResult==true){
      $("#checkOtp").html(otpRegTrue).css("color","#4af441")
     globalOtp=true
    //   $("#verifyAddress").css("border-color","green")
      $("#phone").css("box-shadow","0 0 0 0.2rem rgba(0,255,0,.25)")
     
  } else if(otpResult==false){
      $("#checkOtp").html(otpRegFalse).css("color","red")
      globalOtp=false
    //   $("#verifyAddress").css("border-color","red")
       $("#phone").css("box-shadow","0 0 0 0.2rem rgba(255,0,0,.25)")

  }
}




$( "#countryCode" ).keyup(function() {
  validateCountry()
});


function validateCountry()
{
  var inputCountry = $("#countryCode").val()
  var otpRGEX = /^[0-9]{1,3}$/;
  var countryCode = otpRGEX.test(inputCountry);
  var countryRegTrue = "Country Code is in the correct format." 
  var countryRegFalse = "Country Code must be at most 3 numeric digits." 
  console.log("otp :"+countryCode );
  
  if(countryCode==true){
      $("#countryCodeText").html(countryRegTrue).css("color","#4af441")
     globalCountry=true
    //   $("#verifyAddress").css("border-color","green")
      $("#countryCode").css("box-shadow","0 0 0 0.2rem rgba(0,255,0,.25)")
     
  } else if(countryCode==false){
      $("#countryCodeText").html(countryRegFalse).css("color","red")
      globalCountry=false
    //   $("#verifyAddress").css("border-color","red")
       $("#countryCode").css("box-shadow","0 0 0 0.2rem rgba(255,0,0,.25)")

  }
}




$("#email").keyup(function() {
    validateEmail()
});





function validateEmail() {
    var toVerify = $("#email").val()
    var emailRGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var emailResult = emailRGEX.test(toVerify);
    var emailRegTrue = "Email is in the correct format"
    var emailRegFalse = "Email is not in the correct format"
    console.log("email:" + emailResult);

    if (emailResult == true) {
        $("#emailResult").html(emailRegTrue).css("color","#4af441")
        globalEmail = true
        //   $("#verifyAddress").css("border-color","green")
        $("#verifyAddress").css("box-shadow", "0 0 0 0.2rem rgba(0,255,0,.25)")

    }
    else if (emailResult == false) {
        $("#emailResult").html(emailRegFalse).css("color","red")
        globalEmail = false
        //   $("#verifyAddress").css("border-color","red")
        $("#verifyAddress").css("box-shadow", "0 0 0 0.2rem rgba(255,0,0,.25)")

    }
}

$("#verifyAddress").keyup(function() {
    validateEmail()
});
