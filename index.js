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
/Exercises 6:Checking Array Integrity (some, every)

//a
const userAges = [18,24,33,16,40];
console.log(userAges.some(age => age <18));

//b
console.log(userAges.every(age => age >= 18));

//c
console.log(userAges.some(age => age % 5 ===0));


//Section c :Transformation & Reordering
//Exercises 7: Reversing and Sorting Arrays
const dataPoints = [42, 10, 500, 2, 77];

//a
let ascending = [...dataPoints].sort((a,b) => a - b);
console.log(ascending);


//b
let descending = [...dataPoints].sort((a,b) => b - a);
console.log(descending);
let reversed =[...dataPoints].reverse();
console.log(reversed);

//Exercise 8: Concatenation, Joining, and Slicing

const arr1 = ["A", "B", ];
const arr2 = ["C", "D",];
const sentencesParts = ["Hello", "world", "this", "is", "great"];

//a
const combined = arr1.concat(arr2);
console.log(combined);

//b
const joined = sentencesParts.join(" ");
console.log(joined);

//c
const sliced = sentencesParts.slice(1,4);
console.log(sliced);

//Exercises 9: Flattening Arrays (flat)
const nestedArrays = [1, [2, 3], [4, [5, 6]], 7];

//a
const flattenedOnce = nestedArrays.flat();
console.log(flattenedOnce);

//b
const fullyFlattened = nestedArrays.flat(Infinity);
console.log(fullyFlattened);

//Section D: Functional programming
//Exercises 10: Mapping and Filtering Arrays

//a
const pricesUSD = [10.50, 20.00, 5.25];
const localCurrency = pricesUSD.map(price => price * 5.25);
console.log(localCurrency);

//b
const itemPrice = pricesUSD.map(price => "Item price: $xx.xx");

console.log(itemPrice);

//Exercises 11: Filtering Data

//a
const testScores = [45, 78, 92, 30, 65, 88];
const passingScores = testScores.filter(score => score >= 70);
console.log(passingScores);

//b
const total = testScores.reduce((sum, score) => sum + score, 0);
const average = total / testScores.length;
console.log(average);

//Exercises 12: Aggregating Data
const priceUSD = [10.50, 20.00, 5.25];

//a
const totalPrice = priceUSD.reduce((sum, price) => sum + price, 0);
console.log(totalPrice);

//b
const maxPrice = priceUSD.reduce((max, price) => (price > max ? price : max), priceUSD[0]);
console.log(maxPrice);

//Section E: Objects Inside Arrays
//Exercises 13: Sortin objects
const users = [
    {name: "Zoe", age: 30},
    {name: "Adam", age: 25},
    {name: "Charlie", age: 30},
];

//a
const sortedByAge = [...users].sort((a,b) => a.age - b.age);
console.log(sortedByAge);

//b
const sortedUsers = [...users].sort((a, b) => {
  // First: sort by age
  if (a.age !== b.age) {
    return a.age - b.age;
  }
  
  // Second: sort by name if ages are equal
  return a.name.localeCompare(b.name);
});

console.log(sortedUsers);