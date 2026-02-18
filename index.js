// exercise 1:
const productcategories =["Books","Electronics","Clothing","Home&kitchen","Toys&games"]
// a
console.log(productcategories[0]);
// b
console.log(productcategories[productcategories.length-1]);
// c
console.log(productcategories.length);
// d
productcategories[1]="pen"
// e
console.log(productcategories);

//Exercise two: Push, Pop, Shift, Unshift, Splice
let invetory=[10,20,30];

//a
invetory.push(40);
console.log(invetory);

//b
invetory.pop(40);
console.log(invetory);

//c
invetory.unshift(0);
console.log(invetory);

//d
invetory.shift(0);
console.log(invetory);

//e
invetory.splice(1,1,25,35);
console.log(invetory);

//Exercise three: Shallow Copying of Arrays and the reference trap


//a
const originalScores=[90,85,78];
//b
const referenceCopy= originalScores; // reference copy, not a new array
console.log(referenceCopy);
//c 
referenceCopy[0]= 100;
console.log("Original Scores:", originalScores);
console.log("Reference Copy:", referenceCopy);

//d
const spreadCopy= [...originalScores]; // creates a new array with the same elements
//e
spreadCopy[0]= 50;
console.log("Original Scores:", originalScores);
console.log("Spread Copy:", spreadCopy);

//SECTION 3: Searching and Checking
//Exercise 4: Finding Elements by Index and Value

const studentNames= ["Alice", "Bob", "Charlie", "Alice", "David"];

//a 
console.log(studentNames.indexOf("Alice"));
//b
console.log(studentNames.lastIndexOf("Alice"));
// section 3

const studentName =["Alice","Bob","charlie","Alice","david"]
//  a
console.log(studentName.indexOf("Alice"));
// b
console.log(studentName.lastIndexOf("Alice"));
// c
console.log(studentNames.includes("Charlie"));
//d
console.log(studentNames.includes("Eve"));


// exercise 5 : Advanced searching with
//EXERCISE 5:Advanced searching with find and findIndex

const products =[
   
     {id:1,Name:"laptop",price:1200},
       {id:2,Name:"smartphone",price:25},
        {id:3,Name:"Tablet",price:75},
         {id:4,Name:"headphone",price:199},
];
//a
let foundProducts=products.find(product => product.id===2);
console.log(foundProducts);
//b

let foundIndex =products.findIndex(product=>product.price>1000);
console.log (foundIndex)
// exercise:6
// a
let userAges = [18, 24, 33, 16, 40];
let hasMinor = userAges.some(age => age < 18);

console.log(hasMinor);
// b
let allAdults = userAges.every(age => age >= 18);

console.log(allAdults);