import React, { useState } from "react";


export default function App({ questions , setChecked }) {
  
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
      if (currentQuestion + 1 >= questions?.length) {
        console.log(score / questions?.length);
        if (score + 1 / questions?.length >= 0.5) {
          setChecked(true);
        } else {
          setChecked(false);
        }
        // setChecked(true);
      }
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions?.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };
  return (
    <div className="flex app flex-center ">
      {showScore ? (
        <div className="score-section">
          You scored {score} out of {questions?.length}
        </div>
      ) : (
        <>
          <div className="flex flex-col ">

            <div className="question-section flex flex-col">
              <div className="question-count text-xl font-bold text-alt">
                <span>Question {currentQuestion + 1}</span>/{questions?.length}
              </div>
              <div className="question-text text-lg font-semibold">
                {questions[currentQuestion]?.questionText}
              </div>
            </div>
            <div className="flex flex-col ">
              <div className="flex flex-col items-start justify-start">
                {questions[currentQuestion]?.answerOptions.map(
                  (answerOption) => (
                    <button
                      onClick={() => {
                        handleAnswerOptionClick(answerOption.isCorrect);
                        // if (currentQuestion + 1 >= questions.length) {
                        // 	console.log(score/questions.length)
                        //   if (score / questions.length >= 0.5) {
                        //     setChecked(true);
                        //   } else {
                        //     setChecked(false);
                        //   }
                        //   setChecked(true);
                        // }
                      }}
                    >
                      {answerOption.answerText}
                    </button>
                  )
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
