/*===
   -> STRING Practice <-
===*/

/*===
   -> String basic <-
===*/



// String surrounded by ('')single, ("")double quotes and (``)backticks.

const single = "Single quotes";
const double = "Double quotes";

// template literal
const backtick = `Backticks`;

console.log(single);
console.log(double);
console.log(backtick);




/*===
   -> Embeding JS <-
===*/

// template literal let's you wrap javascript variable or expressions inside ${__} and output as string.

// example with one variable
const name = "Chris";
const greeting = `helo, ${name}`;
console.log(greeting);


// example with two variable
const name1 = "Sakibur";
const name2 = "Rahman";

const joined = `${name1} ${name2} sabbir`;
console.log(joined);



/*===
   -> Concatenation in context <-
===*/

const button = document.querySelector("button");

function greet() {
   const nameHi = prompt("What's your name?");
   const greeting = document.querySelector("#sayhi");
   greeting.textContent= `Hello ${nameHi}, Nice to meet you!`;
};

button.addEventListener("click", greet);



