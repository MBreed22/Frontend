// Globale variabelen
var afbeeldingen =  new array ('galaxy-s4.png','ipad.jpg','laptop.jpg');
var max = afbeeldingen.length;
var randomIndex=5000;
function showMedia(){
randomIndex = Math.floor((Math.random() * max));
document.getElementById('media').src = afbeeldingen[randomIndex];
}

function formcheck(thisForm){
	postcode= thisForm.postcode.value;
	for(var i=0; i < postcode.length; i++) {
var c = postcode.charAt(i);
if(c == ' ') {
			alert("Postcode mag geen spaties hebben");
			thisForm.postcode.focus();
			return false

		}
	}
}

document.custform.gadget[0]
document.custform.gadget[1]
document.custform.gadget[2]

function herhalen(){
document.customform.password2.value =
	document.custform.password.value;
}