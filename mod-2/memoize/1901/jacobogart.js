const stages = [
  {
    "name": "Setup",
    "letter": "S",
    "description": "Setup the conditions required to execute the action on your Subject Under Test",
    "starterWords": [
      "describe",
      "let",
      "beforeEach",
      "it",
      "const"
    ],
    "id": 1
  },
  {
    "name": "Execution",
    "letter": "E",
    "description": "Execute some action on your Subject Under Test, usually by calling methods",
    "starterWords": [
      "wrapper"
    ],
    "id": 2
  },
  {
    "name": "Assertion",
    "letter": "A",
    "description": "Assert that the action you did had the results you expect",
    "starterWords": [
      "expect"
    ],
    "id": 3,
  },
  {
    "name": "Tear Down",
    "letter": "T",
    "description": "Clean up any resources you used in your test (this usully happens automatically)",
    "id": 4
  }

]
const keywords = [
  {
    "word": "const",
    "nextWords": [
      "mockData Name",
      "mockPropFunction"
    ],
    "value": "const ",
    "isEditable": false,
    "phase": ["S"],
    "details": "Declare a variable that cannot be reassigned",
    "id": 100
  },
  {
    "word": "mockData Name",
    "nextWords": [
      "=",
      "}"
    ],
    "value": "mock-",
    "isEditable": true,
    "phase": ["S"],
    "details": "Variable name for your mock data",
    "id": 101
  },
  {
    "word": "mockPropFunction",
    "nextWords": [
      "=",
      "}"
    ],
    "value": "mock-",
    "isEditable": true,
    "phase": ["S"],
    "details": "Name of mock function you will pass as props and/or spy on",
    "id": 102
  },
  {
    "word": "=",
    "nextWords": [
      "mockData value",
      "jest.fn()",
      "shallow",
    ],
    "value": " = ",
    "isEditable": false,
    "phase": ["S"],
    "details": "is assigned to",
    "id": 103
  },
  {
    "word": "mockData value",
    "nextWords": [
      "New Line"
    ],
    "value": "",
    "isEditable": true,
    "phase": ["S"],
    "details": "Data that your Subject Under Test needs to opperate",
    "id": 104
  },
  {
    "word": "jest.fn()",
    "nextWords": [
      "New Line"
    ],
    "value": "jest.fn();",
    "isEditable": false,
    "phase": ["S"],
    "details": "A mock function used to replace methods passed to the component as props",
    "id": 105
  },
  {
    "word": "describe",
    "nextWords": [
      "Test Name",
    ],
    "value": "describe(",
    "isEditable": false,
    "phase": ["S"],
    "details": "Keyword that will allow you to label a testing block",
    "id": 106
  },
  {
    "word": "Test Name",
    "nextWords": [
      "Arrow Function",
    ],
    "value": "-,",
    "isEditable": true,
    "phase": ["S"],
    "details": "A label for a testing block, most likely a component name or method",
    "id": 107
  },
  {
    "word": "Arrow Function",
    "nextWords": [
      "let",
      "wrapper",
      "expect"
    ],
    "value": "() => {",
    "isEditable": false,
    "phase": ["S"],
    "details": "Initializes an anonymous function and holds tesing logic",
    "id": 108
  },
  {
    "word": "let",
    "nextWords": [
      "wrapper",
    ],
    "value": "let",
    "isEditable": false,
    "phase": ["S"],
    "details": "Declare a variable that can be reassigned",
    "id": 109
  },
  {
    "word": "wrapper",
    "nextWords": [
      "=",
      ";",
      ")",
      "state("
    ],
    "value": "wrapper",
    "isEditable": false,
    "phase": ["S", "A"],
    "details": "An object that surrounds the shallow rendering of an instance",
    "id": 110
  },
  {
    "word": "beforeEach",
    "nextWords": [
      "Arrow Function",
    ],
    "value": "beforeEach(",
    "isEditable": false,
    "phase": ["S"],
    "details": "A function that will becalled at the begining of each it block",
    "id": 111
  },
  {
    "word": "shallow",
    "nextWords": [
      "React Component Name"
    ],
    "value": "shallow(",
    "isEditable": false,
    "phase": ["S"],
    "details": "A function that will return a shallow rendering of a class instance",
    "id": 112
  },
  {
    "word": "React Component Name",
    "nextWords": [
      "Prop Name",
      "/>"
    ],
    "value": "<-",
    "isEditable": true,
    "phase": ["S"],
    "details": "The name of the React compnent you are testing",
    "id": 113
  },
  {
    "word": "Prop Name",
    "nextWords": [
      "mockData Name",
      "mockPropFunction"
    ],
    "value": "-={",
    "isEditable": true,
    "phase": ["S"],
    "details": "Similar to a key, this is how you will access the prop's value in the child component",
    "id": 114
  },
  {
    "word": "}",
    "nextWords": [
      "/>"
    ],
    "value": "}",
    "isEditable": false,
    "phase": ["S"],
    "details": "Closing curly bracket",
    "id": 115
  },
  {
    "word": "/>",
    "nextWords": [
      ")"
    ],
    "value": "/>",
    "isEditable": false,
    "phase": ["S"],
    "details": "Closes a component element",
    "id": 116
  },
  {
    "word": ")",
    "nextWords": [
      ";",
      ".toMatchSnapshot()",
      ")",
      ".toEqual("
    ],
    "value": ")",
    "isEditable": false,
    "phase": ["S"],
    "details": "Closing parentheses",
    "id": 117
  },
  {
    "word": "it",
    "nextWords": [
      "Should Statement"
    ],
    "value": "it(",
    "isEditable": false,
    "phase": ["S"],
    "details": "Similar to describe, this will ititiate a new test",
    "id": 118
  },
  {
    "word": "Should Statement",
    "nextWords": [
      "Arrow Function"
    ],
    "value": "'-', ",
    "isEditable": true,
    "phase": ["S"],
    "details": "Text describing what you are testing, that will show in the terminal",
    "id": 119
  },
  {
    "word": "expect",
    "nextWords": [
      "wrapper"
    ],
    "value": "expect(",
    "isEditable": false,
    "phase": ["A"],
    "details": "Keyword that will start a line of assertion, setting the value you are testing",
    "id": 120
  },
  {
    "word": ".toMatchSnapshot()",
    "nextWords": [
      ";"
    ],
    "value": ".toMatchSnapshot()",
    "isEditable": false,
    "phase": ["A"],
    "details": "Compares the wrapper instance to a stored snapshot",
    "id": 121
  },
  {
    "word": "state(",
    "nextWords": [
      ")",
      "stateKey"
    ],
    "value": ".state(",
    "isEditable": false,
    "phase": ["A"],
    "details": "A method of wrapper that will return that wrapper's state object, or a single piece of state",
    "id": 122
  },
  {
    "word": "stateKey",
    "nextWords": [
      ")"
    ],
    "value": "'-'",
    "isEditable": true,
    "phase": ["A"],
    "details": "An optional argument of the .state() method that returns that specific piece of state",
    "id": 123
  },
  {
    "word": ".toEqual(",
    "nextWords": [
      "mockStateObject",
      "mockStateValue"
    ],
    "value": ".toEqual(",
    "isEditable": false,
    "phase": ["A"],
    "details": "A method of expect that compares expect's argument to the argument of .toEqual()",
    "id": 124
  },
  {
    "word": "mockStateObject",
    "nextWords": [
      ")"
    ],
    "value": "{-}",
    "isEditable": true,
    "phase": ["A"],
    "details": "A full copy of a components state, in object form, with the desired values changed",
    "id": 125
  },
  {
    "word": "mockStateValue",
    "nextWords": [
      ")"
    ],
    "value": "-",
    "isEditable": true,
    "phase": ["A"],
    "details": "The data, either primative or complex, that you are evaluating the wrapper against",
    "id": 126
  },
  {
    "word": "New Line",
    "nextWords": [
      ")"
    ],
    "value": "\n",
    "isEditable": false,
    "phase": ["S", "E", "A", "T"],
    "details": "Start a new line of testing",
    "id": 127
  },
  {
    "word": ";",
    "nextWords": [
      "New Line"
    ],
    "value": ";",
    "isEditable": false,
    "phase": ["S", "E", "A", "T"],
    "details": "Punctuation for ending complete code statements",
    "id": 128
  }
]

module.exports = {
  stages,
  keywords
};