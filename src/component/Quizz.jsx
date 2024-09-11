import React, { useEffect, useState } from 'react'

const quizzes = {
    general: [
        {
            questionText: "What is the capital of France?",
            options: ["Berlin", "Madrid", "Paris", "Lisbon"],
            correctAnswer: "Paris",
        },
        {
            questionText: "Who is the CEO of Tesla?",
            options: ["Jeff Bezos", "Elon Musk", "Bill Gates", "Mark Zuckerberg"],
            correctAnswer: "Elon Musk",
        },
        {
            questionText: "What is the largest planet in our solar system?",
            options: ["Earth", "Mars", "Jupiter", "Saturn"],
            correctAnswer: "Jupiter",
        },
    ],
    tech: [
        {
            questionText: "What does HTML stand for?",
            options: ["Hyper Trainer Marking Language", "Hyper Text Markup Language", "Hyper Text Marketing Language", "High Text Marking Language"],
            correctAnswer: "Hyper Text Markup Language",
        },
        {
            questionText: "What does CSS stand for?",
            options: ["Creative Style Sheets", "Colorful Style Sheets", "Cascading Style Sheets", "Computer Style Sheets"],
            correctAnswer: "Cascading Style Sheets",
        },
        {
            questionText: "What language is used for web apps?",
            options: ["PHP", "Python", "JavaScript", "All"],
            correctAnswer: "All",
        },
    ],
};

function Quizz() {
    const [quizzType, setQuizzType] = useState('general')
    const [questions, setQuestions] = useState([])
    const [currentAnswers, setCurrentAnswers] = useState(Array(questions.length).fill(null))
    const [score, setScore] = useState(null)
    const [timeLeft, setTimeLeft] = useState(30)
    const [quizzSubmitted, setQuizzSubmitted] = useState(false)

    useEffect(() => {
        const shuffledQuestions = quizzes[quizzType].sort(() => Math.random() - 0.5)
        setQuestions(shuffledQuestions)
        setCurrentAnswers(Array(shuffledQuestions.length).fill(null))
        setScore(null)
        setQuizzSubmitted(false)
    }, [quizzType])

    useEffect(() => {
        if (timeLeft === 0 && !quizzSubmitted) {
            handleSubmit()
        }

        if (timeLeft > 0 && !quizzSubmitted) {
            const timer = setTimeout(() => {
                setTimeLeft(timeLeft - 1)
            }, 1000);

            return () => clearTimeout(timer)
        }
    }, [timeLeft, quizzSubmitted])


    const handleOptionChange = (questionIndex, option) => {
        const newAnswer = [...currentAnswers]
        newAnswer[questionIndex] = option
        setCurrentAnswers(newAnswer)
    }

    const handleSubmit = (e) => {
        if (e) e.preventDefault()
        let totalScore = 0

        questions.forEach((question, index) => {
            if (currentAnswers[index] === question.correctAnswer) {
                totalScore++
            }
        })

        setScore(totalScore)
        setQuizzSubmitted(true)
    }

    const handleQuizzType = (e) => {
        setQuizzType(e.target.value)
        setTimeLeft(30)
    }

    return (
        <div className='quizz-container'>
            <h1>Quizz App</h1>

            <div className='qizz-selection'>
                <label>Select Quizz: </label>
                <select value={quizzType} onChange={handleQuizzType}>
                    <option value="general">General Knowledge</option>
                    <option value="tech">Tech Quizz</option>
                </select>
            </div>

            {!quizzSubmitted && <h3>Time left: {timeLeft}s</h3>}

            <form onSubmit={handleSubmit}>
                {questions.map((question, questionIndex) => (
                    <div key={questionIndex}>
                        <h2>{question.questionText}</h2>

                        {question.options.map((option, optionIndex) => (
                            <div key={optionIndex}>
                                <label>
                                    <input
                                        type="radio"
                                        name={`question-${questionIndex}`}
                                        value={option}
                                        checked={currentAnswers[questionIndex] === option}
                                        onChange={() => handleOptionChange(questionIndex, option)}
                                        disabled={quizzSubmitted}
                                    />
                                    {option}
                                </label>
                            </div>
                        ))}
                    </div>
                ))}
                {!quizzSubmitted && <button type='submit'>Submit Qizz</button>}
                <button>xyz</button>
            </form>
            {score !== null && <h2>Your Score: {score}/{questions.length} </h2>}
        </div>
    )
}

export default Quizz
