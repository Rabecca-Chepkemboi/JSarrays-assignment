let arry = [3, 7, 34, 90, 12];
let lastElement = arry[arry.length -1];
console.log(lastElement); 

let arry2 = [true, "green", "where", 12, 56];
let finalElement = arry2[arry2.length -1];
console.log(finalElement);

let myPets = ["cow", "bird", "snake", "dog"];
let myArray = myPets.join(", ");
console.log(myArray);

let numArray = [-5, 9, 5, 3, 2, -3, 6, 8, 4, 1];
console.log(numArray);

let myFruits = ["apple", "mango", "apple", "orange", "mango", "mango"];

function eliminate(myFruits){
    return myFruits.filter((item,
        index)=> myFruits.indexOf(item) === index)
}
console.log(eliminate(myFruits));

let duplicateArray = myFruits.filter((Element, index) => myFruits.indexOf(Element) !== index);
console.log(duplicateArray);

let arry3 = ["we", "way", "x",4];
let wordsearch = "we";
if (arry3.includes = (wordsearch)){
    console.log(wordsearch);
}
else {
    console.log("the search word was not found");
} 

let words = "sevink";
let x = words.split('').sort() .join('');
console.log(x)





