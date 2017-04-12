$(document).ready({

	      function getData(){
        var otp = $("#otp").val();
        console.log("request");
        $.post("http://139.59.68.188:3000/login?email="+email+"&"+"otp"+otp,function(data){
          console.log(data);
          // $("#response").text(JSON.stringify(data));
          // $("#login-page").load("template.html");
          window.location.replace("adminotplogin.html");
          });
      console.log("response");
    }

    $("#login-button").on("click", function(){
      getData();
    });

})