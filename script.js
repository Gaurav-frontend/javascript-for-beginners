// Javascript is a loosely type programming languaage and dynamically typed scripting langauge.
// for increment use ++ and for decrement use --


// 1. for printing anything by JS
document.write('hello world <br>'); // .write is method or function which basically print the text in the document.

// 2. Statemnts ase like instruction for computer which we gave it.  Above line of code is also a statement.

// 3. Variable & datatypes: provides us named storage that our program can manipulate. used to store information to be referenced and can be manipulated in the computer program.


var length = 5;   // Number
var lastName = "Simple Snippets";   // String
var flag = true;   // boolean
document.write(length);
document.write("<br>");
// alert(length); //for popuop message use alert


// addition and concatenation
var x = 5 + 5;
var y = "5" + 5;
var z = "Hello" + 5;

document.write(x);  //printing above declared variables
document.write("<br>");
document.write(y);
document.write("<br>");
document.write(z);
document.write("<br>");


// if statements –

// if(condition) 
// {
//    // Statements to execute if
//    // condition is true
// }

// Q: Find a number is odd or even?

var x=14;
if (x%2==0)
{
    document.write('yes, it is a even no.');
}
else {
    document.write('no this is a odd no.');
};


document.write("<br>");

// Q2: Find out this is a positive negative or 0.
var x=12;
if (x>0)
{
    document.write('number is positive');
}
else if (x==0)
{
    document.write('number is 0');
}
else {
    document.write('number is negative');
};;


document.write("<br>");
// Q3: Find aout this is a positive negative and even.

var x=13;
if (x%2==0  && x>-1)
{
    document.write('number is positive and even');
}
else if (x%2==1  && x>-1){
    document.write('number is positive and odd');
}
else {
    document.write('number is negative');
};;

document.write("<br>");


// Q3: Find aout this is a positive negative and even.  Nested conditions

var x=12;
if (x>0)
{
    if(x%2==0)
    {
        document.write('number is positive and even');
    }
    else {
        document.write('number is positive and odd');
    }
}
else {
    document.write('number is negative');
};