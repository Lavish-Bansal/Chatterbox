import React, { useEffect } from "react";
import Messages from "./Messages.jsx";
import TypeSend from "./TypeSend.jsx";
import ChatUser from "./ChatUser.jsx";
import useConversation from "../../stateManage/useConversation.js";
import NoChatSelected from "./NoChatSelected.jsx";

const Right = () => {
  const { selectedConversation, setSelectedConversation } = useConversation();
  useEffect(() => {
    return setSelectedConversation(null);
  }, [setSelectedConversation]);
  return (
    <div className="w-full bg-slate-900 text-gray-300">
      <div>
        {!selectedConversation ? (
          <NoChatSelected />
        ) : (
          <>
            <ChatUser />
            <div
              className=" flex-1 overflow-y-auto"
              style={{ maxHeight: "calc(88vh - 8vh)" }}
            >
              <Messages />
            </div>
            <TypeSend />
          </>
        )}
      </div>
    </div>
  );
}

export default Right;