const student={
    name:'disha',
    roll:59,
    height:5.5,
    weight:50,
    fun:function mark(){
        console.log(100);
    }
};

console.log(student);  // printing normal object.

const jsonObject = JSON.stringify(student); // converting normal onject to json object
console.log(jsonObject);  // printing json object

const normalObject = JSON.parse(jsonObject); // converting json object to normal object
console.log(normalObject);//printing normal object

