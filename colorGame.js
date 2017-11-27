var numSquare=6;
var colors = [];
var pickedColor ;

var square = document.querySelectorAll(".square");
var colorDisplay=document.getElementById("colorDisplay");
colorDisplay.textContent = pickedColor;

var messageDisplay=document.querySelector("#message");

var resetButton = document.querySelector("#reset");

var modeButton=document.querySelectorAll(".mode");

var h1=document.querySelector("h1");

init();

function init(){
	//setupmodebuttons for event Listener
	setUpModeButtons();
	//setting up squares
	setUpSquares();
	//reset calling
	reset();
}
function setUpSquares(){
		for(var i=0 ; i<square.length;i++){
			
			//adding click event to squares
			square[i].addEventListener("click",function(){
				//grab the clicked color
				var clickedColor = this.style.backgroundColor;
				//compare the grabbed color with the picked color 
				if(clickedColor === pickedColor){
					messageDisplay.textContent = "Correct !";
					changeColors(clickedColor);
					h1.style.backgroundColor=clickedColor;
					resetButton.textContent="Play Again";
				}
				else{
					this.style.backgroundColor =" #232323 " ;
					messageDisplay.textContent = "Try Again !";
				}
			});
		}

}

function setUpModeButtons(){

	for(var i=0;i<modeButton.length;i++){

	modeButton[i].addEventListener("click",function(){
		modeButton[0].classList.remove("selected");
		modeButton[1].classList.remove("selected");
		this.classList.add("selected");
		this.textContent === "Easy" ? numSquare=3 : numSquare=6;
		reset();
		});
	}

}

function reset(){
	//generate all colors
	colors=generateRandomColors(numSquare);
	//pick a new random color from array
	pickedColor = pickColor();
	//change colorDisplay to match color picker
	colorDisplay.textContent = pickedColor;
	resetButton.textContent="New Colors";

	messageDisplay.textContent="";
	//change colors of square
	for(var i=0;i<square.length;i++){
		if(colors[i]){
			square[i].style.display ="block";
			square[i].style.background = colors[i];
		}
		else{
			square[i].style.display = "none";
		}

		
	}

	h1.style.background= "steelblue";

}
// easyBttn.addEventListener("click",function(){
// 	hardBttn.classList.remove("selected");
// 	easyBttn.classList.add("selected");
// 	numSquare=3;
// 	colors=generateRandomColors(numSquare);

// 	pickedColor=pickColor();
	
// 	colorDisplay.textContent=pickedColor;

// 	for(var i=0 ;i<square.length;i++){
// 		if(colors[i]){
// 			square[i].style.background=colors[i];

// 		}
// 		else{
// 			square[i].style.display="none";
// 		}
// 	}
// });

// hardBttn.addEventListener("click",function(){
// 	hardBttn.classList.add("selected");
// 	easyBttn.classList.remove("selected");
// 	numSquare=6;
// 	colors=generateRandomColors(numSquare);

// 	pickedColor=pickColor();
	
// 	colorDisplay.textContent=pickedColor;

// 	for(var i=0 ;i<square.length;i++){
		
// 			square[i].style.background=colors[i];

		
		
// 			square[i].style.display="block";
		
// 	}
// });

resetButton.addEventListener("click",function(){
	//calling reset()
	reset();
});






function changeColors(color){

	//loop through all squares
	for(var i=0 ;i<square.length;i++){

		square[i].style.backgroundColor = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	//make an array
	var arr=[];
	//repeat num times 
	for(var i=0;i<num;i++){

		arr.push(randomColor());
	}
	return arr;

}


function randomColor(){
	//pick a red from 0-255
	var r=Math.floor(Math.random() *256);
	//pick a green from 0 -255
	var g=Math.floor(Math.random()*256);
	//pick a blue from 0-255
	var b=Math.floor(Math.random()*256);
	//rgb(r,g,b);
	return "rgb(" + r + ", " + g +", "+b+")" ;

}