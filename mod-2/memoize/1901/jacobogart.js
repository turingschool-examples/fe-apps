const keywords = [
  {
    "word": "const",
    "nextWords": [
      "mockData",
      "mockPropFunction"
    ],
    "value": "const",
    "isEditatble": false,
    "phase": ["S"]
  },
  {
    "word": "mockData",
    "nextWords": [
      "=",
      "}"
    ],
    "value": "mock-",
    "isEditatble": true,
    "phase": ["S"]
  },
  {
    "word": "mockPropFunction",
    "nextWords": [
      "=",
      "}"
    ],
    "value": "mock-",
    "isEditatble": true,
    "phase": ["S"]
  },
  {
    "word": "=",
    "nextWords": [
      "mockData value",
      "jest.fn()",
      "shallow",
    ],
    "value": "=",
    "isEditatble": false,
    "phase": ["S"]
  }, 
  {
    "word": "mockData value",
    "nextWords": [
      "",
      ""
    ],
    "value": "-;",
    "isEditatble": true,
    "phase": ["S"]
  }, 
  {
    "word": "jest.fn()",
    "nextWords": [
      "",
      ""
    ],
    "value": "jest.fn();",
    "isEditatble": false,
    "phase": ["S"]
  },
  {
    "word": "describe",
    "nextWords": [
      "Test Name",
      ""
    ],
    "value": "Describe(",
    "isEditatble": false,
    "phase": ["S"]
  },
  {
    "word": "Test Name",
    "nextWords": [
      "Arrow Function",
      ""
    ],
    "value": "-,",
    "isEditatble": true,
    "phase": ["S"]
  },
  {
    "word": "Arrow Function",
    "nextWords": [
      "let",
      "wrapper",
      "expect"
    ],
    "value": "() => {",
    "isEditatble": false,
    "phase": ["S"]
  },
  {
    "word": "let",
    "nextWords": [
      "wrapper",
      ""
    ],
    "value": "let",
    "isEditatble": false,
    "phase": ["S"]
  },
  {
    "word": "wrapper",
    "nextWords": [
      "=",
      ";",
      ")",
      ".state()"
    ],
    "value": "wrapper",
    "isEditatble": false,
    "phase": ["S", "A"]
  },
  {
    "word": "beforeEach",
    "nextWords": [
      "Arrow Function",
      ""
    ],
    "value": "beforeEach(",
    "isEditatble": false,
    "phase": ["S"]
  },
  {
    "word": "shallow",
    "nextWords": [
      "React Component Name",
      ""
    ],
    "value": "shallow(",
    "isEditatble": false,
    "phase": ["S"]
  },
  {
    "word": "React Component Name",
    "nextWords": [
      "Prop Name",
      ""
    ],
    "value": "<-",
    "isEditatble": true,
    "phase": ["S"]
  },
  {
    "word": "Prop Name",
    "nextWords": [
      "mockData",
      "mockPropFunction"
    ],
    "value": "-={",
    "isEditatble": true,
    "phase": ["S"]
  },
  {
    "word": "}",
    "nextWords": [
      "/>"
    ],
    "value": "}",
    "isEditatble": false,
    "phase": ["S"]
  },
  {
    "word": "/>",
    "nextWords": [
      ")"
    ],
    "value": "/>",
    "isEditatble": false,
    "phase": ["S"]
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
    "isEditatble": false,
    "phase": ["S"]
  },
  {
    "word": "it",
    "nextWords": [
      "Should Statement"
    ],
    "value": "it(",
    "isEditatble": false,
    "phase": ["S"]
  },
  {
    "word": "Should Statement",
    "nextWords": [
      "Arrow Function"
    ],
    "value": "'-', ",
    "isEditatble": true,
    "phase": ["S"]
  },
  {
    "word": "expect",
    "nextWords": [
      "wrapper"
    ],
    "value": "expect(",
    "isEditatble": false,
    "phase": ["A"]
  },
  {
    "word": ".toMatchSnapshot()",
    "nextWords": [
      ";"
    ],
    "value": ".toMatchSnapshot()",
    "isEditatble": false,
    "phase": ["A"]
  },
  {
    "word": ".state(",
    "nextWords": [
      ")",
      "stateKey"
    ],
    "value": ".state(",
    "isEditatble": false,
    "phase": ["A"]
  },
  {
    "word": "stateKey",
    "nextWords": [
      ")"
    ],
    "value": "'-'",
    "isEditatble": true,
    "phase": ["A"]
  },
  {
    "word": ".toEqual(",
    "nextWords": [
      "mockStateObject",
      "mockStateValue"
    ],
    "value": ".toEqual(",
    "isEditatble": false,
    "phase": ["A"]
  },
  {
    "word": "mockStateObject",
    "nextWords": [
      ")"
    ],
    "value": "{-}",
    "isEditatble": true,
    "phase": ["A"]
  },
  {
    "word": "mockStateValue",
    "nextWords": [
      ")"
    ],
    "value": "-",
    "isEditatble": true,
    "phase": ["A"]
  }
]

export default keywords;