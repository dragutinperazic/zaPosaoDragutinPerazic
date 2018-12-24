function initMap() {
var myLatLng = {lat: 42.386669, lng: 18.930497};
var map = new google.maps.Map(document.getElementById('item_mapa'), {
zoom: 4,
center: myLatLng
});
var marker = new google.maps.Marker({
position: myLatLng,
map: map,
title: 'Hello World!'
});
}



function validate()
{
/*var nam = document.getElementById("name").value;
var emai = document.getElementById("email").value;
var messag = document.getElementById("message").value;

alert(messag);
if(nam== "" || messag == "" || emai="")
{
alert("greska");
return false;
}
alert("odradjeno");*/
var ime = document.getElementById("name").value;
var mai = document.getElementById("email1").value;
var mes = document.getElementById("message").value;


if(ime == "" || mai == "" || mes == "" || mes.length > 1000 ) 
{
	alert ("Morate popuniti polja name email i poruka a poruka ne smije biti preko 1000 karaktera ");
   return false;
}
 
 const isValidEmail = document.getElementById("email1").checkValidity();
 if (isValidEmail == false)
{ 
 alert("Email adresa nije validna");
 return false;
 }

}