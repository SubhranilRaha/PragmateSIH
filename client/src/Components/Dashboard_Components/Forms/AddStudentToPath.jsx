import React, { useRef } from "react";
import { useState } from "react";
import { addStudentClassroom } from "../../../api/schoolReq";

function AddStudentToClassForm() {
  const [studentId, setStudentId] = useState("");
  const [classId, setClassId] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const submit = async (e) => {
    if (studentId === "") window.alert("Please enter student Id");
    else if (classId === "") window.alert("Please enter path Id");
    else {
      setIsLoading(true);

      const res = await addStudentClassroom(classId, studentId);
      if(res.error)
      {
        window.alert(res.error);
      }
      else
      {
        window.alert("Student Added To Classroom!");
      }

      setStudentId("");
      setClassId("");
      setIsLoading(false);
    }
  };
  return (
    <div className="m-10 mx-auto flex w-full max-w-xl flex-col p-10 shadow-md md:rounded-3xl">
      {isLoading ? (
        <h1 className="w-full text-center text-xl">LOADING...</h1>
      ) : (
        <>
          <label htmlFor="teacherName" className="p-1 text-xl font-semibold">
            Student Id:{" "}
          </label>
          <input
            type="text"
            name="teacherName"
            value={studentId}
            onChange={(e) => {
              setStudentId(e.target.value);
            }}
            className="m-1 h-8 rounded-lg border border-gray-400 p-1"
          />
          <label
            htmlFor="teacherEmail"
            className="mt-1 p-1 text-xl font-semibold"
          >
            Path Id:{" "}
          </label>
          <input
            type="text"
            name="teacherEmail"
            value={classId}
            onChange={(e) => {
              setClassId(e.target.value);
            }}
            className="m-1 rounded-lg border border-gray-400 p-1"
          />
          <button
            onClick={(e) => {
              submit(e);
            }}
            className="m-1 mt-3 cursor-pointer rounded-lg bg-first p-2 font-semibold text-white"
          >
            Submit
          </button>
        </>
      )}
    </div>
  );
}

export default AddStudentToClassForm;
