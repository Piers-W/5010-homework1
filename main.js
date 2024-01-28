import PromptsManager from "./PromptManager.js";

const myPromptManager = new PromptsManager();

myPromptManager.recordPrompt(
  "what is OOP?",
  "OOP stands for Object-Oriented Programming, which is a programming paradigm or methodology used in software development. It is based on the concept of objects, which are instances of classes, and it organizes code into reusable and structured units known as classes.",
  "chatgpt 3.5"
);

myPromptManager.recordTimestampedPrompt(
  "what is OOP?",
  "OOP stands for Object-Oriented Programming, which is a programming paradigm or methodology used in software development. It is based on the concept of objects, which are instances of classes, and it organizes code into reusable and structured units known as classes.",
  "chatgpt 3.5",
  "2024-01-27"
);

myPromptManager.addDalleInteraction(
  "what is OOP?",
  "OOP stands for Object-Oriented Programming, which is a programming paradigm or methodology used in software development. It is based on the concept of objects, which are instances of classes, and it organizes code into reusable and structured units known as classes.",
  "chatgpt 3.5",
  "https://codingnomads.co/wp-content/uploads/2020/12/OOP-graphic-blog-oop-concepts-in-java-what-is-object-oriented-programming.png",
  "https://codingnomads.co/wp-content/uploads/2020/12/OOP-graphic-blog-oop-concepts-in-java-what-is-object-oriented-programming.png"
);

console.log("All interactions:");
myPromptManager.showAllInteractions();

let index = 1;
let success = myPromptManager.removeInteraction(index);

if (success) {
  console.log(`Interaction at index ${index} has been removed.`);
} else {
  console.log(`Unable to remove interaction at index ${index}.`);
}

console.log("All interactions after removal:");
myPromptManager.showAllInteractions();