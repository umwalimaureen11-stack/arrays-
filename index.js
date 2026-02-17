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
console.log()

