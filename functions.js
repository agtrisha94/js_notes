function getUserNameFromEmail(getUserNameFromEmail)
{
    return email.slice(0,email.indexOf("@"));
}
console.log(getUserNameFromEmail("user@hbibi.com"));

//Anonymous functions
const getUserNameFromEmail=function(email)
{
    return email.slice(0,email.indexOf("@"));
}
console.log(getUserNameFromEmail("user@hbibi.com"));

//Another Way
const toProperCase=(myName) =>
{
    return myName.charAt(0).toUpperCase()+myName.slice(1).toLowerCase();
}
console.log(toProperCase("Trisha"));