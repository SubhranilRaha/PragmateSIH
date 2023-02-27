import React, { useState, useEffect } from "react";
import { UilAngleDown, UilMinusSquare } from "@iconscout/react-unicons";

function Navgroup({
  text = "",
  submenuItems = [],
  icon,
  selected,
  setSelected,
  open,
  setOpen,
}) {
  const Icon = icon ? icon : <UilMinusSquare />;
  const [expand, setExpand] = useState(false);

  useEffect(() => {
    if (!open) {
      setExpand(false);
    }
  }, [open]);

  return (
    <>
      <div
        className="relative mt-4 cursor-pointer items-center p-2 text-gray-400 transition-colors  duration-200 hover:text-white"
        onClick={() => {
          setOpen(true);
          setExpand(!expand);
        }}
      >
        <div>
          {open ? (
            <span className="text-md mx-4 cursor-pointer">{text}</span>
          ) : (
            <span className="text-md cursor-pointer">{Icon}</span>
          )}

          <UilAngleDown
            className={`absolute right-3 top-3 duration-500 ${
              expand ? "rotate-180" : ""
            }`}
          />
        </div>
      </div>
      <div>
        {submenuItems.map((item, index) => (
          <div
            className={`relative ml-1 flex cursor-pointer items-center rounded-l-lg text-gray-400 transition-all duration-300 ${
              selected == item.id ? "bg-white text-black" : "hover:text-white"
            }
            ${expand && open ? "h-fit p-2 opacity-100" : "h-0 p-0 opacity-0"}
                `}
            key={index}
            onClick={() => {
              setSelected(item.id);
            }}
          >
            <span
              className={`text-md mx-4 ${
                expand ? "h-fit opacity-100" : "h-0 opacity-0"
              }`}
            >
              {item.title}
            </span>
          </div>
        ))}
      </div>
    </>
  );
}

export default Navgroup;

// ${
//     selected
//       ? "bg-gray-100 text-gray-800 dark:bg-gray-600 dark:text-gray-100"
//       : ""
//   }
