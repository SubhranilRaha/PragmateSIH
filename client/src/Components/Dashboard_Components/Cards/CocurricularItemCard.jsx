import React, { useState } from "react";

function CocurricularItemCard({ data, delCocurr }) {
  const text = data.description;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <div className="mx-auto w-full max-w-xl rounded-2xl bg-white px-3">
      <div className="my-1 text-2xl font-medium">{data.name}</div>
      <p className="text-sm">
        {isReadMore ? text.slice(0, 150) : text}
        <span
          onClick={toggleReadMore}
          className=" mx-1 cursor-pointer text-alt"
        >
          {isReadMore ? "... read more" : " show less"}
        </span>
        <button
          className=" m-1 mt-3 w-full cursor-pointer rounded-lg bg-first p-2 font-semibold text-white"
          onClick={() => { delCocurr(data.name, data.studentId) } }
        >
          Delete
        </button>
      </p>
    </div>
  );
}

export default CocurricularItemCard;
