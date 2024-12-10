'use strict';

let numbers = [];

    for(let i = 1; i<=5; i++){
        let number = prompt("input a number")
        numbers.push(number)
    }

    console.log("the numbers in reversed order are")

    for(let i = numbers.length -1; i>0; i--){
        console.log(numbers[i])
    } 
