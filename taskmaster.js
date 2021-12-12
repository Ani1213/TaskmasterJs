
//Addition of Two Numbers
function add() {
    var val1 = prompt("Enter First number");
    var val2 = prompt("Enter Second number");
    var num1 = parseInt(val1);
    var num2 = parseInt(val2);
    var sum = num1 + num2;
    console.log("The Sum is", sum);
    alert("The sum is" + " " + sum);
}
//Larger of Two Nos
function Larger() {
    var val1 = prompt("Enter First number");
    var val2 = prompt("Enter Second number");
    var num1 = parseInt(val1);
    var num2 = parseInt(val2);
    if (num1 > num2) {
        console.log("The greater number is", num1);
    } else {
        console.log("The greater number is", num2);
    }

}
//Display the numbers in descending order
function ascending() {
    var val1 = prompt("Enter First number");
    var val2 = prompt("Enter Second number");
    var num1 = parseInt(val1);
    var num2 = parseInt(val2);
    if (num1 < num2) {
        console.log("The two numbers in ascending order", num1, num2);
    } else {
        console.log("The two numbers in ascending order", num2, num1);
    }
}
//count numbers from 0 through 5
function counttill_5() {
    var val = prompt("Enter counting limit");
    var lim = parseInt(val);
    console.log("The numbers from O to 5");
    for (var count = 0; count <= lim; count++) {
        console.log(count);
    }
}
//count numbers from 9 through 0 in descending order
function descending_9() {
    console.log("The numbers from 9 to 0 in descending order");
    for (var count = 9; count >= 0; count--) {
        console.log(count);
    }
}
//display numbers which are multiples of 3 from 0 to 20
function multiple_3() {
    var val = prompt("Enter counting limit");
    var lim = parseInt(val);
    console.log("display numbers which are multiples of 3 from 0 to 20");
    for (var count = 0; count <= lim; count++) {
        if (count % 3 == 0) {
            console.log(count);
        }
    }
}
//Display Prime Numbers from 0 to 100
function primeNumber() {
    console.log("The Prime numbers from 0 to 100");
    var flag = false;
    for (var i = 0; i <= 100; i++) {
        if (i == 2) {
            console.log(i); //print 2 is an even prime number
        }
        for (var j = 2; j < i; j++) {
            if (i % j == 0) {
                flag = false;
                break;
            }
            else {
                flag = true;
            }
        }
        if (flag) {
            console.log(i);
        }
    }
}
//display Name in Reverse Order //For Palindrome use "Nitin" as input
function name_reverse() {
    var str = prompt("Enter a Name");
    var rev_str;
    for (var i = str.length - 1; i >= 0; i--) {
        rev_str = str[i];
        console.log(rev_str);
    }
}
//Convert temperature From Celcius to Farenheit
function farenheit() {
    var val = prompt("Enter the temperature in Celcius:");
    var Celcius_temp = parseInt(val);
    var Farenheit_temp = Celcius_temp * (9 / 5) + 32;
    console.log("The Temperature in Farenheit is", Farenheit_temp);
}
//Display current day and time
function current_day_time() {
    var today = new Date();
    var day = today.getDay();
    var daylist = ["Sunday", "Monday", "Tuesday", "Wednesday ", "Thursday", "Friday", "Saturday"];
    console.log("Today is : " + daylist[day] + ".");
    var hour = today.getHours();
    var minute = today.getMinutes();
    var second = today.getSeconds();
    var prepand = (hour >= 12) ? " PM " : " AM ";
    hour = (hour >= 12) ? hour - 12 : hour;
    if (hour === 0 && prepand === ' PM ') {
        if (minute === 0 && second === 0) {
            hour = 12;
            prepand = ' Noon';
        }
        else {
            hour = 12;
            prepand = ' PM';
        }
    }
    if (hour === 0 && prepand === ' AM ') {
        if (minute === 0 && second === 0) {
            hour = 12;
            prepand = 'Midnight';
        }
        else {
            hour = 12;
            prepand = ' AM';
        }
    }
    console.log("Current Time : " + hour + prepand + " : " + minute + " : " + second);
}