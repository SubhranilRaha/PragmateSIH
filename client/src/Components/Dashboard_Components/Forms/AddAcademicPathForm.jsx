import React, { useState, useRef } from "react";
import { UilTrashAlt } from "@iconscout/react-unicons";
import { createClassroom } from "../../../api/schoolReq";

function AddAcademicPathForm() {
  const pathNameRef = useRef();
  const [formFields, setFormFields] = useState([{ TopicName: "" }]);
  const [isLoading, setIsLoading] = useState(false);
  const handleTopicChanges = (event, index) => {
    let data = [...formFields];
    data[index][event.target.name] = event.target.value;
    setFormFields(data);
  };
  const submit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const finalData = {
      pathName: pathNameRef.current.value,
      topics: [...formFields],
    };
    const subject = finalData.pathName;
    const learningOutcomes = finalData.topics.map((topic) => topic.TopicName);
    const res = await createClassroom(subject, learningOutcomes)
      if(res.error)
      {
        window.alert(res.error);
      }
      else
      {
        window.alert("New Path Created!");
      }
      setFormFields([{ TopicName: "" }]);
      setIsLoading(false);
  };
  const addFields = () => {
    let object = {
      TopicName: "",
    };
    setFormFields([...formFields, object]);
  };
  const removeFields = (index) => {
    let data = [...formFields];
    data.splice(index, 1);
    setFormFields(data);
  };

  return (
    <>
    {
      isLoading ?
      <h1 className="w-full text-center text-3xl">LOADING...</h1>
      :
      <div className="m-10 mx-auto flex w-full max-w-xl flex-col p-10 shadow-md sm:rounded-3xl">
        <label htmlFor="PathName" className="p-1 text-xl font-semibold">
          Path Name:{" "}
        </label>
        <input
          type="text"
          name="PathName"
          ref={pathNameRef}
          className="m-1 h-8 rounded-lg border border-gray-400 p-1"
        />
        <div className="mt-1 p-1 text-xl font-semibold">Topics</div>

        {formFields.map((form, index) => {
          return (
            <div
              key={index}
              className="text-md m-1 flex h-8 items-center gap-2 font-semibold"
            >
              <input
                type="text"
                name="TopicName"
                placeholder="Name"
                onChange={(event) => {
                  handleTopicChanges(event, index);
                }}
                value={form.TopicName}
                className="grow rounded-lg border border-gray-400 p-1 font-normal"
              />
              <button
                onClick={() => {
                  removeFields(index);
                }}
                className="m-1 cursor-pointer rounded-lg border-2 border-first p-1 text-first hover:border-alt hover:text-alt"
              >
                <UilTrashAlt />
              </button>
            </div>
          );
        })}
        <button
          onClick={() => {
            addFields();
          }}
          className="mx-3 my-2 cursor-pointer rounded-lg  border-2 border-first p-2 font-semibold text-first hover:border-alt hover:text-alt "
        >
          Add More
        </button>
        <button
          onClick={(e) => {
            submit(e);
          }}
          className="mx-3 my-2 mt-3 cursor-pointer rounded-lg bg-first p-2 font-semibold text-white"
        >
          Submit
        </button>
      </div>
    }
    </>
  );
}

export default AddAcademicPathForm;
