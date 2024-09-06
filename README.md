# Quizz App

## Features:
- A set of multiple-choice questions.
- Users can select an answer for each question.
- Submit button to calculate the score.
- The score is displayed after submission.

 ##  How It Works
- The user sees a list of multiple-choice questions.
- The user selects an option for each question.
- When they press the "Submit Quiz" button, the app calculates how many questions they answered correctly.
- The user's score is displayed below the quiz.

 ## Explanation of the Code
### Questions Array:

- We store an array of questions, each with multiple options and a correctAnswer.
- The array could be extended with more questions as needed.

### State Management:

- currentAnswers: Tracks the answers selected by the user for each question.
- score: Holds the user's score after submitting the quiz. Initially set to null until the user submits their answers.

### handleOptionChange:

- This function updates the currentAnswers state when the user selects an answer for a particular question.

### handleSubmit:

- This function compares the selected answers with the correct answers and calculates the score.
- After calculating the score, it updates the score state.

### Form:

- The form displays each question with multiple options.
- Upon submission, the user's answers are compared to the correct ones, and the score is displayed.
