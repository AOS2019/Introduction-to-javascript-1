//Declearation of variables
var my_name, height, country;
my_name = "Akintoye Olalekan Samuel";
height = "5ft 8 inches"
country = 'Nigeria'

//print value
document.getElementById('details').innerHTML = "My name is " +my_name+ ", I am " +height+ " in height and I am from " +country+ "."

//Styling
const details = document.querySelector('#details')
details.style.height = "100px";
details.style.marginTop = "100px";
details.style.marginLeft = "30px";
details.style.textAlign = "center";
details.style.fontFamily = "verdana";
details.style.fontSize = "16px";
details.style.color = "blue";