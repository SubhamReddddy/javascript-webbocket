/*
1.objects are real time entities which have some attributs and characterstics.
2.it is also like a variable where we can store various types of data types.
3.in general variable can store one value ex: const car = 'mustang';
4.but in object we can store more than one value.
5.ex: const car={brand:'tata',model:'punch',color:'black'};
6.so we define a object inside the curly braces.
7.key and value separates by colon and need to add comma to add multiple keys. 
*/
const Obj={
    ['first-name']:'subham',

    ['last-name']:'reddy',

    age:22,

    height:5.10,

    location:'bbsr',

    ['login-days']:['monday','sunday'],    // array

    Obj1:{
        name:'rinku',    //nested object
        age:22
        },

    fun:function noob(){     // function inside an object.
        console.log('noob');
        return null;
    }
}
console.log(Obj);
console.log(Obj.fun());
console.log(Obj['first-name']);
console.log(Obj['login-days'][0]);
console.log(Obj.Obj1.name);
Obj.location='Cuttack';    // changing the value of location key
console.log(Obj.location);

//Object.freeze(Obj);  // it freezes the object so that you can't make any changes.
Obj.age=23; // can't change the value.
console.log(Obj.age);

Obj.email='subhamreddy121@gmail.com';  // adding a new key value pair 
console.log(Obj);

//object constructor

const user={};
user.id=746346;
user.Username='reddy';
user.status='active';

console.log(user);
console.log(Object.entries(user));  // shows in the form of array
console.log(Object.keys(Obj)); //returns all the keys
console.log(Object.values(Obj)); //returns all the values
console.log(Obj.hasOwnProperty('first-name'));  // it checkes the key is present or not.

// joining of objects
const Obj11={a:1,b:2};
const Obj12={c:3,d:4};
const Obj13={e:5,f:6};

const Obj4={Obj11,Obj12,Obj13};
console.log(Obj4);   //{ Obj11: { a: 1, b: 2 }, Obj12: { c: 3, d: 4 }, Obj13: { e: 5, f: 6 } }

//Assign method

const Obj5 = Object.assign({},Obj11,Obj12,Obj13); //{ a: 1, b: 2, c: 3, d: 4, e: 5, f: 6 }
console.log(Obj5);

// spread 
const spread = {...Obj11,...Obj12,...Obj13};
console.log(spread);

// objects in array

const arrayObj = [
    {
        id:101,
        location:'bbsr'
    },
    {
        id:102,
        location:'cuttack'
    },
    {
        id:103,
        location:'puri'
    },
    {
        id:104,
        location:'paradeep'
    }
];

console.log(arrayObj);  
console.log(arrayObj[2]);   //{ id: 103, location: 'puri' }
console.log(arrayObj[2].id);  //103

//obj-de-structuring

const course={
    coursename:'javaScript',
    coursefee:4000,
    providedby:'web_bocket'
}

const{providedby:pb}=course;
console.log(pb);   // we use only 'pb' instade of 'course.providedby'

//we can only access the value by 'pb' ,we can't modify the value by 'pb'