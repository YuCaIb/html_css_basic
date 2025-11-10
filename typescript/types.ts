let isactive: boolean = false;
let hasError = true;  //Python gibi kendisi de çıkarım yapabiliyor.

//number
let decimal: number = 25;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
let float: number = 3.14;

//String
let name: string = "Yusuf Can"
let surname: string = "İbişoğlu"

let sentence: string = "Hello my name is " + name + " " + surname + " and I'm " + decimal + " Years old.";

console.log(sentence)

//Symbol unique tanımlayıcılar oluşturur. Unique özellik key ve constant oluşturmak için kullanışlıdır.

const uniqueKey: symbol = Symbol('description');
const obj = {
    [uniqueKey]: 'This is a unique property'
};
console.log(obj[uniqueKey]); // "This is a unique property"



const user = {
    name: 'yusuf',
    surname: "ibisoglu",
    isadmin: false,
    age: 25
}

console.log(user.name);
// console.log(user.email); // undefined olarak görünüyor.



const data = JSON.parse('{"name":"yusuf","surname":"ibisoglu","isadmin":true}');
console.log(typeof data);


//Any Unknown
let v: any = true;
v = "string"; // no error as it can be "any" type
Math.round(v); // no error as it can be "any" type
console.log(v)


let w: unknown = 1;

w = "string";

w = {
    runANonExistentMethod: () => {
        console.log("I think");
    }
} as { runANonExistentMethod: () => void }

console.log(w);

if (typeof w === 'object' && w !== null) {
    (w as { runANonExistentMethod: Function }).runANonExistentMethod();
}


// Unkown ne zaman kullanılır
function processValue(value: unknown) {
    if (typeof value === 'string') {
        // value is now treated as string
        console.log(value.toUpperCase());
    } else if (Array.isArray(value)) {
        // value is now treated as any[]
        console.log(value.length);
    }
}

let absc: number[] = [2, 3];
processValue(absc)



const names: string[] = [];
names.push("Dylan"); // no error
// names.pu2sh(3); // Error: Argument of type 'number' is not assignable to parameter of type 'string'.

const names2: readonly string[] = ["Dylan"];
names.push("Jack"); // Error: Property 'push' does not exist on type 'readonly string[]'.
// try removing the readonly modifier and see if it works?

const numbers:number[] = [1, 2, 3]; // inferred to type number[]
numbers.push(4); // no error

numbers.push("2"); // Error: Argument of type 'string' is not assignable to parameter of type 'number'.
let head: number = numbers[0]; // no error

console.log(numbers)


//Index signatures
// tanımlanmış bir property listesi olmayan nesneler için kullanılabilir

const nameAgeMap: {[index: string]: number} = {};
nameAgeMap.Jack = 2000;
nameAgeMap.Mark = "Fifty"; // Error: Type 'string' is not assignable to type 'number'.
console.log(nameAgeMap);


enum StatusCodes {
    NotFound = 404,
    Success = 200,
    Accepted = 202,
    BadRequest = 400
}
// logs 404
console.log(StatusCodes.NotFound);
// logs 200
console.log(StatusCodes.Success);


enum CardinalDirections {
    North = 'North',
    East = "East",
    South = "South",
    West = "West"
}
// logs "North"
console.log(CardinalDirections.North);
// logs "West"
console.log(CardinalDirections.West);



//Type Aliases
type CarYear = number
type CarType = string
type CarModel = string
type Car3 = {
    year: CarYear,
    type: CarType,
    model: CarModel
}

const carYear: CarYear = 2001
const carType: CarType = "Toyota"
const carModel: CarModel = "Corolla"
const car3: Car3 = {
    year: carYear,
    type: carType,
    model: carModel
};

type Animal = { name: string };
type Bear = Animal & { honey: boolean };
const bear: Bear = { name: "Winnie", honey: true };

type Status = "success" | "error";
let response: Status = "success";

console.log(response);
console.log(bear);
console.log(typeof bear + " <-bear|response->" + typeof response);


//Interfaces
interface Rectangle {
    height: number,
    width: number
    sides: number[]
}

const rectangle: Rectangle = {
    height: 20,
    width: 10,
    sides: [20, 10, 20, 10]
};

console.log(rectangle);

console.log(typeof rectangle)


interface Tool { name: string; }
interface Tool { year: number; }
const pen: Tool = { name: "Pen", year: 12 };

console.log(typeof pen);
console.log(pen)

//Union
function printStatusCode(code: string | number) {
    console.log(`My status code is ${code}.`)
}
printStatusCode(404);
printStatusCode('404');

/*
function printStatusCode(code: string | number) {
    console.log(`My status code is ${code.toUpperCase()}.`) // error: Property 'toUpperCase' does not exist on type 'string | number'. Property 'toUpperCase' does not exist on type 'number'
}*/

//Functions
//return değerinin type belirlenmesi :
function getTime(): number {
    return new Date().getTime();
}
function printHello(): void {
    console.log('Hello!');
}
// parametrelerin tipinin belirlenmesi
function multiply(a: number, b: number) {
    return a * b;
}
//Opsiyonel paramtereler '?' ile gösterilir.
// the `?` operator here marks parameter `c` as optional
function add(a: number, b: number, c?: number) {
    return a + b + (c || 0);
}
//Deafult parametreler
function pow(value: number, exponent: number = 10) {
    return value ** exponent;
}
//Named Parameters
function divide({ dividend, divisor }: { dividend: number, divisor: number }) {
    return dividend / divisor;
}

// Rest Parameters
function add(a: number, b: number, ...rest: number[]) {
    return a + b + rest.reduce((p, c) => p + c, 0);
}

//Type alias ile fonksiyon :
type Negate = (value: number) => number;

// in this function, the parameter `value` automatically gets assigned the type `number` from the type `Negate`
const negateFunction: Negate = (value) => value * -1;

// Casting (as)
let x: unknown = 4;
console.log((x as string).length); // prints undefined since numbers don't have a length

// casting aslında verinin tipini değiştirmiyor, tekrar tanımlamıyor mesela bu örnekte çıktı number olarak gösteriliyor.
console.log(typeof (x as string));

//Typescript cast kullanılırken dahi, typecheck yapmaya devam eder mesela aşşağıdaki error throw ediyor, TypeScript, bir dizeyi sayıya dönüştürmenin, veriyi dönüştürmeden bir anlamı olmadığını bilir:
console.log((4 as string).length);

// <> kullanmak as kullanmak ile aynıdır. ikiside Casting yapar.
console.log(<string> x )

//Force Casting type errorları atlatmak için kullanılabilir.
console.log(((x as unknown) as number).length);

//Classes

class Telefon {
    marka: string;
}
const telefon = new Telefon();
telefon.marka = 'Nokia';

console.log(telefon);
class Araba {
    private name: string;

    public constructor(name: string) {
        this.name = name;
    }

    public getName(): string {
        return this.name;
    }
}

const araba = new Araba("toyota");
console.log(araba.getName());


class Laptop {
    // name is a private member variable
    public constructor(private name: string) {}

    public getName(): string {
        return this.name;
    }
}

const laptop = new Laptop("Lenova");
console.log(laptop.getName());


//Readonly
class Person {
    private readonly name: string;

    public constructor(name: string) {
        // name cannot be changed after this initial definition, which has to be either at its declaration or in the constructor.
        this.name = name;
    }

    public getName(): string {
        return this.name;
    }
}

const person = new Person("Jane");
console.log(person.getName());


//Inheritance
interface Shape {
    getArea: () => number;
}

class Rectangle implements Shape {
    public constructor(protected readonly width: number, protected readonly height: number) {}

    public getArea(): number {
        return this.width * this.height;
    }
}

