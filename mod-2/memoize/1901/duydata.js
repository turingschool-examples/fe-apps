const categories = [
    {
        "name": "Indentation",
        "description": "When refering to 'Indentation' in esLint this means we are talking about the stylistic way your code should look in the developer. Indentation makes your code more readable and is the first step into writing less spaghetti code. It also gives the reader visual ques for hierarchy and scoping.",
        "incorrectImg": "https://i.imgur.com/oR17Hke.png",
        "correctImg": "https://i.imgur.com/YIp5OaH.png",
        "url": "https://eslint.org/docs/rules/indent"
    },
    {
        "name": "Key Spacing",
        "description": "When refering to 'Keyword/Function Spacing' in esLint we are talking about the structural style of a line of code. Spacing much like Indentation helps you create more readable code. Spacing after declaration of a key word or function allows the compiler to understand what kind of code you are writing. It can also determine if a piece of code you wrote works as well.",
        "incorrectImg": "https://i.imgur.com/2sbdf12.png",
        "correctImg": "https://i.imgur.com/VX72PJh.png",
        "url": "https://eslint.org/docs/rules/key-spacing"
    },
    {
        "name": "No Unused Vars",
        "description": "When refering to 'Unused Variables' in esLint we are talking about the variables that were declared and are never used. Coders make the mistake of creating variables and never using them all the time. This is a practice that should be erased from memory ASAP. When you forget to use or even just forget that a variable is there it makes your code look very sloppy and unprofessional. It can also make your code hard to understand and follow.",
        "incorrectImg": "https://i.imgur.com/9FYRe1J.png",
        "correctImg": "https://i.imgur.com/wvWqYfb.png",
        "url": "https://eslint.org/docs/rules/no-unused-vars"
    }
];

const quizQuestions = [
    {
        "name": "Indentation",
        "quiz": "https://i.imgur.com/Mglgl9Y.png",
        "answer": "https://i.imgur.com/Tajm3yU.png",
        "id": 1
    },
    {
        "name": "Indentation",
        "quiz": "https://i.imgur.com/0pEnCe4.png",
        "answer": "https://i.imgur.com/pJN3TaQ.png",
        "id": 2
    },
    {
        "name": "No Unused Vars",
        "quiz": "https://i.imgur.com/7c32ZLd.png",
        "answer": "https://i.imgur.com/789uhJG.png",
        "id": 3
    },
    {
        "name": "Key Spacing",
        "quiz": "https://i.imgur.com/6F1XUXC.png",
        "answer": "https://i.imgur.com/gcQ23xw.png",
        "id": 4
    },
    {
        "name": "Indentation",
        "quiz": "https://i.imgur.com/zyHf9tu.png",
        "answer": "https://i.imgur.com/ERtt0rn.png",
        "id": 5
    },
    {
        "name": "No Unused Vars",
        "quiz": "https://i.imgur.com/086Mqwf.png",
        "answer": "https://i.imgur.com/yYlbLNe.png",
        "id": 6
    },
    {
        "name": "Indentation",
        "quiz": "https://i.imgur.com/JkVvY2Q.png",
        "answer": "https://i.imgur.com/SVJW4ql.png",
        "id": 7
    },
    {
        "name": "Key Spacing",
        "quiz": "https://i.imgur.com/kHhrC0x.png",
        "answer": "https://i.imgur.com/eiTA9Wc.png",
        "id": 8
    },
    {
        "name": "Key Spacing",
        "quiz": "https://i.imgur.com/zLKQfb2.png",
        "answer": "https://i.imgur.com/zmqyVHy.png",
        "id": 9
    },
    {
        "name": "Indentation",
        "quiz": "https://i.imgur.com/3dwoyN8.png",
        "answer": "https://i.imgur.com/m2zZ2ZB.png",
        "id": 10
    },
    {
        "name": "No Unused Vars",
        "quiz": "https://i.imgur.com/QzMc29o.png",
        "answer": "https://i.imgur.com/Kafa6oJ.png",
        "id": 11
    },
    {
        "name": "Indentation",
        "quiz": "https://i.imgur.com/5KYoTNj.png",
        "answer": "https://i.imgur.com/ujNZrg7.png",
        "id": 12
    },
    {
        "name": "Key Spacing",
        "quiz": "https://i.imgur.com/uiBKnn6.png",
        "answer": "https://i.imgur.com/789uhJG.png",
        "id": 13
    },
    {
        "name": "Indentation",
        "quiz": "https://i.imgur.com/FHRrGKe.png",
        "answer": "https://i.imgur.com/9NEGAGi.png",
        "id": 14
    },
    {
        "name": "Key Spacing",
        "quiz": "https://i.imgur.com/75Czh8G.png",
        "answer": "https://i.imgur.com/hhJq4ts.png",
        "id": 15
    },
    {
        "name": "No Unused Vars",
        "quiz": "https://i.imgur.com/LgDy1cC.png",
        "answer": "https://i.imgur.com/PV8fzi0.png",
        "id": 16
    },
    {
        "name": "No Unused Vars",
        "quiz": "https://i.imgur.com/3VLy1dI.png",
        "answer": "https://i.imgur.com/1ZZYL3B.png",
        "id": 17
    },
    {
        "name": "Indentation",
        "quiz": "https://i.imgur.com/xGZshg8.png",
        "answer": "https://i.imgur.com/PTgXsvV.png",
        "id": 18
    },
    {
        "name": "Indentation",
        "quiz": "https://i.imgur.com/oze1lyR.png",
        "answer": "https://i.imgur.com/iOMroYt.png",
        "id": 19
    },
    {
        "name": "Indentation",
        "quiz": "https://i.imgur.com/TexpNh3.png",
        "answer": "https://i.imgur.com/xCw3TwY.png",
        "id": 20
    },
    {
        "name": "Key Spacing",
        "quiz": "https://i.imgur.com/kHhrC0x.png",
        "answer": "https://i.imgur.com/T8Eu4dj.png",
        "id": 21
    },
    {
        "name": "Key Spacing",
        "quiz": "https://i.imgur.com/7dVf5Xy.png",
        "answer": "ihttps://i.imgur.com/kHhrC0x.png",
        "id": 22
    },
    {
        "name": "No Unused Vars",
        "quiz": "https://i.imgur.com/AgyCR1X.png",
        "answer": "https://i.imgur.com/xJQ4Sux.png",
        "id": 23
    },
    {
        "name": "No Unused Vars",
        "quiz": "https://i.imgur.com/7g37EJh.png",
        "answer": "https://i.imgur.com/r1kk9vs.png",
        "id": 24
    },
    {
        "name": "No Unused Vars",
        "quiz": "https://i.imgur.com/lakbyr7.png",
        "answer": "https://i.imgur.com/T0Mc8IA.png",
        "id": 25
    },
    {
        "name": "Key Spacing",
        "quiz": "https://i.imgur.com/j9MqKRr.png",
        "answer": "https://i.imgur.com/YjhlBJe.png",
        "id": 26
    },
    {
        "name": "Key Spacing",
        "quiz": "https://i.imgur.com/ziVqdJk.png",
        "answer": "https://i.imgur.com/Uvv5t0J.png",
        "id": 27
    },
    {
        "name": "No Unsed Vars",
        "quiz": "https://i.imgur.com/8p923EK.png",
        "answer": "https://i.imgur.com/SUo2IOR.png",
        "id": 28
    },
    {
        "name": "Key Spacing",
        "quiz": "https://i.imgur.com/fFY4L3S.png",
        "answer": "https://i.imgur.com/kohNvud.png",
        "id": 29
    },
    {
        "name": "No Unused Vars",
        "quiz": "https://i.imgur.com/WODt5mh.png",
        "answer": "ihttps://i.imgur.com/RHUDGLy.png",
        "id": 30
    },
];

module.exports = {
    categories,
    quizQuestions
}