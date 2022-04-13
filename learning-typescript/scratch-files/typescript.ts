let id: number = 5
let company: string = 'Proud Cloud'
let isPublished: boolean = true
let x: any = 'Hello'

let ids: number[] = [1,2,3,4,5]
let arr: any[] = [1, true, 'Hello']

// Tuple
let person: [number, string, boolean] = [1, 'Brad', true]

// Tuple Array
let employee: [number, string][]
employee = [
    [1, 'John'],
    [2, 'Jill'],
    [3, 'Jake']
]

// Union
let pid: string | number
let pid2: string | number
pid = '22'
pid2 = 22

// Enum
enum Direction1 {
    Up = 1,
    Down,
    Left,
    Right
}
console.log(Direction1.Left)

enum Direction2 {
    Up = 'Up',
    Down = 'Down',
    Left = 'Left',
    Right = 'Right'
}

// Objects
type User = {
    id: number,
    name: string
}

const user: User = {
    id: 1, 
    name: 'John'
}


//Type Assertion
let cid: any = 1
let customerId = <number>cid 
let customerId2 = cid as number

// Functions
// if you don't give a type to a function parameter, it would put a type - any to it by default but you must set "noImplicitAny" to false in tsconfig.json
// you can also declare a return type for the function as seen below "(parameters): number"
function addNum(x: number, y: number): number {
    return x + y
}
// Void
// Here, the return type is void because the parameters can either be a string or a number and the result therfore is not set to a certain type
function log(message: string | number): void {
    console.log(message)
}

log("hello")
//log(true) //boolean was not accepted because it's neither a string or number

// Interface
interface UserInterface {
    readonly id: number, //readonly will prevent users from putting a value on that property
    name: string,
    age?: number //optional properties must have a ?
}

const user1: UserInterface = {
    id: 1, 
    name: 'John'
}

interface MathFunc {
    (x: number, y: number): number
}

const add: MathFunc = (x: number, y: number): number => x + y
const sub: MathFunc = (x: number, y: number): number => x - y

interface PersonInterface {
    id: number,
    name: string,
    register(): string
}

// Classes
class Person implements PersonInterface {
    // protected id: number //paramters can be public, private, or protected
    id: number
    name: string

    constructor(id: number, name: string) {
        this.id = id
        this.name = name
    }

    register () {
        return `${this.name} is now registered`
    }
}

const brad = new Person(1, 'Brad Smith')
const mike = new Person(2, 'John Doe')


console.log(brad.register())
console.log(brad, mike)

// Subclasses
class Employee extends Person {
    position: string 

    constructor(id: number, name: string, position: string) {
        super(id, name)
        this.position = position 
    }
}

const emp = new Employee(3, 'Shawn', 'Developer')

console.log(emp.register())

// Generics
// function getArray(items: any[]): any[] {
//     return new Array().concat(items)
// }

// let numArray = getArray([1,2,3,4])
// let strArray = getArray(['Brad','John','Jill'])


function getArray<T>(items: T[]): T[] { //T = type (works kind of like a placeholder)
    return new Array().concat(items)
}

let numArray = getArray<number>([1,2,3,4])
let strArray = getArray<string>(['Brad','John','Jill'])

// numArray.push('hello') -- this will no longer work because numArray expects a number

numArray.push(1);