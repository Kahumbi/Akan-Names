function myButton(); {
    var dob = document.getElementById("dob");
    var male = docunent.getElementById("male");
    var female = document.getElementById("female");
    dobArray = dob.ariaValueMax.split("-")
}
var akanMale = ["Kwasi", "Kwado", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
var akanFemale = ["Akosua", "Adwoa", "Abenaa", 'Akua', "Yaa", "Afua", "Ama"];

var CC = dobArray[0][0] + dobArray[0][1]
var YY = dobArray[0][2] + dobArray[0][3]
var MM = dobArray[1]
var DD = dobArray[2]

var cc = parseInt(CC);
var yy = parseInt(YY);
var mm = parseInt(MM);
var dd = parseInt(DD);

var d = (((cc / 4) - 2 * cc - 1) + ((5 * yy / 4)) + ((26 * (mm + 1) / 10)) + dd) % 7

if (akanMale[d] === undefined || akanFemale[d] === undefined) {
    alert("you entered the wrong date")
} else {

    if (akanMale === true) {
        alert("Your Akan name is" + akanMale[d])
    }
    if (akanFemale === true) {
        alert("your Akan name is" + akanFemale[d]
