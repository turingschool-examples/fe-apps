const semanticHTML = [
  {
    "id": 1,
    "prompt": "A container which typically contains the site logo and site navigation",
    "possibleChoices": [
    "<article>",
    "<header>",
    "<footer>"
    ],
    "correctAnswer": "<header>"
  },
  {
    "id": 2,
    "prompt": "A container which typically contains authorship, contact, and copyright information in addition to navigational links and a link back to the top of the web page",
    "possibleChoices": [
    "<section>",
    "<p>",
    "<footer>"
    ],
    "correctAnswer": "<footer>"
  },
  {
    "id": 3,
    "prompt": "Contains all of the content that is unique to a single web page and not repeated across multiple web pages",
    "possibleChoices": [
    "<section>",
    "<article>",
    "<main>"
    ],
    "correctAnswer": "<main>"
  },
  {
    "id": 4,
    "prompt": "Contains blocks of site navigation links",
    "possibleChoices": [
    "<nav>",
    "<header>",
    "<section>"
    ],
    "correctAnswer": "<nav>"
  },
  {
    "id": 5,
    "prompt": "Container that represents a group of commands that a user can perform or activate",
    "possibleChoices": [
    "<nav>",
    "<menu>",
    "<section>"
    ],
    "correctAnswer": "<menu>"
  },
  {
    "id": 6,
    "prompt": "Container that represents a standalone area, which doesn't have a more specific semantic element to represent it ",
    "possibleChoices": [
    "<section>",
    "<main>",
    "<p>"
    ],
    "correctAnswer": "<section>"
  },
  {
    "id": 7,
    "prompt": "Self-contained composition, which is intended to be independently distributable or reusable",
    "possibleChoices": [
    "<p>",
    "<section>",
    "<article>"
    ],
    "correctAnswer": "<article>"
  },
  {
    "id": 8,
    "prompt": "Ordered List",
    "possibleChoices": [
    "<li>",
    "<ul>",
    "<ol>"
    ],
    "correctAnswer": "<ol>"
  },
  {
    "id": 9,
    "prompt": "Unordered List",
    "possibleChoices": [
    "<li>",
    "<ul>",
    "<ol>"
    ],
    "correctAnswer": "<ul>"
  },
  {
    "id": 10,
    "prompt": "An item in a list",
    "possibleChoices": [
    "<li>",
    "<p>",
    "<h3>"
    ],
    "correctAnswer": "<li>"
  },
  {
    "id": 11,
    "prompt": "Paragraph",
    "possibleChoices": [
    "<textarea>",
    "<p>",
    "<section>"
    ],
    "correctAnswer": "<p>"
  },
  {
    "id": 12,
    "prompt": "Container for a directory of files and/or folders",
    "possibleChoices": [
    "<section>",
    "<p>",
    "<dir>"
    ],
    "correctAnswer": "<dir>"
  },
  {
    "id": 13,
    "prompt": "Element encloses a list of groups of terms and descriptions",
    "possibleChoices": [
    "<dl>",
    "<dt>",
    "<ol>"
    ],
    "correctAnswer": "<dl>"
  },
  {
    "id": 14,
    "prompt": "Term in a description or definition list",
    "possibleChoices": [
    "<li>",
    "<dt>",
    "<ol>"
    ],
    "correctAnswer": "<dt>"
  },
  {
    "id": 15,
    "prompt": "Creates a hyperlink to other web pages, files, locations within the same page, email addresses, or any other URL",
    "possibleChoices": [
    "<a>",
    "<cite>",
    "<p>"
    ],
    "correctAnswer": "<a>"
  },
  {
    "id": 16,
    "prompt": "Represents an abbreviation or acronym",
    "possibleChoices": [
    "<a>",
    "<abbr>",
    "<title>"
    ],
    "correctAnswer": "<abbr>"
  },
  {
    "id": 17,
    "prompt": "Produces a line break in text",
    "possibleChoices": [
    "<br>",
    "<h2>",
    "<p>"
    ],
    "correctAnswer": "<br>"
  },
  {
    "id": 18,
    "prompt": "Displays its contents styled in a fashion intended to indicate that the text is a short fragment of computer code",
    "possibleChoices": [
    "<cite>",
    "<h1>",
    "<code>"
    ],
    "correctAnswer": "<code>"
  },
  {
    "id": 19,
    "prompt": "Marks text that has stress emphasis",
    "possibleChoices": [
    "<em>",
    "<b>",
    "<i>"
    ],
    "correctAnswer": "<em>"
  },
  {
    "id": 20,
    "prompt": "Embeds an image into the document",
    "possibleChoices": [
    "<area>",
    "<a>",
    "<img>"
    ],
    "correctAnswer": "<img>"
  },
  {
    "id": 21,
    "prompt": "Element used to create interactive controls for web-based forms in order to accept data from the user",
    "possibleChoices": [
    "<button>",
    "<input>",
    "<textarea>"
    ],
    "correctAnswer": "<input>"
  },
  {
    "id": 22,
    "prompt": "Element represents a document section that contains interactive controls for submitting information to a web server",
    "possibleChoices": [
    "<form>",
    "<button>",
    "<article>"
    ],
    "correctAnswer": "<form>"
  },  
  {
    "id": 23,
    "prompt": "Element represents a caption for an item in a user interface",
    "possibleChoices": [
    "<p>",
    "<label>",
    "<h1>"
    ],
    "correctAnswer": "<label>"
  },
  {
    "id": 24,
    "prompt": "Element displays an indicator showing the completion progress of a task",
    "possibleChoices": [
    "<input>",
    "<form>",
    "<progress>"
    ],
    "correctAnswer": "<progress>"
  }, 
  {
    "id": 25,
    "prompt":"Highest Heading",
    "possibleChoices": [
    "<h1>",
    "<title>",
    "<header>"
    ],
    "correctAnswer": "<h1>"
  },
  {
    "id": 26,
    "prompt": "Smallest Heading",
    "possibleChoices": [
    "<h7>",
    "<h6>",
    "<p>"
    ],
    "correctAnswer": "<h6>"
  },
  {
    "id": 27,
    "prompt": "Element indicates that the enclosed HTML provides contact information for a person or people, or for an organization",
    "possibleChoices": [
    "<abbr>",
    "<a>",
    "<address>"
    ],
    "correctAnswer": "<address>"
  },
  {
    "id": 28,
    "prompt": "Represents tabular data, information presented in rows and columns of cells containing data",
    "possibleChoices": [
    "<table>",
    "<section>",
    "<td>"
    ],
    "correctAnswer": "<table>"
  },
  {
    "id": 29,
    "prompt": "Element indicates that the enclosed text is an extended quotation",
    "possibleChoices": [
    "<p>",
    "<section>",
    "<blockquote>"
    ],
    "correctAnswer": "<blockquote>"
  },
  {
    "id": 30,
    "prompt": "Element defines a hot-spot region on an image",
    "possibleChoices": [
    "<section>",
    "<area>",
    "<map>"
    ],
    "correctAnswer": "<area>"
  }
]

module.exports = {
  semanticHTML
}
