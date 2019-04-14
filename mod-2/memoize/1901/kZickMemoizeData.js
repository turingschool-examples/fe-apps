const flashCards = [
  {
    "categoryId": 1,
    "cardNumber": 101,
    "term": "React",
    "definition": "A client-side JavaScript framework that allows you to easily and efficiently manipulate the DOM based on application data and how it changes in response to user interaction"
  },
  {
    "categoryId": 1,
    "cardNumber": 102,
    "term": "The Virtual DOM",
    "definition": "An in-memory object that represents a DOM structure and can be manipulated with JavaScript before updating the real DOM"
  },
  {
    "categoryId": 1,
    "cardNumber": 103,
    "term": "JSX",
    "definition": "A mix of JavaScript and XML that facilitates rendering the appropriate HTML, lives inside a component"
  },
  {
    "categoryId": 1,
    "cardNumber": 104,
    "term": "Component",
    "definition": "Reusable pieces of code that represent templates for a particular instance of a UI element. They are either functions or an extended ES6 class"
  },
  {
    "categoryId": 1,
    "cardNumber": 105,
    "term": "Functional Component",
    "definition": "Components that simply need to render content to the DOM, and do not need to be aware of any application data that might be changing. They are sometimes called 'dumb' components and are stateless."
  },
  {
    "categoryId": 1,
    "cardNumber": 106,
    "term": "Class Component",
    "definition": "ES6 classes that extend an abstract 'Component' class,given to us by default by React to give more functionality to a component.  They each have a render method that allows us to specify what should be rendered to the DOM, and they keep track of some sort of application data."
  },
  {
    "categoryId": 1,
    "cardNumber": 107,
    "term": "Props",
    "definition": "allow us to pass information from parent components to child components. We can pass strings, numbers, booleans, arrays, objects, functions, pretty much any piece of data we want access to in our child component."
  },
  {
    "categoryId": 1,
    "cardNumber": 108,
    "term": "State",
    "definition": "Holds data that represents the actual state of our application, can be changed and mutated through user interactions. The current data stored in relation to a particular part of a computer program."
  },
  {
    "categoryId": 1,
    "cardNumber": 109,
    "term": "Stateful Component",
    "definition": "A class component which stores and updates the information which it uses to render HTML (using state)."
  },
  {
    "categoryId": 1,
    "cardNumber": 110,
    "term": "Lifecycle",
    "definition": "The process where a component is created, updated and destroyed."
  },
  {
    "categoryId": 1,
    "cardNumber": 111,
    "term": "Lifecycle Method",
    "definition": "A function that is invoked at some point during a component’s lifecycle."
  },
  {
    "categoryId": 1,
    "cardNumber": 112,
    "term": "componentDidMount",
    "definition": "A lifecycle method that will be invoked after a component finishes rendering.  A good place to fetch or load data that a component's state might need."
  },
  {
    "categoryId": 1,
    "cardNumber": 113,
    "term": "Conditional Rendering",
    "definition": "Part of the user interface which is only displayed if some condition is met, hiding or showing UI elements based on information in state or passed in as props."
  },
  {
    "categoryId": 1,
    "cardNumber": 114,
    "term": "Data Down, Actions Up",
    "definition": "Data in the form of props is sent down from a parent to child component, and the child can use an inherited method to alert the parent of any changes/actions."
  },
  {
    "categoryId": 1,
    "cardNumber": 115,
    "term": "Data Down",
    "definition": "Props that can be anything from state to methods, are passed down so they are accessible to child components."
  },
  {
    "categoryId": 1,
    "cardNumber": 116,
    "term": "Actions Up",
    "definition": "The parent component will pass the child a callback function as a prop. The child would then call the function to communicate with its parent, usually in response to a user interaction/event."
  },
  {
    "categoryId": 1,
    "cardNumber": 117,
    "term": "create-react-app",
    "definition": "An officially supported way to create single-page React applications. It offers a modern build setup with no configuration."
  },
  {
    "categoryId": 2,
    "cardNumber": 201,
    "term": "SUT",
    "definition": "Subject Under Test"
  },
  {
    "categoryId": 2,
    "cardNumber": 202,
    "term": "SRP",
    "definition": "Single Responsibility Principal: Each object/class/module/function should have a single, focused duty, and should know only as much information as it needs to perform it. This creates fewer dependencies and prevents bugs from creeping into our codebase"
  },
  {
    "categoryId": 2,
    "cardNumber": 203,
    "term": "Four Phases of a Test",
    "definition": "Setup, Execution, Assertion, Tear Down"
  },
  {
    "categoryId": 2,
    "cardNumber": 204,
    "term": "Jest",
    "definition": "A node-based test runner allowing fast parallel running of tests in a node environment.  It automatically finds tests in your codebase, mocks React dependencies, and runs your tests with fake DOM implementation"
  },
  {
    "categoryId": 2,
    "cardNumber": 205,
    "term": "Enzyme",
    "definition": "A JavaScript Testing utility for React that makes it easier to test your React Components' output.  It allows test files to be more readable and provides us with helper methods for testing common pieces of functionality."
  },
  {
    "categoryId": 2,
    "cardNumber": 206,
    "term": "3 to Test on a Component",
    "definition": "What gets rendered, State Changes, Event Handlers"
  },
  {
    "categoryId": 2,
    "cardNumber": 207,
    "term": "Snapshot Test",
    "definition": "What allows us to test the rendered output of our component."
  },
  {
    "categoryId": 2,
    "cardNumber": 208,
    "term": "shallow()",
    "definition": "A helper function imported from Enzyme that allows us to create a shallow render to represent the output of our component."
  },
  {
    "categoryId": 2,
    "cardNumber": 209,
    "term": "Shallow Render",
    "definition": "Basic representation of the rendered output for our component."
  },
  {
    "categoryId": 2,
    "cardNumber": 210,
    "term": "wrapper",
    "definition": "Created with the shallow render method from Enzyme, gives us the 'wrapper' variable to refer to in place of our component test subject"
  },
  {
    "categoryId": 2,
    "cardNumber": 211,
    "term": ".state()",
    "definition": "A handy method from Enzyme that allows us to access the state of our component."
  },
  {
    "categoryId": 2,
    "cardNumber": 212,
    "term": "jest.fn()",
    "definition": "Allows us to assert that a function has been called without having to worry about the logic inside of them."
  },
  {
    "categoryId": 2,
    "cardNumber": 213,
    "term": ".find(selector)",
    "definition": "Finds every node in the render tree of the current wrapper that matches the provided selector."
  },
  {
    "categoryId": 2,
    "cardNumber": 214,
    "term": ".simulate()",
    "definition": "Simulates an event on an element by passing the event name string in as an argument."
  }
]

const categories = [
  { "id": 1, "name": "React" },
  { "id": 2, "name": "React Testing" }
];


module.exports = {
  flashCards,
  categories
}