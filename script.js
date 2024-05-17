// Example By using an Object constructor:-

function Person(first, last, age, eye) 
{
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}

// Create a Person object

const myFather = new Person("John", "Doe", 50, "blue");

console.log(myFather.firstName,myFather.lastName,myFather.age,myFather.eyeColor)

//Example By creating instance of Object:-

var emp=new Object();  
emp.id=101;  
emp.name="Ravi Malik";  
emp.salary=50000;  

console.log(emp.id+" "+emp.name+" "+emp.salary);

//Example avaScript Object by object literal:-

emp={
    id:102,
    name:"Shyam Kumar",
    salary:40000
    }  

console.log(emp.id+" "+emp.name+" "+emp.salary);