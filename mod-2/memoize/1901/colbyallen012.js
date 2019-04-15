// Flexbox flashcard dataset

const flexBox = [
  {
    "id": 1,
    "propertyOf": "Parent",
    "question": "What do you set the display to so you can create a container?",
    "correctAnswer": "Flex",
    "wrongAnswers": ["Grid", "Inline", "Inline-block"]
  },
  {
    "id": 2,
    "propertyOf": "Parent",
    "question": "Which flex-direction value stacks the items horizontally from left to right?",
    "correctAnswer": "Row",
    "wrongAnswers": ["Row-reverse", "Column", "Column-reverse"]
  },
  {
    "id": 3,
    "propertyOf": "Parent",
    "question": "What property would you use to define where the items align within a container?",
    "correctAnswer": "Justify-contents",
    "wrongAnswers": ["Justify-items", "Align-items","Align-contents"] 
  },
  {
    "id": 4,
    "propertyOf": "Parent",
    "question": "What property would you choose to center an item within a parent container?",
    "correctAnswer": "Align-item",
    "wrongAnswers": ["Align-center", "Middle", "Center"]
  },
  {
    "id": 5,
    "propertyOf": "Parent",
    "question": "What justify-content value aligns the flex items at the beginning of the container?",
    "correctAnswer": "Flex-start",
    "wrongAnswers": ["Start", "Flex-beginning", "Beginning"]
  },
  {
    "id": 6,
    "propertyOf": "Parent",
    "question": "Which property defines which orientation the container stacks the child items?",
    "correctAnswer": "Flex-direction",
    "wrongAnswers": ["Flex-items", "Flex-stack","Flex-topBottom"]
  },
  {
    "id": 7,
    "propertyOf": "Parent",
    "question": "Which property specifies whether the flex items should stay on one line, or drop down to the next line?",
    "correctAnswer": "Flex-wrap",
    "wrongAnswers": ["Flex-line", "Flex-noWrap", "Flex-unWrap"]
  },
  {
    "id": 8,
    "propertyOf": "Child",
    "question": "What property allows the child item to stretch in size relative to the rest of the items in the container?",
    "correctAnswer": "Flex-grow",
    "wrongAnswers": ["Flex-stretch", "Flex-length", "Flex-fill"]
  },
  {
    "id": 9,
    "propertyOf": "Child",
    "question": "What property allows the child item to decrease in size relative to the rest of the items in the container?",
    "correctAnswer": "Flex-shrink",
    "wrongAnswers": ["Flex-minimize", "Flex-fill", "Flex-downSize"]
  },
  {
    "id": 10,
    "propertyOf": "Parent",
    "question": "Which flex-direction value stacks the items vertically from top to bottom?",
    "correctAnswer": "Column",
    "wrongAnswers": ["Row", "topBottom", "topDown"]
  },
  {
    "id": 11,
    "propertyOf": "Parent",
    "question": "Which flex-direction value stacks the items vertically from bottom to top?",
    "correctAnswer": "Column-reverse",
    "wrongAnswers": ["bottomTop", "Column-ladder", "Column-down"]
  },
  {
    "id": 12,
    "propertyOf": "Parent",
    "question": "Which flex-direction value stacks the items horizontally from right to left?",
    "correctAnswer": "Row-reverse",
    "wrongAnswers": ["Row-backward", "Row-return", "Reverse"]
  },
  {
    "id": 13,
    "propertyOf": "Parent",
    "question": "Which flex-wrap value specifies that the flex items will not wrap to a new line?",
    "correctAnswer": "No-wrap",
    "wrongAnswers": ["Zero", "unWrap", "None"]
  },
  {
    "id": 14,
    "propertyOf": "Parent",
    "question": "What justify-content value aligns the flex items in the middle of the container?",
    "correctAnswer": "Center",
    "wrongAnswers": ["Middle", "Container-center", "Container-middle"]
  },
  {
    "id": 15,
    "propertyOf": "Parent",
    "question": "What justify-content value aligns the flex items at the end of the container?",
    "correctAnswer": "Flex-end",
    "wrongAnswers": ["Flex-last", "Flex-bottom", "Flex-finish"]
  },
  {
    "id": 16,
    "propertyOf": "Parent",
    "question": "What align-items value allows the item to fill the entire length of the container?",
    "correctAnswer": "Stretch",
    "wrongAnswers": ["Fill", "Contain", "Length"]
  },
  {
    "id": 17,
    "propertyOf": "Parent",
    "question": "What align-items value allows the item to align at the bottom of the container?",
    "correctAnswer": "Flex-end",
    "wrongAnswers": ["Flex-last", "Flex-bottom", "Flex-baseline"]
  },
  {
    "id": 18,
    "propertyOf": "Parent",
    "question": "What align-content value displays the items with equal space from one item to the next?",
    "correctAnswer": "Space-between",
    "wrongAnswers": ["Space-equal", "Equal", "Space-around"]
  },
  {
    "id": 19,
    "propertyOf": "Parent",
    "question": "What align-content value displays the items with equal space before, after, and between the next?",
    "correctAnswer": "Space-around",
    "wrongAnswers": ["Space-between", "Equal", "Space-equal" ]
  },
  {
    "id": 20,
    "propertyOf": "Child",
    "question": "What property specifies the initial length of a flex item?",
    "correctAnswer": "FLex-basis",
    "wrongAnswers": ["Flex-length", "Flex-stertch", "Flex-fill"]
  },
  {
    "id": 21,
    "propertyOf": "Child",
    "question": "What Property specifies the alignment of a specifc flex item?",
    "correctAnswer": "Align-self",
    "wrongAnswers": ["Align-item", "Align-child", "Align-element"]
  },
  {
    "id": 22,
    "propertyOf": "Parent",
    "question": "Without flex, what is another way sections on a webpage can be laid out?",
    "correctAnswer": "Block",
    "wrongAnswers": ["Grid", "Inline-block", "Block-inline"]
  },
  {
    "id": 23,
    "propertyOf": "Parent",
    "question": "What holds and displays flex items?",
    "correctAnswer": "Flex-container",
    "wrongAnswers": ["Flex-box", "Flex-holder", "Flex-wrapper"]
  },
  {
    "id": 24,
    "propertyOf": "Child",
    "question": "What objects are held within a flex container?",
    "correctAnswer": "Flex-item",
    "wrongAnswers": ["Flex-objects", "Flex-children", "Flex-things"]
  },
  {
    "id": 25,
    "propertyOf": "Parent",
    "question": "Which shorthand property can be used to set both flex-direction & flex-wrap?",
    "correctAnswer": "FLex-flow",
    "wrongAnswers": ["Flex-all", "Flex-combine", "Flex-both"]
  },
  {
    "id": 26,
    "propertyOf": "Parent",
    "question": "What is the default alignment for flex-direction?",
    "correctAnswer": "Row",
    "wrongAnswers": ["Column", "Inline", "Block"]
  },
  {
    "id": 27,
    "propertyOf": "Parent",
    "question": "What align-content value displays the items with uniform space between?",
    "correctAnswer": "Space-evenly",
    "wrongAnswers": ["Space-around", "Space-between", "Space-equally"]
  },
  {
    "id": 28,
    "propertyOf": "Parent",
    "question": "What is the default value for flex-wrap?",
    "correctAnswer": "No-wrap",
    "wrongAnswers": ["None", "Unwrap", "Zerowrap"]
  },
  {
    "id": 29,
    "propertyOf": "Parent",
    "question": "What is the default value for justify-content?",
    "correctAnswer": "Flex-start",
    "wrongAnswers": ["Flex-beginning", "Container-start", "Flex-start"]
  },
  {
    "id": 30,
    "propertyOf": "Parent",
    "question": "What is the default value for align-items?",
    "correctAnswer": "Stretch",
    "wrongAnswers": ["Fill", "Length", "Contain"]
  }
]

module.exports = {
  flexBox
}
