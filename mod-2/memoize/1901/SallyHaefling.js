const reactTrivia = [
  {
    subject: "JSX",
    question: "JSX represents objects called what?",
    answer: "React elements",
    correct: false,
    id: 1
  },
  {
    subject: "JSX",
    question: "JSX is a combination of these two languages",
    answer: "HTML and JavaScript",
    correct: false,
    id: 2
  },
  {
    subject: "JSX",
    question: "Where is JSX located inside of a component? Hint: it starts with an R",
    answer: "Return",
    correct: false,
    id: 3
  },
  {
    subject: "Rendering elements",
    question: "When rendering an element into the DOM, what is it called when we use something like <div>?",
    answer: "Root DOM node",
    correct: false,
    id: 4
  },
  {
    subject: "Rendering elements",
    question: "Are React elements mutable or immutable?",
    answer: "Immutable",
    correct: false,
    id: 5
  },
  {
    subject: "Components and props",
    question: "Most components can be customized when they are created, with different parameters. What are these creation parameters called?",
    answer: "Props",
    correct: false,
    id: 6
  },
  {
    subject: "Components and props",
    question: "Whether you declare a component as a function or a class, it must never modify its own what?",
    answer: "Props",
    correct: false,
    id: 7
  },
  {
    subject: "State and lifecycle",
    question: "We use this when we want to change something inside of a component",
    answer: "State",
    correct: false,
    id: 8
  },
  {
    subject: "State and lifecycle",
    question: "This method runs after the component output has been rendered to the DOM",
    answer: "componentDidMount",
    correct: false,
    id: 9
  },
  {
    subject: "State and lifecycle",
    question: "Where do you assign this.state?",
    answer: "Constructor",
    correct: false,
    id: 10
  },
  {
    subject: "State and lifecycle",
    question: "We use this method to modify state because we cannot modify state directly",
    answer: "this.setState",
    correct: false,
    id: 11
  },
  {
    subject: "State and lifecycle",
    question: "A component may choose to pass its state down as props to its child components, what is this passing down referred to?",
    answer: "Data down",
    correct: false,
    id: 12
  },
  {
    subject: "Handling events",
    question: "React events are named using what rather than lowercase?",
    answer: "camelCase",
    correct: false,
    id: 13
  },
  {
    subject: "Handling events",
    question: "In JavaScript, class methods are not bound by default. If you forget to bind this.handleClick and pass it to onClick, the value of this will be what when the function is actually called?",
    answer: "Undefined",
    correct: false,
    id: 14
  },
  {
    subject: "Conditional rendering",
    question: "You can use what to store elements? This can help you conditionally render a part of the component while the rest of the output doesnt change",
    answer: "Variables",
    correct: false,
    id: 15
  },
  {
    subject: "Lists and keys",
    question: "These help React identify which items have changed, are added, or are removed. These should be given to the elements inside the array to give the elements a stable identity",
    answer: "Keys",
    correct: false,
    id: 16
  },
  {
    subject: "Lists and keys",
    question: "The best way to pick a key is to use a string that uniquely identifies a list item among its siblings. Most often you would use what from your data as keys?",
    answer: "IDs",
    correct: false,
    id: 17
  },
  {
    subject: "Lists and keys",
    question: "When you dont have stable IDs for rendered items, you may use the items what as a key as a last resort?",
    answer: "Index",
    correct: false,
    id: 18
  },
  {
    subject: "Testing with Jest and Enzyme",
    question: "What allows us to write some text that explains the nature of the group of tests conducted within it? This is part of the setup phase on our tests",
    answer: "Describe",
    correct: false,
    id: 19
  },
  {
    subject: "Testing with Jest and Enzyme",
    question: "What allows us to write some text describing what a test should successfully achieve",
    answer: "It",
    correct: false,
    id: 20
  },
  {
    subject: "Testing with Jest and Enzyme",
    question: "Here we carry out the test itself through assertion. What method carries a result of a function?",
    answer: "Expect",
    correct: false,
    id: 21
  },
  {
    subject: "Testing with Jest and Enzyme",
    question: "This takes a boolean valued function and always expects that return value to be true, hence the name expect. In the event that false is returned, the test fails and execution stops within the corresponding it() or test() block",
    answer: "Assertion",
    correct: false,
    id: 22
  },
  {
    subject: "Testing with Jest and Enzyme",
    question: "Make sure this file is included before using Enzyme",
    answer: "setupTest.js",
    correct: false,
    id: 23
  },
  {
    subject: "Testing with Jest and Enzyme",
    question: "The simulate function simulates what for us?",
    answer: "Events",
    correct: false,
    id: 24
  },
  {
    subject: "Testing with Jest and Enzyme",
    question: "This kind of testing helps you check that the rendered output of a component is correct at all times",
    answer: "Snapshot",
    correct: false,
    id: 25
  },
  {
    subject: "Testing with Jest and Enzyme",
    question: "These render tests are useful to keep yourself constrained to testing the component as a unit and avoiding indirectly testing the behavior of child components",
    answer: "Shallow",
    correct: false,
    id: 26
  },
  {
    subject: "Fundamentals",
    question: "In OOP we break our code out into modular classes. In React, we call these what?",
    answer: "Components",
    correct: false,
    id: 27
  },
  {
    subject: "Fundamentals",
    question: "In JSX, what do we call a class? Hint: it is camelCase",
    answer: "className",
    correct: false,
    id: 28
  },
  {
    subject: "Fundamentals",
    question: "What do our class components extend?",
    answer: "Component",
    correct: false,
    id: 29
  },
  {
    subject: "Fundamentals",
    question: "If a component has nothing but the render method, then it is a great candidate for refactoring into what kind of component?",
    answer: "Functional",
    correct: false,
    id: 30
  },
  {
    subject: "Fundamentals",
    question: "Components in React should follow what responsibility principle which helps keep our code modular and dry?",
    answer: "Single",
    correct: false,
    id: 31
  },
  {
    subject: "Fundamentals",
    question: "React creates an in memory data structure cache, computes the resulting differences, and then updates the browsers displayed DOM efficiently. This is referrred to as what kind of DOM?",
    answer: "Virtual",
    correct: false,
    id: 32
  }
]
module.exports = {
  reactTrivia
}