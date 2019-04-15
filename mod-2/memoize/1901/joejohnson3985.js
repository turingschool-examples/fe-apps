const Terms = 
  [
    {
      "type": "html tag", 
      "term": "<address>", 
      "definition": "Indicates that the enclosed HTML provides contact information for a person or people, or for an organization."
    },
    {
      "type": "html tag", 
      "term": "<header>", 
      "definition": "Represents introductory content, typically a group of introductory or navigational aids."
    },
    {
      "type": "html tag", 
      "term": "<article>", 
      "definition": "Represents a self-contained composition in a document, page, application, or site, which is intended to be independently distributable or reusable."
    },
    {
      "type": "html tag", 
      "term": "<main>", 
      "definition": "Represents the dominant content of the <body> of a document."
    },
    {
      "type": "html tag", 
      "term": "<nav>", 
      "definition": "Represents a section of a page whose purpose is to provide navigation links."
    },
    {
      "type": "html tag", 
      "term": "<section>", 
      "definition": "Represents a standalone section which does not have a more specific semantic element to represent it"
    },
    {
      "type": "html tag", 
      "term": "<h1>-<h6>", 
      "definition": "Represent six levels of section headings from highest to lowest."
    },
    {
      "type": "html tag", 
      "term": "<blockquote>", 
      "definition": "Indicates that the enclosed text is an extended quotation."
    },
    {
      "type": "html tag", 
      "term": "<cite>", 
      "definition": "Is used to describe a reference to a cited creative work, and must include the title of that work."
    },
    {
      "type": "html tag", 
      "term": "<code>", 
      "definition": "Displays its contents styled in a fashion intended to indicate that the text is a short fragment of computer code."
    },
    {
      "type": "html tag", 
      "term": "<strong>", 
      "definition": "Indicates that its contents have strong importance, seriousness, or urgency. Browsers typically render the contents in bold type."
    },
    {
      "type": "html tag", 
      "term": "<time>", 
      "definition": "Represents a specific period in time."
    },
    {
      "type": "html tag", 
      "term": "<picture>", 
      "definition": "Contains zero or more <source> elements and one <img> element to provide versions of an image for different display/device scenarios."
    },
    {
      "type": "html tag", 
      "term": "<caption>", 
      "definition": "Specifies the caption (or title) of a table, and if used is always the first child of a <table>."
    },
    {
      "type": "html tag", 
      "term": "<label>", 
      "definition": "Represents a caption for a form item in a user interface."
    },
    {
      "type": "html tag", 
      "term": "<legend>", 
      "definition": "Represents a caption for the content of its parent <fieldset>"
    },
    {
      "type": "html tag", 
      "term": "<fieldset>", 
      "definition": "Is used to group several controls as well as labels within a web form."
    },
    {
      "type": "attribute", 
      "term": "role", 
      "definition": "Is used to define the purpose of element."
    },
    {
      "type": "attribute", 
      "term": "aria-valuemin", 
      "definition": "Is used to define the minimum value allowed for a range widget such as a slider, spinbutton or progressbar."
    },
    {
      "type": "attribute", 
      "term": "aria-valuemax", 
      "definition": "Is used to define the maximum value allowed for a range widget such as a slider, spinbutton or progressbar."
    },
    {
      "type": "attribute", 
      "term": "aria-valuenow", 
      "definition": "is used to define the current value for a range widget such as a slider, spinbutton or progressbar."
    },
    {
      "type": "attribute", 
      "term": "aria-valuetext", 
      "definition": "Is used to define the human readable text alternative of aria-valuenow for a range widget such as progressbar, spinbutton or slider. Only should be used when the rendered value cannot be accuratly represented as a number."
    },
    {
      "type": "attribute", 
      "term": "aria-controls", 
      "definition": "Is used to associate a control with the regions that it controls. Regions are identified just like an id in a div, and multiple regions can be associated with a control using a space"
    },
    {
      "type": "attribute", 
      "term": "aria-live", 
      "definition": "Is used to set the priority with which screen reader should treat updates to live regions - the possible settings are: off, polite or assertive. The default setting is off."
    },
    {
      "type": "attribute", 
      "term": "aria-labelledby", 
      "definition": "establishes relationships between objects and their label(s), and its value should be one or more element IDs, which refer to elements that have the text needed for labeling."
    },
    {
      "type": "attribute", 
      "term": "aria-owns", 
      "definition": "Is used to establish that an element that is separate in the DOM should be treated as a child of the current element, or to rearrange existing child elements into a different order."
    },
    {
      "type": "attribute", 
      "term": "aria-label", 
      "definition": " Is used to define a string that labels the current element. Use it in cases where a text label is not visible on the screen."
    },
    {
      "type": "attribute", 
      "term": "aria-required", 
      "definition": "Is used to indicate that the form element is required to complete the form."
    },
    {
      "type": "attribute", 
      "term": "aria-invalid", 
      "definition": "Is used to indicate that the entered value does not conform to the format expected by the application."
    },
    {
      "type": "attribute", 
      "term": "for", 
      "definition": "Describes elements which belongs to this one."
    }
  ]

// const practice = [
//   {
//     "type": "html tag",
//     "problem": "Screen grab of incorrect code",
//     "solution": "Screen grab of correct code",
//     "solutionTerms": []
//   },
//   {
//     "type": "html tag",
//     "problem": "Screen grab of incorrect code",
//     "solution": "Screen grab of correct code",
//     "solutionTerms": []

//   },
//   {
//     "type": "html tag",
//     "problem": "Screen grab of incorrect code",
//     "solution": "Screen grab of correct code",
//     "solutionTerms": []

//   },
//   {
//     "type": "html tag",
//     "problem": "Screen grab of incorrect code",
//     "solution": "Screen grab of correct code",
//     "solutionTerms": []

//   },
//   {
//     "type": "html tag",
//     "problem": "Screen grab of incorrect code",
//     "solution": "Screen grab of correct code",
//     "solutionTerms": []

//   },
//   {
//     "type": "attribute",
//     "problem": "Screen grab of incorrect code",
//     "solution": "Screen grab of correct code",
//     "solutionTerms": []

//   },
//   {
//     "type": "attribute",
//     "problem": "Screen grab of incorrect code",
//     "solution": "Screen grab of correct code",
//     "solutionTerms": []

//   },
//   {
//     "type": "attribute",
//     "problem": "Screen grab of incorrect code",
//     "solution": "Screen grab of correct code",
//     "solutionTerms": []

//   },
//   {
//     "type": "attribute",
//     "problem": "Screen grab of incorrect code",
//     "solution": "Screen grab of correct code",
//     "solutionTerms": []

//   },
//   {
//     "type": "attribute",
//     "problem": "Screen grab of incorrect code",
//     "solution": "Screen grab of correct code",
//     "solutionTerms": []

//   }
// ]

module.exports = {
  Terms
}