import React, { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import MCQ from "../MCQ";

function Topiccard({  title, isDone = false, lpQuery, i, j, item, subject, question }) {
  console.log(question)
  const [checked, setChecked] = useState(isDone);
  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.checked = checked;
    lpQuery.data.learningPath[i].learningOutcomes[j].isDone = checked;
  }, [checked]);
  
  return (
    <div className="m-2 flex w-full flex-col items-center rounded-md bg-white p-3 py-4 shadow-md hover:bg-gray-100">
      <div className="flex w-full items-center justify-start">
        <input
          type="checkbox"
          // checked={checked}
          ref={inputRef}
          disabled={true}
          className={`m-1 h-4 w-4 rounded accent-orange-600 `}
          onChange={(e) => {
            lpQuery.data.learningPath[i].learningOutcomes[j].isDone =
              e.target.checked;
          }}
        />
        <span className="m-1 grow text-xl font-semibold">{title}</span>
      </div>
      {!isDone ? (
        <div className="w-full">
          <MCQ
            setChecked={setChecked}
            questions={[question]}
          />
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Topiccard;
