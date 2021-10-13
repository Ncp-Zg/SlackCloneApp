import React, { useEffect, useRef } from "react";
import "./Message.css";


const Message = ({message,timestamp,user,userImage}) => {

    
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
    
  }

  useEffect(()=>{
    scrollToBottom()
  },[messagesEndRef])
  return (
    <div className="message">
      <img src={userImage} style={{borderRadius:"100%",marginRight:"5px"}} alt=""/>
      <div className="massage_info">
        <h4>{user}<span className="message_timestamp"> {new Date(timestamp?.toDate()).toUTCString()}</span></h4>
        <p>{message}</p>
      </div>
      <div ref={messagesEndRef}/>
    </div>
  );
};

export default Message;
