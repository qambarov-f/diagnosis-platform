import React from 'react';
import { SiWechat } from "react-icons/si";
import ChatBox from '../ChatBox';

import Style from "./Chatbar.module.css"

const ChatBar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleChatBox = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={Style.chatBar}>
      {!isOpen && (
        <div className={Style.chatIcon} onClick={toggleChatBox}>
          {/* <FontAwesomeIcon icon={faComments} /> */}
          <SiWechat className={Style.icon} />
        </div>
      )}
      {isOpen && <ChatBox onClose={toggleChatBox} />}
    </div>
  );
};

export default ChatBar;
