import React from "react";
import Style from "./Chatbox.module.css";

const ChatBox = ({ onClose }) => {
  const [messages, setMessages] = React.useState([]);
  const [inputValue, setInputValue] = React.useState("");

  const handleInputKeyPress = (event) => {
    if (event.key === "Enter" && inputValue.trim() !== "") {
      setMessages([...messages, { text: inputValue, sentByUser: true }]);
      setInputValue("");
    }
  };

  return (
    <div className={Style.chatBox}>
      <div className={Style.chatHeader}>
        Diagnosis Chat Bot
        <span className={Style.closeIcon} onClick={onClose}>
          &times;
        </span>
      </div>
      <div className={Style.chatMessages}>
        {messages.map((message, index) => (
          <div
            key={index}
            className={`${Style.chatMessage} ${
              message.sentByUser ? Style.sent : ""
            }`}
          >
            {message.text}
          </div>
        ))}
      </div>
      <input
        type="text"
        placeholder="Mesajınızı yazın..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyPress={handleInputKeyPress}
      />
    </div>
  );
};

export default ChatBox;
