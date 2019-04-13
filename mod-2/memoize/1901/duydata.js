const categories = [
    {
        "name": "Indentation",
        "description": "When refering to 'Identation' in esLint this means we are talking about the stylistic way your code should look in the developer. Indentation makes your code more readable and is the first step into writing less spaghetti code. It also gives the reader visual ques for hierarchy and scoping.",
        "incorrectImg": "./images/incorrectIndent.png",
        "correctImg": "./images/correctIndent.png",
        "url": "https://eslint.org/docs/rules/indent"
    },
    {
        "name": "Key Spacing",
        "description": "When refering to 'Keyword/Function Spacing' in esLint we are talking about the structural style of a line of code. Spacing much like Identation helps you create more readable code. Spacing after declaration of a key word or function allows the compiler to understand what kind of code you are writing. It can also determine if a piece of code you wrote works as well.",
        "incorrectImg": "./images/incorrectSpace.png",
        "correctImg": "./images/correctSpace.png",
        "url": "https://eslint.org/docs/rules/key-spacing"
    },
    {
        "name": "No Unused Vars",
        "description": "When refering to 'Unused Variables' in esLint we are talking about the variables that were declared and are never used. Coders make the mistake of creating variables and never using them all the time. This is a practice that should be erased from memory ASAP. When you forget to use or even just forget that a variable is there it makes your code look very sloppy and unprofessional. It can also make your code hard to understand and follow.",
        "incorrectImg": "./images/incorrectVar.png",
        "correctImg": "./images/correctVar.png",
        "url": "https://eslint.org/docs/rules/no-unused-vars"
    }
];

const quizQuestions = [
    {
        "name": "Identation",
        "quiz": "images/quiz1.png",
        "answer": "images/answer1.png",
        "id": 1
    },
    {
        "name": "Identation",
        "quiz": "images/quiz3.png",
        "answer": "images/answer3.png",
        "id": 2
    },
    {
        "name": "No Unused Vars",
        "quiz": "images/quiz11.png",
        "answer": "images/answer11.png",
        "id": 3
    },
    {
        "name": "Key Spacing",
        "quiz": "images/quiz24.png",
        "answer": "images/answer24.png",
        "id": 4
    },
    {
        "name": "Identation",
        "quiz": "images/quiz2.png",
        "answer": "images/answer2.png",
        "id": 5
    },
    {
        "name": "No Unused Vars",
        "quiz": "images/quiz25.png",
        "answer": "images/answer25.png",
        "id": 6
    },
    {
        "name": "Identation",
        "quiz": "images/quiz6.png",
        "answer": "images/answer6.png",
        "id": 7
    },
    {
        "name": "Key Spacing",
        "quiz": "images/quiz13.png",
        "answer": "images/answer13.png",
        "id": 8
    },
    {
        "name": "Key Spacing",
        "quiz": "images/quiz17.png",
        "answer": "images/answer17.png",
        "id": 9
    },
    {
        "name": "Identation",
        "quiz": "images/quiz10.png",
        "answer": "images/answer10.png",
        "id": 10
    },
    {
        "name": "No Unused Vars",
        "quiz": "images/quiz21.png",
        "answer": "images/answer21.png",
        "id": 11
    },
    {
        "name": "Identation",
        "quiz": "images/quiz9.png",
        "answer": "images/answer9.png",
        "id": 12
    },
    {
        "name": "Key Spacing",
        "quiz": "images/quiz12.png",
        "answer": "images/answer12.png",
        "id": 13
    },
    {
        "name": "Identation",
        "quiz": "images/quiz8.png",
        "answer": "images/answer8.png",
        "id": 14
    },
    {
        "name": "Key Spacing",
        "quiz": "images/quiz16.png",
        "answer": "images/answer16.png",
        "id": 15
    },
    {
        "name": "No Unused Vars",
        "quiz": "images/quiz22.png",
        "answer": "images/answer22.png",
        "id": 16
    },
    {
        "name": "No Unused Vars",
        "quiz": "images/quiz23.png",
        "answer": "images/answer23.png",
        "id": 17
    },
    {
        "name": "Identation",
        "quiz": "images/quiz4.png",
        "answer": "images/answer4.png",
        "id": 18
    },
    {
        "name": "Identation",
        "quiz": "images/quiz5.png",
        "answer": "images/answer5.png",
        "id": 19
    },
    {
        "name": "Identation",
        "quiz": "images/quiz7.png",
        "answer": "images/answer7.png",
        "id": 20
    },
    {
        "name": "Key Spacing",
        "quiz": "images/quiz14.png",
        "answer": "images/answer14.png",
        "id": 21
    },
    {
        "name": "Key Spacing",
        "quiz": "images/quiz18.png",
        "answer": "images/answer18.png",
        "id": 22
    },
    {
        "name": "No Unused Vars",
        "quiz": "images/quiz28.png",
        "answer": "images/answer28.png",
        "id": 23
    },
    {
        "name": "No Unused Vars",
        "quiz": "images/quiz26.png",
        "answer": "images/answer26.png",
        "id": 24
    },
    {
        "name": "No Unused Vars",
        "quiz": "images/quiz30.png",
        "answer": "images/answer30.png",
        "id": 25
    },
    {
        "name": "Key Spacing",
        "quiz": "images/quiz19.png",
        "answer": "images/answer19.png",
        "id": 26
    },
    {
        "name": "Key Spacing",
        "quiz": "images/quiz15.png",
        "answer": "images/answer15.png",
        "id": 27
    },
    {
        "name": "No Unsed Vars",
        "quiz": "images/quiz27.png",
        "answer": "images/answer27.png",
        "id": 28
    },
    {
        "name": "Key Spacing",
        "quiz": "images/quiz20.png",
        "answer": "images/answer20.png",
        "id": 29
    },
    {
        "name": "No Unused Vars",
        "quiz": "images/quiz29.png",
        "answer": "images/answer29.png",
        "id": 30
    },
];

module.exports = {
    categories,
    quizQuestions
}