// <!-- <!DOCTYPE html>
// <html lang="en">

// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
//     <style>
       
//     </style>
// </head>

// <body>
//     <button onmousemove="change()">Change</button>
//     <script>
//         function change() {
//            alert("ou have hovered the button")
//         }
//     </script>
// </body>

// </html>
// <!DOCTYPE html> -->
// <!-- <html lang="en">

// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
//     <style>
//         body {
//             background-color: red;
//         }
//     </style>
// </head>

// <body>
//     <button onmousedown="change()">Change</button>
//     <script>
//         function change() {
//             if (document.body.style.backgroundColor = "red") {
//                 document.body.style.backgroundColor = "blue"

//             }
            

//         }
//     </script>
// </body>

// </html> -->
 //     console.log(2==2 && 2==2)
//     //if you used && operator then there must be all conditions true then it will return true
//     //if there any one condition which is not true among all the true conditions then it will return false

//     console.log(2==2 || 2==2)
//     //among all the false conditions if there is single condition which is true it will return true
//     //here there is no need that all the consition must be true
//     //if all the conditions are false then only it will return false

//     var num= 1;
//     num++
//     num += 1
//     num = num + 1
//     console.log(num)
    
//     var num2 = 5
//     num2--
//     num2 -= 1
//     num2 = num2 - 1
//     console.log(num2)

// var age = 16;
// if(age>18 && age<80){
//     console.log("You are eligible for DL")
// }
// else if(age==18){
//     console.log("You are eligible for LL")
// }
// else{
//     console.log("You are not eligible")
// }

// switch("Rohit"){
//     case "virat":
//         console.log("You choosen Virat");
//         break;
//     case "MSD":
//         console.log("You choosen MSD");
//         break;
//     case "Rohit":
//         console.log("You choosen Rohit");
//         break;
//     default:
//         console.log("Not selected")
// }

//function to add numbers
// var num1=12;
// var num2=12
// function sum(){
//     console.log(num1+num2)
// }
// sum()

// Find Max value in array
// var num= [1,40,6,8,9,2,20]
// function maxn(){
//     console.log(Math.max(...num))
// }
// maxn()

// var ar = [1,2,3,4,5,6,7,8,9,10]
// function arrfunc (){
//     console.log(...ar%2)
// }
// arrfunc()


// positive, negative, zero
// var num =2
// if(num>0){
//     console.log("number is positive")
// }
// else if(num<0){
//     console.log("Number is negative")
// }
// else{
//     console.log("number is 0")
// }


// leap year or not
// var year = 2024;
// if(year%4==0){
//     console.log("leap year")
// }
// else{
//     console.log("Not a leap year")
// }

// 1 to 10 using for loop
// var num 
// for(num=1;num<=10;num++){
//     console.log(num)
// }
// 10 to 1 using for loop
// var num 
// for(num=10;num>=1;num--){
//     console.log(num)
// }

// addition of 1 to 50 using for while loop
// var num=1
// var sum=0
// while(num<=50){
//     sum=sum+num
//     num++
// }
// console.log(sum)

// var fruits = ["apple", "mango", "banana", "watermelon"]
// fruits.forEach(fruits=>{
//     console.log(fruits)
// })
// array.forEach(element=>{
//     console.log(object)
// })
// var arr = [1,10,23,49,6,0,9]
// var largest = arr[0]
// const max = ()=>{
//     for(i=1;i<=arr.length;i++)
//     {
//         if(arr[i]>largest){
//             largest= arr[i]
//         }
//     }
//     console.log(largest)
// }
// max()
// var person ={name:"Rushi", age:18, profession:"Job"}
// function display(){
// console.log(person)
// }
// display() -->

// var name = "Rushikesh"
// // console.log(name.length)
// for(name=1;name.length<=10;name++){
//     console.log(name)
// }


var num = 2;
if(num%2==0){
   console.log("Number is even")
}
else{
    console.log("Number is odd")
}

var age = 20;
if(age>18){
    console.log("you are eligible for vote")
}
else{
    console.log("not eligible for vote")
}
var num1=10
var num2=5
var num3=1
if(num1>num2 && num1>num3){
    console.log(num1, "is  largest")
}
else if(num2>num1&&num2>num3){
    console.log(num2," is largest")
}
else{
    console.log(num3,"is largest")
}
var year = 2024;
if(year%=4 == 0){
    console.log(year, "is leap year")
}
else{
    console.log(year,"is not a leap year")
}
var char =  "i"
if(char=="A" || char == "E" || char == "I" || char == "O" || char == "U" || char=="a" || char == "e" || char == "i" || char == "o" || char == "u"){
    console.log(char, "is vowels")
}
else{
    console.log(char, "is consonants")
}
var num = -20
if(num>0){
    console.log(num, "is positiive")
}
else if(num<0){
    console.log(num, "is negative")
}
else{
    console.log(num, "is zero")
}
var marks = 12
if(marks>=40){
   console.log("Student is passed")
}
else{
    console.log("Student is not passed")
}

var score = 76
if(score>=90){
    console.log("A grade")
}
else if(score>=80){
    console.log("B grade")
}
else if(score>=70){
    console.log("C grade")
}
else if(score<70){
    console.log("F grade")
}
var string = "JavaScript"
if(string == "JavaScript"){
    console.log("The string contains word JavaScript")
}
var num = 200
if(num>=10 && num<=100){
    console.log("Number is in between the range of 10 and 100")
}
else{
    console.log("Number is not in between the range of 10 and 100")
}

var day = 3
switch (day){
    case 1:
        console.log("Monday")
        break;
    case 2:
        console.log("Tuesday")
        break;
    case 3:
        console.log("Wednesday")
        break;
    case 4:
        console.log("Thursday")
        break;
    case 5:
        console.log("Friday")
        break;
    case 6:
        console.log("Saturday")
        break;
    case 7:
        console.log("Sunday")
        break;
    default:
        console.log("Enter a correct number")
}
var num1 = 1
var num2 = 2
sum=0
choice = "div"
switch (choice){
    case "add":
    sum = num1 + num2;
    console.log(sum)
    break;
    case "sub":
    sum = num1 - num2;
    console.log(sum)
    break;
    case "mul":
    sum = num1 * num2;
    console.log(sum)
    break;
    case "div":
    sum = num1 / num2;
    console.log(sum)
    break;

}
var char = "z"
switch (char){
    case "A":
        console.log("owel")
        break;
    case "E":
        console.log("owel")
        break;
    case "I":
        console.log("owel")
        break;
    case "O":
        console.log("owel")
        break;
    case "U":
        console.log("owel")
        break;
    case "a":
        console.log("owel")
        break;
    case "e":
        console.log("owel")
        break;
    case "i":
        console.log("owel")
        break;
    case "o":
        console.log("owel")
        break;
    case "u":
            console.log("owel")
            break;
    default:
        console.log("Number is constanant")
}
var month = 2
if(month>=3 && month<=5){
    console.log("Summer")
}
else if(month>=6 && month<=9){
    console.log("Rainy")
}
else if(month>=10 &&  month<=12 || month >= 1 && month <= 2){
    console.log("Winter")
}

var month = 8
switch(month){
    case 1:
    console.log("Winter")
    break;
    case 2:
    console.log("Winter")
    break;
    case 3:
    console.log("Summer")
    break;
    case 4:
    console.log("Summer")
    break;
    case 5:
    console.log("Summer")
    break;
    case 6:
    console.log("Summer")
    break;
    case 7:
    console.log("Rainy")
    break;
    case 8:
    console.log("Rainy")
    break;
    case 9:
    console.log("Rainy")
    break;
    case 10:
    console.log("Winter")
    break;
    case 11:
    console.log("Winter")
    break;
    case 12:
    console.log("Winter")
    break;
    default:
    console.log("Invalid month number")
}


var  vehicle = "car"
switch(vehicle){
    case "car":
    console.log("You have selected car it is a four wheeler vehicle")
    break;
    case "bike":
    console.log("You have selected bike it is a two wheeler vehicle")
    break;
    default:
    console.log("Unknown vehicle type")
}



