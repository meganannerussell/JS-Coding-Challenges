/////////////////////////////
// CODING CHALLENGE

/*
--- Let's build a fun quiz game in the console! ---

1. Build a function constructor called Question to describe a question. A question should include:
a) question itself
b) the answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
c) correct answer (I would use a number for this)

2. Create a couple of questions using the constructor

3. Store them all inside an array

4. Select one random question and log it on the console, together with the possible answers (each question should have a number) (Hint: write a method for the Question objects for this task).

5. Use the 'prompt' function to ask the user for the correct answer. The user should input the number of the correct answer such as you displayed it on Task 4.

6. Check if the answer is correct and print to the console whether the answer is correct ot nor (Hint: write another method for this).

7. Suppose this code would be a plugin for other programmers to use in their code. So make sure that all your code is private and doesn't interfere with the other programmers code (Hint: we learned a special technique to do exactly that).
*/

//1. create question constructor -think of this as a blueprint, like we have components in React
// The question function takes in an object as a parameter, and we are deconstracting that object, which means
// we have access to the key's values directly.

// What this means:
// Without deconstructing we would have to do this:

// const Question =(quizObject) => {

//     return(
//         {
//             question: quizObject.question,
//             answers: quizObject.answers,
//             correctAns: quizObject.correctAns
//         }
//     )
//   }

// These 2 returns do exactly the same thing, but the first one is a bit neater
//   return(
// {
//     question,
//     answers,
//     correctAns
// }

// return(
//     {
//         question: question,
//         answers: answers,
//         correctAns: correctAns
//     }
// The only reason we can do the first one, is because we want to return a key that has the same name as the deconstructed parameter
// so for example, if we had different names in our deconstructed object, but wanted to return the keys that we have above,
// we would have to do this:

// const Question =({key1, key2, key3}) => {

//     return(
//         {
//             question: key1,
//             answers: key2,
//             correctAns: key3
//         }
//     )
//   }

// If we did this, we would have to call the function like this:
// var question1 = Question({key1: 'What is 1 + 1?', key2: [1,2,3,4], key3: [1]})

// because this deconstructed values on line 64 HAVE TO match the keys on line 76

// the reason we are making the Question function, is so that we can add additional logic later such as
// making the values uppercase, or changing the data eg adding something to the question string or adding
// validation. Validation is a catch to let you throw an error if something in your function is incorrect

const Question = ({ question, answers, correctAns }) => {
  return {
    question: question,
    answers,
    correctAns,
  };
};

// calling Question, and assigning the result of Question (which is whatever Question returns to variable question1)

// const question1 = Question({question: 'What is 1 + 1?', answers: [1,2,3,4], correctAns: [1]})

// const question2 = Question({question: 'What is 2 + 2?', answers: [2,3,4,6], correctAns: [2]})

// const question3 = Question({question: 'What is 3 + 3?', answers: [6,8,4,9], correctAns: [0]})

// const question4 = Question({question: 'What is 1 + 2?', answers: [2,3,4,6], correctAns: [1]})

// const question5 = Question({question: 'What is 3 + 2?', answers: [2,3,5,6], correctAns: [2]})

// const questions = [question1, question2, question3, question4, question5];

// const createQuestionArray =[...questions];

//create an empty questions array
const questions = [];

//create function and define paramenters function gets

const createQuestion = (question, answers, correctAns) => {
  //create a question variable and set it to calling the Question function
  const newQuestion = Question({ question, answers, correctAns });

  //push new question variable to our question array
  questions.push(newQuestion);

  //return the question variable
  return newQuestion;
};

const question1 = createQuestion("What is 1 + 1?", [1, 2, 3, 4], 1);
const question2 = createQuestion("What is 2 + 2?", [1, 2, 3, 4], 3);
const question3 = createQuestion("What is 3 + 3?", [4, 6, 8, 3], 1);
const question4 = createQuestion("What is 1 + 3?", [4, 6, 8, 3], 0);

// 5. Use the 'prompt' function to ask the user for the correct answer. The user should input the number of the correct answer such as you displayed it on Task 4.

// 6. Check if the answer is correct and print to the console whether the answer is correct ot nor (Hint: write another method for this).

const randomQuestion = (questions) => {
  const randomIndex = Math.floor(Math.random() * 4);

  const selectedQuestion = questions[randomIndex];

  return selectedQuestion;
};

const selectedRandomQ = randomQuestion(questions);
console.log(selectedRandomQ.question);

for (i = 1; i < selectedRandomQ.answers.length + 1; i++) {
  console.log(`${i}: ${selectedRandomQ.answers[i - 1]}`);
}

const printCorrectAnswer = (selected) => {
  const answer = prompt("What is the answer");
  console.log(selected.answers);
  console.log(selected.correctAns);
  console.log(selected.answers[selected.correctAns]);
  console.log({ answer }, selected.answers[selected.correctAns]);
  if (answer === String(selected.correctAns + 1)) {
    console.log(
      `${selected.answers[selected.correctAns]} is the correct answer`
    );
  } else {
    console.log(`try again`);
  }
};

console.log(selectedRandomQ);

printCorrectAnswer(selectedRandomQ);
