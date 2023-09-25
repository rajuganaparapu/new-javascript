 /*//var

//var raju = "hello"

//var raju = "hi"

// console.log(raju)

//let
let school = "primery"
//let school ="secondary"

console.log(school)

//const
const shop = "kiranam"

//console.log(shop)

let fruits = ["mango", "bannana", 55, { name: "bringl" }]

console.log(fruits)

const games = {
    cricket: "dhoni",
    football: "raju"
}
console.log(games)
console.log(typeof games)
console.log(Array.isArray(fruits)) //true
console.log(Array.isArray(games)) //false

var a = 60;
a++

var b = 6;
b++
document.write("result:", a + b)
document.write("result:", a / b)
document.write("result:", a)
document.write("result:", b)

var x = 100;

var y = 50;

var z = 200;

if (x !== y) {
    document.write("this is green color")

} else if (x < y) {
    document.write("this is blue")
} else if (z > y) {
    document.write("this is black color")
} else {
    document.write("all this wrong statement ")
}
var x = 100;

var y = 50;

var z = 200;

//if( x == y && y<z){document.write("this is correct")}
if (x !== y && y < z) {
    document.write("this is correct")
} else {
    document.write("total wrong")
}

var x = 100;

var y = 50;

var z = 200;

//if( (x+y)>z || y<z){  //f:t=t *f=f=f
//   document.write("z is greate then all")}




if ((x < z) && (z > y)) { // t=t=t
    document.write("calculate")

} else if ((x == y) || (z > x)) {  //f=f=f
    document.write("thats correct")
}
document.write(
    2 + 3 == 6 ? "yes correct answer" : "no wrong answer"
)
var x = 100;
var y = 50;
x > y ? document.write("color green") : document.write("color red")

//conform
 var women=confirm("are you women")
if(women){
  let name = prompt("please enter yoyr name")
  document.write("hello madam.."+ name + "welcome to my page")
}else {
 let name = prompt("please enter yoyr name")
 document.write("hello mr.."+ name + "welcome to my page")
} */


//functions 
function score(a, b) {
    return a + b + "<br>"
}
document.write(score(10, 20)); document.write(score(80, 204)); document.write(score(130, 260));

/*let Name = prompt("please enter your name")

let Markes = prompt("please enter markes")

switch (true) {
  case Markes > 90 && Markes <= 100:
      result = " congratulation you got topeer"
      break;
  case Markes > 65 && Markes <= 90:
      result = " congratulation you got first class"
      break;
  case Markes > 40 && Markes < 60:
      result = " congratulation you got second class"
      break;
  case Markes >= 30 && Markes <= 140:
      result = " congratulation you third class"
      break;
  case Markes >= 30:
      result = " sorry failed"
      break;

  default:
      result = "enter your markes"
      break

}
document.write( "hello" +Name+ result)  */

/*// push........  addd element...... method
let sports=["cricket socker"]
sports.push("carem",456 ,356)

document.write(sports +"<br>")
document.write(sports.length +"<br>")

//pop method.......  deleted last element........
let books =[ "telugu","english","social"]
books.pop()
document.write(books +"<br>")

let someResult = books.pop()
document.write("deleted pop method  is" +someResult)

// shift method.....delete first element....

let states =["hyddddddddddddd","goa","bangolre"]

let newstates = states.shift()
document.write(states)
document.write(newstates)   

//unshift method.....adding starting element.........

let scores=[55,76,57,98,34,"raju"]
scores.unshift("sateesh")
document.write(scores+"<br>")

//concat method ..add one or two more arrays and new array...

let scores =[ 23,45,67,89]
let players =[ "raju","ragava","rajesh"]
let newPlayers = scores.concat(players)
document.write(newPlayers)

//////join()method:  concat two arrays and adding strings..

var team =[10,39,46,"raju","rajesh","raghu"]
var  newTeam = team.join("******")
document.write(newTeam)



//slice method...   0-5
let number=["raju","suresh","adhi",18,34,56,23,45]
 
let Mynumber = number.slice(0,5)
document.write(Mynumber)
document.write(number)

//splice method---  removing strating


let mynumber =[10,20,30,40,50,60,70,80,90,100]

let myNewnumber =mynumber.splice(3,1,"add value" )
document.write(mynumber +"<br>")
document.write(myNewnumber)


//indexof()..method..../

let names =["raju","raghu","rajesh","ramu"]
var newnames = names.indexOf("sateesh")
if( newnames === -1){
  names.push("sateesh")
}
document.write(names)


// document.write(names.indexOf("raghu"))  

//for each....
let Markes =  [10,20,30,40,50,60,70,80,90,100]
let student = ["raju","raghu","rajesh","ramu"]

student.forEach(function(item ,index){
document.write(index+1  +"." +item +"<br>")
})
Markes.forEach(function(apple){
  document.write( apple  *2 +"<br>") 
}) 

//MULTI Dimentional array.....



let Markes = [
    [["raju", "raghu", "rajesh", ""],
    ["raju", "raghu", "rajesh", ""]
    ],
    [10, 20, 30],
    [40, 50, 60],
    [70, 80, 90],
    [70, 80, 90]]

document.write("my expectied markes:", Markes[0][0][1]) 

//string method......

//split method....
var sample = " my name is raju from bayyaram"
document.write(sample.split(" "))
console.log(sample.split(""))

var  names = "ramesh";

document.write(names.charAt(4));*/

//loops---------

  /*  for(a=0; a<=10;a++){
    document.write(a+")"+ "i am raju"+"<br>")
 }
for(var a=10; a>=1 ; a--){
    document.write(a+")"+ "i am raju"+"<br>")
}
for(var a=1; a<=100 ; a++){
    document.write(a+")"+ "i am raju"+"<br>")
}

//while-loop
let x = 10;


while(x <= 10){
    document.write( x+")"+"hello every one","<br>")
    x++
}
while( x <= 100 ){
    document.write( x+")"+"hello every one","<br>")
    x++
} 

//do ..while
let y = 0;

do{
    document.write( y+")"+"something is wrong" +"<br>")
   // console.log("heloooooooooooooooo")
    y++
}while(y <= 20)
*/


var amount =100;
var days =60;
var intrest = 2;
for( let i=1 ;i<=days;i++){
    if(i % 4 === 0){
        amount +=intrest
    }
    document.write("your amount for"+i+"th day"+amount+"<br>")
}

const mainForm=document.getElementById("myForm")
const userName=document.getElementById("nameinput")
const InputName=document.getElementById("myForm")