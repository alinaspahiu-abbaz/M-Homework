
// 1. Write a JavaScript program to compute the sum of the two given integers. If the two values are same, then returns triple their sum.

const sum = function(a, b)
{
    let sum = (a==b)? ((a+b)*3) : "they are not same!";
    return sum;   
}
console.log("Sum: ",sum(3,5));



// 2. Write a JavaScript program to check two given numbers and return true if one of the number is 50 or if their sum is 50.

const checkNum = function(a, b) {
    
    let num = ((a===50) || (b===50) || ((a+b)===50)) ? true : false;
    return num;
    }
   console.log(checkNum(26,89));


// 3. Write a JavaScript program to remove a character at the specified position of a given string and return the new string.
 
let string="Alina_ Spahiu";
newString = string.replace(/_/gi, "");

console.log(newString);


/* 4. Write a JavaScript program to find the largest of three given integers. */ 

    let a=10;
    let b=20;
    let c=15;

console.log(("Largest number is: " ), Math.max(a, b, c));
    

// 5. Write a JavaScript program to check whether two numbers are in range 40..60 or in the range 70..100 inclusive. 

let num = 105;
 num = ((num >= 40 && num <= 60) || (num >= 70 && num <= 100)) ? "Yes!" : "No!"; 
 console.log(num)



