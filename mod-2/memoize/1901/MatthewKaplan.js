const jestQuestions = [
{
  "id": 1,
  "question": "Jest is a JavaScript testing tool originally created by the developers at:",
  "potentialAnswers": ["Facebook", "Twitter", "Airbnb", "Microsoft"],
  "correctAnswer": "Facebook",
  "save": "false",
  "onCorrectAnswer": "Thats correct! The developers over at Facebook who are also responsable for creating React brought us Jest.",
  "onIncorrectAnswer": "Thats incorrect. The correct answer is: Facebook.",
  "linkName": "Jest Github",
  "link": "https://github.com/facebook/jest"
}, {
  "id": 2,
  "question": "What tool can you use in combination with Jest?",
  "potentialAnswers": ["Enzyme", "Mocha", "Jtest", "Cucumber"],
  "correctAnswer": "Enzyme",
  "save": "false",
  "onCorrectAnswer": "Thats correct! Although you can use other tools with Jest such as Chai, Enzyme is a great tool to use in comination with Jest.",
  "onIncorrectAnswer": "Thats incorrect. The correct answer is: Enzyme.",
  "linkName": "Enzyme Docs",
  "link": "https://airbnb.io/enzyme/"
}, {
  "id": 3,
  "question": "When you want full DOM Rendering what must you import from the Enzyme library at the top of your test file?",
  "potentialAnswers": ["mount", "shallow", "sinon", "expect"],
  "correctAnswer": "mount",
  "save": "false",
  "onCorrectAnswer": "Thats correct! For full DOM rendering you'll want to use mount. If you just want to render a shallow copy you'd use shallow.",
  "onIncorrectAnswer": "Thats incorrect. The correct answer is: mount.",
  "linkName": "Enzyme mount",
  "link": "https://airbnb.io/enzyme/#full-dom-rendering"
}, {
  "id": 4,
  "question": "What is it called when Jest takes the component that is being tested, renders it, and displays it to the user of how it should appear on the DOM?",
  "potentialAnswers": ["Snapshot Testing", "Screenshot Testing", "Snapscreen Testing", "Screenshot Testing"],
  "correctAnswer": "Snapshot Testing",
  "save": "false",
  "onCorrectAnswer": "Thats correct! Snapshot testing is a great tool that Jest offers its users. Although it can't really be done with the basic principles of TDD.",
  "onIncorrectAnswer": "Thats incorrect. The corret answer is: Snapshot Testing.",
  "linkName": "Snapshot Testing",
  "link": "https://jestjs.io/docs/en/snapshot-testing"
}, {
  "id": 5,
  "question": "Whats the syntax we use to generate our Snapshot?",
  "potentialAnswers": ["expect(wrapper).toMatchSnapshot()", "expect(Snapshot).toMatchSnapshot()", "Snapshot.toMatchSnapshot()", "(wrapper.Snapshot).toMatchSnapshot()"],
  "correctAnswer": "expect(wrapper).toMatchSnapshot()",
  "save": "false",
  "onCorrectAnswer": "Thats correct! Take advantage of testing with Snapshots!",
  "onIncorrectAnswer": "Thats incorrect. The correct answer is: expect(wrapper).toMatchSnapshot().",
  "linkName": "Snapshot Testing",
  "link": "https://jestjs.io/docs/en/snapshot-testing"
}, {
  "id": 6,
  "question": "What should you call the name of your test file where your testing `Component`?",
  "potentialAnswers": ["Component.test.js", "Component.test", "Component.js.test", "test.Component.js"],
  "correctAnswer": "Component.test.js",
  "save": "false",
  "onCorrectAnswer": "Thats correct!",
  "onIncorrectAnswer": "Thats incorrect. The correct answer is: Component.test.js",
  "linkName": "Getting stated with Jest",
  "link": "https://jestjs.io/docs/en/getting-started#docsNav"
}, {
  "id": 7,
  "question": "What do we have to pass into our test file to insure that the Component were testing, properly displays the Snapshot?",
  "potentialAnswers": ["Mock Data", "Props", "State", "All of the above"],
  "correctAnswer": "Mock Data",
  "save": "false",
  "onCorrectAnswer": "Thats correct! In oder to pass our Snapshot test we have to pass in Mock Data so it matches the Snapshot.",
  "onIncorrectAnswer": "Thats incorrect. The correct answer is: Mock Data. In oder to pass our Snapshot test we have to pass in Mock Data so it matches the Snapshot.",
  "linkName": "",
  "link": ""
}, {
  "id": 8,
  "question": "Where can we write our set up code, to reduce the amount of duplication in our test/it blocks?",
  "potentialAnswers": ["beforeEach block", "afterEach block", "onEach block", "beforeAll block"],
  "correctAnswer": "beforeEach block",
  "save": "false",
  "onCorrectAnswer": "Thats correct! Put all your setups in a beforeEach block so that you wont have to write them out each time before running a test.",
  "onIncorrectAnswer": "Thats incorrect. The correct answer is: beforeEach block. If you put all your setups in a beforeEach block so that you wont have to write them out each time before running a test.",
  "linkName": "beforeEach block",
  "link": "https://jestjs.io/docs/en/api#beforeeachfn-timeout"
}, {
  "id": 9,
  "question": "What can we call to exit a click event that we simulated so that Jest stops its testing process?",
  "potentialAnswers": ["done()", "break", "continue", "return"],
  "correctAnswer": "done()",
  "save": "false",
  "onCorrectAnswer": "Thats correct! There are many other ways to do this but done() is one of them.",
  "onIncorrectAnswer": "Thats incorrect. The correct answer is: done()",
  "linkName": "",
  "link": ""
}, {
  "id": 10,
  "question": "What Jest tool can you use if you want to make sure a function is being invoked but that the functionality itself doesn't run?",
  "potentialAnswers": ["Mock Function", "Filter Function", "Async Function", "NoCall Function"],
  "correctAnswer": "Mock Function",
  "save": "false",
  "onCorrectAnswer": "Thats correct! Mock functions make it easy to test the links between code by erasing the actual implementation of a function, capturing calls to the function, and allowing test-time configuration of return values.",
  "onIncorrectAnswer": "Thats incorrect. The correct answer is: Mock Function. Mock functions make it easy to test the links between code by erasing the actual implementation of a function, capturing calls to the function, and allowing test-time configuration of return values.",
  "linkName": "Testing with Mock Functions",
  "link": "https://jestjs.io/docs/en/mock-functions"
},{
  "id": 11,
  "question": "What is the syntax needed to create a Mock Function?",
  "potentialAnswers": ["jest.fn()", ".fn(jest)", "jest.function()", ".function(jest)"],
  "correctAnswer": "jest.fn()",
  "save": "false",
  "onCorrectAnswer": "Thats correct!",
  "onIncorrectAnswer": "Thats incorrect. The correct answer is: jest.fn().",
  "linkName": "Testing with Mock Functions",
  "link": "https://jestjs.io/docs/en/mock-functions"
}, {
  "id": 12,
  "question": "What syntax can you use to find elements in the component your testing?",
  "potentialAnswers": ["wrapper.find()", "wrapper.search()", "wrapper.byClassName()", "wrapper.lookUp()"],
  "correctAnswer": "wrapper.find()",
  "save": "false",
  "onCorrectAnswer": "Thats correct!",
  "onIncorrectAnswer": "Thats incorrect. The correct answer is: wrapper.find().",
  "linkName": "Targeting selectors",
  "link": "https://airbnb.io/enzyme/docs/api/ReactWrapper/find.html"
}, {
  "id": 13,
  "question": "Where should all of your `it` tests live?",
  "potentialAnswers": ["Describe Block", "beforeEach block", "wrapper", "All of the above"],
  "correctAnswer": "Describe Block",
  "save": "false",
  "onCorrectAnswer": "Thats correct!",
  "onIncorrectAnswer": "Thats incorrect. The correct answer is: Describe Block.",
  "linkName": "Describe Blocks",
  "link": "https://jestjs.io/docs/en/setup-teardown#order-of-execution-of-describe-and-test-blocks"
}, {
  "id": 14,
  "question": "Test if something is a string.",
  "potentialAnswers": ["expect(typeof 'value').toBe('string')", "expect('value').toBe('string')", "expect('value').toEqual('string')", "expect('value').toString()"],
  "correctAnswer": "expect(typeof 'value').toBe('string')",
  "save": "false",
  "onCorrectAnswer": "Thats correct! You can also test if something is an object or an array this way.",
  "onIncorrectAnswer": "Thats incorrect. The correct answer is: expect(typeof 'value').toBe('string'). Which you can also use to test if something is an object or an array.",
  "linkName": "Testing strings",
  "link": "https://jestjs.io/docs/en/expect#tobevalue"
}, {
  "id": 15,
  "question": "Test if a method is being called?",
  "potentialAnswers": ["expect(fn).toHaveBeenCalled()", "expect(fn).toBeCalled()", "expect(fn).toGetCalled()", "expect(fn).toCall()"],
  "correctAnswer": "expect(fn).toHaveBeenCalled()",
  "save": "false",
  "onCorrectAnswer": "Thats correct!",
  "onIncorrectAnswer": "Thats incorrect. The correct answer is: expect(fn).toHaveBeenCalled().",
  "linkName": "Insuring a function has been called",
  "link": "https://jestjs.io/docs/en/expect#tohavebeencalled"
}, {
  "id": 16,
  "question": "You can pass in a callback function to a mock function",
  "potentialAnswers": ["True", "False"],
  "correctAnswer": "True",
  "save": "false",
  "onCorrectAnswer": "Thats correct! Passing a callback function into a mock function can be nice if you want to mock function to have some type of simple functionality.",
  "onIncorrectAnswer": "Thats incorrect. The correct answer is: True. Passing a callback function into a mock function can be nice if you want to mock function to have some type of simple functionality.",
  "linkName": "Testing with Mock Functions",
  "link": "https://jestjs.io/docs/en/mock-function-api"
}, {
  "id": 17,
  "question": "The four phases of testing are: Setup, Execution, Assertion, and Tear Down.",
  "potentialAnswers": ["True", "False"],
  "correctAnswer": "True",
  "save": "false",
  "onCorrectAnswer": "Thats correct! Keeping these four phases in mind while writing tests will make your life easier.",
  "onIncorrectAnswer": "Thats incorrect. The correct answer is: True.",
  "linkName": "",
  "link": ""
}, {
  "id": 18,
  "question": "You should always create your tests after you're done writing your code you want to test.",
  "potentialAnswers": ["True", "False"],
  "correctAnswer": "False",
  "save": "false",
  "onCorrectAnswer": "Thats correct! You should always try to follow the TDD and write out your tests before writing any code.",
  "onIncorrectAnswer": "Thats incorrect. The correct answer is: False. You should always try to follow the TDD and write out your tests before writing any code.",
  "linkName": "Test Driven Development",
  "link": "https://medium.freecodecamp.org/test-driven-development-what-it-is-and-what-it-is-not-41fa6bca02a2"
}, {
  "id": 19,
  "question": "What is a benefit of testing your code?",
  "potentialAnswers": ["Testing can act as a safety net that helps developers find bug early on.", "Provide documentation by telling a living story about your application.", "Forces you to write code that is decoupled, flexible, and cofigurable.", "All of the above"],
  "correctAnswer": "All of the above",
  "save": "false",
  "onCorrectAnswer": "Thats correct! Theres not many disadvantages to writing tests.",
  "onIncorrectAnswer": "Thats incorrect. The correct answer is: All of the above.",
  "linkName": "",
  "link": ""
}, {
  "id": 20,
  "question": "Jest is strictly a JavaScript Testing Framework for React.",
  "potentialAnswers": ["True", "False"],
  "correctAnswer": "False",
  "save": "false",
  "onCorrectAnswer": "Thats correct! You can also use Jest with Babel, TypeScript, Node, Angular, Vue and more.",
  "onIncorrectAnswer": "Thats incorrect. The correct answer is: False. Although the developers who created Jest also created React, one can also use Jest with Babel, TypeScript, Node, Angular, Vue and more.",
  "linkName": "",
  "link": ""
},{
  "id": 21,
  "question": "What are we typically testing for with Jest?",
  "potentialAnswers": ["What gets rendered", "State changes", "Event handlers/actions", "All of the above"],
  "correctAnswer": "All of the above",
  "save": "false",
  "onCorrectAnswer": "Thats correct!",
  "onIncorrectAnswer": "Thats incorrect. The correct answer is: All of the above.",
  "linkName": "",
  "link": ""
}, {
  "id": 22,
  "question": "When testing the state of a component you should always first:",
  "potentialAnswers": ["Test the default state", "Invoke a function that changes the state", "Change state and then test state for change", "Theres no need to test the state of a component"],
  "correctAnswer": "Test the default state",
  "save": "false",
  "onCorrectAnswer": "Thats correct!",
  "onIncorrectAnswer": "Thats incorrect. The correct answer is: Test the default state.",
  "linkName": "Testing State",
  "link": "https://medium.com/@newyork.anthonyng/testing-react-components-state-b57bfc712b90"
}, {
  "id": 23,
  "question": "How would one test a button or an input?",
  "potentialAnswers": [".simulate()", ".onClick()", ".click()", "All of the above"],
  "correctAnswer": ".simulate()",
  "save": "false",
  "onCorrectAnswer": "Thats correct!",
  "onIncorrectAnswer": "Thats incorrect. The correct answer is: .simulate().",
  "linkName": "Testing Events",
  "link": "https://jestjs.io/docs/en/tutorial-jquery#docsNav"
}, {
  "id": 24,
  "question": "It is best practice to target a button or input on the page by what:",
  "potentialAnswers": ["It's data-test value", "It's className", "It's id", "None of these"],
  "correctAnswer": "It's data-test value",
  "save": "false",
  "onCorrectAnswer": "Thats correct! When creating buttons or inputs that you plan on testing later on, remember to give them a data-test value. This will let other developers that may work on the project after you that your using that value for testing and not to change it.",
  "onIncorrectAnswer": "Thats incorrect. The correct answer is: 'It's data-test value'. Giving it a data-test value will let other developers who work on the project after you not to change that value because its being used for testing.",
  "linkName": "Using 'data-test' in Tests",
  "link": "http://blog.rstankov.com/using-rel-in-testing/"
}, {
  "id": 25,
  "question": "You can compair numbers using these testing methods: .toBeGreaterThan(), .toBeGreaterThanOrEqual(), toBeLessThan(), .toBeLessThanOrEqual()",
  "potentialAnswers": ["True", "False"],
  "correctAnswer": "True",
  "save": "false",
  "onCorrectAnswer": "Thats correct!",
  "onIncorrectAnswer": "Thats incorrect. The correct answer is: True.",
  "linkName": "Testing Numbers",
  "link": "https://jestjs.io/docs/en/using-matchers#numbers"
}, {
  "id": 26,
  "question": "With Jest you are able to set native timer functions such as: setTimeout, setInterval, clearTimeout, clearInterval",
  "potentialAnswers": ["True", "False"],
  "correctAnswer": "True",
  "save": "false",
  "onCorrectAnswer": "Thats correct! The native timer functions are less than ideal for a testing environment since they depend on realy time to elapse. But Jest can swap out timers with functions that allow you to control the passage of time.",
  "onIncorrectAnswer": "Thats incorrect. The correct answer is: True. Although the native timer functions are less than ideal for a testing environment since they depend on realy time to elapse. But Jest can swap out timers with functions that allow you to control the passage of time.",
  "linkName": "Testing Timer Functions",
  "link": "https://jestjs.io/docs/en/timer-mocks"
}, {
  "id": 27,
  "question": "To test if one number is equal to another you would use:",
  "potentialAnswers": [".toEqual()", ".toMatch()", ".equivalentTo()", "None of the above"],
  "correctAnswer": ".toEqual()",
  "save": "false",
  "onCorrectAnswer": "Thats correct!",
  "onIncorrectAnswer": "Thats incorrect. The correct answer is: .toEqual()",
  "linkName": "Testing Numbers",
  "link": "https://jestjs.io/docs/en/expect#toequalvalue"
}, {
  "id": 28,
  "question": "You can test if a variable or your state holds a boolean variable with: .toBeTruthy() and .toBeFalsy()",
  "potentialAnswers": ["True", "False"],
  "correctAnswer": "True",
  "save": "false",
  "onCorrectAnswer": "Thats correct!",
  "onIncorrectAnswer": "Thats incorrect. The correct answer is: True.",
  "linkName": "Testing State",
  "link": "https://jestjs.io/docs/en/using-matchers#truthiness"
}, {
  "id": 29,
  "question": "You can test if an array of items contains a certain item with:",
  "potentialAnswers": [".toContain()", ".toHold()", ".hasValueOf()", "You cant test this"],
  "correctAnswer": ".toContain()",
  "save": "false",
  "onCorrectAnswer": "Thats correct! You can check if an array or iterable contains a particular item using toContain",
  "onIncorrectAnswer": "Thats incorrect. The correct answer is: .toContain(). You can check if an array or iterable contains a particular item using toContain.",
  "linkName": "Testing Arrays",
  "link": "https://jestjs.io/docs/en/using-matchers#arrays-and-iterables"
}, {
  "id": 30,
  "question": "If you want to test that a particular function throws an error when it's called, use:",
  "potentialAnswers": [".toThrow()", ".toThrowError()", ".throwsError()", ".expectError()"],
  "correctAnswer": ".toThrow()",
  "save": "false",
  "onCorrectAnswer": "Thats correct!",
  "onIncorrectAnswer": "Thats incorrect. The correct answer is: .toThrow().",
  "linkName": "Testing with errors",
  "link": "https://jestjs.io/docs/en/using-matchers#exceptions"
}, {
  "id": 31,
  "question": "Enzyme is a JavaScript Testing utility for React originally created by the developers at:",
  "potentialAnswers": ["Airbnb", "Facebook", "Google", "Spotify"],
  "correctAnswer": "Airbnb",
  "save": "false",
  "onCorrectAnswer": "Thats correct!",
  "onIncorrectAnswer": "Thats incorrect. The correct answer is: Airbnb.",
  "linkName": "Enzyme Github",
  "link": "https://github.com/airbnb/enzyme"
}];

module.exports = {
  jestQuestions 
}