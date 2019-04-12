// Flexbox flashcard dataset

const flexBox = [
  {
    "id": 1,
    "propertyOf": "Parent",
    "question": "What do you set the display to so you can create a container?",
    "wrongAnswer1": "",
    "wrongAnswer2": "",
    "correctAnswer": "Flex",
    "wrongAnswer3": ""
  },
  {
    "id": 2,
    "propertyOf": "Parent",
    "question": "Which flex-direction value stacks the items horizontally from left to right?",
    "wrongAnswer1": "",
    "correctAnswer": "Row",
    "wrongAnswer2": "",
    "wrongAnswer3": ""
  },
  {
    "id": 3,
    "propertyOf": "Parent",
    "question": "What property would you use to define where the items align within a container?",
    "correctAnswer": "Justify Content",
    "wrongAnswer1": "",
    "wrongAnswer2": "",
    "wrongAnswer3": ""
  },
  {
    "id": 4,
    "propertyOf": "Parent",
    "question": "What property would you choose to center an item within a parent container?",
    "wrongAnswer1": "",
    "wrongAnswer2": "",
    "wrongAnswer3": "",
    "correctAnswer": "Align Item"
  },
  {
    "id": 5,
    "propertyOf": "Parent",
    "question": "What justify-content value aligns the flex items at the beginning of the container?",
    "wrongAnswer1": "",
    "wrongAnswer2": "",
    "correctAnswer": "Flex Start",
    "wrongAnswer3": ""
  },
  {
    "id": 6,
    "propertyOf": "Parent",
    "question": "Which property defines which orientation the container stacks the child items?",
    "correctAnswer": "Flex Direction",
    "wrongAnswer1": "",
    "wrongAnswer2": "",
    "wrongAnswer3": ""
  },
  {
    "id": 7,
    "propertyOf": "Parent",
    "question": "Which property specifies whether the flex items should stay on one line, or drop down to the next line?",
    "wrongAnswer1": "",
    "correctAnswer": "Flex Wrap",
    "wrongAnswer2": "",
    "wrongAnswer3": ""
  },
  {
    "id": 8,
    "propertyOf": "Child",
    "question": "What property allows the child item to stretch in size relative to the rest of the items in the container?",
    "correctAnswer": "Flex Grow",
    "wrongAnswer1": "",
    "wrongAnswer2": "",
    "wrongAnswer3": ""
  },
  {
    "id": 9,
    "propertyOf": "Child",
    "question": "What property allows the child item to decrease in size relative to the rest of the items in the container?",
    "wrongAnswer1": "",
    "wrongAnswer2": "",
    "correctAnswer": "Flex Shrink",
    "wrongAnswer3": ""
  },
  {
    "id": 10,
    "propertyOf": "Parent",
    "question": "Which flex-direction value stacks the items vertically from top to bottom?",
    "wrongAnswer1": "",
    "correctAnswer": "Column",
    "wrongAnswer2": "",
    "wrongAnswer3": ""
  },
  {
    "id": 11,
    "propertyOf": "Parent",
    "question": "Which flex-direction value stacks the items vertically from bottom to top?",
    "wrongAnswer1": "",
    "wrongAnswer2": "",
    "wrongAnswer3": "",
    "correctAnswer": "Column Reverse"
  },
  {
    "id": 12,
    "propertyOf": "Parent",
    "question": "Which flex-direction value stacks the items horizontally from left to right?",
    "wrongAnswer1": "",
    "wrongAnswer2": "",
    "wrongAnswer3": "",
    "correctAnswer": "Row Reverse"
  },
  {
    "id": 13,
    "propertyOf": "Parent",
    "question": "Which flex-wrap value specifies that the flex items will not wrap to a new line?",
    "wrongAnswer1": "",
    "wrongAnswer2": "",
    "wrongAnswer3": "",
    "correctAnswer": "No Wrap"
  },
  {
    "id": 14,
    "propertyOf": "Parent",
    "question": "What justify-content value aligns the flex items in the middle of the container?",
    "wrongAnswer1": "",
    "wrongAnswer2": "",
    "correctAnswer": "Center",
    "wrongAnswer3": ""
  },
  {
    "id": 15,
    "propertyOf": "Parent",
    "question": "What justify-content value aligns the flex items at the end of the container?",
    "correctAnswer": "Flex End",
    "wrongAnswer1": "",
    "wrongAnswer2": "",
    "wrongAnswer3": ""
  },
  {
    "id": 16,
    "propertyOf": "Parent",
    "question": "What align-items value allows the item to fill the entire length of the container?",
    "correctAnswer": "Stretch",
    "wrongAnswer1": "",
    "wrongAnswer2": "",
    "wrongAnswer3": ""
  },
  {
    "id": 17,
    "propertyOf": "Parent",
    "question": "What align-items value allows the item to align at the bottom of the container?",
    "wrongAnswer1": "",
    "correctAnswer": "Flex End",
    "wrongAnswer2": "",
    "wrongAnswer3": ""
  },
  {
    "id": 18,
    "propertyOf": "Parent",
    "question": "What align-content value displays the items with equal space from one item to the next?",
    "wrongAnswer1": "",
    "wrongAnswer2": "",
    "wrongAnswer3": "",
    "correctAnswer": "Space Between"
  },
  {
    "id": 19,
    "propertyOf": "Parent",
    "question": "What align-content value displays the items with equal space before, after, and between the next?",
    "wrongAnswer1": "",
    "wrongAnswer2": "",
    "correctAnswer": "Space Around",
    "wrongAnswer3": ""
  },
  {
    "id": 20,
    "propertyOf": "Child",
    "question": "What property specifies the initial length of a flex item?",
    "wrongAnswer1": "",
    "wrongAnswer2": "",
    "correctAnswer": "FLex Basis",
    "wrongAnswer3": ""
  },
  {
    "id": 21,
    "propertyOf": "Child",
    "question": "What Property specifies the alignment of a specifc flex item?",
    "wrongAnswer1": "",
    "wrongAnswer2": "",
    "correctAnswer": "Align Self",
    "wrongAnswer3": ""
  },
  {
    "id": 22,
    "propertyOf": "Parent",
    "question": "Without flex, what is another way sections on a webpage can be laid out?",
    "correctAnswer": "Block",
    "wrongAnswer1": "",
    "wrongAnswer2": "",
    "wrongAnswer3": ""
  },
  {
    "id": 23,
    "propertyOf": "Parent",
    "question": "What holds and displays flex items?",
    "wrongAnswer1": "",
    "wrongAnswer2": "",
    "wrongAnswer3": "",
    "correctAnswer": "Flex Container"
  },
  {
    "id": 24,
    "propertyOf": "Child",
    "question": "What objects are held within a flex container?",
    "wrongAnswer1": "",
    "correctAnswer": "Flex Item",
    "wrongAnswer2": "",
    "wrongAnswer3": ""
  },
  {
    "id": 25,
    "propertyOf": "Parent",
    "question": "Which shorthand property can be used to set both flex-direction & flex-wrap?",
    "wrongAnswer1": "",
    "correctAnswer": "FLex Flow",
    "wrongAnswer2": "",
    "wrongAnswer3": ""
  },
  {
    "id": 26,
    "propertyOf": "Parent",
    "question": "What is the default alignment for flex-direction?",
    "wrongAnswer1": "",
    "wrongAnswer2": "",
    "wrongAnswer3": "",
    "correctAnswer": "Row"
  },
  {
    "id": 27,
    "propertyOf": "Parent",
    "question": "What align-content value displays the items with uniform space between?",
    "wrongAnswer1": "",
    "wrongAnswer2": "",
    "correctAnswer": "Space Evenly",
    "wrongAnswer3": ""
  },
  {
    "id": 28,
    "propertyOf": "Parent",
    "question": "What is the default value for flex-wrap?",
    "wrongAnswer1": "",
    "wrongAnswer2": "",
    "wrongAnswer3": "",
    "correctAnswer": "No Wrap"
  },
  {
    "id": 29,
    "propertyOf": "Parent",
    "question": "What is the default value for justify-content?",
    "correctAnswer": "Flex Start",
    "wrongAnswer1": "",
    "wrongAnswer2": "",
    "wrongAnswer3": ""
  },
  {
    "id": 30,
    "propertyOf": "Parent",
    "question": "What is the default value for align-items?",
    "wrongAnswer1": "",
    "wrongAnswer2": "",
    "correctAnswer": "Stretch",
    "wrongAnswer3": ""
  }
]
