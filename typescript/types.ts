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


let w: unknown = 1;

w = "string";

w = {
    runANonExistentMethod: () => {
        console.log("I think");
    }
} as { runANonExistentMethod: () => void }

