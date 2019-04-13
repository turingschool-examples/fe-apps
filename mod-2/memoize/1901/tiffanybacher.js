const objectQuestions = [ 
  {
    "question": "What is an object in JavaScript?",
    "answer": "An object in JavaScript can be compared to an object in real life. It is a stand alone entity with it's own set of properties and methods.",
    "id": 1,
    "group": 1
  },
  {
    "question": "What is a method?",
    "answer": "A method is a function that describes a behavior of an object.",
    "id": 2,
    "group": 1
  },
  {
    "question": "What is a property?",
    "answer": "A property is a characteristic of an object. It is made up of a key value pair.",
    "id": 3,
    "group": 1
  },
  {
    "question": "What is a key in an object?",
    "answer": "A key in an object is the name used to reference a value of a property of that object.",
    "id": 4,
    "group": 1
  },
  {
    "question": "What is a value in an object?",
    "answer": "A value in an object is the data referenced by a key of a property of that object.",
    "id": 5,
    "group": 1
  },
  {
    "question": "What kind of data can a property value hold?",
    "answer": "A property can hold a string, number, boolean, null, or an object.",
    "id": 6,
    "group": 1
  },
  {
    "question": "How does dot notation work?",
    "answer": "Dot notation uses a dot to access a value of an object by specifying a key",
    "id": 7,
    "group": 2
  },
  {
    "question": "How does bracket notation work?",
    "answer": "Bracket notation uses brackets to access a value of an object by specifying a key",
    "id": 8,
    "group": 2
  },
  {
    "question": "In what situation would bracket notation be more useful than dot notation?",
    "answer": "Bracket notation can be used to pass in a variable or parameter name that has a value of the key we want to access.",
    "id": 9,
    "group": 2
  },
  {
    "question": "How do we add a new property to an existing object using dot notation?",
    "answer": "objectName.newPropertyName = newPropertyValue",
    "id": 10,
    "group": 2
  },
  {
    "question": "How do we reassign a new value to an existing property in an object?",
    "answer": "objectName.existingProperyName = newPropertyValue",
    "id": 11,
    "group": 2
  },
  {
    "question": "What is a class?",
    "answer": "A class is a category of an object.",
    "id": 12,
    "group": 3
  },
  {
    "question": "How do we declare a class?",
    "answer": "To declare a class we use the class keyword with the name of the class. The first letter in the name is uppercase.",
    "id": 13,
    "group": 3
  },
  {
    "question": "What is an instance?",
    "answer": "An instance is a specific object created from a class.",
    "id": 14,
    "group": 3
  },
  {
    "question": "How do we create an instance?",
    "answer": "We create an instance of our class with the new keyword in front of it then assign it to a variable.",
    "id": 15,
    "group": 3
  },
  {
    "question": "How can we add properties and methods to a class?",
    "answer": "We can add properties and methods to a class by defining them in the constructor method.",
    "id": 16,
    "group": 3
  },
  {
    "question": "How do we make properties dynamic in a class?",
    "answer": "To make properties in a class dynamic, we can assign variables to properties and set them up as parameters within the constructor method.",
    "id": 17,
    "group": 3
  },
  {
    "question": "How do we invoke a class method on an instance of that class?",
    "answer": "We can invoke a class method on an instance by using dot notation.",
    "id": 18,
    "group": 3
  },
  {
    "question": "How do you describe the `this` keyword?",
    "answer": "`this` is a keyword used to reference the current context of the code being executed.",
    "id": 19,
    "group": 4
  },
  {
    "question": "What is the context for `this` when using it in a class method?",
    "answer": "The context for `this` when using it in a class method becomes the instance that calls the method.",
    "id": 20,
    "group": 4
  }
]

const catQuestions = [
  {
    "question": "What are the property keys of the cat?",
    "answer": ["name", "color", "age"],
    "id": 1.1,
    "group": 1
  },
  {
    "question": "What are the property values of the cat?",
    "answer": ["Abe", "orange", "2"],
    "id": 1.2,
    "group": 1
  },
  {
    "question": "Use bracket notation to change the color of the cat to brown.",
    "answer": "cat[color] = brown",
    "id": 2.1,
    "group": 2
  },
  {
    "question": "Use dot notation to add a property of fed to cat and set it to false.",
    "answer": "cat.fed = false",
    "id": 2.2,
    "group": 2
  },
  {
    "question": "Build a class named Cat using the property keys of name, color, age, and fed. Use a constructor to make the first 3 values dynamic but set the default value of fed to false.",
    "answer": "class Cat { constructor(name, color, age) { this.name = name, this.color = color, this.age = age, this.fed = false } }",
    "id": 3.1,
    "group": 3
  },
  {
    "question": "Make an instance of Cat called cat2 that is named Milo, is gray, is 5 years old, and has not been fed.",
    "answer": "var cat2 = new Cat('Milo', 'gray', 5)",
    "id": 3.2,
    "group": 3
  },
  {
    "question": "Create a method for the Cat class that feeds the cat.",
    "answer": "feedCat() { this.fed = true }",
    "id": 3.3,
    "group": 3
  },
  {
    "question": "Invoke feedCat on cat2",
    "answer": "cat2.feedCat()",
    "id": 3.4,
    "group": 3
  },
  {
    "question": "When feedCat() is invoked on cat2, what is the context for 'this'?",
    "answer": "cat2",
    "id": 4.1,
    "group":4
  }
]

const cats = [
  {
    "name": "Abe",
    "color": "orange",
    "age": 2,
    "fed": false
  },
  {
    "name": "Milo",
    "color": "gray", 
    "age": 5,
    "fed": false
  }
]

module.exports = {
  objectQuestions,
  catQuestions,
  cats
}