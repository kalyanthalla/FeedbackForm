function validate(){
    var radio1 = document.getElementById('Excellent').checked;
    var radio2 = document.getElementById('Good').checked;
    var radio3 = document.getElementById('Needs Improvement').checked;
	var name = document.getElementById("name").value;
	var subject = document.getElementById("subject").value;
    var code = document.getElementById("codeList").value;
	var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var agree = document.getElementById("agree").checked;

    if((radio1 == "") && (radio2 == "") && (radio3 == "")){
        text = "* Please Select your experience";
        error_message.innerHTML = text;
        return false;
    }
	if(name.length < 5){
		text = "* Please Enter a valid name!";
		error_message.innerHTML = text;
		return false;
	}
	if(subject.length < 10){
        text = "* Please Enter Correct Subject";
        error_message.innerHTML = text;
        return false;
    }
    if(codeList.value == ""){
        text = "* Please Select your country code";
        error_message.innerHTML = text;
        return false;
    }
    if(isNaN(phone) || phone.length != 10){
        text = "* Please Enter valid Phone Number";
        error_message.innerHTML = text;
        return false;
    }
    if(email.indexOf("@") == -1 || email.length < 6){
        text = "* Please Enter valid Email";
        error_message.innerHTML = text;
        return false;
    }
    if(message.length <= 50){
        text = "* Please Enter atleast 50 Characters Feedback";
        error_message.innerHTML = text;
        return false;
    }
    if(agree == ""){
        text = "* Please agree to the terms and conditions"
        error_message.innerHTML = text;
        return false;
    }
    alert("Your Feedback Submitted Successfully! You can now leave/close the page");
    return true;
}