const drSass = [
  {
    "id": "1",
    "Question": "What does SCSS stand for?",
    "answers": ["Semantic Cascading Style Sheets", "Special Cascading Style Sheets", "Sassy Cascading Style Sheets"],
    "correctAnswer": "Sassy Cascading Style Sheets"
  },
  {
    "id": "2",
    "Question": "What is SCSS?",
    "answers": ["a CSS preprocessor", "a compiler", "a library"],
    "correctAnswer": "a CSS preprocessor"
  },
  {
    "id": "3",
    "Question": "What is a preprocessor?",
    "answers": ["a tool which will process code and compile it to a new format", 
      "converts source code into something that can run on a computer", 
      "a text-only way of browsing and interacting with your computer"],
    "correctAnswer": "a tool which will process code and compile it to a new format"
  },
  {
    "id": "4",
    "Question": "What does SASS stand for?",
    "answers": ["Syntactically Awesome Style Sheets", "Super Awesome Style Sheets", "Semantically Awesome Style Sheets"],
    "correctAnswer": "Syntactically Awesome Style Sheets"
  },
  {
    "id": "5",
    "Question": "What is another example of a preprocessor?",
    "answers": ["Styled", "SCAT", "Less"],
    "correctAnswer": "Less"
  },
  {
    "id": "6",
    "Question": "What is one reason SCSS is preferred over SASS?",
    "answers": ["syntax is much easier to write", "It is newer", "SASS is difficult to read"],
    "correctAnswer": "syntax is much easier to write"
  },
  {
    "id": "7",
    "Question": "What is the correct syntax for defining a variable in SCSS?",
    "answers": ["$favorite-color: purple", "@favorite-color: purple", "&favorite-color: purple"],
    "correctAnswer": "$favorite-color: purple"
  },
  {
    "id": "8",
    "Question": "Where can SCSS variables be used?",
    "answers": ["anywhere in any style sheet", "anywhere in SCSS style sheets", "anywhere in SASS style sheets"],
    "correctAnswer": "anywhere in SCSS style sheets"
  },
  {
    "id": "9",
    "Question": "What is an advantage of using variables in SCSS?",
    "answers": ["allows for more creativity", "makes confusing properties easier to read", "saves from typing out especially long, specific styles"],
    "correctAnswer": "saves from typing out especially long, specific styles"
  },
  {
    "id": "10",
    "Question": "Does regular CSS accept variables?",
    "answers": ["yes", "no", "only in special circumstances"],
    "correctAnswer": "Yes"
  },
  {
    "id": "11",
    "Question": "What is nesting in SCSS?",
    "answers": ["practice of combining multiple variables into one", 
      "represents the relationships between HTML elements in CSS", 
      "a group of CSS declarations to be reused throughout the site"],
    "correctAnswer": "represents the relationships between HTML elements in CSS"
  },
  {
    "id": "12",
    "Question": "Why is too much nesting a problem?",
    "answers": ["creates overly specific CSS",
    "makes the Sass file too difficult to read",
    "takes too long to compile"],
    "correctAnswer": "creates overly specific CSS"
  },
  {
    "id": "13",
    "Question": "Sass is a superset language — what does that mean?",
    "answers": ["everything that works in CSS will still work in Sass or SCSS", 
    "it combines CSS and Javascript", 
    "Sass uses variables to create supersets"],
    "correctAnswer": "everything that works in CSS will still work in Sass or SCSS"
  },
  {
    "id": "14",
    "Question": "What is the advantage of the @import directive?",
    "answers": ["Allows coders to bring in additional style", 
    "So both SCSS and SASS can be used in the same files", 
    "compiles stylesheets so only one HTTP request is made to the server"],
    "correctAnswer": "compiles stylesheets so only one HTTP request is made to the server"
  },
  {
    "id": "15",
    "Question": "Where does the @import directive get used and why?",
    "answers": ["only once at the top of the index.scss file", 
      "in every .scss file to import all styles", 
      "in index.scss for each individual SCSS files"],
    "correctAnswer": "in index.scss for each individual SCSS files"
  },
  {
    "id": "16",
    "Question": "How should Sass files be named?",
    "answers": ["doctorSass.scss", "_doctorSass.scss", "doctorSass.css"],
    "correctAnswer": "doctorSass.scss"
  },
  {
    "id": "17",
    "Question": "What is a partial Sass file?",
    "answers": ["snippets of CSS to be included in other CSS files", 
      "Sass file without anything imported into it", 
      "Sass file with poor/incomplete syntax"],
    "correctAnswer": "snippets of CSS to be included in other CSS files"
  },
  {
    "id": "18",
    "Question": "What is a potential use case of a partial Sass file?",
    "answers": ["a file with all the defined Sass variables", 
      "file with all the imported partial Sass files", 
      "placeholder for styles that may not end up being used"],
    "correctAnswer": "a file with all the defined Sass variables"
  },
  {
    "id": "19",
    "Question": "How should a partial Sass file be named?",
    "answers": ["doctorSass.scss", "doctorSass.css", "_doctorSass.scss"],
    "correctAnswer": "_doctorSass.scss"
  },
  {
    "id": "20",
    "Question": "What is a Sass mixin?",
    "answers": ["a mix of the two given colors based on the weight percentage provided", 
      "a group of CSS declarations to be reused throughout the site", 
      "a delicious option at ColdStone creamery"],
    "correctAnswer": "a group of CSS declarations to be reused throughout the site"
  },
  {
    "id": "21",
    "Question": "What is the proper way to define a Sass mixin?",
    "answers": ["@mixin mixinName(arguments) { style }", "@mixinName(arguments) { style }", "@mixin mixinName{ style }"],
    "correctAnswer": "@mixin mixinName(arguments) { style }"
  },
  {
    "id": "22",
    "Question": "What is especially sassy feature of mixins?",
    "answers": ["they accept arguments which can be used to pass values", 
      "inherits properties from other selectors", 
      "they can be used in javascript"],
    "correctAnswer": "they accept arguments which can be used to pass values"
  },
  {
    "id": "23",
    "Question": "How is a Sass mixin called once it has been defined?",
    "answers": ["@include mixinName(potentialArguments)", "@mixinName()", "@mixinName(potentialArguments)"],
    "correctAnswer": "@include mixinName(potentialArguments)"
  },
  {
    "id": "24",
    "Question": "What does the @extend directive do in Sass?",
    "answers": ["inherits properties from other selectors", 
      "extends partial Sass files", 
      "imports Sass color functions"],
    "correctAnswer": "inherits properties from other selectors"
  },
  {
    "id": "25",
    "Question": "What are color functions?",
    "answers": ["functions provided by Sass to allow color manipulation", 
      "a tool for selecting color schemes for an entire project", 
      "a wider variety of color selectors provided in Sass"],
    "correctAnswer": "functions provided by Sass to allow color manipulation"
  },
  {
    "id": "26",
    "Question": "What does color() accept as an argument?",
    "answers": ["a single color", 
      "two colors and the weight percentage", 
      "two colors"],
    "correctAnswer": "a single color"
  },
  {
    "id": "27",
    "Question": "What does color() return?",
    "answers": ["the 180-degree complement of the color passed through as an argument", 
      "the hex value of that color", 
      "a mix of the two given colors based on the weight percentage provided"],
    "correctAnswer": "the 180-degree complement of the color passed through as an argument"
  },
  {
    "id": "28",
    "Question": "What does mix() accept as an argument?",
    "answers": ["two colors and a percentage", "two colors", "two colors and a number"],
    "correctAnswer": "two colors and the weight percentage"
  },
  {
    "id": "29",
    "Question": "What does mix() return?",
    "answers": ["the 180-degree complement of the color passed through as an argument", 
      "a mix of the two given colors based on the weight percentage provided", 
      ""],
    "correctAnswer": "a mix of the two given colors based on the weight percentage provided"
  },
  {
    "id": "30",
    "Question": "Using mix(purple, gold, 100%), which color will be represented?",
    "answers": ["100% purple", "100% gold", "a 100% mix"],
    "correctAnswer": "100% purple"
  },
  {
    "id": "31",
    "Question": "What arguments does lighten() accept?",
    "answers": ["one color and a number", "one color and a percentage", "two colors and a percentage"],
    "correctAnswer": "one color and a percentage"
  },
  {
    "id": "32",
    "Question": "What does darken(color, amount) return?",
    "answers": ["the given color darkened by the percentage given", 
      "the given color desaturated by the percentage given", 
      "the given color darkened by the pixels given"],
    "correctAnswer": "the given color darkened by the percentage given"
  },
  {
    "id": "33",
    "Question": "What does desaturate(color, amount) return?",
    "answers": ["the given color desaturated by the percentage given", 
      "the given color darkened by the percentage given", 
      "the given color desaturated"],
    "correctAnswer": "the given color desaturated by the percentage given"
  },
  {
    "id": "34",
    "Question": "What arguments does saturate() accept?",
    "answers": ["two colors and a number", "one color and a percentage", "one color and a number"],
    "correctAnswer": "one color and a percentage"
  },
  {
    "id": "35",
    "Question": "How is the & symbol used in Sass?",
    "answers": ["& is converted to the name of the parent element when nesting", 
      "& is used to link variables together", 
      "& is not used in Sass and will throw an error"],
    "correctAnswer": "& is converted to the name of the parent element when nesting"
  },
  {
    "id": "36",
    "Question": "Can arithmetic operators be used in Sass?",
    "answers": ["Yes", "No", "Yes, but why would you?"],
    "correctAnswer": "Yes, but why would you?"
  },
  {
    "id": "37",
    "Question": "What does the @if directive do?",
    "answers": ["@if is not a Sass directive", 
      "sets style based on a condition", 
      "repeats CSS definitions multiple times in a row"],
    "correctAnswer": "sets style based on a condition"
  },
  {
    "id": "38",
    "Question": "What does the @for directive do",
    "answers": ["repeats CSS definitions multiple times in a row", 
      "sets style based on a condition", 
      "@for is not a Sass directive"],
    "correctAnswer": "repeats CSS definitions multiple times in a row"
  },
  {
    "id": "39",
    "Question": "How is the * symbol used in Sass?",
    "answers": ["* is converted to the name of the parent element when nesting",
      "* is used to link variables together",
      "* is not used in Sass and will throw an error"],
    "correctAnswer": "* is not used in Sass and will throw an error"
  },  
  {
    "id": "40",
    "Question": "What does the @onceler directive do",
    "answers": ["repeats CSS definitions multiple times in a row",
      "sets style based on a condition",
      "@onceler is not a Sass directive"],
    "correctAnswer": "@onceler is not a Sass directive"
  }
]

module.exports = {
  drSass
}