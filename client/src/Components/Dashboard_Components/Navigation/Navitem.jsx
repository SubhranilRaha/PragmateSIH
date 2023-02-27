import React from "react";
import { UilMinusSquare } from "@iconscout/react-unicons";

function Navitem({ id, text = "", icon, selected, setSelected, open = true }) {
  const Icon = icon ? icon : <UilMinusSquare />;

  return (
    <div
      className={` ml-1 relative mt-6 mb-2 flex cursor-pointer items-center rounded-l-lg p-2 text-gray-400 transition-colors duration-200  ${
        selected == id ? " bg-white text-black" : "hover:text-white"
      } ${open ? "" : "justify-center"}`}
      onClick={() => {
        setSelected(id);
      }}
    >
      <div>
        {open ? (
          <span className="text-md mx-4">{text}</span>
        ) : (
          <span className="text-md">{Icon}</span>
        )}
      </div>
    </div>
  );
}

export default Navitem;
