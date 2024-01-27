//Javascript Classes
const Pizza
{
    constructor(pizzaType,pizzaSize)
    {
        this.type=pizzaType;
        this.size=pizzaSize;
        this.crust="original";
        this.toppings = [];
    }
    get pizzaCrust()
    {
        return this.crust;
    }
    set pizzaCrust(pizzaCrust)
    {
        this.crust=pizzaCrust;
    }
    getToppings()
    {
        return this.toppings;
    }
    setToppings(topping)
    {
        this.toppings.push(topping);
    }
    bake()
    {
        console.log(`Baking a ${this.size} ${this.type} ${this.crust} crust pizza`);
    }
}

const myPizza = new Pizza("pepperoni","small");
myPizza.type="supreme";
console.log(myPizza.crust);
myPizza.bake();
console.log(myPizza.type);
myPizza.pizzaCrust="sausage";
console.log(mypizza.pizzaCrust);
myPizza.setToppings("tomato");
myPizza.setToppings("olives");
console.log(myPizza.getToppings());
 
//Parent OR Super class
class Piizza{
    constructot(piizzaSize)
    {
        this.size=piizzaSize;
        this.crust="thin";
    }
    getCrust()
    {
        return this.crust;
    }
    setCrust(piizzaCrust)
    {
        this.crust=piizzaCrust;
    }
}

//Child Class
class SpecialityPiizza extends Piizza{
    constructor(piizzaSize)
    {
        super(piizzaSize);
        this.type="The Works";
    }
    slice()
    {
        console.log(`Our ${this.type} ${this.size} pizza has 8 slices`);
    }
}

//