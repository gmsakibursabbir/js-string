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

/*===
   -> Including quotes in strings <-
===*/

const goodQuotes1 = 'She said "I think so!"';
const goodQuotes2 = `She said "I think so 2!"`;
const bigmouth = `I\'ve got the work`;

console.log(goodQuotes1);
console.log(goodQuotes2);
console.log(bigmouth);



/*===
   -> Numbers vs. strings <-
===*/

// number

const myString = "123";
const myNum = Number(myString);

console.log(typeof myNum);


// string
const myNum2 = 123;
const myString2 = String(myNum2);
console.log(typeof myString2);


/*===
   -> Strings as objects <-
===*/

// Finding the length of a string
const browserType = "mozilla";
console.log(browserType.length);
console.log(browserType[0]);
console.log(browserType[browserType.length - 1]);


// Testing if a string contains a substring

const browserType1 = "sakibur";

if (browserType1.includes("sakib")){
   console.log("found sakib name!");
}else{
   console.log("No Sakib name found!");
}

const browserType2 = "sakibur";

if (browserType2.startsWith("sakib")){
   console.log("Word start with sakib name!");
}else{
   console.log("Word don't start with sakib name!");
}

const browserType3 = "sakibur";

if (browserType3.endsWith("sakib")){
   console.log("Word end with sakib name!");
}else{
   console.log("Word don't end with sakib name!");
}



// Finding the position of a substring in a string

const tagline = "If the string contains the substring";

console.log(tagline.indexOf("substring"));
console.log(tagline.indexOf("x"));



// Extracting a substring from a string

console.log(browserType1.slice(2, 6));
console.log(browserType1.slice(2));

// Changing case

const radData = "My NaMe Is SaKiBuR";

console.log(radData.toLowerCase());
console.log(radData.toUpperCase());


// Updating parts of a string

const browserType4 = "Firefox";
const updated = browserType4.replace("Fire", "Water");

console.log(updated);
console.log(browserType4);

// Updating original string

let browserType5 = "Firefox";

browserType5 = browserType5.replace("Fire", "Water");

console.log(browserType5);


// Updating All string

let quote = "To be or not to be";
quote = quote.replaceAll("be", "code");

console.log(quote);
