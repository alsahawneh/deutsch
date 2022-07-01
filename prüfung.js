const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');

let currentQuestion = {}
let acceptingAnswers = true
let score = 0 
let questionCounter = 0
let availableQuestions = []

let questions = [
    {
        question: 'Eltern haften _____ ihre Kinder.',
        choice1: 'auf',
        choice2: 'für',
        choice3: 'über',
        choice4: 'mit',
        answer: 2,
    },
    {
        question: 'Du musst _____ dem großen Haus vorbeifahren.',
        choice1: 'an',
        choice2: 'über',
        choice3: 'auf',
        choice4: 'in',
        answer: 1,
    }, 
    {
        question: 'Willst du heute Abend _____ mir skypen?',
        choice1: 'auf',
        choice2: 'zu',
        choice3: 'um',
        choice4: 'mit',
        answer: 4,
    }, 
    {
        question: 'Er erinnert sich gern _____ sein Studium in Spanien.',
        choice1: 'an',
        choice2: 'auf',
        choice3: 'um',
        choice4: 'zu',
        answer: 1,
    }, 
    {
        question: 'Wir hoffen _____ gutes Wetter am Wochenende.',
        choice1: 'auf',
        choice2: 'über',
        choice3: 'an',
        choice4: 'für',
        answer: 1,
    }, 
    {
        question: 'Achten Sie _____ die Verben.',
        choice1: 'für',
        choice2: 'auf',
        choice3: 'an',
        choice4: 'mit',
        answer: 2,
    }, 
    {
        question: 'Sie wundert sich _____ die Rechnung.',
        choice1: 'an',
        choice2: 'zu',
        choice3: 'für',
        choice4: 'über',
        answer: 4,
    },
    {
        question: 'Im Sommer ziehe ich _____ meinem Mann nach Schweden.',
        choice1: 'mit',
        choice2: 'zu',
        choice3: 'auf',
        choice4: 'an',
        answer: 2,
    },
    {
        question: 'Jeden Tag laufe ich _____ dem Briefkasten vorbei.',
        choice1: 'über',
        choice2: 'um',
        choice3: 'an',
        choice4: 'mit',
        answer: 3,
    },
    {
        question: 'Das Au-pair beschäftigt sich viel _____ den Kindern.',
        choice1: 'für',
        choice2: 'nach',
        choice3: 'mit',
        choice4: 'von',
        answer: 3,
    },
    {
        question: 'Heute sprechen wir _____ unsere Hobbys.',
        choice1: 'für',
        choice2: 'an',
        choice3: 'auf',
        choice4: 'über',
        answer: 4,
    },
    {
        question: 'Er meldet sich _____ den Kurs an.',
        choice1: 'über',
        choice2: 'für',
        choice3: 'in',
        choice4: 'von',
        answer: 2,
    },
    {
        question: '_____ meinem Bruder verstehe ich mich am besten.',
        choice1: 'Mit',
        choice2: 'Auf',
        choice3: 'Nach',
        choice4: 'Über',
        answer: 1,
    },
    {
        question: 'Ich informiere mich _____ den Preis im Internet.',
        choice1: 'auf',
        choice2: 'für',
        choice3: 'in',
        choice4: 'über',
        answer: 4,
    },
    {
        question: 'Ich nehme _____ einem Sprachkurs teil.',
        choice1: 'für',
        choice2: 'an',
        choice3: 'in',
        choice4: 'zu',
        answer: 2,
    },
    {
        question: 'Heute hat sich Jens _____ seiner Freundin verlobt.',
        choice1: 'mit',
        choice2: 'von',
        choice3: 'an',
        choice4: 'für',
        answer: 1,
    },
    {
        question: 'Die Lehrer besprechen etwas _____ den Eltern.',
        choice1: 'mit',
        choice2: 'an',
        choice3: 'von',
        choice4: 'für',
        answer: 1,
    },
    {
        question: 'Die Kursleiterin antwortet _____ die Frage.',
        choice1: 'über',
        choice2: 'an',
        choice3: 'auf',
        choice4: 'für',
        answer: 3,
    },
    {
        question: 'Ich chatte oft ____ meiner Freundin in England.',
        choice1: 'an',
        choice2: 'mit',
        choice3: 'zu',
        choice4: 'um',
        answer: 2,
    },
    {
        question: 'Das Kleid passt nicht _____ dir!',
        choice1: 'für',
        choice2: 'an',
        choice3: 'zu',
        choice4: 'um',
        answer: 3,
    },
    {
        question: 'Immer muss ich _____ meine Freundin warten!',
        choice1: 'mit',
        choice2: 'an',
        choice3: 'für',
        choice4: 'auf',
        answer: 4,
    },
    {
        question: 'Der Opa ärgert sich _____ seinen Enkel.',
        choice1: 'an',
        choice2: 'über',
        choice3: 'für',
        choice4: 'mit',
        answer: 2,
    },
    {
        question: 'Die Geschichte handelt _____ einem Hund.',
        choice1: 'mit',
        choice2: 'für',
        choice3: 'von',
        choice4: 'für',
        answer: 3,
    },
    {
        question: 'Ich bin _____ einer Hochzeit eingeladen.',
        choice1: 'nach',
        choice2: 'für',
        choice3: 'zu',
        choice4: 'über',
        answer: 3,
    },
    {
        question: 'Meine Oma interessiert sich nicht _____ Technik.',
        choice1: 'in',
        choice2: 'an',
        choice3: 'über',
        choice4: 'für',
        answer: 4,
    },
    {
        question: 'Meine Schwester kümmert sich allein _____ ihre Kinder.',
        choice1: 'um',
        choice2: 'für',
        choice3: 'zu',
        choice4: 'über',
        answer: 1,
    },
    {
        question: 'Wie hat er _____ deine Frage reagiert?',
        choice1: 'mit',
        choice2: 'über',
        choice3: 'für',
        choice4: 'auf',
        answer: 4,
    },
    {
        question: 'Ich habe mich _____ dich verliebt.',
        choice1: 'in',
        choice2: 'mit',
        choice3: 'für',
        choice4: 'zu',
        answer: 1,
    },
    {
        question: 'Ich denke oft _____ dich.',
        choice1: 'mit',
        choice2: 'über',
        choice3: 'an',
        choice4: 'zu',
        answer: 3,
    },
    {
        question: 'Sie bittet ihn _____ Hilfe.',
        choice1: 'für',
        choice2: 'um',
        choice3: 'zu',
        choice4: 'über',
        answer: 2,
    },
    {
        question: 'Mein Onkel berichtet _____ seinen Urlaub.',
        choice1: 'in',
        choice2: 'über',
        choice3: 'für',
        choice4: 'an',
        answer: 2,
    },
    {
        question: 'Dieses Lied klingt immer _____ Sommer.',
        choice1: 'nach',
        choice2: 'an',
        choice3: 'in',
        choice4: 'für',
        answer: 1,
    },
    {
        question: 'Die Frau hat mich _____ meiner Telefonnummer gefragt.',
        choice1: 'für',
        choice2: 'nach',
        choice3: 'an',
        choice4: 'von',
        answer: 2,
    },
    {
        question: 'Es geht in dem Artikel _____ moderne Medien.',
        choice1: 'über',
        choice2: 'an',
        choice3: 'um',
        choice4: 'zu',
        answer: 3,
    },
    {
        question: 'Am Wochenende treffe ich mich immer _____ Freunden.',
        choice1: 'mit',
        choice2: 'zu',
        choice3: 'für',
        choice4: 'auf',
        answer: 1,
    },
    {
        question: 'Wir freuen uns _____ das Wochenende.',
        choice1: 'an',
        choice2: 'über',
        choice3: 'für',
        choice4: 'auf',
        answer: 4,
    },
    {
        question: 'Ich habe mich _____ meiner Schwester verabredet.',
        choice1: 'über',
        choice2: 'nach',
        choice3: 'zu',
        choice4: 'mit',
        answer: 4,
    },
    {
        question: 'Der beste Programmierer der Welt ist _____.',
        choice1: 'Bill Gates',
        choice2: 'Mark Zuckerberg',
        choice3: 'Marina Alsahawneh',
        choice4: 'Larry Page',
        answer: 3,
    },
    {
        question: 'Ich verzichte _____ Schokolade.',
        choice1: 'an',
        choice2: 'über',
        choice3: 'auf',
        choice4: 'für',
        answer: 3,
    },
    {
        question: 'Er hat sich sehr ______ die Geschenke gefreut.',
        choice1: 'von',
        choice2: 'nach',
        choice3: 'für',
        choice4: 'über',
        answer: 4,
    },
]

const SCORE_POINTS = 1
const MAX_QUESTIONS = 40

startGame = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestion()
}

getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score)
        return window.location.assign('end.html')
    }

    questionCounter++
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`
    progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`

    const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionsIndex]
    question.innerText = currentQuestion.question 

    choices.forEach(choice => {
        const number = choice.dataset['number']
        choice.innerText = currentQuestion['choice' + number]
    })

    availableQuestions.splice(questionsIndex, 1)

    acceptingAnswers = true
}

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!acceptingAnswers) return 

        acceptingAnswers = false
        const selectedChoice = e.target 
        const selectedAnswer = selectedChoice.dataset['number']

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'

        if(classToApply === 'correct') {
            incrementScore(SCORE_POINTS)
        }

        selectedChoice.parentElement.classList.add(classToApply)

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()
        }, 1000)
    })
})

incrementScore = num => {
    score +=num
    scoreText.innerText = score
}

startGame()
