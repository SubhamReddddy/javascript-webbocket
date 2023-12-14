//For in
//It returns index of the array
const array1 = [1,2,3,4,5,6]
for(let keys in array1)
console.log(keys);

//For of
//it return the elements of the array.
for(let values of array1)
console.log(values);

//for each
//It will return nothing ..For each doesn't have any return value .
const languages = ['C','c++','java','python','.net','php','react','angular']
const values = languages.forEach( (item) => { 
            // return item;
            // console.log(item)s;
})
// console.log(values);

//filter method

const numberArray = [1,7,8,4,5,0,9,7,2,36,8,6,7,4,9]
// const updatedArray = numberArray.filter( (data) =>{
//         return data>4
// })
// console.log(updatedArray);

const updatedArray = []
numberArray.forEach( (data) =>{
    if(data>4){
        updatedArray.push(data);
    }
})
console.log(updatedArray)

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];


  const myBooks = books.filter( (bg) => bg.edition === 1989)
  console.log(myBooks)

  const filterBook = books.filter( (fb) => {return fb.genre === 'Non-Fiction' && fb.publish >= 1987})
  console.log(filterBook);

  //Map method
const mapArray = [2,4,8,10,12,14,16,18]
// const newArray = mapArray.map( (num) => {
//         return num + 1;
// })
// console.log(mapArray);
// console.log(newArray);

//chaining

const chainingArray = mapArray
                            .map((data) => data+2)
                            .map((data) => data*10)
                            .filter((data) => data > 40)
console.log(chainingArray);


//reduce method

const arrayNums = [2,4,6,8,10]
const reduceMethod = arrayNums.reduce(function (accumulator,currentValue){
    console.log(`accumulator ${accumulator} and ${currentValue}`)
    return accumulator + currentValue
},0)
console.log(reduceMethod);

//reduce method using arrow function

const redMethod = arrayNums.reduce((acc,currVal) => acc+currVal,3)
console.log(redMethod);

//Set method
//Q. How to create a set?

const mySet = new Set();
console.log(mySet);

//Add some values in the set.
mySet.add(2);
mySet.add(4);
mySet.add(6);
mySet.add(8);
mySet.add(10);
mySet.add(12);
mySet.add(14);
mySet.add(16);
console.log(mySet);

//Check the size of the set
const sizeSet = mySet.size;
console.log(sizeSet)

//check if the value is exist or not?
console.log(mySet.has(10));

//remove a value from the set
const deletedItem = (mySet.delete(14));
console.log(deletedItem);

console.log(mySet);

//iterate over the values from the set
for (let values of mySet)
console.log(values);