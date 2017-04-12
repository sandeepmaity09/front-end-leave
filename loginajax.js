// $("#generate-otp").on("click",function(){
// 	var email = $("#email").val();

// 	$.ajax({
// 		url:"139.59.68.188:3000/logIn"+{"email":email},function(data,status){
// 			alert("Data: "+data+"\nStatus: "+status);
// 		}
// 	});
// })


// This is for getUserDetails GET Call


// $(document).ready(function(){
// $("#generate-otp").on("click",function(){
// 	var login_id = "58df7bff9031144b72066ee8";
// 	console.log("request");

// 	$.ajax({
// 		url:"http://139.59.68.188:3000/getUserDetails?id="+login_id,
// 		type:'GET',
// 		success:function(data){
// 			alert("success");
// 			console.log(data);
// 		},
// 		error:function(){
// 			alert("error");
// 		},
// 		// beforeSend: function(xhr){xhr.setRequestHeader('Access-Control-Allow-Origin','*');},
// 	});
// 	console.log("response");
// });
// });

// This is for getLeaveDetails  GET Call

// $(document).ready(function(){
// 	$("#generate-opt").on("click",function(){
// 		var login_id = "58df7bff9031144b72066ee8";
// 		console.log("request");

// 		$.ajax({
// 			url:"http://139.59.68.188:3000/getLeaveDetails?id="+login_id,
// 			type:"GET",
// 			success:function(data){
// 				alert("success");
// 				console.log(data);
// 			},
// 			error:function(){
// 				alert("error");
// 			}
// 		});

// 		console.log("response");
// 	});
// });



// This is for applyLeave POST Call params 1.reason 2.user_id 3.type


// This is for applyLeave POST

// $(document).ready(function(){
// 	$("#generate-otp").on("click",function(){
// 		var reason = "nothing to do";
// 		var user = "58df7bff9031144b72066ee8";
// 		var type = "cl";

// 		console.log("request");

// 		$.ajax({
// 			type:"POST",
// 			url:"http://139.59.56.188:3000/applyLeave",
// 			data:{reason:this.reason,user:this.user,type:this.type},
// 			success:function(data){
// 				console.log("success");
// 				console.log(data);
// 			},
// 			error:function(){
// 				console.log("error");
// 			}
// 		});

// 		console.log("response");
// 	});
// });

$(doucment).ready(function(){
	$("#generate-otp").on("click",function(){

		var leave_id = "58df7bff9031144b72066ee8";
		var status = "";

		console.log("request");

		$.ajax({
			type:"POST",
			url:"http://139.59.56.188:3000/changeStatus",
			data:{leave:leave_id,status:this.status},
			success:function(data){
				console.log("success");
				console.log(data);
			},
			error:function(){
				console.log("error");
			}
		});

		console.log("response");
	});
});


// $(document).ready(function(){
// 	$("#generate-otp").on("click",function(){
// 		var email1 = "sandeepmaity09@gmail.com";
		
// 		console.log("request");

// 		$.ajax({
// 			type:"POST",
// 			url:"http://139.59.68.188:3000/logIn",
// 			data:{email:this.email1},
// 			success:function(data){
// 				alert("success");
// 				console.log(data);
// 			},
// 			error:function(){
// 				alert("error");
// 			}
// 		});
// 		console.log("response");
// 	});
// 	// console.log("response");
// });


// $(document).ready(function(){
// 	$('#generate-otp').on("click",function(){
// 		var email = "ashishsurana12345@gmail.com";
// 		var otp = "";
// 	});
// });