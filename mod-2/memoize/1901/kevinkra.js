const TopicReact = [
  {
    id: 1,
    question: "What is JSX?",
    answer: "A JavaScript extension that imitates HTML",
    understood: false,
    reference: "https://reactjs.org/docs/introducing-jsx.html",
    timesPassed: 0,
    flagged: false
  },
  {
    id: 2,
    question: "What is Babel?",
    answer:
      "A compiler that converts ES6+ JavaScript code into a backwards compatible format for older environments.",
    understood: false,
    reference: "https://babeljs.io/docs/en/",
    timesPassed: 0,
    flagged: false
  },
  {
    id: 3,
    question: "How is Babel used in the React environment?",
    answer:
      "Babel converts JSX into 'React.createElement()' calls, which are then interpreted by React and converted into element objects that are displayed on the DOM.",
    understood: false,
    reference: "https://reactjs.org/docs/introducing-jsx.html",
    timesPassed: 0,
    flagged: false
  },
  {
    id: 4,
    question: "What is an expression?",
    answer:
      "An expression is any valid unit of code that resolves into a value.",
    understood: false,
    reference:
      "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Expressions",
    timesPassed: 0,
    flagged: false
  },
  {
    id: 5,
    question: "What is an example of a JSX expression",
    answer:
      "A variable 'user' has been declared elsewhere and is passed into the JSX element. By wrapping it in curly braces we signify to React that we are passing in a JavaScript expression.",
    example: "<p>Hello, {user}</p>",
    understood: false,
    reference: "https://reactjs.org/docs/introducing-jsx.html",
    timesPassed: 0,
    flagged: false
  },
  {
    id: 6,
    question: "Can JSX also be considered an expression?",
    answer:
      "Yes! Once your code has been compiled by Babel the JSX expressions become JavaScript function calls and evaluate to JavaScript objects.",
    understood: false,
    reference: "https://reactjs.org/docs/introducing-jsx.html",
    timesPassed: 0,
    flagged: false
  },
  {
    id: 7,
    question:
      "Why does JSX use the camelCase naming convention instead of the HTML format for declaring attributes?",
    answer:
      "The design decision to use the camelCase naming convention was made simply because JSX is closer to JavaScript than HTML.",
    example:
      "HTML: <div class='main-section'></div>; JSX: <div className='main-section'></div>",
    understood: false,
    reference: "https://reactjs.org/docs/introducing-jsx.html",
    timesPassed: 0,
    flagged: false
  },
  {
    id: 8,
    question:
      "What is the smallest building block of React, what is an example?",
    answer:
      "React elements are the smallest building blocks in React. An element describes what you want to see displayed on the screen and unlike DOM elements, React elements are plain objects that are cheap to create. React DOM handles the updating of the DOM to match your React elements.",
    example: "const element = <h1>Hello World</h1>",
    understood: false,
    reference: "https://reactjs.org/docs/rendering-elements.html",
    timesPassed: 0,
    flagged: false
  },
  {
    id: 9,
    question: "Where is a React application mounted on the DOM?",
    answer:
      "Somewhere in your HTML file there should be a div element, with an `id=root` attribute. Everything inside this root DOM node will be managed by React DOM. It's worth noting, that while applications built only with React usually have a single root DOM node, if you're integrating React into an application you can have as many root nodes as you like.",
    example: "<div id='root'></div>",
    understood: false,
    reference: "https://reactjs.org/docs/rendering-elements.html",
    timesPassed: 0,
    flagged: false
  },
  {
    id: 10,
    question:
      "What does it mean that React elements are immutable and how is this resolved?",
    answer:
      "React elements serve simply as a snapshot of the UI at a specific point in time. You cannot change the element object, its attributes, or its children. However, you can re-render the element on the DOM. This can be done by updating the element and passing it into ReactDOM's render method.",
    example: "ReactDOM.render(<App />, document.getElementById('root'));",
    understood: false,
    reference: "https://reactjs.org/docs/rendering-elements.html",
    timesPassed: 0,
    flagged: false
  },
  {
    id: 11,
    question: "React only updates what's necessary, what does that mean?",
    answer:
      "React DOM compares the newly passed in element object against the one previously rendered and only updates the parts needed to bring the DOM to the new desired state.",
    understood: false,
    reference: "https://reactjs.org/docs/rendering-elements.html",
    timesPassed: 0,
    flagged: false
  },
  {
    id: 12,
    question: "What is the design concept behind components in React?",
    answer:
      "Components are designed to be independent and reusable pieces of JavaScript that by design allow for a dynamic and flexible UI. They accept arbitrary inputs called 'props' and return React elements describing what should be rendered on the screen.",
    understood: false,
    reference: "https://reactjs.org/docs/components-and-props.html",
    timesPassed: 0,
    flagged: false
  },
  {
    id: 13,
    question: "What are props?",
    answer:
      "props, which stands for properties, is an object argument with data that is passed into and utilized by React components.",
    reference: "https://reactjs.org/docs/components-and-props.html",
    timesPassed: 0,
    flagged: false
  },
  {
    id: 14,
    question:
      "What are the two approaches to building a component and unique aspects for each?",
    answer:
      "Components can either be Functional components or Class components. Functional components are limited and simple, they accept a 'props' object argument and simply handle the object. Class components can hold local state and methods allowing them to not only modify data passing through via 'props', but create and modify new data as well.",
    understood: false,
    reference: "https://reactjs.org/docs/components-and-props.html",
    timesPassed: 0,
    flagged: false
  },
  {
    id: 15,
    question:
      "How does React determine whether a component is a DOM tag or a user created composite component?",
    answer:
      "element types written in PascalCase (an identifier starting with a capital letter) are interpreted by React and compiled into createElement calls as a component, as opposed to lowercase components like <div> that are passed as strings into the createElement call.",
    understood: false,
    reference:
      "https://reactjs.org/docs/jsx-in-depth.html#user-defined-components-must-be-capitalized",
    timesPassed: 0,
    flagged: false
  },
  {
    id: 16,
    question: "What does it mean to compose components?",
    answer:
      "Components can refer to other components in their output, for example you could have a '<NavBar />' component that is composed of child '<Button />', <Login />', and '<Dialog />' components.",
    understood: false,
    reference: "https://reactjs.org/docs/components-and-props.html",
    timesPassed: 0,
    flagged: false
  },
  {
    id: 17,
    question: "What does it mean to extract components?",
    answer:
      "Extracting components is a term used when parts of a component can be reconfigured as a child component. For example, changing a button inside a '<Form />' component into a component itself, and then inserting said (now) '<Button />' as a component back into '<Form />'.",
    understood: false,
    reference: "",
    timesPassed: 0,
    flagged: false
  },
  {
    id: 18,
    question: "Why must Props be Read-Only, what does this mean?",
    answer:
      "A component, whether declared as a function or a class, must never modify its own props. Any function manipulating data passed in as props must be a pure function so as it does not modify the prop data itself, rather only creates an pure output. This is because props may need to be referenced in other components and if the prop data is mutated or changed in one component, it may cause issues in another component that is relying on working that original component's prop data.",
    understood: false,
    reference: "",
    timesPassed: 0,
    flagged: false
  },
  {
    id: 19,
    question:
      "What does React do when it detects an element representing a user-defined component?",
    answer:
      "It passes the JSX attributes into the component as a single object, called 'props'.",
    understood: false,
    reference: "https://reactjs.org/docs/components-and-props.html",
    timesPassed: 0,
    flagged: false
  },
  {
    id: 20,
    question:
      "What are the terms for adding and removing rendering and removing components on the DOM and what is the value of this approach?",
    answer:
      "Mounting and unmounting are the respective names for adding and removing a component from the DOM. These 'Lifecycle methods' are important because they allow developers to add content and then remove it once its purpose is fulfilled ultimately freeing the up the memory previously being used by the component.",
    understood: false,
    reference: "https://reactjs.org/docs/state-and-lifecycle.html",
    timesPassed: 0,
    flagged: false
  },
  {
    id: 21,
    question:
      "What lifecycle methods are used for adding and removing components after their output has been rendered on the DOM?",
    answer:
      "'componentDidMount() {...}' is used upon render and 'componentWillUnmount() {...}' tears down the rendered component.",
    understood: false,
    reference: "https://reactjs.org/docs/state-and-lifecycle.html",
    timesPassed: 0,
    flagged: false
  },
  {
    id: 22,
    question: "What are the main differences between state and props?",
    answer:
      "props are designed to be pass data and methods in a unidirectional flow across the application. In contrast, state exists only where it was locally created and cannot be passed down. However, state can be mutated by methods passed into child components by props.",
    understood: false,
    reference: "https://reactjs.org/docs/state-and-lifecycle.html",
    timesPassed: 0,
    flagged: false
  },
  {
    id: 23,
    question:
      "What method must be called in order to update and re-render state on the DOM?",
    answer:
      "'this.setState();' updates the state of the component and calls the render method of the class component.",
    understood: false,
    reference: "https://reactjs.org/docs/state-and-lifecycle.html",
    timesPassed: 0,
    flagged: false
  },
  {
    id: 24,
    question:
      "Can you update a class's local state directly without using the setState method?",
    answer:
      "No, setState not only updates the state of the component but also invokes the render method that updates the DOM.",
    understood: false,
    reference: "https://reactjs.org/docs/state-and-lifecycle.html",
    timesPassed: 0,
    flagged: false
  },
  {
    id: 25,
    question:
      "state updates can be asynchronous, what issues could this cause?",
    answer:
      "Because both state and props may update asynchronously they should not be relied on to update the value of a components state. The method setState() has a second format that accepts a function rather than an object. That function will receive the previous state as the first argument and the props at the time the update is applied as the second argument",
    understood: false,
    reference: "https://reactjs.org/docs/state-and-lifecycle.html",
    timesPassed: 0,
    flagged: false
  },
  {
    id: 26,
    question:
      "In what case are React events, composite components, and DOM attributes written?",
    answer:
      "React events and DOM attributes are in camelCase: 'onClick={logUserIn}', composite components are written in PascalCase: '<LogOut />', ",
    understood: false,
    reference: "https://reactjs.org/docs/dom-elements.html",
    timesPassed: 0,
    flagged: false
  },
  {
    id: 27,
    question: "What is conditional rendering?",
    answer:
      "Creating components that encapuslate desired behaviors, but only rendering them once all the conditions are met.",
    understood: false,
    reference: "https://reactjs.org/docs/conditional-rendering.html",
    timesPassed: 0,
    flagged: false
  },
  {
    id: 28,
    question: "What are keys and what is their purpose?",
    answer:
      "Keys are a unique string attribute that allow React to more efficiently re-render mutated data on the DOM. By having unique keys on every element of an array, when the structure is change or modified, React can rearrange the new output without having to tear down the original structure and rebuild it.",
    understood: false,
    reference: "https://reactjs.org/docs/lists-and-keys.html",
    timesPassed: 0,
    flagged: false
  },
  {
    id: 29,
    question: "Should you use the index position of an array as the key value?",
    answer:
      "No, index positions are not stable IDs and will result in negative performance. If no explicit key exists on the list items then React will default to using indexes as keys.",
    understood: false,
    reference: "https://reactjs.org/docs/lists-and-keys.html",
    timesPassed: 0,
    flagged: false
  },
  {
    id: 30,
    question: "What is an important aspect to extracting Components with keys?",
    answer:
      "When you extract a component you should keep the key on the component element itself.",
    understood: false,
    reference: "https://reactjs.org/docs/lists-and-keys.html",
    timesPassed: 0,
    flagged: false
  }
];

module.exports = {
  TopicReact
};
