const questions = [
{
    "questionSetKey": 1,
    "language": "HTML",
    "codeSnippetQ": "https://i.imgur.com/9AC4cch.png",
    "answer": ["className should be class", "className should be class and the regexp[a - Z]\\w+ should be[A - Z]\\w+", "The label should be in a seperate div from the input div"],
    "answerId": 2
  }, {
    "questionSetKey": 2,
    "language": "HTML",
    "codeSnippetQ": "https://i.imgur.com/8YZDBm3.png",
    "answer": ["The images are not correctly linked", "The li tags need to be inside a pair of ul tags", "The alt tag values are not descriptive enough"],
    "answerId": 2
  }, {
    "questionSetKey": 3,
    "language": "HTML",
    "codeSnippetQ": "https://i.imgur.com/LQGnX9V.png",
    "answer": ["class needs to be ClassName", "The p tags should be h1 tags", "The p tags should be in the one div with a class of header"],
    "answerId": 3
  }, {
    "questionSetKey": 4,
    "language": "HTML",
    "codeSnippetQ": "https://i.imgur.com/1psELpb.png",
    "answer": ["There should only be one script tag", " The script tags need to be in the head tag, above the body tag", "The h1 tag and p tags should each be in a div "],
    "answerId": 1
  }, {
    "questionSetKey": 5,
    "language": "HTML",
    "codeSnippetQ": "https://i.imgur.com/Wiw2tQU.png",
    "answer": ["The class names are not descriptive enough", "My Site should be lower case", "There should only be one br tag"],
    "answerId": 3
  }, {
    "questionSetKey": 6,
    "language": "CSS",
    "codeSnippetQ": "https://i.imgur.com/87s4k2V.png",
    "answer": ["The hex codes should be six characters long", "The .nav class should not be a class but an html element", "The color and font size attribute should be assigned to both classes using \".class, .class {}\""],
    "answerId": 3
  }, {
    "questionSetKey": 7,
    "language": "CSS",
    "codeSnippetQ": "https://i.imgur.com/YaoysuA.png",
    "answer": ["The 0 px should be written without the unit of px", "The margin is too small", "The color hex codes should be six charatcers"],
    "answerId": 1
  }, {
    "questionSetKey": 8,
    "language": "CSS",
    "codeSnippetQ": "https://i.imgur.com/IUuG70p.png",
    "answer": ["If a css attribute has a value of 0, it does not need to be declared", "A normalize file needs to be used in this document", "The font needs backup font selections"],
    "answerId": 3
  }, {
    "questionSetKey": 9,
    "language": "CSS",
    "codeSnippetQ": "https://i.imgur.com/we0jq35.png",
    "answer": ["Section needs to be written as .section to be a class", "Goldenrod is not a built in color", "Hex codes should be used to replace the color names"],
    "answerId": 3
  }, {
    "questionSetKey": 10,
    "language": "CSS",
    "codeSnippetQ": "https://i.imgur.com/u9ga790.png",
    "answer": ["Unsure, it looks good to me", "The css attributes are out of alphabetical order", "The margin declarations and boder declarations can be combined into one margin declaration and one border declaration"],
    "answerId": 3
  }, {
    "questionSetKey": 11,
    "language": "JavaScript",
    "codeSnippetQ": "https://i.imgur.com/xEPfK3p.png",
    "answer": ["Zero is a falsy value so it can be refactored using a bang operator", "boo is already assigned a value", "foo is undefined"],
    "answerId": 1
  }, {
    "questionSetKey": 12,
    "language": "JavaScript",
    "codeSnippetQ": "https://i.imgur.com/bKBJUx7.png",
    "answer": ["This code is jibberish", "The if statement needs to have an if, else", "This can be refactored by assigning boo to if not foo then 1 else 2 using a bang operator"],
    "answerId": 3
  }, {
    "questionSetKey": 13,
    "language": "JavaScript",
    "codeSnippetQ": "https://i.imgur.com/q2FAzaB.png",
    "answer": ["Zero does not have any value so foo and boo need to be assigned another value", "The assignment operator should not be used to check value and boo is not being reassigned inside the if statement", "boo is not being reassigned inside the if statement"],
    "answerId": 2
  }, {
    "questionSetKey": 14,
    "language": "JavaScript",
    "codeSnippetQ": "https://i.imgur.com/5p8lEbC.png",
    "answer": ["foo is truthy and the value of foo does not need to be checked", "boo is the incorrect data type and should be written as an integer", "return should be outside the if statement"],
    "answerId": 2
  }, {
    "questionSetKey": 15,
    "language": "JavaScript",
    "codeSnippetQ": "https://i.imgur.com/WOrTsca.png",
    "answer": ["The return is missing a semicolon", "let num needs to be declared inside the if statement", "let is block scoped, thus the console log needs to be inside the if statement"],
    "answerId": 3
  }, {
    "questionSetKey": 16,
    "language": "JavaScript",
    "codeSnippetQ": "https://i.imgur.com/2tY7f7V.png",
    "answer": ["i must be greater than the arr.length", "i cannot be added to a number", "The for loop needs to be assigned to a variable and the variable needs to be returned"],
    "answerId": 1
  }, {
    "questionSetKey": 17,
    "language": "JavaScript",
    "codeSnippetQ": "https://i.imgur.com/UNUbYuJ.png",
    "answer": ["The accumulator needs to be returned", "The prototype requires an initial value", "The accumulator needs to be returned and requires an initial value"],
    "answerId": 3
  }, {
    "questionSetKey": 18,
    "language": "JavaScript",
    "codeSnippetQ": "https://i.imgur.com/GV2qywc.png",
    "answer": [".split is a string prototype", ".split needs an accumulator", "There needs to be content between the '' in .split "],
    "answerId": 1
  }, {
    "questionSetKey": 19,
    "language": "JavaScript",
    "codeSnippetQ": "https://i.imgur.com/KWK5XVA.png",
    "answer": ["The if statement cannot have threee variables", "foo + shoo needs to be returned", "The else needs to be returned and the if statement needs a double &&"],
    "answerId": 3
  }, {
    "questionSetKey": 20,
    "language": "JavaScript",
    "codeSnippetQ": "https://i.imgur.com/0F9DQZd.png",
    "answer": [" The modulus expression needs to check for a remainder of zero", "The if statement needs to be assigned to a variable", " The modulus expression can only be used with numbers, not variables "],
    "answerId": 1
  }, {
    "questionSetKey": 21,
    "language": "JSX",
    "codeSnippetQ": "https://i.imgur.com/hejBrO7.png",
    "answer": ["There needs to be a space between render and the parenthesis", "class needs to be ClassName", "Only one html tag can be rendered at a time"],
    "answerId": 2
  }, {
    "questionSetKey": 22,
    "language": "JSX",
    "codeSnippetQ": "https://i.imgur.com/W3wo1ZR.png",
    "answer": ["props needs to be passed through the render", "The h1 should be in one div and the p tags in the other", "All rendered content needs to be encapsulated in one div"],
    "answerId": 3
  }, {
    "questionSetKey": 23,
    "language": "JSX",
    "codeSnippetQ": "https://i.imgur.com/8Us58BJ.png",
    "answer": ["The className:'large' key value pair needs to be in braces", "The React.createElement is unnecessary", "props needs to be passed into the render"],
    "answerId": 1
  }, {
    "questionSetKey": 24,
    "language": "SCSS",
    "codeSnippetQ": "https://i.imgur.com/EIrpF2G.png",
    "answer": ["SCSS declarations should not be inside an object", "Variables cannot be used in SCSS", "The $ symbol needs to be used to declare a variable"],
    "answerId": 3
  }, {
    "questionSetKey": 25,
    "language": "SCSS",
    "codeSnippetQ": "https://i.imgur.com/RazEiZW.png",
    "answer": ["@includes needs to be declared before rounded inside the class of box", "mixins cannot be used in SCSS", "The $ symbol reverses the value of the declarartion and should not be used"],
    "answerId": 1
  }, {
    "questionSetKey": 26,
    "language": "React",
    "codeSnippetQ": "https://i.imgur.com/eMTe7co.png",
    "answer": ["Arrow functions cannot be used in React", "state is set using this.setState()", "state cannot have a value of null"],
    "answerId": 2
  },

  {
    "questionSetKey": 27,
    "language": "React",
    "codeSnippetQ": "https://i.imgur.com/XXc1uyW.png",
    "answer": ["state should only be set once in each code block due to the sync nature of state in React", "this.setState() cannot take an object", "state should only be set once in each code block due to the async nature of state in React"],
    "answerId": 3
  }, {
    "questionSetKey": 28,
    "language": "React",
    "codeSnippetQ": "https://i.imgur.com/O0zR1Cb.png",
    "answer": ["The component name needs to be lower case", "All properties need to be declared without '' ", "newInput needs to be this.newInput"],
    "answerId": 2
  }, {
    "questionSetKey": 29,
    "language": "React",
    "codeSnippetQ": "https://i.imgur.com/CcVwDxy.png",
    "answer": ["A state value needs to be declared", "export default should be stated at the end of the class", "The component name needs to be upper case"],
    "answerId": 3
  }, {
    "questionSetKey": 30,
    "language": "React",
    "codeSnippetQ": "https://i.imgur.com/OB9rLnE.png",
    "answer": ["This needs to be bound using an arrow function in ES6", "this.props needs to be passed into the method", "this.props.valaue is already falsy and its value does not need to be checked in the if statement"],
    "answerId": 1
  }
]

export default questions 