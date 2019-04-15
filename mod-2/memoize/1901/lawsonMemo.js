const cards = [
  {
    "id": 1,
    "question": "What does Sass stand for?", 
    "multipleChoice": ["Syntactically Awesome Stylesheet", "Sassy Syntactically Awesome StyleSheet", "Version 3"], 
    "correctAnswer": "Syntactically Awesome Stylesheet",
    "img": "https://i.imgur.com/KPJj9ZV.png"

  }, 
  {
    "id": 2,
    "question": "What does Scss stand for?", 
    "multipleChoice": ["Syntactically Awesome Stylesheet", "Sassy Syntactically Awesome StyleSheet", "Version 2"], 
    "correctAnswer": "Sassy Syntactically Awesome Stylesheet",
    "img": "https://i.imgur.com/KPJj9ZV.png"

  }, 
  {
    "id": 3,
    "question": "Is scss a pre-processor?", 
    "multipleChoice": ["Yes", "No"], 
    "correctAnswer": "true",
    "img": "https://i.imgur.com/KPJj9ZV.png"

  }, 
  {
    "id": 4,
    "question": "Which one is the correct variable syntax for scss?", 
    "multipleChoice": ["#font-family: Robot", ".font-family: Robot", "$font-family: Robot"], 
    "correctAnswer": "$font-family: Robot",
    "img": "https://i.imgur.com/KPJj9ZV.png"
  }, 
  {
    "id": 5,
    "question": "Can you have indents and spaces within your scss files?", 
    "multipleChoice": ["Yes", "No"], 
    "correctAnswer": "",
    "trueOrFalse": "true",
    "img": "https://i.imgur.com/KPJj9ZV.png"
  }, 
  {
    "id": 6,
    "question": "Which is the correct syntax for @import with scss?",
    "multipleChoice": ["@import variables", "@import variables.sass", "@import \"variable\""],
    "correctAnswer": "@import \"variable\"",
    "img": "https://i.imgur.com/KPJj9ZV.png"

  },
  {
    "id": 7,
    "question": "Is css a pre-processor?", 
    "multipleChoice": ["Yes", "No"], 
    "correctAnswer": "false",
    "img": "https://i.imgur.com/KPJj9ZV.png"

  }, 
  {
    "id": 8,
    "question": "Is this the correct way to nest selctors?",
    "multipleChoice": ["Yes", "No"], 
    "correctAnswer": "false",
    "img": "https://imgur.com/Ux9uOFy.png"
  }, 
  {
    "id": 9,
    "question": "Which one is a partial scss file?", 
    "multipleChoice": ["#variable.scss", "_variable.scss", ".variable.scss"], 
    "correctAnswer": "_variable.scss",
    "img": "https://i.imgur.com/KPJj9ZV.png"

  }, 
  {
    "id": 10,
    "question": "What is the main purpose of a partial file?", 
    "multipleChoice": [ "Allows you to store information that you want to reuse throughout your stylesheets", 
                  "Files that contain little snippets of CSS that should not be generated into a CSS file.", 
                  "To give you the option to pass in values that make your mixin more flexible"
    ],
    "correctAnswer": "Files that contain little snippets of CSS that should not be generated into a CSS file.",
    "img": "https://i.imgur.com/KPJj9ZV.png"

  }, 
  {
    "id": 11,
    "question": "Can you pass in values with a mixin?", 
    "multipleChoice": ["Yes", "No"],
    "correctAnswer": "true",
    "img": "https://i.imgur.com/KPJj9ZV.png"
  },
  {
    "id": 12,
    "question": "What does @include need to have to work?", 
    "multipleChoice": ["An @import", "A @mixin", "_nameofmixin"],
    "correctAnswer": "An @mixin",
    "img": "https://i.imgur.com/KPJj9ZV.png"
  },
  {
    "id": 13,
    "question": "Is this the correct way to use the complement color function with scss?", 
    "multipleChoice": ["Yes", "No"],
    "correctAnswer": "true",
    "img": "https://imgur.com/VSfVuDd.png"
  },
  {
    "id": 14,
    "question": "Is this the correct way to nest selctors?",
    "multipleChoice": ["Yes", "No"], 
    "correctAnswer": "true",
    "img": "https://imgur.com/XI5JNzy.png"
  },
  {
    "id": 15,
    "question": "What is a scss @mixin?",
    "multipleChoice": [ "A mixin allows you to define a set of styles that you want to reuse throughout your codebase",
                  "A mixin allows you to inherit properties from other selectors",
                  "A mixin allow you to adjust defined color values with ease"
    ], 
    "correctAnswer": "A mixin allows you to define a set of styles that you want to reuse throughout your codebase",
    "img": "https://i.imgur.com/KPJj9ZV.png"
  }, 
  {
    "id": 16,
    "question": "Does @mixin need to also have @inlcude?",
    "multipleChoice": [ "Yes", "No"], 
    "correctAnswer": "true",
    "img": "https://i.imgur.com/KPJj9ZV.png" 
  },
  {
    "id": 17,
    "question": "Is this correct declaration for a @inlcude?",
    "multipleChoice": [ "Yes", "No"], 
    "correctAnswer": "false",
    "img": "https://imgur.com/o4FR70e.png" 
  },
  {
    "id": 18,
    "question": "Is this correct declaration for a @inlcude?",
    "multipleChoice": [ "Yes", "No"], 
    "correctAnswer": "true",
    "img": "https://imgur.com/38aMwEI.png" 
  },
  {
    "id": 19,
    "question": "Is this correct syntax for sass?",
    "multipleChoice": [ "Yes", "No"], 
    "correctAnswer": "true",
    "img": "https://imgur.com/J57gvRt.png" 
  },
  {
    "id": 20,
    "question": "Is this correct syntax for a scss",
    "multipleChoice": [ "Yes", "No"], 
    "correctAnswer": "true",
    "img": "https://imgur.com/s2o48im.png" 
  },
  {
    "id": 21,
    "question": "Does sass use bracket syntax?",
    "multipleChoice": [ "Yes", "No"], 
    "correctAnswer": "false",
    "img": "https://i.imgur.com/KPJj9ZV.png" 
  },
  {
    "id": 22,
    "question": "Which is the correct one for installing sass/scss using npm?",
    "multipleChoice": [ "$ npm install node-sass --save", "$ npm install node-sass -save", "$ npm install sass --save"], 
    "correctAnswer": "$ npm install node-sass --save",
    "img": "https://i.imgur.com/KPJj9ZV.png"  
  },
  {
    "id": 23,
    "question": "After npm install which one has the correct file path and naming structor for sass to be implemented?",
    "multipleChoice": [ "src/App.css", "src/App.csss", "src/App.scss"], 
    "correctAnswer": "src/App.scss",
    "img": "https://i.imgur.com/KPJj9ZV.png"  
  },
  {
    "id": 24,
    "question": "Do you @import all your seperate scss files into index.js, index.html, index.scss?",
    "multipleChoice": ["index.html", "index.scss", "index.js"], 
    "correctAnswer": "index.scss",
    "img": "https://i.imgur.com/KPJj9ZV.png"  
  },
  {
    "id": 25,
    "question": "Where do you import your index.scss file?",
    "multipleChoice": ["index.html", "App.js", "index.js"], 
    "correctAnswer": "index.js",
    "img": "https://i.imgur.com/KPJj9ZV.png"  
  },
  {
    "id": 26,
    "question": "Which answer best describes the use of operators in scss",
    "multipleChoice": [ "Operations let us do something like take pixel values and convert them to percentages", 
                  "Operators act very similar to JS operators like || , &&",
                  "Operators are not used for math within styling"], 
    "correctAnswer": "Operations in Scss let us do something like take pixel values and convert them to percentages",
    "img": "https://i.imgur.com/KPJj9ZV.png"  
  },
  {
    "id": 27,
    "question": "What is extends?",
    "multipleChoice": [ "Extend lets you share a set of CSS properties from one selector to another. It helps keep your Sass very DRY",
                  "Extend lets you make groups of CSS declarations that you want to reuse throughout your site",
                  "Extend lets you split your CSS into smaller, more maintainable portions"
                ], 
    "correctAnswer": "Extend lets you share a set of CSS properties from one selector to another. It helps keep your Sass very DRY",
    "img": "https://i.imgur.com/KPJj9ZV.png"  
  },
  {
    "id": 28,
    "question": "In the example which example will print?",
    "multipleChoice": ["%message-shared", "%equal-heights", "%link-styling"], 
    "correctAnswer": "%message-shared",
    "img": "https://imgur.com/kwJhkCj.png"  
  },
  {
    "id": 29,
    "question": "Can animations and transitions be stored to variables with css?",
    "multipleChoice": ["Yes", "No"], 
    "correctAnswer": "false",
    "img": "https://i.imgur.com/KPJj9ZV.png"  
  },
  {
    "id": 30,
    "question": "Can animations and transitions be stored to variables with scss?",
    "multipleChoice": ["Yes", "No"], 
    "correctAnswer": "true",
    "img": "https://i.imgur.com/KPJj9ZV.png"  
  }
  
]

module.exports = {
  cards
}

