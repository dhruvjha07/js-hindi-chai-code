// singleton

// objects literals 


// Object.create 

const mySym = Symbol("key1")

const JsUser = {
    name: "Dhruv",
    mySym: "mykey1",
    age: 21,
    location : "Bihar",
    email : "dhruv@google.com",
    isLoggedIn : false ,

}
// console.log(JsUser."email")

console.log(JsUser.email);

console.log(JsUser["email"]);

console.log(JsUser["mySym"]);
console.log(typeof JsUser["mySym"]);
console.log(JsUser[mySym]);

JsUser.email = "dhruvgfg.com"
console.log(JsUser.email)
// Object.freeze(JsUser)
JsUser.email = "vivekgfg.com"
console.log(JsUser.email);


JsUser.greeting = function() {
   console.log("hello users ");

    
}

console.log(JsUser.greeting());


JsUser.greetingtwo = function() {
   console.log(`hello users ${this.name}`);

    
}

console.log(JsUser.greetingtwo());





// PART 2 LECTURE OF OBJECTS //////////