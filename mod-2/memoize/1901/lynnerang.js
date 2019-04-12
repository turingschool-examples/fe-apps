const reactTerms = [
  {
    "id": 1,
    "term": "Single-page Application",
    "definition": "An application that loads a single HTML page and all the necessary assets (such as JavaScript and CSS) required for the app to run. Any interactions don't require a trip to server/page reload.",
    "example": "<img src={require(`./images/example${this.state.id}.png`)} alt='image of example'>"
  }, {
    "id": 2,
    "term": "Compilers",
    "definition": "They take JavaScript code, transform it and return JavaScript code in a different format.",
    "example": "<p>Babel, most commonly used for React, and takes ES6 syntax and transforms it into syntax that older browsers are capable of interpreting.</p>"
  }, {
    "id": 3,
    "term": "Bundlers",
    "definition": "They take JavaScript and CSS code written as separate modules (often hundreds of them), and combine them together into a few files better optimized for the browsers.",
    "example": "<p>Those commonly used in React applications include Webpack and Browserify.</p>"
  }, {
    "id": 4,
    "term": "Package Managers",
    "definition": "Tools that allow you to manage dependencies in your project.",
    "example": "<p>npm and Yarn are two package managers commonly used in React applications.</p>"
  }, {
    "id": 5,
    "term": "CDN",
    "definition": "Stands for Content Delivery Network. CDNs deliver cached, static content from a network of servers across the globe.",
    "example": "<p>Akamai, Amazon CloudFront, CacheFly.</p>"
  }, {
    "id": 6,
    "term": "JSX",
    "definition": "A syntax extension to JavaScript. It is similar to a template language, but it has full power of JavaScript. JSX gets compiled to React.createElement() calls which return plain JavaScript objects called “React elements”.",
    "example": "<img src={require(`./images/example${this.state.id}.png`)} alt='image of example'/>"
  }, {
    "id": 7,
    "term": "Elements",
    "definition": "The building blocks of React applications. One might confuse them with a more widely known concept of “components”. It describes what you want to see on the screen. In react they are immutable.",
    "example": "<img src={require(`./images/example${this.state.id}.png`)} alt='image of example'/>"
  }, {
    "id": 8,
    "term": "Components",
    "definition": "Small, reusable pieces of code that return a React element to be rendered to the page. The simplest version is a plain JavaScript function that returns a React element",
    "example": "<img src={require(`./images/example${this.state.id}.png`)} alt='image of example'/>"
  }, {
    "id": 9,
    "term": "props",
    "definition": "Inputs to a React component. They are data passed down from a parent component to a child component.",
    "example": "<img src={require(`./images/example${this.state.id}.png`)} alt='image of example'/>"
  }, {
    "id": 10,
    "term": "props.children",
    "definition": "Available on every component. It contains the content between the opening and closing tags of a component.",
    "example": "<img src={require(`./images/example${this.state.id}.png`)} alt='image of example'/>"
  }, {
    "id": 11,
    "term": "state",
    "definition": "Needed when some data associated with it changes over time. For example, a Checkbox component might need something like isChecked, and a NewsFeed component might want to keep track of fetchedPosts.  Different from props in that it's managed by the component itself.",
    "example": "<img src={require(`./images/example${this.state.id}.png`)} alt='image of example'/>"
  }, {
    "id": 12,
    "term": "Lifecycle Methods",
    "definition": "Custom functionality that gets executed during the different phases of a component.",
    "example": "<p>componentDidMount(), componentWillMount(), componentDidUpdate()</p>"
  }, {
    "id": 13,
    "term": "Controlled Components",
    "definition": "An input form element whose value is controlled by React. When a user enters data into it, a change event handler is triggered and your code decides whether the input is valid (by re-rendering with the updated value). If you do not re-render then the form element will remain unchanged.",
    "example": "<a href='https://lorenstewart.me/2016/10/31/react-js-forms-controlled-components/'>Read more</a>"
  }, {
    "id": 14,
    "term": "Uncontrolled Component",
    "definition": "Works like form elements do outside of React. When a user inputs data into a form field (an input box, dropdown, etc) the updated information is reflected without React needing to do anything. However, this also means that you can’t force the field to have a certain value.",
    "example": "<a href='https://reactjs.org/docs/uncontrolled-components.html'>Read more</a>"
  }, {
    "id": 15,
    "term": "Keys",
    "definition": "A special string attribute you need to include when creating arrays of elements. They help React identify which items have changed, are added, or are removed. They should be given to the elements inside an array to give the elements a stable identity.",
    "example": "<img src={require(`./images/example${this.state.id}.png`)} alt='image of example'/>"
  }, {
    "id": 16,
    "term": "Refs",
    "definition": "A special attribute that you can attach to any component. It can be an object created by a particular function or a callback function, or a string (in legacy API). When it's a callback function, the function receives the underlying DOM element or class instance (depending on the type of element) as its argument. This allows you to have direct access to the DOM element or component instance.",
    "example": "<img src={require(`./images/example${this.state.id}.png`)} alt='image of example'/>"
  }, {
    "id": 17,
    "term": "Events React Syntax",
    "definition": "Syntactic differences in React are being named using camelCase rather than lowercase, and with JSX passing a function rather than a string.",
    "example": "<img src={require(`./images/example${this.state.id}.png`)} alt='image of example'/>"
  }, {
    "id": 18,
    "term": "Reconciliation",
    "definition": "A process in react where when a component’s props or state change, React decides whether an actual DOM update is necessary by comparing the newly returned element with the previously rendered one. When they are not equal, React will update the DOM.",
    "example": "<a href='https://css-tricks.com/how-react-reconciliation-works/'>Read more</a>"
  }, {
    "id": 19,
    "term": "Factories",
    "definition": "A function that generates a ReactElement with a particular type property. React has a built-in helper for you to create these.",
    "example": "<img src={require(`./images/example${this.state.id}.png`)} alt='image of example'/>"
  }, {
    "id": 20,
    "term": "Screen component",
    "definition": "A component that we use in our route configuration.  This suffix in the name is a frequently used convention.  are provided with the navigation prop. It's important to note that this only happens if the screen is rendered as a route by React Navigation (for example, in response to this.props.navigation.navigate).",
    "example": "<img src={require(`./images/example${this.state.id}.png`)} alt='image of example'/>"
  }, {
    "id": 21,
    "term": "Navigation Prop",
    "definition": "<p>Is passed into all screens, and it can be used for the following:</p><ul><li > dispatch will send an action up to the router < /li><li> state is the current route for the screen</li><li>getParam is a helper to access a param that may be on the route </li><li>navigate, goBack, etc are available to dispatch actions in a convenient way</li></ul>",
    "example": "<a href='https://css-tricks.com/how-react-reconciliation-works/>Read more</a>"
  }, {
    "id": 22,
    "term": "Navigation State",
    "definition": "For this, there are two routes to different web 'pages' (which may be tabs, or cards in a stack). The index indicates the active route, which is 'B'.",
    "example": "<img src={require(`./images/example${this.state.id}.png`)} alt='image of example'/>"
  }, {
    "id": 23,
    "term": "Route",
    "definition": "Each of these is a piece of navigation state which contains a key to identify it, and a 'thisName' to designate the type. It can also contain arbitrary params.",
    "example": "<img src={require(`./images/example${this.state.id}.png`)} alt='image of example'/>"
  }, {
    "id": 24,
    "term": "Navigator",
    "definition": "Any React component that has a router on it, to define the navigation behavior. all the transitions we have come to expect from a modern app are available out of the box, including tab nav, drawer nav (slide up), stack nav (sliding across, moving through a hierarchy) and deep linking.",
    "example": "<img src={require(`./images/example${this.state.id}.png`)} alt='image of example'/>"
  }, {
    "id": 25,
    "term": "setState()",
    "definition": "A react method used to update a component state property.",
    "example": "<img src={require(`./images/example${this.state.id}.png`)} alt='image of example'/>"
  }, {
    "id": 26,
    "term": "componentDidMount()",
    "definition": "A react lifecycle method used to do all the setup you couldn't do without a DOM.  Typically used to load your data, and also do things you couldn't before there was a component and DOM to play with.  Can call setState.",
    "example": "<img src={require(`./images/example${this.state.id}.png`)} alt='image of example'/>"
  }, {
    "id": 27,
    "term": "componentWillMount()",
    "definition": "One of the react lifecycle methods that is called only one time before the initial render.  Can be tricky because there's nothing to play with yet involving the DOM, so it's use is often not recommended. The most common use case is App configuration in your root component.",
    "example": "<img src={require('./images/example${this.state.id}.png') alt='image of example'/>"
  }, {
    "id": 28,
    "term": "componentWillReceiveProps()",
    "definition": "May be used when some data was loaded by a parent component and is being passed down.  Before the component does anything with the new props, this method is called, with the next props as the argument.  We now have access to both the next props and our current props.  The most common use case is for acting on particular prop changes to trigger state transitions.",
    "example": "<img src={require('./images/example${this.state.id}.png') alt='image of example'/>"
  }, {
    "id": 29,
    "term": "shouldComponentUpdate()",
    "definition": "May be used when you want to explicitly tell a component not to render when it receives new props or new state.  It returns true or false, and defaults to true.",
    "example": "<img src={require('./images/example${this.state.id}.png') alt='image of example'/>"
  }, {
    "id": 30,
    "term": "componentWillUpdate()",
    "definition": "May be used if you were using shouldComponentUpdate and needed to do something when props change.  Similar to componentWillReceiveProps(), but you are now allowed to call this.setState.",
    "example": "<img src={require('./images/example${this.state.id}.png') alt='image of example'/>"
  }, {
    "id": 31,
    "term": "componentDidUpdate()",
    "definition": "May be used to update the DOM in response to prop or state changes, e.g. if you want to avoid rerendering certain things in the DOM but not others.",
    "example": "<img src={require('./images/example${this.state.id}.png') alt='image of example'/>"
  }, {
    "id": 32,
    "term": "componentWillUnmount()",
    "definition": "May be used when a component is going away forever to cancel any outgoing network requests, or remove all event listeners associated with the component. Basically, it can clean up anything to do that solely involves the component in question to make it completely gone.",
    "example": "<img src={require('./images/example${this.state.id}.png') alt='image of example'/>"
  }, {
    "id": 33,
    "term": "Functional Component",
    "definition": "A way to define a react component that has a more simple form than the class syntax that does not have state or methods.",
    "example": "<img src={require('./images/example${this.state.id}.png') alt='image of example'/>"
  }, {
    "id": 34,
    "term": "Class Component",
    "definition": "One of the most common ways to define a React component. While more verbose than the functional syntax, it offers more control in the form of lifecycle hooks. It usually has state and/or methods.",
    "example": "<img src={require('./images/example${this.state.id}.png') alt='image of example'/>"
  }
]

export default reactTerms;