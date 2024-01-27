//If condition
let customerIsBanned=false;
let soup="chicken noodle soup";
let crackers=true;
let reply;

if(customerIsBanned)
{
    reply="No soup for you!";
}
else if(soup&&crackers)
{
    reply=`Here's your order of ${soup} and crackers`;
}
else if(soup)
{
    reply=`Here's your order of ${soup}`;
}
else
{
    reply="Sorry, we're out of soup";
}
console.log(reply);

//Switch case
switch(1)
{
    case 1:
        console.log("1");
        break;
    case 2:
        console.log("2");
        break;
    case 3:
        console.log("3");
        break;
    default:
        console.log("No match");
}

//Ternary Operator
let testScore=40;
let myGrade=testScore > 89 
           ? "A" 
           :testScore > 79
           ?"B"
           :testScore > 69
           ?"C"
           :testScore > 59
           ?"D"
           :"F";
console.log(myGrade);
