import React from "react";

function Message({ message }) {
  const authUser = JSON.parse(localStorage.getItem("ChatApp"));
  const itsMe = message.senderId === authUser.user._id;

  const alignment = itsMe ? "items-end" : "items-start";
  const bubbleColor = itsMe ? "bg-blue-600 text-white" : "bg-gray-200 text-black";

  const createdAt = new Date(message.createdAt);
  const formattedTime = createdAt.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className={`flex flex-col px-4 py-2 ${alignment}`}>
      <div className={`px-4 py-2 rounded-xl ${bubbleColor} break-words max-w-md w-fit`}>
        <p className="text-sm">{message.message}</p>
      </div>
      <div className="text-xs text-gray-500 mt-1">{formattedTime}</div>
    </div>
  );
}

export default Message;