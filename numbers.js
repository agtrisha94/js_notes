const myNumber=42;
const myFloat=42.0;
const myDecimal=42.03;
const myString="42";

//Comparing
console.log(myNumber===myDecimal);
console.log(myNumber===myFloat);
console.log(myNumber===myString);

//Addition String
console.log(myString+3);
//Addition Number
console.log(myNumber+3);

//Conversion from string to number
console.log(Number(myString));
console.log(Number(myString)+3);
console.log(Number(myString)===myNumber);

//NaN-Not a number
console.log(Number("Dave"));
console.log(Number(undefined));
console.log(Number(true));
console.log(Number(false));

//Number Methods
//The Number.isInteger() method determines whether is passe value is an integer or not.
console.log(Number.isInteger(myNumber));
console.log(Number.isInteger(myFloat));
console.log(Number.isInteger(myString));
console.log(Number.isInteger(myDecimal));

//The Number.parseFloat() method passes an argument and returns a floating point number. Of the number cannot be parsed from the argumnet, it returns NaN.
console.log(Number.parseFloat(myString));
console.log(Number.parseFloat(myFloat));
console.log(Number.parseFloat(myNumber));
console.log(Number.parseFloat(myDecimal));

//The toFixed() method formats number acc to no. of decmal points provided
console.log(myDecimal.toFixed(2));
console.log(myFloat.toFixed(3));
console.log("42.378hdcvu".toFixed(2));//error
console.log(typeof myDecimal.toFixed(2));//string

//The Number.parseInt() method passes a string argument and returns integer
console.log(Number.parseInt(myDecimal));
console.log(Number.parseInt(myString));
console.log(Number.parseInt(myFloat));
let num=Number.parseInt(myNumber);
console.log(typeof num);

//The toString() method returns a string representing the string
console.log(myFloat.toString());
console.log(myString.toString());
console.log(myNumber.toString());

//Chaining=Using several methods chained together
console.log(typeof Number.parseFloat(myString));
console.log(Number.parseFloat("4.23JBF").toFixed(2).toString());

//Nan is an acronym for Not a Number
//Number.isNaN() determines whether the passed value is NaN and its type is number
//The global isNaN() function determines whether a value is NaN or not
console.log(Number.isNaN("Dave"));//false
console.log(Number("jhv"));//NaN
console.log(isNaN("DJHD"));//true