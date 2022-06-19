//------Addition Operator-----//
function addition_Function()  {
	var addition = 7 + 7;
	document.getElementById("Math_1").innerHTML = "7 + 7 = " + addition;
}
//------End Addition Operator-----//
//------Subtraction Operator-----//
function subtraction_Function()  {
	var Subtraction = 10 - 7;
	document.getElementById("Math_2").innerHTML = "10 - 7 =  " + Subtraction;
}
//------End of Subtraction Operator-----//
//------Multiplication Operator-----//
function multiplication()   {
	var simple_Math = 6 * 8;
	document.getElementById("Math_3").innerHTML = "6 * 8 =  " + simple_Math;
}	
//------End of Multiplication Operator-----//
//------Modulus Operator-----//
function modulus_Operator() {
	var simple_Math = 25 % 6;
	document.getElementById("Math_4").innerHTML = "When you divide 25 by 6 you have a remainder of:  "  +  simple_Math; 
}
//------End of Modulus Operator-----//
//------Increment Operator-----//
function add() {
	var X = 7;
	X++;
	document.getElementById("Math_5").innerHTML = X;
}
//------End of Increment Operator-----//
//------Decrement Operator--------//
function subtract() {
	var X = 7;
	X--;
	document.getElementById("Math_6").innerHTML = X;
}
//------End of Decrement Operator-----//
//------Math.random() Sample--------//
//Random integer between 1 and 100 (both included)//
function getRndInteger(min, max) { 
	return Math.floor(Math.random() * (max - min + 1)) + min;
} 
//------You have reached the end of this JS code--------//

//---- Author: Jeffrey "JC" Collins, June 19, 2022-----//
