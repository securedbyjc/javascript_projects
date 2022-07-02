//Global variable
var X = 20;
function Add_numbers_1() {
	document.write(50 + X + " ");
}
function Add_numbers_2()  {
	document.write(X + 100);
}
Add_numbers_1();
Add_numbers_2();

//Local Variable
function Add_numbers_1()  {
	var X = 10;
	document.write(20 + X  + "<br>");
}
function Add_numbers_2()  {
	document.write(X + 100);
}
Add_numbers_1();
Add_numbers_2();

//Function that includes an if statement
function get_Date() {
	if (new Date().getHours() > 18) {  
	document.getElementById("Greeting").innerHTML = "How are you today?";   
    }
}
//Function with error. Use console.log() method to debug
function Add_numbers_1()  {
	var X = 10;
	console.log(15 + X);
}
function Add_numbers_2() {
	console.log(X + 100);
}
Add_numbers_1();
Add_numbers_2();

//Time_function()
function Time_function()  {
	var Time = new Date().getHours();
	var Reply;
	if(Time < 12 == Time < 0)  {
		Reply = "It is morning time!";
	}
	else if (Time >= 12 == Time < 18)  {
		Reply = "It is afternoon. ";
	}
	else { 
		Reply = "It is evening time.";
	}
	document.getElementById("Time_of_the_day").innerHTML = Reply;
}