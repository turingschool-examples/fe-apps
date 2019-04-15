const reactTerms = [
  {
    "id": 1,
    "term": "Single-page Application",
    "fakeAnswers": ["Webpack", "Responsive Website"],
    "definition": "An application that loads a single HTML page and all the necessary assets (such as JavaScript and CSS) required for the app to run. Any interactions don't require a trip to server/page reload.",
    "example": "./images/example{exampleId}.png"
  }, {
    "id": 2,
    "term": "Compilers",
    "fakeAnswers": ["Bundlers", "Package Managers"],
    "definition": "These things take JavaScript code, transform it, and return it as JavaScript code in a different format.",
    "example": "Babel is a popular example, and is most commonly used for React and transforms ES6 syntax into syntax that older browsers can interpret."
  }, {
    "id": 3,
    "term": "Bundlers",
    "fakeAnswers": ["Compilers", "Package Managers"],
    "definition": "These take JavaScript and CSS code written as separate modules (often hundreds of them), and combine them together into a few files better optimized for browsers.",
    "example": "Webpack and Browserify are two examples of this that are commonly used in React applications."
  }, {
    "id": 4,
    "term": "Package Managers",
    "fakeAnswers": ["Bundlers", "Compilers"],
    "definition": "These are tools that allow you to manage dependencies in your project.",
    "example": "npm and Yarn are two of these that are commonly used in React applications."
  }, {
    "id": 5,
    "term": "CDN",
    "fakeAnswers": ["Internet", "Http"],
    "definition": "The acronym for a system of distributed servers that deliver pages/Web content to a user based on the geo locations, webpage origin, and the content delivery server.",
    "example": "Akamai, Amazon CloudFront, CacheFly are examples of these."
  }, {
    "id": 6,
    "term": "JSX",
    "fakeAnswers": ["XML", "Html"],
    "definition": "A syntax extension to JavaScript used in React with the full power of JS. It gets compiled to React.createElement() calls which return plain JS objects called 'React elements'.",
    "example": "./images/example{exampleId}.png"
  }, {
    "id": 7,
    "term": "Elements",
    "fakeAnswers": ["Components", "Props"],
    "definition": "The building blocks of React applications. They describe what you want to see on the screen, and in react they are immutable.",
    "example": "./images/example{exampleId}.png"
  }, {
    "id": 8,
    "term": "Components",
    "fakeAnswers": ["State properties", "Props"],
    "definition": "Small, reusable pieces of code that return a React element to be rendered to the page. The simplest version is a plain JavaScript function that returns a React element",
    "example": "./images/example{exampleId}.png"
  }, {
    "id": 9,
    "term": "Props",
    "fakeAnswers": ["State", "Attributes"],
    "definition": "Inputs to a React component. They are data passed down from a parent component to a child component.",
    "example": "./images/example{exampleId}.png"
  }, {
    "id": 10,
    "term": "props.children",
    "fakeAnswers": ["State properties", "Props"],
    "definition": "These give us the ability to receive and render child elements that are passed to reusable components from the component that renders them.",
    "example": "./images/example{exampleId}.png"
  }, {
    "id": 11,
    "term": "State",
    "fakeAnswers": ["Attributes", "Props"],
    "definition": "This is a kind of data needed for a component when it will change over time that is managed by the component itself. For example, a Checkbox component might need something like isChecked.",
    "example": "./images/example{exampleId}.png"
  }, {
    "id": 12,
    "term": "Lifecycle Methods",
    "fakeAnswers": ["Methods", "Factories"],
    "definition": "These are React functions that are used to execute functionality throughout different phases of a component.",
    "example": "componentDidMount(), componentWillMount(), componentDidUpdate()"
  }, {
    "id": 13,
    "term": "Controlled Component",
    "fakeAnswers": ["Uncontrolled Component", "Class Component"],
    "definition": "This is an input form that when a user enters data into it, a change event handler is triggered and your code decides whether the input is valid (by re-rendering w/ it). If you don't re-render, the form element won't change.",
    "example": "./images/example{exampleId}.png"
  }, {
    "id": 14,
    "term": "Uncontrolled Component",
    "fakeAnswers": ["Controlled Component", "Class Component"],
    "definition": "This works like regular form elements do. When a user inputs data into a form field, the updated info is reflected without React needing to do anything. However, this also means that you can’t force the field to have a certain value.",
    "example": "./images/example{exampleId}.png"
  }, {
    "id": 15,
    "term": "Keys",
    "fakeAnswers": ["State", "Props"],
    "definition": "This is a special string attribute you need to include when creating arrays of elements. It helps React identify which items were changed, added, or removed, and should be given to the elements inside an array to give them a stable identity.",
    "example": ""
  }, {
    "id": 16,
    "term": "Refs",
    "fakeAnswers": ["Keys", "Props"],
    "definition": "It's a special attribute you can attach to any component. When it's a callback function, it receives the underlying DOM element or class instance as its argument. This allows you direct access to the DOM element or component instance.",
    "example": ""
  }, {
    "id": 17,
    "term": "Event Listeners",
    "fakeAnswers": ["Functions", "Properties"],
    "definition": "These are something commonly used across JavaScript to handle user interactions, but they have syntactic differences in React e.g. named w/ camelCase rather than lowercase, and with JSX passing a function rather than a string.",
    "example": "./images/example{exampleId}.png"
  }, {
    "id": 18,
    "term": "Reconciliation",
    "fakeAnswers": ["Recreation", "Navigation"],
    "definition": "A process in React where when a component’s props or state change, and React decides whether a DOM update is necessary by comparing the newly returned element with the previously rendered one. When different, React will update the DOM.",
    "example": ""
  }, {
    "id": 19,
    "term": "Factories",
    "fakeAnswers": ["Callbacks", "Lifecycle Methods"],
    "definition": "These are built-in shortcuts in Reactfor creating commonly used HTML element nodes, and work by generating a ReactElement with a particular type property.",
    "example": "./images/example{exampleId}.png"
  }, {
    "id": 20,
    "term": "Screen Component",
    "fakeAnswers": ["Functional Component", "Class Component"],
    "definition": "This is a type of component we use in our route configuration with special props.  It allows us to set up what appears as different 'pages' in our application.",
    "example": "./images/example{exampleId}.png"
  }, {
    "id": 21,
    "term": "Navigation Prop",
    "fakeAnswers": ["Lifecycle Method", "Screen Prop"],
    "definition": "This is passed into all screens, and it can be used for managing the different routes we may have in a React application.",
    "example": "./images/example{exampleId}.png"
  }, {
    "id": 22,
    "term": "Navigation State",
    "fakeAnswers": ["Index", "Screen State"],
    "definition": "This is a type of state that manages what route is active and what content is displayed to the user (e.g. different tabs, or cards in a stack).",
    "example": "./images/example{exampleId}.png"
  }, {
    "id": 23,
    "term": "Route",
    "fakeAnswers": ["Screen", "Navigator"],
    "definition": "Each of these is a piece of navigation state which contains a key to identify it, and a specific naming convention to designate the type. It can also contain arbitrary params.",
    "example": "./images/example{exampleId}.png"
  }, {
    "id": 24,
    "term": "Navigator",
    "fakeAnswers": ["Screen", "Route"],
    "definition": "This is any React component that has a router on it to define the user navigation behavior, e.g. to enable tab nav, drawer nav (slide up), stack nav (sliding across, moving through a hierarchy) and deep linking.",
    "example": "./images/example{exampleId}.png"
  }, {
    "id": 25,
    "term": "setState()",
    "fakeAnswers": ["componentDidMount()", "constructor()"],
    "definition": "A react method used to update a component state property.",
    "example": ""
  }, {
    "id": 26,
    "term": "componentDidMount()",
    "fakeAnswers": ["componentWillMount()", "componentWillUpdate()"],
    "definition": "A react lifecycle method used to do all the setup you couldn't do without a DOM.  Typically used to load your data, and also do things you couldn't before there was a component and DOM to play with.  Can call setState.",
    "example": ""
  }, {
    "id": 27,
    "term": "componentWillMount()",
    "fakeAnswers": ["componentDidMount()", "componentWillUpdate()"],
    "definition": "One of the react lifecycle methods that is called only one time before the initial render.  It can be tricky because there's nothing to play with yet involving the DOM. The most common use case is App configuration in your root component.",
    "example": ""
  }, {
    "id": 28,
    "term": "componentWillReceiveProps()",
    "fakeAnswers": ["componentWillMount()", "shouldComponentUpdate()"],
    "definition": "May be used when data was loaded by a parent component and is being passed down to get access to both next and current props.  Before the component does anything w/ the new props, this method is called, with the next props as the arg.",
    "example": ""
  }, {
    "id": 29,
    "term": "shouldComponentUpdate()",
    "fakeAnswers": ["componentWillMount()", "componentWillUpdate()"],
    "definition": "May be used when you want to explicitly tell a component not to render when it receives new props or new state.  It returns true or false, and defaults to true.",
    "example": ""
  }, {
    "id": 30,
    "term": "componentWillUpdate()",
    "fakeAnswers": ["componentWillMount()", "shouldComponentUpdate()"],
    "definition": "May be used if you were using shouldComponentUpdate and needed to do something when props change.  Similar to componentWillReceiveProps(), but you are now allowed to call this.setState.",
    "example": ""
  }, {
    "id": 31,
    "term": "componentDidUpdate()",
    "fakeAnswers": ["componentWillMount()", "componentWillUpdate()"],
    "definition": "May be used to update the DOM in response to prop or state changes, e.g. if you want to avoid rerendering certain things in the DOM but not others.",
    "example": ""
  }, {
    "id": 32,
    "term": "componentWillUnmount()",
    "fakeAnswers": ["shouldComponentUpdate()", "componentWillUpdate()"],
    "definition": "May be used when a component is going away forever to cancel outgoing network requests, or remove event listeners associated with it (a.k.a. clean up anything to do that solely involves the component in question).",
    "example": ""
  }, {
    "id": 33,
    "term": "Functional Component",
    "fakeAnswers": ["Class Component", "Screen Component"],
    "definition": "This is a way to define a react component that has a more simple form than the class syntax that does not have state or methods.",
    "example": "./images/example{exampleId}.png"
  }, {
    "id": 34,
    "term": "Class Component",
    "fakeAnswers": ["Functional Component", "Screen Component"],
    "definition": "This is one of the most common ways to define a React component. While more verbose than the functional syntax, it gives more control through lifecycle hooks. It usually has state and/or methods.",
    "example": "./images/example{exampleId}.png"
  }, {   
    "id": 35,
    "term": "Fragment",
    "fakeAnswers": ["Parent", "Wrapper"],
    "definition": "This is a something in React that lets you group a list of children without adding extra nodes to the DOM, e.g. if you want to insert multiple siblings into another component render without adding an extra div around them to group them.",
    "example": "./images/example{exampleId}.png"
  }
]

module.exports = {
  reactTerms
}
