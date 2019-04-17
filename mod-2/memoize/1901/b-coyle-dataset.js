const accessibility = [
{
  "question": "What is accessibility?",
  "answer": "Is the design and creation of websites that can be used by everyone.",
  "id": 1,
  "category": "Definition"
},
{
  "question": "What is WCAG?",
  "answer": "Web Content Accessibility Guidelines-provides guidelines for creating accessible web sites.",
  "id": 2,
  "category": "Definition"
},
{
  "question": "What is ARIA?",
  "answer": "Accessible Rich Internet Applications-contains techniques for building fully accessible JS widgets.",
  "id": 3,
  "category": "Definition"
},
{
  "question": "What is Semantic HTML?",
  "answer": "The use of HTML elements to reinforce the meaning of information. Such as <main>, <section>, <footer>",
  "id": 4,
  "category": "Definition"
},
{
  "question": " <div> and <span> are semantic, empty elements.",
  "answer": "True",
  "id": 5,
  "category": "True or False"
},
{
  "question": "How would improve this to make it more web accessible?<h2>Make me more Accessible<h2><h1>Menu input example</h1><div><div>Save item by clicking</div><div>Or Me!</div></div>",
  "answer": "<h1>Make me more Accessible<h1><h2>Menu input example</h2><section><button role='button' aria-pressed='false'>Save item by clicking</button><button role='button'>Or Me!</button></section>",
  "id": 6,
  "category": "Improve the web functionality"
},
{
  "question": "Name at least three types of needs to be met by improving web accessibility.",
  "answer": "Visual: Visual impairments including blindness, various common types of low vision and poor eyesight, various types of color blindness.  Motor/mobility: e.g. difficulty or inability to use the hands, including tremors, muscle slowness, loss of fine muscle control, etc., due to conditions such as Parkinson's disease, muscular dystrophy, cerebral palsy, stroke.  Auditory: Deafness or hearing impairments, including individuals who are hard of hearing; Seizures: Photo epileptic seizures caused by visual strobe or flashing effects.  Cognitive and intellectual: Developmental disabilities, learning difficulties (dyslexia, dyscalculia, etc.), and cognitive disabilities of various origins, affecting memory, attention, developmental 'maturity', problem-solving and logic skills, etc.",
  "id": 7,
  "category": "Definition"
},
{
 "question": "What are the three main aspects of ARIA?",
  "answer": "Role, State, & Properties",
  "id": 8,
  "category": "Definition"
},
{
 "question": "Define Role.",
  "answer": "A role tells the browser what an element’s intended purpose is.",
  "id": 9,
  "category": "Definition"
},
{
 "question": "Define State.",
  "answer": "Information about the current status of an element that is expected to change frequently.",
  "id": 10,
  "category": "Definition"
},
{
 "question": "Define Properties",
  "answer": "Extra information about an element that is not generally expected to change.",
  "id": 11,
  "category": "Definition"
},
{
 "question": "aria label tells a user if they need to provide input on an element before a form is submitted ",
  "answer": "False. aria label provides additional information about an element. aria required tells a user if they need to provide input on an element before a form is submitted.",
  "id": 12,
  "category": "True or False"
},
{
 "question": "aria-controls - References an element that is controlled by the current element.",
  "answer": "True",
  "id": 13,
  "category": "True or False"
},
{
 "question": "How would you improve this to make it more web accessible?<img src='dog.jpg'>",
  "answer": "<img src='dog.jpg' alt='Small dog in Harry Potter costume'><figcaption>Image1. - Hogwarts, New Professor, Professor Puppins.</figcaption>",
  "id": 14,
  "category": "Improve the web functionality"
},
{
  "question": "How would you improve this to make it more web accessible?<p>Links Below:</p><ul><li><a href='#'>Click here</a></li><li><a href='#'>Read more..</a></li><li>Buy tickets to Mars <a href='#'>here</a></li></ul>",
  "answer": "<p>Links Below:</p><ul><li><a href='#' role='link' title='Find out more about dog breeds'>Find out more about dog breeds.</a></li><li>Read more about <a href='#' role='link' title='Find out more on healthy dog treats'>healthy dog treats.</a></li><li><a href='#' role=''link' title='Buy tickets to dog show'>Buy tickets to the Dog Show here</a></li></ul>",
  "id": 15,
  "category": "Improve the web functionality"
},
{
 "question": "How would you indicate the website is in English",
  "answer": "<html lang='en'>",
  "id": 16,
  "category": "Definition"
},
{
 "question": "Name at least 3 semantic HTML tags.",
  "answer": "<article> Defines an article.<aside> Defines content aside from the page content.<details> Defines additional details that the user can view or hide.<figcaption>  Defines a caption for a <figure> element.<figure>  Specifies self-contained content, like illustrations, diagrams, photos, code listings, etc.<footer>  Defines a footer for a document or section.<header>  Specifies a header for a document or section.<main>  Specifies the main content of a document.<mark>  Defines marked/highlighted text.<nav> Defines navigation links.<section> Defines a section in a document.<summary> Defines a visible heading for a <details> element.<time>  Defines a date/time.",
  "id": 17,
  "category": "Definition"
},
{
 "question": "Header tags hierarchies start at <h6> as the most important and <h1> is the least important.",
  "answer": "False: <h1> is usually associated with being the most important and is the largest while <h6> is the smallest and usually associated with headers that are less important.",
  "id": 18,
  "category": "True or False"
},
{
 "question": "How would you improve this to make it more web accessible? <body><h1>Website Main Heading</h1><section><h1>Heading</h1><section><h1>Subheading</h1></section></section><section><h1>Heading</h1></section></body>",
  "answer": "<body><h1>Website Main Title</h1><h2>Heading</h2><h3>Subheading</h3><h2>Heading</h2></body>",
  "id": 19,
  "category": "Improve the web functionality"
},
{
 "question": "Name two common web accessibility mistakes.",
  "answer": "Insufficient color contrast, lack of keyboard access, inefficient focus indicator, Missing or poor alt text on images, Text is too small/not resized properly, repetitive links, form control doesn't have a label, multimedia doesn't have audio descriptions",
  "id": 20,
  "category": "Definition"
},
{
 "question": "ARIA augments an element's inherent behavior.",
  "answer": "False. ARIA doesn't augment any of the element's inherent behavior; it won't make the element focusable or give it keyboard event listeners. That is still part of our development task.",
  "id": 21,
  "category": "True or False"
},
{
 "question": "ARIA can only set an implicit role.",
  "answer": "Every html element has an implicit role that is communicated to assistive technologies through the accessibility tree. Using ARIA, we can give an element an explicit role as well.",
  "id": 22,
  "category": "True or False"
},
{
 "question": "What ARIA attribute indicates the state of toggle buttons?",
  "answer": "aria-pressed(state). Possible values are false, mixed, true, or undefined.",
  "id": 23,
  "category": "Definition"
},
{
 "question": "aria label should be used as a first resort.",
  "answer": "False: Semantic HTML, implicit roles, explicit roles, properties. aria label should be used as a last resort.",
  "id": 24,
  "category": "True or False"
},
{
 "question": "What ARIA attribute indicates user input is required on the element before submitting a form.",
  "answer": "aria-required. The values for aria-required are false (default) or true.",
  "id": 25,
  "category": "Definition"
},
{
 "question": "How would you improve this to make it more web accessible?<input type='checkbox'=>Checkbox that's been checked</input>",
  "answer": "<input type='checkbox' checked>Checkbox that's been checked</input>",
  "id": 26,
  "category": "Improve the web functionality"
},
{
 "question": "What is an Accessibility tree?",
  "answer": "This loads information that’s available to assistive technologies, such as screen readers and screen magnifiers.",
  "id": 27,
  "category": "Definition"
},
{
 "question": "Besides accessibility for users with disabilities, why is ARIA important?",
  "answer": "ARIA allows you to make your code more semantically menaingful. This helps clarify why you wrote what you wrote to other developers, and your future self.",
  "id": 28,
  "category": "Definition"
},
{
 "question": "What does aria-invalid indicate?",
  "answer": "Indicates the entered value does not conform to the format expected by an application. Values could be grammar, false (default), spelling, or true.",
  "id": 29,
  "category": "Definition"
},
{
 "question": "What does aria-hidden indicate?",
  "answer": "Indicates that the element and all of its descendants are not visible or perceivable to any user. ",
  "id": 30,
  "category": "Definition"
}
]; 

module.exports ={
 accessibility 
}