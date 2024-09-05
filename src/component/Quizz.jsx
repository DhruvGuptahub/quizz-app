import React, { useState } from 'react'

function Quizz() {

    const questions = [
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
    ];

    const [currentAnswers, setCurrentAnswers] = useState(Array(questions.length).fill(null))
    const [score, setScore] = useState(null)


    const handleOptionChange = (questionIndex, option) => {
        const newAnswer = [...currentAnswers]
        newAnswer[questionIndex] = option
        setCurrentAnswers(newAnswer)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        let totalScore = 0

        questions.forEach((question, index) => {
            if (currentAnswers[index] === question.correctAnswer) {
                totalScore++
            }
        })

        setScore(totalScore)
    }
    return (
        <div>
            <h1>Quizz App</h1>
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
                                    />
                                    {option}
                                </label>
                            </div>
                        ))}
                    </div>
                ))}
                <button type='submit'>Submit Qizz</button>
            </form>
            {score !== null && <h2>Your Score: {score}/{questions.length} </h2>}
        </div>
    )
}

export default Quizz
