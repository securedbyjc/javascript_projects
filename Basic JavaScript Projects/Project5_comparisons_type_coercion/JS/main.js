 //Typeof Opertor Sample: string and expres//
 function typeof_Function() {
    var result = typeof("book");
    document.getElementById("One").innerHTML = result;
}
 //Type Coercion = a expression combined a string and a number.//
 function function_Expression() {
    var result = document.write("number" + 15 + 3);
    document.getElementById("Two").innerHTML = result;
}
// == is used to that a comparison should be made//
function doubleeq_Function() {
    var result = document.write([1,2,3] == [1,2,4]);
    document.getElementById("Three").innerHTML = result;
}
// === tells the computer to check whether the two pieces of data are equal in value and TYPE.//
function tripleeq_Function() {
    var result = document.write(15 === (10 + 5));
    document.getElementById("Four").innerHTML = result;
}
//The && is 1 of 3 Boolean logical operators and determines the logic between values or variables//
function boolean_Function() {
    var result =  document.write(125 > 123);
    document.getElementById("Five").innerHTML = result;
}
//The && is 1 of 3 Boolean logical operators and determines the logic between values or variables//
function boolean2_Function() {
    var result =  document.write(5 > 2 && 10 > 4);
    document.getElementById("Six").innerHTML = result;
}
//The && is 1 of 3 Boolean logical operators and determines the logic between values or variables//
function boolean3_Function() {
    var result = document.write(7 > 20 || 20 > 4);
    document.getElementById("Seven").innerHTML = result;
}
//The ! (not) operator checks whether or not something is true.
function not_Function() {
    document.getElementById("Eight").innerHTML = !(237 > 198);
}