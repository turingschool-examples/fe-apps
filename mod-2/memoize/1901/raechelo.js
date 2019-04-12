const questions = [
  {
    "question": "In which lifecycle method should you fetch APIs?",
    "correctAnswer": "componentDidMount",
    "allAnswers": ["componentDidMount", "componentWillMount", "componentDoesMount", "componentDidUnmount"],
    "category": "React",
    "id": 1
  },
  {
    "question": "What would be the proper way to add new values to an array stored in state?",
    "correctAnswer": "this.setState({myArray: newValues})",
    "allAnswers": ["this.setState({myArray: newValues})", "this.setState(newValues)", "this.state.myArray.push(newValues)", "myArray.push(newValues)"],
    "category": "React",
    "id": 2
  },
  {
    "question": "All React component children need a unique [blank]?",
    "correctAnswer": "key",
    "allAnswers": ["key", "prop", "state", "className"],
    "category": "React",
    "id": 3
  },
  {
    "question": "What is the correct way to pass state to a child?",
    "correctAnswer": "name={this.state.hippogriff}",
    "allAnswers": ["name={this.state.hippogriff}", "this.props.name='Buckbeak'", "this.props.name={hippogriff}", "name='Buckbeak'"],
    "category": "React",
    "id": 4
  },
  {
    "question": "How many elements can a React component return?",
    "correctAnswer": "One but it can wrap multiple elements",
    "allAnswers": ["One but it can wrap multiple elements", "As many as I want", "One", "I don't know"],
    "category": "React",
    "id": 5
  },
  {
    "question": "What is the correct set-up for state in a React component?",
    "correctAnswer": "this.state={name:'Sirius', animagus: 'dog'}",
    "allAnswers": ["this.state={name:'Sirius', animagus: 'dog'}", "this.state=(name:'Sirius', animagus: 'dog')", "this.state={name:'Sirius'; animagus: 'dog';}", "state={name:'Sirius', animagus: 'dog'}"],
    "category": "React",
    "id": 6
  },
  {
    "question": "How could you conditionally render your props?",
    "correctAnswer": "this.props.wizard ? <Wizard /> : <Witch />",
    "allAnswers": [ "this.props.wizard ? <Wizard /> : <Witch />",  "<Wizard /> || <Witch />",  "wizard ? <Wizard /> : <Witch />",  "this.state ? <Wizard /> : <Witch />"],
    "category": "React",
    "id": 7
  },
  {
    "question": "What is the proper way to return a list to a component?",
    "correctAnswer": "this.props.data.map(n => <List value={n} />",
    "allAnswers": ["this.props.data.map(n => <List value={n} />", "this.props.data.forEach(n => <List value={n} />", "this.props.data.map(n => <List value=n />", "this.props.data.forEach(n => <List value=n />"],
    "category": "React",
    "id": 8
  },
  {
    "question": "What is the saying about how data behaves in React?",
    "correctAnswer": "Data down, actions up",
    "allAnswers": ["Data down, actions up", "Actions down, data up", "Data there, action here", "Beats me."],
    "category": "React",
    "id": 9
  },
  {
    "question": "How do you know when a component needs state?",
    "correctAnswer": "When data associated with it changes over time",
    "allAnswers": ["When data associated with it changes over time", "When the page reloads", "Always", "When the parent component changes state"],
    "category": "React",
    "id": 10
  },
  {
    "question": "When referring to Router, what is an action?",
    "correctAnswer": "An object representing an intention to change state",
    "allAnswers": ["An object representing an intention to change state", "An object representing state", "An object representing an update to state", "An object representing that changes state"],
    "category": "Redux",
    "id": 11
  },
  {
    "question": "What is Router?",
    "correctAnswer": "What allows us to render new pages",
    "allAnswers": ["What allows us to render new pages", "What allows us to visit external pages", "What allows us to render components", "What routes data between components"],
    "category": "Router",
    "id": 12
  },
  {
    "question": "What is Store?",
    "correctAnswer": "All applications data/states",
    "allAnswers": ["All applications data/states", "Component data", "Application Components", "Component State"],
    "category": "Redux",
    "id": 13
  },
  {
    "question": "What is a Reducer?",
    "correctAnswer": "takes actions and updates part of app/component states",
    "allAnswers": ["takes actions and updates part of app/component states", "changes to app/component states", "actions to app/component states", "data sent to components from parents"],
    "category": "Redux",
    "id": 14
  },
  {
    "question": "What is Provider?",
    "correctAnswer": "makes store avialable to all containers",
    "allAnswers": ["makes store avialable to all containers", "makes state avialable to all containers", "makes store avialable to all components", "makes state avialable to all components"],
    "category": "Redux",
    "id": 15
  },
  {
    "question": "What is a container?",
    "correctAnswer": "Fetches app states data and uses it to render components",
    "allAnswers": ["Fetches app states data and uses it to render components", "Fetches states data and uses it to render props", "Fetches data renders components", "Fetches container data and uses it to render components"],
    "category": "Redux",
    "id": 16
  },
  {
    "question": "When does the component re-render?",
    "correctAnswer": "When state changes",
    "allAnswers": ["When state changes", "When props change", "When props are passed", "When the page loads"],
    "category": "React",
    "id": 17
  },
  {
    "question": "When might you need to bind a method?",
    "correctAnswer": "If we pass it as a prop",
    "allAnswers": ["If we pass it as a prop", "If we call it", "Probably always", "Never, store it on the mehtod where it's called"],
    "category": "React",
    "id": 18
  },
  {
    "question": "When referring to Router, what is switch?",
    "correctAnswer": "A method that renders exclusively one route.",
    "allAnswers": ["A method that renders exclusively one route.", "A method that renders all routes.", "A method that renders all routes simultaneously.", "A method that renders a route once."],
    "category": "Router",
    "id": 19
  },

  {
    "question": "What is the purpose of redirect?",
    "correctAnswer": "Navigates to a new location",
    "allAnswers": ["Navigates to a new location", "Reloads the page", "Navigates to an external location", "Navigates to a link"],
    "category": "Router",
    "id": 20
  },
  {
    "question": "When does the componentDidMount method run?",
    "correctAnswer": "After the output was rendered to the DOM",
    "allAnswers": ["After the output was rendered to the DOM", "Before the output is rendered to the DOM", "When the output is rendered to the DOM", "Both before and after the output is rendered to the DOM"],
    "category": "React",
    "id": 21
  },
  {
    "question": "Give an example of dynamic routing.",
    "correctAnswer": "path='/Hogwarts/:id",
    "allAnswers": ["path='/Hogwarts/", "path='/Hogwarts/Hufflepuff", "path='/Hogwarts/any", "path='/Hogwarts/:id"],
    "category": "Router",
    "id": 22
  },
  {
    "question": "How would you route to a specific component?",
    "correctAnswer": "<Route path='/SPEW' component={spew} />",
    "allAnswers": ["<Route path='/SPEW' component={spew} />", "<Route component={spew} />", "<Spew path='/SPEW' component={spew} />", "<Route />component={spew}"],
    "category": "Router",
    "id": 23
  },
  {
    "question": "When referring to Router, what is Link?",
    "correctAnswer": "Provides accessible navigation around your application",
    "allAnswers": ["Provides accessible navigation around your application", "Provides external links to leave your application", "Gives a redirect to a new component", "A link to your website"],
    "category": "Router",
    "id": 24
  },
  {
    "question": "What is the proper way to call a method onChange?",
    "correctAnswer": "onChange={this.expelliarmus}",
    "allAnswers": ["onChange={this.expelliarmus}", "onChange=this.expelliarmus", "onChange=(this.expelliarmus)", "onClick={this.expelliarmus}"],
    "category": "React",
    "id": 25
  },
  {
    "question": "What is the optional callback for setState?",
    "correctAnswer": "a method invoked after setState has run",
    "allAnswers": ["a method invoked after setState has run", "a method invoked when setState is run", "a method invoked before setState has run", "a method invoked before and after setState has run"],
    "category": "React",
    "id": 26
  },
  {
    "question": "When referring to Router, what is one key difference between Link and NavLink?",
    "correctAnswer": "NavLink comes with an active class",
    "allAnswers": ["NavLink comes with an active class", "NavLink comes with an active class", "NavLink comes with an active class", "NavLink comes with an active class"],
    "category": "Router",
    "id": 27
  },
  {
    "question": "What is the main intention of Redux?",
    "correctAnswer": "to manage state",
    "allAnswers": ["to manage state", "to manage components", "to manage store", "to manage props"],
    "category": "Redux",
    "id": 28
  },
  {
    "question": "What gives us the option to use the back and forward buttons on the browser while staying on our webpage?",
    "correctAnswer": "Router",
    "allAnswers": ["Router", "React", "Redux", "None of these"],
    "category": "Router",
    "id": 29
  },
  {
    "question": "What data type is Redux Store?",
    "correctAnswer": "Object",
    "allAnswers": ["Object", "Array", "Complex", "Primitive"],
    "category": "Redux",
    "id": 30
  }
]

export default questions;