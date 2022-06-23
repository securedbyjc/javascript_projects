function Grading_Function()  {
	var Grades, Good_enough;
	Grades = document.getElementById("Grades").value;
	Good_enough = (Grades > 3.00) ? "Your GPA does not meet our requirement":"Your GPA does meet our requirement";
	document.getElementById("Pass").innerHTML = Good_enough + " to be accepted into the program.";
}
// Constructor function for Person objects
function Person(first, last, age, eye) {
	this.firstName = first;
	this.lastName = last;
	this.age = age;
	this.eyeColor = eye;
}

// Create a Person object
const myWife = new Person("Sally", "Wong", 33, "brown "); 

// Display Eyes
function functionEyes() {
	var result = + myWife.eyeColor + "." + ".";
document.getElementById("Eyes").innerHTML =
"My wife has " + myWife.eyeColor + " " + " eyes."; 
}

// Constructor Function
function Sofa(Make, Style, Color) {
	this.Sofa_Make = Make;
	this.Sofa_Style = Style;
	this.Sofa_Color = Color;
}
var Sandy = new Sofa("Ashley's Furniture", "Sectional", "Brown");
var Randy = new Sofa("Basset", "Chesterfield", "White");
var Mandy = new Sofa("Century", "Lawson", "Grey");
function myFunction() { 
	document.getElementById("Keywords_and_Constructors").innerHTML = //Code to display constructor in HTML
	"Sandy bought a " + Sandy.Sofa_Color + "-colored " + Sandy.Sofa_Style +
	" manufactured by " + Sandy.Sofa_Make;
}

//  Nested Function
function count_Function()  {
	document.getElementById("Counting").innerHTML = Count ();
	function Count() {
		var Starting_point = 17;
		function Plus_One()  {Starting_point += 1;}
		Plus_One();
		return Starting_point;
	}
}