const questions = [
  {
    "question": "When the context of this is described what is context actually?",
    "answers": ["The scope that this is invoked in.", "Whatever this is bound to.", "The object that is executing the javascript code."],
    "correctAnswer": "The object that is executing the javascript code.",
    "codeSnippet": null,
    "id": 1
  },
  {
    "question": "When is the value of this set in an ES5 function?",
    "answers": ["When the function is created.", "When the function is executed."],
    "correctAnswer": "When the function is executed.",
    "codeSnippet": null,
    "id": 2
  },
  {
    "question": "When is the value of this set in an ES6 (arrow) function?",
    "answers": ["When the function is created.", "When the function is executed."],
    "correctAnswer": "When the function is created.",
    "codeSnippet": null,
    "id": 3
  },
  {
    "question": "What is the default this?",
    "answers": ["The window object.", "The global object.", "Undefined."],
    "correctAnswer": "The global object.",
    "codeSnippet": null,
    "id": 4
  },
  {
    "question": "What is the default this in a web browser?",
    "answers": ["The window object.", "The object the code is executing on.", "Undefined."],
    "correctAnswer": "The window object.",
    "codeSnippet": null,
    "id": 5
  },
  {
    "question": "When ship.blastOff() is called. What will be the value of this that is console logged?",
    "answers": ["The window object.", "The ship object.", "Instance of RocketShip."],
    "correctAnswer": "The ship object.",
    "codeSnippet": "https://i.imgur.com/z19z60g.png",
    "id": 6
  },
  {
    "question": "When blastOff() is evoked. What will be the value of this that is console logged?",
    "answers": ["The window object.", "The ship object.", "Instance of RocketShip."],
    "correctAnswer": "The window object.",
    "codeSnippet": "https://i.imgur.com/z19z60g.png",
    "id": 7
  },
  {
    "question": "If ship.blastOff is console logged what will the value of this be?",
    "answers": ["The window object.", "The ship object.", "Instance of RocketShip."],
    "correctAnswer": "Instance of RocketShip.",
    "codeSnippet": "https://i.imgur.com/lAmTiE9.png",
    "id": 8
  },
  {
    "question": "When an application is running in strict mode and the first two rules do not apply. What will the value of this be?",
    "answers": ["The window object.", "The global object.", "Undefined."],
    "correctAnswer": "Undefined.",
    "codeSnippet": null,
    "id": 9
  },
  {
    "question": "What is the value of `this` when a user clicks on our button element?",
    "answers": ["The window object.", "The ship object.", "The button element."],
    "correctAnswer": "The button element.",
    "codeSnippet": "https://i.imgur.com/iVGU70Y.png",
    "id": 10
  },
  {
    "question": "What is the value of `this` when a user clicks on our button element?",
    "answers": ["The window object.", "The ship object.", "The button element."],
    "correctAnswer": "The window object.",
    "codeSnippet": "https://i.imgur.com/VQAcDyY.png",
    "id": 11
  },
  {
    "question": "What do the Call and Apply methods allow us to do in JavaScript?",
    "answers": ["Set the execution context of the function to the object provided as the first argument.", "Bind the context of this to the current context during creation phase.", "Bind context of this to the global scope."],
    "correctAnswer": "Set the execution context of the function to the object provided as the first argument.",
    "codeSnippet": null,
    "id": 12
  },
  {
    "question": "What method in Javascript permenantly sets the context of a function to its first argument?",
    "answers": [".Bind", ".Call", ".Apply"],
    "correctAnswer": ".Bind",
    "codeSnippet": null,
    "id": 13
  },
  {
    "question": "What is the first rule when figuring out the context for this?",
    "answers": ["This in function code invoked using the new operator refers to the instance of that object.", "When executing a function as a method on an object, this refers to that object.", "Default this refers to the global object"],
    "correctAnswer": "This in function code invoked using the new operator refers to the instance of that object.",
    "codeSnippet": null,
    "id": 14
  },
  {
    "question": "What is the second rule when figuring out the context for this?",
    "answers": ["This in function code invoked using the new operator refers to the instance of that object.", "When executing a function as a method on an object, this refers to that object.", "Default this refers to the global object"],
    "correctAnswer": "When executing a function as a method on an object, this refers to that object.",
    "codeSnippet": null,
    "id": 15
  },
  {
    "question": "What is the third rule when figuring out the context for this?",
    "answers": ["This in function code invoked using the new operator refers to the instance of that object.", "When executing a function as a method on an object, this refers to that object.", "Default this refers to the global object"],
    "correctAnswer": "Default this refers to the global object",
    "codeSnippet": null,
    "id": 16
  },
  {
    "question": "When the function is declared and called in the global context?",
    "answers": ["2000", "The global window object.", "Undefined"],
    "correctAnswer": "Undefined",
    "codeSnippet": "https://i.imgur.com/qzAJ2Mq.png",
    "id": 17
  },
  {
    "question": "Often when looking at docs on MDN for iterative array prototype methods you will see a thisArg optional argument. What is the function of the argument?",
    "answers": ["It sets the value of this for every iteration", "The global window object.", "It allows the value of this to change through each iteration"],
    "correctAnswer": "It sets the value of this for every iteration",
    "codeSnippet": null,
    "id": 18
  },
  {
    "question": "Often when looking at docs on MDN for iterative array prototype methods you will see a thisArg optional argument. What is the function of the argument?",
    "answers": ["It sets the value of this for every iteration", "The global window object.", "It allows the value of this to change through each iteration"],
    "correctAnswer": "It sets the value of this for every iteration",
    "codeSnippet": null,
    "id": 19
  },
  {
    "question": "What will the value of this be during every iteration?",
    "answers": ["The array students.", "The global window object.", "Each student object."],
    "correctAnswer": "The array students.",
    "codeSnippet": "https://i.imgur.com/Ur56bUy.png",
    "id": 20
  },
  {
    "question": "What will the value of this be during every iteration?",
    "answers": ["The array students.", "The global object.", "Each student object."],
    "correctAnswer": "The global object",
    "codeSnippet": "https://i.imgur.com/X6npGtM.png",
    "id": 21
  },
  {
    "question": "What will this be bound to when doge.waitPatiently() is called?",
    "answers": ["Any dog objects that exist.", "The global object.", "That instance of Dog."],
    "correctAnswer": "The doge instance of Dog.",
    "codeSnippet": "https://i.imgur.com/yhguT5l.png",
    "id": 22
  },
  {
    "question": "Will the following code work when the button is clicked?",
    "answers": ["Yes!", "No!"],
    "correctAnswer": "No!",
    "codeSnippet": "https://i.imgur.com/MhiRKWj.png",
    "id": 23
  },
  {
    "question": "Will the following code work when the button is clicked?",
    "answers": ["Yes!", "No!"],
    "correctAnswer": "Yes!",
    "codeSnippet": "https://i.imgur.com/PFUdcSQ.png",
    "id": 24
  },
  {
    "question": "When the above function is declared and invoked in the global context. What will be returned?",
    "answers": ["The function fn.", "The global object.", "Undefined."],
    "correctAnswer": "Undefined.",
    "codeSnippet": "https://i.imgur.com/ySWhc0T.png",
    "id": 25
  },
  {
    "question": "When a function is called with the new operator. What will be the value of this in the function?",
    "answers": ["The first instance created", "The global object", "The specific instance of the object created."],
    "correctAnswer": "The specific instance of the object created.",
    "codeSnippet": null,
    "id": 26
  },
  {
    "question": "When makeNoises is declared and invoked in a browsers console what will be logged?",
    "answers": ["My name is robert but I go by Robbie", "My name is  but I go by Robbie", "My name is Bobo but I go by Robbie"],
    "correctAnswer": "My name is  but I go by Robbie",
    "codeSnippet": "https://i.imgur.com/bailuRC.png",
    "id": 27
  },
  {
    "question": "If the above code is run in a browsers console what will be logged?",
    "answers": ["My name is robert but I go by Robbie", "My name is  but I go by Robbie", "My name is Bobo but I go by Robbie"],
    "correctAnswer": "My name is Bobo but I go by Robbie",
    "codeSnippet": "https://i.imgur.com/gWZ630a.png",
    "id": 28
  },
  {
    "question": "If the above code is run in a browsers console what will be logged?",
    "answers": ["My name is robert but I go by Robbie", "My name is  but I go by Robbie", "My name is Bobo but I go by Robbie"],
    "correctAnswer": "My name is Bobo but I go by Robbie",
    "codeSnippet": "https://i.imgur.com/gOrFAFB.png",
    "id": 29
  },
  {
    "question": "If the above code is run in a browsers console what will be logged?",
    "answers": ["My name is robert but I go by Robbie", "My name is  but I go by Robbie", "My name is Bobo but I go by Robbie"],
    "correctAnswer": "My name is  but I go by Robbie",
    "codeSnippet": "https://i.imgur.com/DOozeUN.png",
    "id": 30
  },
  {
    "question": "If the above code is run in a browsers console what will be logged?",
    "answers": ["My name is robert but I go by Robbie", "My name is  but I go by Robbie", "My name is Bobo but I go by Robbie"],
    "correctAnswer": "My name is Bobo but I go by Robbie",
    "codeSnippet": "https://i.imgur.com/sRDluFG.png",
    "id": 31
  }
];

module.exports = {data}