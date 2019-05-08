/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Global object binding returns the window object.  Use strict mode to avoid this.
* 2. Implicit binding calls the object before the dot.
* 3. New binding is used in constructor functions to assign params to this object.
* 4. Explicit binding is used in .apply .bind, or .call to bind to an object.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
console.log(this);

// Principle 2

// code example for Implicit Binding
const myObj = {
    myStr: "Good morning",
    sayStr: function(){
        console.log(this.myStr);
    }
}
// Principle 3

// code example for New Binding
function Coder(name){
    this.name = name;
    function getName (){
        console.log(this.name);
    }
}
const karl = new Coder('Karl');
karl.getName();

// Principle 4

// code example for Explicit Binding
function Person(obj) {
    this.name = obj.name;
    this.age = obj.age;
    this.speak = function() {
        console.log(`this new binding`, this);
        return `Hello, my name is ${this.name}, and I am ${this.age} years old!`;
    }  
}

const ryan = new Person({name: 'ryan', age: 32});
const haynes = new Person({name: 'Haynes', age: 8});

ryan.speak.call(haynes)
haynes.speak.apply(ryan)

ryan.speak();
haynes.speak();




