//Objects
//Key-value pairs separated by commas in curly braces

const anotherObj= {
    alive: true,
    answer: 94,
    hobbies: ["Eat","Sleep","Code"],
    beverage:{morning: "coffee", evening: "tea"}
};

//Access elements using dot notation
console.log(anotherObj.alive);
console.log(anotherObj.answer);
console.log(anotherObj.hobbies);
console.log(anotherObj.hobbies[1]);
console.log(anotherObj.beverage.evening);
//Access elements using square brackets
console.log(anotherObj["alive"]);
console.log(anotherObj["hobbies"]);
console.log(anotherObj["beverage"]["morning"]);

//Method in object
const myObj= {
    alive: true,
    answer: 94,
    hobbies: ["Eat","Sleep","Code"],
    beverage:{morning: "coffee", evening: "tea"},
    action: function (){
        return "Hello World";
    }
};
console.log(myObj.action());

//Using this keyword
const anotherObject= {
    alive: true,
    answer: 94,
    hobbies: ["Eat","Sleep","Code"],
    beverage:{morning: "coffee", evening: "tea"},
    action: function (){
        return `Time for ${this.beverage.evening}`;
    }
};
console.log(anotherObject.action());

//New object Vehicle
const vehicle = {
    wheels: 4,
    engine: function() {
        return "Vrrrrooooomm"
    }
};

//Creating truck object based on the generic vehicle object. The truck objct onherits the properties of the object vehicle
const truck = Object.create(vehicle);
truck.doors = 2;
//When truck is printed ony the doors poperty is seen
console.log(truck);
//Inheritance
console.log(truck.wheels);
console.log(truck.engine());

//Another object car and overwriting inherited object
const car=Object.create(vehicle);
car.doors = 4;
car.engine = function() {
    return "Whooosshh"
};
console.log(car.engine());

//Another object tesla inheritin car properties
const tesla=Object.create(car);
console.log(tesla.wheels);
console.log(tesla.engine());
tesla.engine=function () {
    return "shhhhh....";
};
console.log(tesla.engine());

// To get all the keys of object
const band ={
    vocals: "Robert Plant",
    guitar: "Jimmy Page",
    bass: "John Paul Jones",
    drums: "John Bonham"
};
//Prints keys in aaray
console.log(Object.keys(band));
//Prints values in array
console.log(Object.values(band));

//Itterate through all the values
for(let job in band)
{
    console.log(band[job]);
}
//Itterate values with keys
for(let job in band)
{
    console.log(`On ${job}, it's ${job[band]}!`);
}

//Delete an existing property or method
delete band.drums;

//Checks whether Object has property. Returns boolean
console.log(band.hasOwnProperty("drums"));

//Destructuring objects
//Defining myVariable and pulling the value of guitar from the object band
const {guitar : myVariable} = band;
console.log(myVariable);
const {bass: myBass, drums : myDrums} = band;
console.log(myBass);
console.log(myDrums);
//when destructuring we can name the variable the same as their key names
const {vocals,guitar,bass,drums} = band;
console.log(vocals);
console.log(drums);
//Creating function to pull value of vocals
function sings({vocals}){
    return `${vocals} sings!`;
}
console.log(sings(band));