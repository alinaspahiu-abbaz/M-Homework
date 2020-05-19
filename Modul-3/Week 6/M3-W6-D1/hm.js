
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

 // 6. Write a JavaScript program to create a new string of specified copies (positive number) of a given string.

 // 7. Write a JavaScript program to display the city name if the string begins with "Los" or "New" otherwise return blank.

  let city ='New Delhi';
  let displayCity = (city.substring(0,3) ==='Los' || city.substring(0,3) === 'New')? city : '';
 
   console.log(displayCity); // mot in the way I wwanted to be.

// 8. Write a JavaScript program to compute the sum of three elements of a given array of integers of length 3.

let compute = function()
{
    let sum =0;
    for (let i = arguments.length-1;  i >= 0; i--) 
        {    sum+=arguments[i];      }
          return sum;
}
 console.log(compute(3,10,20))

 // 9. Write a JavaScript program to test whether an array of integers of length 2 contains 1 or a 3. 

 let contains = function() {

    let arr = [2, 5];
    arr = (arr.includes(1) || arr.includes(3)) ? "It is included" : 'Nope!'; 
 return arr;
}
console.log(contains());

// 10. Write a JavaScript program to test whether an array of integers of length 2 does not contain 1 or a 3

let DoesNotContains = function() {

    let arr = [2, 3];
    arr = (!arr.includes(1) || !arr.includes(3)) ? "It is not here" : 'There it is!'; 
 return arr;
}
console.log(DoesNotContains());



