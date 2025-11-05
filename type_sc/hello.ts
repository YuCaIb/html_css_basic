function greet(name: string) {
    return `Hello, ${name} !`;
}

const message: string = greet('TypeScirpt!');

console.log(message);


/* 5 primitive types
- boolean
- number (her tip sayısal değer için aynı, float-tamsayı-Binary-hexadecimal-Octal...)
- string
- Bigint (2^53 - 1 sayısından daha büyük sayılar için sayısal değer.)
- Symbol ()
*/

// Boolean
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

// Bigint
const bigNumber: bigint = 9007199254740991n;
const hugeNumber = BigInt(9007199254740991); // Alternative syntax

//Symbol unique tanımlayıcılar oluşturur. Unique özellik key ve constant oluşturmak için kullanışlıdır.

const uniqueKey: symbol = Symbol('description');
const obj = {
    [uniqueKey]: 'This is a unique property'
};
console.log(obj[uniqueKey]); // "This is a unique property"


function ornek(name: string): string {
    return `Hello, ${name}!`;
}  //return tipini de belirleyebiliyoruz. Belirlemessek çıkarım (inferrence) yapıyor.

const user = {
    name: 'yusuf',
    surname: "ibisoglu",
    isadmin: false,
    age: 25
}

console.log(user.name);
// console.log(user.email); // undefined olarak görünüyor.


/*
* TypeScript inference özelliği oldukça güçlü. Ancak tipi tanımlayamadığı durumlar olabiliyor.
* mesela aşşağıda data değişkenini any olarak atadı.
* */

const data = JSON.parse('{"name":"yusuf","surname":"ibisoglu","isadmin":true}');

// Unknown ve any

// any - js kodunu typescripte When migrating JavaScript code to TypeScript
// When working with dynamic content where the type is unknown
// When you need to opt out of type checking for a specific case

let v: any = true;
v = "string"; // no error as it can be "any" type
Math.round(v); // no error as it can be "any" type


//unknown any'nin güvenli versiyonu, property'leri çapıramassın.
// Kullanmadan önce kontrol etmen gerekiyor (assert etmeden çalımıyor).
// Çağıramassın, construct edemessin

let w: unknown = 1;

w = "string";

w = {
    runANonExistentMethod: () => {
        console.log("I think");
    }
} as { runANonExistentMethod: () => void }

console.log('31')


if (typeof w === 'object' && w !== null) {
    (w as { runANonExistentMethod: Function }).runANonExistentMethod();
}

// Unknown ne zaman kullanılır.
// Dışardan veri aldığımızda (API vs) veri tiplerinden emin olmamız gerektiğinde.
// java scriptten Type Scripte güvenli bir geçiş yaptığımızda (kodları js den ts e çevirirken.)

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

// Never type
// Hiç bir zaman meydana gelmeyecek / gelmemesi gereken değerleri temsil eder.
// çok net analamdım bunu yav
function throwError(message: string): never {
    throw new Error(message);
}

class Circle {
    kind: string | undefined;
    radius: number | undefined;
}


class Square {
    kind: string | undefined;
    height: number | undefined;
    weight: number | undefined;
    sideLength: number | undefined;
}

class Triangle {
    kind: string | undefined;
    height: number | undefined;
    weight: number | undefined;
}

type Shape = Circle | Square | Triangle;

function getArea(shape: Shape): number {
    switch (shape.kind) {
        case 'circle':
            return Math.PI * shape.radius ** 2;
        case 'square':
            return shape.sideLength ** 2;
        default:
            // TypeScript knows this should never happen
            const _exhaustiveCheck: never = shape;
            return _exhaustiveCheck;
    }
}

//undefined ve null
// undefined bir değişken tanımlandığını, değerinin belirlenmediğini ifade ediyor.
// null, null'dur. hiç bir değeri veya objeyi temsil etmez.
// typescriptte ikisinin de kendine özgü olarak tipi vardır : undefined and null respectively
// With strictNullChecks enabled, you must explicitly handle these types
let y: undefined = undefined;
let z: null = null;

// Opsiyonel parametre ve properties belirteçi "?"


// Optional parameter (implicitly `string | undefined`)
function selamver(name?: string) {
    return `Hello, ${name || 'stranger'}`;
}

// Optional property in an interface
interface User {
    name: string;
    age?: number;
}// Same as `number | undefined`


// Null birleştirme ve Opsiyonel incirleme
/*
const value = input ?? 'default'

// Optional chaining (?.) - safely access nested properties
const street = user?.address?.street;*/
/*

Important: These types are most useful when strictNullChecks is enabled in your tsconfig.json file.

    This ensures that null and undefined are only assignable to themselves and any.

    To enable strict null checks, add this to your tsconfig.json:*/


// Array
// string[], number[],
// readonly, sadece okuma yetkisi veirir, değiştirilemez hale getirir.

const names: string[] = [];
names.push("Dylan"); // no error
// names.pu2sh(3); // Error: Argument of type 'number' is not assignable to parameter of type 'string'.

const names2: readonly string[] = ["Dylan"];
names.push("Jack"); // Error: Property 'push' does not exist on type 'readonly string[]'.
// try removing the readonly modifier and see if it works?

const numbers:number[] = [1, 2, 3]; // inferred to type number[]
numbers.push(4); // no error
// comment line below out to see the successful assignment
numbers.push("2"); // Error: Argument of type 'string' is not assignable to parameter of type 'number'.
let head: number = numbers[0]; // no error

console.log("head" + head);

// Bir tuple, önceden tanımlanmış bir uzunluğa ve her indeks için türlere sahip türlendirilmiş bir dizidir. sıralama önemlidir.
// Tuple'lar' harikadır çünkü dizideki her bir elemanın bilinen bir değer türünde olmasına izin verirler.

// define our tuple
let ourTuple: [number, boolean, string];

// initialize correctly
ourTuple = [5, false, 'Coding'];

// mesela ourTuple'ın ilk 3 (0 1 2) elemanının tipi belirlenmiş, geri kalanına ne insert edersen et. kabul edecek ama tanımlanmış yerlere uygun tip gelmeli.

// define our tuple
let ourTuple2: [number, boolean, string];

// initialized incorrectly which throws an error
ourTuple2 = [false, 'Coding', 5];

// Objectte tipler
const car: { type: string, model: string, year: number } = {
    type: "Toyota",
    model: "Corolla",
    year: 2009
};
// Opsiyonel properties

const car: { type: string, mileage: number } = { // Error: Property 'mileage' is missing in type '{ type: string; }' but required in type '{ type: string; mileage: number; }'.
    type: "Toyota",
};
car.mileage = 2000; //  hata veriyor

const car1: { type: string, mileage?: number } = { // no error
    type: "Toyota"
};
car1.mileage = 2000; //hata vermiyor

//Index signatures

const nameAgeMap: {[index: string]: number} = {};
nameAgeMap.Jack = 2000;

// Enum is a group of constant(unchangeable).
// Enumlar 0 dan başlatır default olarak, kendin tanımlarsan o etki yok olur.
// Daha çok string Enum'lar kullanılıyor numerik enumlar'dan ziyada


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



