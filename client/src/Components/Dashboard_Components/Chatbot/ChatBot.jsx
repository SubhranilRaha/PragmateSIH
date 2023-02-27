import { useState } from "react";
import { UilComments } from "@iconscout/react-unicons";
import Chatbot from "../iFrame/Chatbot";

function MyChat() {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      {isOpen ? (
        <div className="fixed bottom-5  right-0 flex flex-col justify-end h-64 mb-2 mr-2 border-4 border-gray-300 rounded-lg">
          <Chatbot />
          <button
            className="w-3/5 p-2 mx-auto my-2 rounded-md bg-alt text-altxt "
            onClick={() => {
              setOpen(false);
            }}
          >
            Ok Thanks!
          </button>
        </div>
      ) : (
        <div className="fixed flex flex-col justify-end bottom-6 right-5">
          <button
            onClick={() => {
              setOpen(true);
            }}
            className="p-5 mb-16 text-white rounded-full bg-alt"
          >
            <UilComments className="w-8 h-8 "/>
          </button>
        </div>
      )}
    </>
  );
}

export default MyChat;
