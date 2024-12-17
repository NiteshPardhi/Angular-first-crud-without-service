import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
}

//Array methods of Javascript

let fruits = ['Banana', "Apple", "Mango", "Orange"] 
console.log('Fruits Array',fruits); 

console.log('return length of array', fruits.length)

console.log('Seaparated with comma',fruits.toString()); // toString Method converts an array to string with camma separated

console.log('join with comma',fruits.join()) //join method also join an array element in this way with comma separated

console.log('join with specific operator',fruits.join("*")) // join methiod also  join an array with specific operator

console.log('return last removed element',fruits.pop()) // pop method remove the last element of an array and return the element was removed
console.log('remove the last element',fruits)

console.log('return array length',fruits.push('Kiwi')) // push method add new element to the array at the last and return the array length
console.log('add new element to the last',fruits)

console.log('return first remove element ',fruits.shift()) // shift method remove the first element from the array and return the element was removed
console.log('remove first remove element ',fruits)

console.log('return array length',fruits.unshift("Lemon")) // unshift method add new element to the first position of array and return length
console.log('add new element to the first',fruits)

fruits[0] = "Graps"
console.log('add element to the 0 position',fruits) //  array element also access with index no

console.log('merge string',fruits.concat("Pineapple", "Bear")) // concat method can merge an multiple array or a string also
let peoples = ["Nitesh", "Dev"]
console.log('merge array',fruits.concat(peoples))
console.log(fruits) //  it does not change original array

fruits.splice(2,1,"Dragon","Snake") // splice method add the element with position 
console.log('add element with index',fruits) // 2 defines the position where new element added & 1 defines how many element should removed 

fruits.splice(0,1) // splice method also removed element from array 
console.log('remove element with index',fruits) // 0 defines the position where element removed & 1 defines how many element should removed 

let citrus = fruits.slice(1) // slice method slices out element starting from an array and return new array
console.log('slice out element from start',citrus) //slice method does not remove any elements from the source array.

// Array Sorting
console.log(fruits)
fruits.sort()   // sort method sort an array alphabetically
console.log('sort alphabetically',fruits)
fruits.reverse()  // reverse method reverse the element in an array
console.log('sort reverse to alphabetical',fruits)

//Number sorting
let points = [40, 100, 1, 5, 25, 10];
console.log(points)
points.sort()   // sort method also use to sort an number array alphabetically
console.log('sort number alphabetical',points)
points.sort(function(a, b){return a - b}) // sort array in assending order with the use of compare function
console.log('sort ascending order',points)
console.log('return lowest value',points[0]) // it return lowest value
points.sort(function(a, b){return b - a}) // sort array in descending order
console.log('sort descending order',points)
console.log('return highest value',points[0]) // it returns highest value

//Sorting of object array
let cars = [
  {type:"Volvo", year:2016},
  {type:"Saab", year:2001},
  {type:"BMW", year:2010}
];
cars.sort(function(a, b){return a.year - b.year})
console.log('sorting object array',cars)

//Array Iteration Method

//forEach method Calls a function once for each array element
let numbers = [45, 4, 9, 16, 25]  
let txt = ""
function myFunction(value : any) {
  txt += value + "<br>"; 
}
numbers.forEach(myFunction);
console.log('return each element',txt);

//map method Creates a new array by performing a function on each array element 
let numbers1 = numbers.map((item)=>{
  return item * 2 ;
})
console.log('create new array of each array element',numbers1)

// Filter method Creates a new array with all array elements that passes a condition
let numbers2 = numbers.filter((item)=>{
  return item > 18
})
console.log('create an array of number greater than 18',numbers2)

// reduce method perform a function on each array element to produce (reduce it) single value
let numbers3 = numbers.reduce((item, value)=>{
  return item + value
})
console.log('reduce it with perform function ',numbers3)

//reduce method perform with initial value
let numbers4 = numbers.reduce((item, value)=>{
  return item + value
}, 100)
console.log('reduce with initial value',numbers4)

//reduceRight method work from right to left end
let numbers5 = numbers.reduceRight((item, value)=>{
  return item - value
})
console.log('reduce from right side',numbers5)

//every method check if all array value pass a condition if all match return true otherwise return false
let numbers6 = numbers.every((item)=>{
  return item > 5
})
console.log('check every value match',numbers6)

//some method check if some array element pass a condition if some match return true otherwise return false
let numbers7 = numbers.some((item)=>{
  return item > 10
})
console.log('check some value match',numbers7)

//indexOf method return the index of an array element if it is present in the array 
//if any search element is not present in the array then it return -1 value
let persons = ["Nitesh", "Ram", "Shyam", "Kunal", "Shree"]
let indexArray = persons.indexOf("Shyam") // it return index no of given element
console.log('return index of given element of array',indexArray)
let indexArray1 = persons.indexOf("Gita") // it return -1 value
console.log('check if value is not present return',indexArray1)

// lastIndexOf method works same as indexOf method
let lastIndex = persons.lastIndexOf("Kunal")
console.log('return lastIndex of',lastIndex)

// find method return the first value from an array which meet with condition
let numberArr = [2,5,8,66,44,23]
let firstValue = numberArr.find((item)=>{
  return item > 18
})
console.log("return First number over 18 is ",firstValue)

// findIndex method returns the index of first value from an array which meet the condition
let findIndexOf = numberArr.findIndex((item)=>{
  return item > 4
})
console.log("return First number over 4 has index is ",findIndexOf)

//includes method check if element is present in array then return true otherwise returns false
let array = ["Nitesh", "Ram", "Shyam", "Kunal", "Shree"]
let checkArray = array.includes('Ram')
console.log('check the value is present then return',checkArray)
let checkArray1 = array.includes('Sita')
console.log('check the value is not present then return',checkArray1)

//spread operator 
let cars1 = ["Saab", "Volvo", "BMW"];
let cars2 = ["Fiat", "Toyota"];
let combine = [cars1, ...cars2]
console.log('apend array',combine);

//rest operator

// Javascript Math methods
let x = Math.round(4.5)  //round method return nearest integer
console.log('return rounded nearest integer', x) 

let y = Math.ceil(6.8)   // ceil method return up value
console.log('return rounded up value',y )

let z = Math.floor(4.9)  // floor method return rounded down value
console.log('return rounded down value', z) 

let l = Math.pow(8,2) // pow method return the value of 8 to the power 2
console.log('value of x to the power of y',l)

let num3 = [4, 9, 16, 25];
let num4 = num3.map((item)=>{
  return Math.pow(item,2)
})
console.log('square of array',num4)

let m = Math.sqrt(64)  // sqrt method return the square root of given number
console.log('return square root of 64',m)

// let num11 = [64];
// console.log(Math.sqrt(num11))
// console.log(Math.sqrt([64]))
// console.log(Math.sqrt([64, 4, 16]))

let num = [4, 9, 16, 25];
let num1 = num.map(Math.sqrt)
console.log('returns the square root of array',num1)

let num2 = num.map((item)=>{
  return Math.sqrt(item)
})
console.log('return the square root of array',num2)

let n = Math.abs(-7.9) // abs method return absolute positive value
console.log('return absolute positive value',n)

let a = Math.min(0, 150, 30, 20, -8, -200) // min method return minimum value
console.log('return minimum value from given numbers',a)

let a1 = [0, 150, 30, 20, -8, -200]

function arrayMin(arr : any) {     // this function also used to find lowest value from array
  return Math.min.apply(null, arr);
}
console.log('lowest value',arrayMin(a1))

// let c = a1.map((item)=>{
//   return Math.min(item)
// })
// console.log(c)

let b = Math.max(0, 150, 30, 20, -8, -200) // max method return maximum value
console.log('return maximum value from given numbers',b)

function arrayMax(arr : any) {     // this function also used to find highest value from array
  return Math.max.apply(null, arr);
}
console.log('highest value',arrayMax(a1))

console.log('return random value between 0-1',Math.random())

console.log('return random value between any random number 0-9',(Math.random() * 10))

console.log('return log value of any number',Math.log(3))

// is else condition
if (new Date().getHours() < 18) {
  console.log('Good Morning')
}else {
  console.log('Good Afternoon')
}
console.log(new Date().getHours())



var nestedCourses = {
  "courses": [
  {'name':"Java", 'category':["Spring", "Hibernate", "Servlets"]},
  {'name':"C", "category":["Windows", "Scripting", "C++"] }
  ]
}
nestedCourses.courses.forEach((data) => {
  // console.log(data)
  // console.log(data.name)
  // console.log(data.category)
  // console.log(data.category[0])
  data.category.push('wires')
})
//console.log(nestedCourses)

nestedCourses.courses = nestedCourses.courses.map((item:any) => {  
  return {...item, age: 44}
})
//console.log(nestedCourses)

var obj = {'name':"Angular", "category":["Javascript", "Scripting", "CSS"] }
nestedCourses.courses.push(obj)
//console.log(nestedCourses)

var nestedArray = {
  'one': [
    {name: 'Ram', 'empDta': [{age: 33, address: 'Gujarat'}]}
  ],
  'two': [
    {name: 'Rahul', id: 3, 'empDta': [{age: 53, address: 'Maharashtra' , 'otherInfo':[{salary: 88888}]}]},
    {name: 'Krish', id: 5, 'empDta': [{age: 23, address: 'MP', 'otherInfo':[{salary: 1221212}]}]}
  ]
}
//console.log(nestedArray)

nestedArray.two.forEach((item:any) => {
 //console.log('parent',item.empDta);
  item.empDta.forEach((child: any) => {
   // console.log('child',child.address);
    child.otherInfo.forEach((nestChild:any) => {
     // console.log('nestChild',nestChild.salary)
    })
  })
})

let obj1 = {name: 'Ram', id: 8, 'empDta': [{age: 66, address: 'UP', 'otherInfo':[{salary: 555555}]}]}
nestedArray.two.push(obj1)
//console.log(nestedArray)

nestedArray.two = nestedArray.two.map((item:any) => {       //for add new string in all array of object
  return {...item, isCheck: true}
})
//console.log(nestedArray))

const array1 = [5, 12, 8, 130, 44];
let index = array1.findIndex((item) => (item > 12));
// console.log(index);

var array2 = [
  {name: 'RRR', id: 5},
  {name: 'SSS', id: 30}
]
var id = array2.findIndex((item) => (item.id > 2));
// console.log(id);

let idd = nestedArray.two.findIndex((item) => (item.name == 'Rahul'))//for add new value in any specific arrray of object
let xys = {mobile : 888999898899};
Object.assign(nestedArray.two[idd], xys)
// console.log(nestedArray.two);

nestedArray.two.forEach((element) => {
  Object.assign(element.empDta[idd], xys)
})
console.log(nestedArray.two);