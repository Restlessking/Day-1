Write a blog about objects and its internal representation in Javascript:-

    => Objects are the building blocks of JavaScript, allowing you to create complex structures to organize and manipulate data.
    
    => In this blog, we’ll dive into the fascinating world of objects and explore their internal representation in JavaScript.

    => JavaScript is an object-based language. Everything is an object in JavaScript.

    => JavaScript is template based not class based. Here, we don't create class to get the object. But, we direct create objects.

Understanding Objects: 

    => The Basics In JavaScript, an object is like a container that holds related data and functions, known as properties and methods, respectively. Imagine an object as a real-world object — say, a car. 
    
    => A car has properties like color, make, and model, and methods like startEngine and brake. Similarly.
    
    => a JavaScript object can store data (properties) and perform actions (methods).

Internal Representation of Objects :-

    => Objects are stored as a collection of key-value pairs, where the keys are the property names and the values can be data or references to functions.

    => When you access an object’s property or method, JavaScript searches for the property name in the object’s internal collection of key-value pairs. If it finds a match, it returns the corresponding value.

Creating Objects :-

    => You can create objects in JavaScript using Three methods:

        1.By object literal

        2.By creating instance of Object directly (using new keyword)

        3.By using an object constructor (using new keyword)

1.JavaScript Object by object literal:-

Syntax:- 

    object={
        property1:value1,
        property2:value2.....propertyN:valueN
    }

Examples :-
 
    emp={
        id:102,
        name:"Shyam Kumar",
        salary:40000
        }  

    console.log(emp.id+" "+emp.name+" "+emp.salary);  

Output:-

    102 Shyam Kumar 40000

2.By creating instance of Object:-

Syntax:- 

    var objectname=new Object();  

    //Here, new keyword is used to create object.

Examples :-
 
    var emp=new Object();  
        emp.id=101;  
        emp.name="Ravi Malik";  
        emp.salary=50000;  

    console.log(emp.id+" "+emp.name+" "+emp.salary);

Output:-

    101 Ravi 50000

3.By using an Object constructor:-

    => Here, you need to create function with arguments. Each argument value can be assigned in the current object by using this keyword.

    => The this keyword refers to the current object.

Examples-

    // Constructor function for Person objects

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

Output:-

    John Doe 50 blue