// Task 1: Use map to convert an array of numbers into an array of their cubes.
//Write a JavaScript function that takes an array of numbers as input and returns a new array containing the cubes of each number.

function cubeofnumber(a){
    return a.map((num)=>num**3);
}
console.log(cubeofnumber([1,2,3]));

// Task 2: Use reduce to find the sum of all elements in an array.
//Write a JavaScript function that takes an array of numbers as input and returns the sum of all elements.

function sumofArray(arr){
    return arr.reduce((acc,num)=>num+acc,0);
}
console.log(sumofArray(1,2,3));

// Task 3: Use filter to find all prime numbers in an array.
//Write a JavaScript function that takes an array of numbers as input and returns a new array containing only the prime numbers.

function isPrimeNo(num){
    if(num<=1) return false;

    for(let i=2;i*i<=num;i++){
        if(num%i==0)return false;
    }
    return true;
}
function primeNos(arr){
    return arr.filter((e) => isPrimeNo(e))
}
console.log(primeNos([1,2,3,5,7,6,8,9]))

//Task 4: Use map, reduce, and filter to calculate the average of squared odd numbers in an array.
//Write a JavaScript function that takes an array of numbers as input and calculates the average of the squares of all odd numbers in the array.

function avg_squared_odd_no(arr){
    const oddno = arr.filter((e)=> e%2!=0);
    const squares_of_odd_no = oddno.map(e => e*e);
    sum = squares_of_odd_no.reduce((acc,e)=>e+acc,0);

    return sum/squares_of_odd_no.length;
}
console.log(avg([1,3,4,6,7,9]))

//Task 5: Use map, reduce, and filter to find the longest string in an array of strings.
//Write a JavaScript function that takes an array of strings as input and returns the longest string from the array.
 
function longestString(arr){
    var maxlength = arr.reduce(function(max, str){
        return Math.max(max, str.length);
    }, 0);

    var longeststrings = arr.filter(function(str){
        return str.length == maxlength;
    });
    return longeststrings[0];
}
console.log(longestString(["hyundai","alto","suzuki"]));

//Task 6: Use map to capitalize the first letter of each word in a sentence.
//Write a JavaScript function that takes a sentence as input and returns the sentence with the first letter of each word capitalized.

function capitalisefirstletter(sentence){
    arr = sentence.split(" ");
    update = arr.map((word) => {
        first = word.charAt(0).toUpperCase();
        returnfirst+word.slice(1);
    })
    return updated.join(" ");
}

console.log(capitalisefirstletter("Can you please update on the following task ?"))
//Task 7: Use filter to find all students who passed the exam.
//Write a JavaScript function that takes an array of student objects (with properties name and score) as input and returns an array containing only the students who passed the exam (scored 60 or above).
 
const students = [
    {name: "shruti", score: "90"},
    {name: "ritika", score: "87"},
    {name: "kriyansh", score: "95"},
    {name: "krishiv", score: "78"}
];

function passingstudents(students){
    return students.filter(students.score >= 60);
}
console.log(passingstudents);

//Task 8: Create a Private Counter for Multiple Instances
//Write a closure-based function that creates multiple instances of a private counter. Each instance should have its own count, independent of the others. For example:

function counter(){
    let count =0;
    return {
        increment : () =>{
            count ++;
            return count;
        }
    };
}

const ctr1=counter()
const ctr2=counter()
console.log(ctr1.increment())
console.log(ctr1.increment())
console.log(ctr2.increment())

 
//Task 9: Create a Promise-Based Calculator
//Write a Promise-based calculator that takes two numbers and an operation (addition, subtraction, multiplication, or division) as input. Perform the corresponding operation and resolve the Promise with the result. Handle division by zero and any invalid operations by rejecting the Promise with an appropriate error message.
 
class Calculator {
    constructor(){
        this.res=0;
    }
    addition(num1,num2){
        return new Promise((resolve,reject) => {
            this.res = num1+num2;
            resolve(this.res);
        });
    }
    substraction(num1,num2){
        return new Promise((resolve,reject) =>{
            this.res = num1-num2;
            resolve(this.res);
        });

    }
    multiplication(num1,num2){
        return new Promise((resolve, reject) =>{
            this.res = num1*num2;
            resolve(this.res);
        });
    }
    division(num1,num2){
        return new Promise((resolve, reject) =>{
            if(num2 == 0){
                reject("invalid operations");
            }else{
                this.res = num1/num2;
                resolve(this.res);
            }
        });
    }
}
const cal = new Calculator();
cal.addition(2,5).then(res => {
    console.log("Result", res);
    return cal.division(6,0);
}).then(res => {
    console.log("Result",res);
}).catch( err => {
    console.log("error",err)
})
 
//Task 10: Calculate Total Score
//Write a JavaScript function that takes an array of objects, where each object contains a property score, and uses the forEach method to calculate the total score of all the objects in the array. Return the total score as the output.

const studentDetail = [
    {name: "shruti", score: "90"},
    {name: "ritika", score: "87"},
    {name: "kriyansh", score: "95"},
    {name: "krishiv", score: "78"}
];

function totalScore(arr){
    let sum=0;
    arr.forEach(element => {
        sum+=element.score;
    });
    return sum;
}

console.log(totalScore(studentDetail));