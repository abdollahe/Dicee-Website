
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
  var number2 = returnRandom() ;
  document.querySelector(".img2").src = "images/" + imageList[number2 - 1] ;

  if( number1 === number2) {
    document.querySelector("h1").textContent = "Draw" ;
  }
  else if (number1 > number2) {
    document.querySelector("h1").textContent = "Player1 Wins!" ;
  }
  else {
    document.querySelector("h1").textContent = "Player2 Wins!" ;
  }

}

rollDices() ;
