/*1.js array is a spacial variable where we can store more than one variable .

there are three ways to create an array */
    //1.
    const arrayName=['name1','name2','name3'];
    console.log(arrayName);
    //2
    const myArray= new Array('cuttack','bbsr',2,4,5,6,8);
    console.log(myArray);
    //3
    const car=[];
    car[0]='tata';
    car[1]='bmw';
    car[2]='hyundai';
    console.log(car);
    console.log(myArray.__proto__);
    
    myArray.push(90);  // add at last
    console.log(myArray);

    myArray.pop();   // delete the last element from the array
    console.log(myArray);

    myArray.unshift('puri');  // add at first
    console.log(myArray);

    myArray.shift();
    console.log(myArray);   // delete the 0th index element / delete the first element from the array

    /*
    Array.prototype.includes()
        it checks whether the element is present or not in the array.If the element is present it returns 
        true otherwise return false.
    */
   console.log(myArray.includes(6));

   /*
   array.prototype.indexof()
        if the element will be present in the array then it will return the index value of that element 
        otherwise it will return -1.
    */
    console.log(myArray.indexOf(6));

    /*
    array.prototype.join()
        basicaly it converts the array into string
    */
   console.log(myArray);
   const demoArray = myArray.join();  // you can also use('*')
   console.log(demoArray);
   console.log(typeof demoArray);

   /*
   slice and splice method
   */
  console.log('A',myArray);
  const myNewArray=myArray.slice(1,4) // in slice it stores the elements from 1 to 3
  console.log(myNewArray);
  console.log(myArray);

  const myNewArray1=myArray.splice(1,4); // it stores the elements from 1 to 4 and also changes the old array
  console.log(myNewArray1); 
  console.log(myArray);

const Marval_hero = ['thor','ironman','captainAmerica','spiderman'];

const dc_hero = ['batman','superman','flsah'];

const newarray = Marval_hero.concat(dc_hero);
console.log(newarray);

//after ES6
 const newArray12 = [...Marval_hero,...dc_hero,90];  // you can add more than one array together and also you can add a new element in the new array.
 console.log(newArray12);

 //array.prototype.flat()
 const anArray=[1,2,3,[4,5,7],[8,9,10],[11,12,13,15,[16,17,18,19,20]]];
 const aaanArray = anArray.flat(Infinity);
 const aanArray = anArray.flat();
 console.log(aaanArray);
 console.log(aanArray);

 console.log(Array.isArray('dc_hero'));  // if it is array then print true else print false

 // Array.from() converts an string to array
 console.log(Array.from('cuttack'));