import React from "react";
import { Disclosure } from "@headlessui/react";
import { UilAngleRightB } from "@iconscout/react-unicons";
import Topiccard from "./Topiccard";
import Progresswrapper from "../Progressbars/Progresswrapper";
import { useRef } from "react";

function Modulecard({
  learningPath = {},
  percent = 0,
  lpQuery,
  i,
  handleUpdate,
}) {
  const questionData = [
    {
      subject: "History",
      topics: [
        {
          topic: "The Mughal Empire",
          question: {
            questionText: "Who is the first mughal emperor?",
            answerOptions: [
              { answerText: "Babur", isCorrect: true },
              { answerText: "Akbar", isCorrect: false },
              { answerText: "Aurangzeb", isCorrect: false },
              { answerText: "Shah Rukh Khan", isCorrect: false },
            ],
          },
        },
        {
          topic: "Mauryan Empire",
          question: {
            questionText: "Who is a mayuran emperor?",
            answerOptions: [
              { answerText: "Ashoka", isCorrect: true },
              { answerText: "Akbar", isCorrect: false },
              { answerText: "Aurangzeb", isCorrect: false },
              { answerText: "Shah Rukh Khan", isCorrect: false },
            ],
          },
        },
        {
          topic: "Mahatma Gandhi",
          question: {
            questionText: "When was Mahatma Gandhi Born?",
            answerOptions: [
              { answerText: "5 Oct", isCorrect: true },
              { answerText: "10 Dec", isCorrect: false },
            ],
          },
        },
        {
          topic: "Chhatrapathi Shivaji",
          question: {
            questionText: "What was the name of Chhatrapathi Shivaji?",
            answerOptions: [
              { answerText: "Chettak", isCorrect: true },
              { answerText: "Bucephalus", isCorrect: false },
            ],
          },
        },
        {
          topic: "Gupta Empire",
          question: {
            questionText: "Chandra Gupta II extended the Gupta Empire to Gujrat in __ AD",
            answerOptions: [
              { answerText: "390 ", isCorrect: true },
              { answerText: "309", isCorrect: false },
            ],
          },
        },
      ],
    },
    {
      subject: "English - I",
      topics: [
        {
          topic: "Climate of India",
          question: {
            questionText: "Most of Indias rainfall is",
            answerOptions: [
              { answerText: "convectional", isCorrect: true },
              { answerText: "cyclonic", isCorrect: false },
            ],
          },
        },
        {
          topic: "Soil of India",
          question: {
            questionText: "Granite is __ type of rock",
            answerOptions: [
              { answerText: "Igneous", isCorrect: true },
              { answerText: "sedimentary", isCorrect: false },
            ],
          },
        },
      ],
    },
    {
      subject: "EVS Part-1",
      topics: [
        {
          topic: "Climate Change",
          question: {
            questionText: "Greenhouse effect s mainly due to increase in atmospheric ____",
            answerOptions: [
              { answerText: "CO", isCorrect: true },
              { answerText: "NO", isCorrect: false },
            ],
          },
        },
        {
          topic: "Forests in India",
          question: {
            questionText: "Which forest is refered to as monsoon forest?",
            answerOptions: [
              { answerText: "tropical deciduous forest", isCorrect: true },
              { answerText: "mangrove", isCorrect: false },
            ],
          },
        },
      ],
    },
    {
      subject: "Geography",
      topics: [
        {
          topic: "Climate Change",
          question: {
            questionText: "Greenhouse effect s mainly due to increase in atmospheric ____",
            answerOptions: [
              { answerText: "CO", isCorrect: true },
              { answerText: "NO", isCorrect: false },
            ],
          },
        },
        {
          topic: "Identifies simple features of flowers",
          question: {
            questionText: "Arrangement of leaves on steam or branch?",
            answerOptions: [
              { answerText: "Phyllotaxy", isCorrect: true },
              { answerText: "Venation", isCorrect: false },
            ],
          },
        },
        {
          topic: "Explains the herd//group behaviour",
          question: {
            questionText: "Group of birds called",
            answerOptions: [
              { answerText: "flock", isCorrect: true },
              { answerText: "herd", isCorrect: false },
            ],
          },
        },
        {
          topic: "Describes skilled work",
          question: {
            questionText: "Large scale maps give less information than small scale maps",
            answerOptions: [
              { answerText: "false", isCorrect: true },
              { answerText: "true", isCorrect: false },
            ],
          },
        },
      ],
    },
  ];
  const questionSubjectQuestions = questionData.filter((item)=>{
    return item.subject===learningPath.classroomId.subject
  })[0]?.topics
  console.log( questionSubjectQuestions )
  console.log("-------------------")
  return (
    <div className=" w-full max-w-xl rounded-2xl bg-white p-2">
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className="flex min-h-fit w-full min-w-fit items-center justify-start gap-4 whitespace-nowrap rounded-lg py-2 text-left text-xl font-medium text-purple-900">
              <div
                className={`flex items-center justify-start gap-4 duration-300 ${
                  open ? "font-bold md:text-3xl" : ""
                } mr-5 text-first`}
              >
                <UilAngleRightB
                  className={`${
                    open ? "rotate-90 scale-150 transform" : ""
                  } h-5 w-5 text-first`}
                />
                <span className={`${open ? "transform" : ""} text-first`}>
                  {learningPath.classroomId.subject}
                </span>
              </div>
            </Disclosure.Button>
            <Disclosure.Panel className="px-2 pb-2 text-sm text-gray-500">
              <div className="m-2 w-full">
                <Progresswrapper
                  type="linear"
                  progressVal={percent}
                  time={20}
                  strokeSize={20}
                  containerSize={100}
                  fontSize={16}
                  color="orange"
                />
              </div>

              <div>
                {learningPath.learningOutcomes.map((item, j) => (
                  <Topiccard
                    title={item.name}
                    isDone={item.isDone}
                    key={item.id}
                    lpQuery={lpQuery}
                    item={item}
                    i={i}
                    j={j}
                    question={
                      questionSubjectQuestions?.filter((question)=>{
                        return question.topic===item.name
                      })[0]?.question
                    }
                    subject={learningPath.classroomId.subject}
                  />
                ))}
              </div>

              <button
                className=" m-1 mt-3 w-full cursor-pointer rounded-lg bg-first p-2 font-semibold text-white"
                onClick={() => {
                  // lpQuery.data.learningPath[i].learningOutcomes[j].isDone =
                  //   e.target.checked;
                  // console.log(e.target.checked);
                  // console.log(
                  //   topicCardRef.current.children[1].children
                  // );
                  // for (i = 0; i < topicCardRef.current.children.length; i++) {
                  //   console.log(topicCardRef.current.children);
                  // }
                  // lpQuery.data.learningPath[i].learningOutcomes.forEach(
                  //   (e, i) => {
                  //     e.isDone = e.checked;
                  //   }
                  // );

                  handleUpdate(i);
                }}
              >
                Submit
              </button>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
}

export default Modulecard;

// example Call
{
  /* <Modulecard topics={[{ id: 1, title: "Internet" },{ id: 2, title: "Internet2" }]} /> */
}
