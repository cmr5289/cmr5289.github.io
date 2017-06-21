
number = Math.floor(Math.random() * 10);
var firstSet = number
var secondSet = number + 10
var thirdSet = number + 20
var fourthSet = number + 30



var x = document.getElementsByClassName("image-header-one")[0];
imageName = "static/img" + firstSet + ".JPG"
x.src=imageName

var x = document.getElementsByClassName("image-header-two")[0];
mageName = "static/img" + secondSet + ".JPG"
x.src=imageName

var x = document.getElementsByClassName("image-header-three")[0];
imageName = "static/img" + thirdSet + ".JPG"
x.src=imageName

var x = document.getElementsByClassName("image-header-four")[0];
imageName = "static/img" + fourthSet + ".JPG"
x.src=imageName

