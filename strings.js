const myVariable="Mathematics";

//Length of string - .length
console.log(myVariable.length);
console.log("Every good boy dooes fine".length);

//Returns character from index
console.log(myVariable.charAt(0));
console.log(myVariable.charAt(6));

//Returns index from character
console.log(myVariable.indexOf("mat"));
console.log(myVariable.indexOf("Mat"));
console.log(myVariable.indexOf("at"));
console.log(myVariable.indexOf("ati"));

//Returns last index
console.log(myVariable.lastIndexOf("at"));
console.log(myVariable.lastIndexOf("ath"));

//Returns part of string using index
console.log(myVariable.slice(5,8));
console.log(myVariable.slice(5));
console.log(myVariable.slice(5,6));

//Capitalize String
console.log(myVariable.toUpperCase());

//Lower Cae
console.log(myVariable.toLowerCase());

//Returns true if value is present otherwise false
console.log(myVariable.includes("mat"));
console.log(myVariable.includes("div"));

//Splits the string wherever the character is present and returns the strings in an array
console.log(myVariable.split("e"));
console.log(myVariable.split(""));
console.log("Joe,John,Dave".split(","));
console.log("Every good boy does fine".split(" "));