/*===
   -> STRING Practice <-
===*/

/*===
   -> String basic <-
===*/

// String surrounded by ('')single, ("")double quotes and (``)backticks.

const single = 'Single quotes';
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
  greeting.textContent = `Hello ${nameHi}, Nice to meet you!`;
}

button.addEventListener("click", greet);

/*===
   -> Concatenation<-
===*/

// adding normal strings with the (+) operator.

const greeting3 = "Hello";
const name3 = "Sabbir";

console.log(greeting3 + ", " + name3);

console.log(`${greeting3}, ${name3}`);

// Including expressions in strings

const song = "E-Hawa";
const score = 9;
const highestScore = 10;
const outputSong = `I like the song "${song}". I gave it a score of ${
  (score / highestScore) * 100
}%.`;

console.log(outputSong);

//note: to use backticks just use use backslash like this - \` ___ \`

/*===
   -> Multiline strings <-
===*/

const newline = `In order to get a multi-line string with the old style, we had to concatenate two strings with + sign and include a newline character. Writing multi-line strings became easier with template literals because you just need to add a new line in the string by pressing the enter key and type the text as you want it to appear.`;

console.log(newline);
