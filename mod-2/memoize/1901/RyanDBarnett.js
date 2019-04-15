const cards = [
  {
    "id": "1",
    "question": "Which of the 3 ARIA main features defines what an element is or does?",
    "choices": ["Properties","States","Roles"],
    "answer": "Roles"
  },
  {
    "id": "2",
    "question": "Which of the 3 ARIA main features can be used to give HTML elements extra meaning or semantics?",
    "choices": ["Properties","States","Roles"],
    "answer": "Properties"
  },
  {
    "id": "3",
    "question": "Which of the 3 ARIA main features can be used to define the current condition of an element",
    "choices": ["Properties","States","Roles"],
    "answer": "States"
  },
  {
    "id": "4",
    "question": "Do ARIA properties change throughout the lifecycle of an app?",
    "choices": ["Yes","No"],
    "answer": "No"
  },
  {
    "id": "5",
    "question": "Do ARIA states change throughout the lifecycle of an app?",
    "choices": ["Yes","No"],
    "answer": "Yes"
  },
  {
    "id": "6",
    "question": "Do ARIA attributes affect webpage structure?",
    "choices": ["Yes","No"],
    "answer": "No"
  },
  {
    "id": "7",
    "question": "Do ARIA attributes affect the DOM?",
    "choices": ["Yes","No"],
    "answer": "No"
  },
  {
    "id": "8",
    "question": "Do ARIA attributes affect the browser's accessibility API?",
    "choices": ["Yes","No"],
    "answer": "Yes"
  },
  {
    "id": "9",
    "question": "While in the browser where do screen readers get their information from?",
    "choices": ["The DOM","The browser's accessibility API","The ARIA API"],
    "answer": "The browser's accessibility API"
  },
  {
    "id": "10",
    "question": "Can ARIA attributes be used to select HTML elements for CSS?",
    "choices": ["Yes","No"],
    "answer": "Yes"
  },
  {
    "id": "11",
    "question": "Is ARIA supported across all browsers?",
    "choices": ["Yes","No"],
    "answer": "No"
  },
  {
    "id": "12",
    "question": "Should you apply ARIA attributes to every element that the user will interact with?",
    "choices": ["Yes","No"],
    "answer": "No"
  },
  {
    "id": "13",
    "question": "Which ARIA attribute can be used to report dynamic content updates?",
    "choices": ["aria-live","aria-controls","aria-atomic"],
    "answer": "aria-live" 
  },
  {
    "id": "14",
    "question": "Do HTML div elements provide any semantic meaning to screen readers?",
    "choices": ["Yes","No"],
    "answer": "No" 
  },
  {
    "id": "15",
    "question": "Do HTML header elements provide any semantic meaning to screen readers?",
    "choices": ["Yes","No"],
    "answer": "Yes" 
  },
  {
    "id": "16",
    "question": "Do HTML span elements provide any semantic meaning to screen readers?",
    "choices": ["Yes","No"],
    "answer": "No" 
  },
  {
    "id": "17",
    "question": "Do HTML nav elements provide any semantic meaning to screen readers?",
    "choices": ["Yes","No"],
    "answer": "Yes" 
  },
  {
    "id": "18",
    "question": "Do HTML section elements provide any semantic meaning to screen readers?",
    "choices": ["Yes","No"],
    "answer": "Yes" 
  },
  {
    "id": "19",
    "question": "Which aria attribute gives an HTML element a descriptive label that will be read out by a screenreader",
    "choices": ["aria-atomic","aria-describedby","aria-label"],
    "answer": "aria-label" 
  },
  {
    "id": "20",
    "question": "Are all semantic HTML5 elements recognized in older browsers?",
    "choices": ["Yes","No"],
    "answer": "No" 
  },
  {
    "id": "21",
    "question": "If an aria-live property is set to this value then updates to this element will not be announced. What is the value?",
    "choices": ["polite","off","assertive","rude"],
    "answer": "off"
  },
  {
    "id": "22",
    "question": "If an aria-live property is set to this value then updates to this element will only be announced if the user is idle. What is the value?",
    "choices": ["polite","off","assertive","rude"],
    "answer": "polite"
  },
  {
    "id": "23",
    "question": "If an aria-live property is set to this value then updates to this element will only be announced to the user as soon as possible. What is the value?",
    "choices": ["polite","off","assertive","rude"],
    "answer": "assertive"
  },
  {
    "id": "24",
    "question": "Should you use the ARIA attribute role='alert' for static information that is not being dynamically updated?",
    "choices": ["Yes","No"],
    "answer": "No"
  },
  {
    "id": "25",
    "question": "Which of the three main ARIA features (role, property, and state) does the value banner fall under",
    "choices": ["role","property","state"],
    "answer": "role"
  },
  {
    "id": "26",
    "question": "Which of the three main ARIA features (role, property, and state) does the value navigation fall under",
    "choices": ["role","property","state"],
    "answer": "role"
  },
  {
    "id": "27",
    "question": "Which of the three main ARIA features (role, property, and state) does the value label fall under",
    "choices": ["role","property","state"],
    "answer": "property"
  },
  {
    "id": "28",
    "question": "Which of the three main ARIA features (role, property, and state) does aria-required fall under",
    "choices": ["role","property","state"],
    "answer": "property"
  },
  {
    "id": "29",
    "question": "Which of the three main ARIA features (role, property, and state) does aria-checked fall under",
    "choices": ["role","property","state"],
    "answer": "state"
  },
  {
    "id": "30",
    "question": "Which of the three main ARIA features (role, property, and state) does aria-disabled fall under",
    "choices": ["role","property","state"],
    "answer": "state"
  },
  {
    "id": "31",
    "question": "Which of the three main ARIA features (role, property, and state) does aria-hidden fall under",
    "choices": ["role","property","state"],
    "answer": "state"
  },
  {
    "id": "32",
    "question": "Which of the three main ARIA features (role, property, and state) does aria-expanded fall under",
    "choices": ["role","property","state"],
    "answer": "state"
  }
]

module.exports = cards;
