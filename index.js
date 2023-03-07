function submitt(){
var name = document.getElementById("name").value;
var email = document.getElementById("email").value;

var urll = "https://wa.me/917876120415?text="
+"*Name :* "+name+"%0a"
+"*Email :* "+email+"%0a"


window.open(urll,"_blank").focus();
window.location.href="thanks.html"
}
console.log("working")