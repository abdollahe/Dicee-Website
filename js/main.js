
var numOfImages = 6 ;
var imageList = [] ;

for( var i = 1 ; i <=  numOfImages ; i++) {
  var imageName = "dice" + i + ".png" ;
  imageList.push(imageName) ;
}

function returnRandom() {
  return Math.floor((Math.random() * 6 + 1)) ;
}

function rollDices() {
  var number1 = returnRandom() ;
  document.querySelector(".img1").src = "images/" + imageList[number1 - 1] ;
  number1 = returnRandom() ;
  document.querySelector(".img2").src = "images/" + imageList[number1 - 1] ;
}
