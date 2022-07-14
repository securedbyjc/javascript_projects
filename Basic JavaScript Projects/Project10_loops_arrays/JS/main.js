//Function that utilizes a While Loop //
function count_To_Ten() {
    var Digit = "";
    var X = 1;
    while (X < 11)  {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Counting_to_Ten").innerHTML = Digit;
}
//Function that utilizes a loop//
var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Flute"];
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++)  {
    Content += Instruments[Y] + "<br>";
    } 
    document.getElementById("List_of_Instruments").innerHTML = Content;
}  
//Function that utilizes an Array//
function cat_pics() {
    var Cat_Picture = [];
    Cat_Picture[0] = "sleeping";
    Cat_Picture[1] = "playing";
    Cat_Picture[2] = "eating";
    Cat_Picture[3] = "purring";
    document.getElementById("Cat").innerHTML = "In this picture, the cat is " +
        Cat_Picture[2] + ".";
}
//Function that utilizes a "let" Keyword//
function myfunction() {
    let carName = "Cadillac";
    document.getElementById("demo").innerHTML = carName;
}