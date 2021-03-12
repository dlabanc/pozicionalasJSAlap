document.write("Hello, világ a sectionből");
console.log("Lefutott a JS a sectionben");
document.getElementById("szoveg").innerHTML = "Bekezdésbe írok!";
function szamolas() {
var valtA = Number(document.getElementById("a").value);
var valtB = Number(document.getElementById("b").value);
console.log(valtA);
console.log(valtB);
document.getElementById("szoveg").innerHTML = valtA + valtB;}


