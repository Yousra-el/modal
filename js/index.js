//console.log ("hello world!");
//  --- Variables   ----
// data is anything that is meaningful to the computer
// JS provides eight different data types
// -- EXP 123 (number) "123" (string نص) --
//variables allow us to store and manipulate data
// -- variables يشير الى قيمة معينة exp name = "khaled";
// variables are similar to the x and y variables you use in mathematics
// which means they're asimple name to represent the data we want to refer to
//we tell js to create or declare a variable by putting the keywoed var in front end
//create a variable called name. in js we end statement witrh semicolon ;
// variable names can be made up of numbers, letters, and $ or _
// can"t start with number
// can't contain spaces
// -- exp : var $n_name_a= "khaled"; / var _age2$= 25; 

var msg = "hello Var";
console.log(msg);



// --- assignment operator = ---

// نعين فيمة و ممكن نغير الفيمة 

var name1 = "Yousra" ;
var age = 24;

 name1 ="Yousra El";
console.log(name1);
console.log(age);




// ----- js statment, js program, js keyword,js multiple spaces --- 

// js statement (line of code)
// instruction or order بيان / تعبير

var name2 = "khaled"; // statment 1
var country = "UK" ; // statment 2 
var city = "London" ; // statment 3
console.log(name2); // statement 4
console.log(country); // statement 5
console.log(city); // statement 6

var msg1 = "hello" ; var msg2 = "hi" ; var msg3 = "salam";

// semicolons ; 
// semicolons separate JS statements.


// #6 JS Lesson 6 



// ---- JS programs  
// a computer program is a list of "instructions" to be "executed" by a computer.
// in a programming language, these programming instructions are called statements.
// a JavaScript program is a list of programming statement.

// rules 
// js ignores multiple spaces;

// Js keywords are reserved words. Reserved words cannot be used as names for variables 
// var, this, function , if, else



// #7 JS 

// Case sensitive, line length, code block, one statement many vars

// JS is case sensitive for exp : name diffrent to Name

//Js and Camel  exp : var FirstName = "ali";
// LowerCamelCase exp : var lastName /  UpperCamelCase exp: var FirstName = "ali";
// Js Line Length max : 80 caracter add new line for right path
//One statement, Many Variables exp : var name = "khaled", age = 28 , color = "red", city = "London";
//JS Code Blocks everything inside {  }  key bracket


// --- # 8 JS 

// Arithmetic operators-addition-subtraction-multiplication-devision-increment-decrement

/* arithmetic operators 
    addition , Subtraction , Multiplication , Division 
    Increment, Decrement

 */

    /* Arithmetic exp 
    var x = 1 + 5;
    var y = 3 - 1;
    var z = 4 * 7;
    var w = 8 / 2 ; 

    */
   /* Increment 

   var x = 5;
   x++;
   console.log(x);

   */
  /* Decrement 

  var x = 5;
  x--;
  console.log(x);
  */



  // # 9 JS
  
  // js exponentiation and js reminder

  /* 
  Arithmetic operators 
  Exponentiation
  Modulus (Remainder)

  */

  /* 

  3 ^ 4 (3 x 3 x 3 x 3)
  2 ^ 3 (2 x 2 x 2)

  var x = 2 ** 3; / (2x2x2)
  var y = 5 ** 4; / (5 x 5 x 5 x 5 )

  console.log(x)

  */

  /* Modulus (Remainder) الباقي

    var x = 5 % 3; / (3 ) 5 - 3 = 2
    var y = 5 % 2; / (2 x 2 = 4 ) = 1 
    var z = 11 % 3; / (2)

*/


// # 10 JS 

// js datatypes boolean string numbers
/* 
    Datatypes
      string - Boolean -Number
      null - undefined - object 

*/
 /*  -- String --
 
  var name = "ali"; 
  var namea = 'al"i"';
  console.log(name);console.log(namea);

 */

  /* 
  نوع variable
  console.log(typeof namea);

  */

  /*  -- Boolean

  var isName = true; (true or false)
  console.log(isName);

  exp : 
  var name = "khaled";
  var isName = typeof name == "string";
  console.log(isName);

  */


  /* -- Number --

  var age = 25;
  var price = 25.50;
  console.log(typeof price)


  */

// # 11 JS 

/* 

exp : 
var msg = "total = " + 10 + 25;
var msg1 = "total = " +" 10 " + "25";
console.log(msg);
console.log(msg1);

-- the result : 
total = 1025
total = 1025 

--- right methode

var msg3 = 10 + 25 + " is the total." ;
result :: 
35 is the total

exp : 

var msg = (10 + 10 ) + "= 20" + (10 + 10) + "= 20.";
var msg2 = 10 + 10 + "= 20" + 10 + 10 + "= 1010";

or 
var total = 10 + 10;
var msg = total + "= 20 " + total + "= 20";

console.log(msg);

var phoneNumber = "6123456789" ;
var countryCode = "212";
var msg = countryCode + phoneNumber;
console.log(msg);



*/

// # 12 JS 

/* 
  Datatypes
    object


*/
// Object are variables can hold many values.
// JS object is a standalone entity
//contain multiple values is terms of properties and methods
// key/value كل خاصية لها اسم و قيمة
/* 
exp 
var user = { name: "Ali", lastName: "Omar", age: 15, userName: "AliOmar2000"}
console.log(user);
console.log(user.age);
console.log(user["age"])
*/

//The values are written as name : value pairs
// using an object literal or using the JS keyword new
// methods are actions that can be performed on objects
// two ways to access object



// #13 Javascript 

// js array 

/* array
  zero-based
  access an Array item using the index position
  using the js keyword new
  length
  accessing the first and last array element


  exp : 
  var color = "red";
  var type = "BMW" ; 
  var cars = [
    { color: "red", type: "BMW"} , / 0 based
    { color: "red", type: "BMW"} , / 1
    { color: "red", type: "BMW"} , / 2 
    { color: "red", type: "BMW"} , / 3

  ];
  console.log(cars);
  console.log(cars[1]);
  / length kibda b 1 
  console.log(cars[cars.length - 1])
*/

// #14 js
// Null Undefined empty string
/* 
  undefined, null, empty string
  variable has not been assigned a value,
  not declared at all

  difference between Undefined and Null : 
  *undefined and null are equal in value but different in type:


*/
/* 
exp : 
var car; // undefined not declare at all 

- var myCar = null; 

*/

// #15 js

/* 
  == VS ===
  used for comparing two variables

  == ignores the datatypes and only compares
  === also checks datatype and compares two

  exp : 
  var a = 1;
  var b = 1;
  console.log(a === b); // values , datatype (string, number   console.log( a == b);
  consolelog( a == b); // values 

   */

// #16 js 


// null vs undefined

/* 
difference between undefined and null : 
* undefined and null are equal in value but 
different in type:
*/

// typeof null // "object"
// typeof undefined // "undefined"
// null === undefined // false
// null == undefined // true
// null === null // true
// null == null // true
// important null // true
/*
exp : 
console.log( null == undefined) // true
console.log( null === undefined) // false

console.log(typeof null) // true
console.log(typeof undefined ) // false
*/

// #17 js

// Function 

// JS function
// a set of statements that performs a task or calculates a value
// a js function is block of code designed to perform a particular task. 
// a js function can be defined using function keyword.
// give it a name and then execute it as many times as you want
// a js function isexecuted when "something" invokes it (calls it).


/* 
functipn exp : 
function printHello (){
  console.log("hello.");
}
printHello(); // call
*/


// #18 js


//Javascript parameters and arguments
// function can take some inputs and return an output related to the inputs
// parameter vs argument
// return keyword 
// يجب ترتيب الحجج argument
// اسم المتغير الخاص بالحجة ليس من الضروري ان يكون مثل اسم البرمتر
/* 
exp : 
--------------------(parameter)
function printHello (name){
  console.log("hello, " + name)

}
----------(argument)
printHello("Khaled.");

exp 2 : 

function printHello (name){
  console.log("hello, " + name)
}
var firstName ="khaled";
printHello(firstName);

*/

// #20 JS 

// return statement
// the return statement stops the execution of a function and
// returns a value from that function.
 /*
  exp : 
  console.log(1);
  console.log(2);
  console.log(3);
  return / stops the execution
  console.log(4);
  console.log(5);

  exp :
  return console.log(1); / stops in the same statement
  console.log(2);
  console.log(3);
  console.log(4);


  exp : 
  function printName(){
    return console.log("khaled");
    console.log(1);
    console.log(2);
    console.log(3);
  }
  printName();
  console.log(printName());

  exp : 
  function printName() {
    var name1 = "khaled";
    var name2 = "kharaz";
    return name1 + name2;

  }
  console.log(printName()); / console.log for more explication

  function squareX(x){
    return x*x;
  }

  var squareDive = squareX(5)
  var squareTow = squareX(3)
  var squareThree = squareX(4)
  console.log(squareDive);
  console.log(squareTow);
  console.log(squareThree);


 */

 // # 21 JS 
 // Js methods
 
 /* 
  JS methods are actions that can be performed 
  task. 
  Functions and methods are the same in JS.
  we mean by methods built in functions.

  methods : 

  length
  console.log()
  toUpperCase

  exp : 
  var name = "khaled";
  console.log(name);
    console.log(name.length); // عدد الاحرف
    console.log(name.toUpperCase()); 

 */

    // # 22 JS 

    // slice method
    /* 
      string methods
      slice(star, end) // قطعة
      exp : 
      "0 1 2 3 4 5" / start
      "k h a l e d"
      "1 2 3 4 5 6" / end

    */

// #23 js

// split , reverse, join methods

/* 
string methods
split() / تقسيم
exp : 
["khaled", "KHZ"]

exp : 
var name = "khaled kz"
name.split()
name.split(" ");
name.split(""); // كل حرف لوحده


reverse() / not string methods

exp : 
["khaled", "khz"].reverse();


join() / not string methods

exp : 
var msg = "world hello";
msg.split(" ").reverse();
msg.split(" ").reverse().join(" "); // join() , join("-"), join(""), join(" ")

exp : limit 
msg.split("",3) ;

*/


// #24 js
// search, indexOf, lastIndexOf methods
/* 
  string methods

  * indexOf() / start

  exp : 
  "khaled".indexOf("h");
  result : 1
  "khaled al khz".indexOf(" ", 7); يبدء الحساب من 7 
  result : 9
  ----------------

  * lastIndexOf() / fromIndex

  exp : 
  "khaled al khz".lastIndexOf("al")
  result : 
  7
  "khaled al khz".lastIndexOf("al", 6)
  result : 
  2
  ------------------

    * search () / reg

    "khaled al khz".search("al")
    result : 
    2 
    "khale al khz".search("al", 3)
    2

*/ 

// #25 js

// include, endWith, startWith methods
/* 
string methods

includes() start /  0 1 2 3 4 .. 
endsWith() end / 1 2 3 4 5 ..
startsWith() start / 0 1 2 3 ..

exp : 
-- includes ---
"khaled".includes("kha");
true
"khaled".inludes("kha", 1);
false
"khaled".includes("kha", 0);
true
"khaled".inludes("ha", 2);
false
"khaled".includes("ha", 1)
true

-- endsWith () --
"khaled".endsWith("ha");
false
"khaled".endsWith("ed");
true
"khaled".endsWith("ed", 5);
false
"khaled".endsWith("ed", 6);
true
-- startsWith -- 
"khaled".startsWith("h");
false
"khaled".startsWith("h", 1);
true
"khaled".startsWith("hale", 1);
true
*/
 
// #26 JS
//CharAt, CharCodeAt, FromCharCode, repeat, upper and lower case methods
/* 
string methods

charAT 
-- vharAt exp --
"khaled".charAt(2)
'l'
"khaled".charAt(0)
'k'
-----------------
charCodeAt
-- exp --
"khaled".charCodeAt(0)
107 / code de caractere
------------------
String.fromCharCode()
-- exp --
String.fromCharCode(75)
'K'
String.fromCharCode(107)
'k'
-----------------------
repeat 
-- exp --
"khaled".repeat()
''
"khaled".repeat(2)
'khaledkhaled'
------------------------
toUpperCase()
--- exp -- 
"khaled".toUpperCase()
"KHALED"
--------------
toLowerCase 
--exp -- 
"Khaled AL KHZ".toLowerCase()
'khaled al kz'
*/











