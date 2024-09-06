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

# Enhancements Explained

## Timer:

- A countdown timer starts at 30 seconds.
- If the user doesn't submit the quiz in time, the quiz is automatically submitted when the timer hits zero.
- Timer resets to 30 seconds when switching between quizzes.

##Shuffle Questions:

- The questions are shuffled every time a quiz is loaded.
- This ensures the user gets the questions in a random order each time they take the quiz.

## Multiple Quizzes:

- Users can select between two different quizzes: "General Knowledge" and "Tech Quiz".
- The quizType state is used to switch between quizzes.
- The questions for the selected quiz are fetched dynamically.

## Styling:

- Basic UI improvements like adding a header, organizing quiz selection, and disabling options after submission.
- You can further style the app using CSS.
