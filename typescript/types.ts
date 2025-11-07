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
};

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
