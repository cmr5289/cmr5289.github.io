
numberOne = Math.floor(Math.random() * 10);
numberTwo = Math.floor(Math.random() * 10);
numberThree = Math.floor(Math.random() * 10);
numberFour = Math.floor(Math.random() * 10);
var firstSet = numberOne
var secondSet = numberTwo + 10
var thirdSet = numberThree + 20
var fourthSet = numberFour + 30



var x = document.getElementsByClassName("image-header-one")[0];
imageName = "http://joerobusbachelor.party/static/IMG" + firstSet + ".JPG"
x.src=imageName

var x = document.getElementsByClassName("image-header-two")[0];
imageName = "http://joerobusbachelor.party/static/IMG" + secondSet + ".JPG"
x.src=imageName

var x = document.getElementsByClassName("image-header-three")[0];
imageName = "http://joerobusbachelor.party/static/IMG" + thirdSet + ".JPG"
x.src=imageName

var x = document.getElementsByClassName("image-header-four")[0];
imageName = "http://joerobusbachelor.party/static/IMG" + fourthSet + ".JPG"
x.src=imageName

