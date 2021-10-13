
import React, { useEffect, useState } from "react";
import "./ChatInput.css";
import db from "./firebase";
import firebase from "firebase"
import { useStateValue } from "./StateProvider";
import { Button } from "@material-ui/core";

const ChatInput = ({ channelName, channelId ,Id}) => {
  const [input, setInput] = useState("");
  const [{user}] = useStateValue()


  const sendMessage = (e) => {
    e.preventDefault();
    if(channelId && input.length>=1) {
        db.collection("rooms").doc(channelId).collection("messages").add({
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            user: user.displayName,
            userImage: user.photoURL
        })
        setInput("")
    }else{
        alert("message's length must be greater than 1")
    }

    
  };
  return (
    <div className="chatInput">
      <form >
        <input
        value={input}
          placeholder={`Message #${channelName?.toLowerCase()}`}
          onChange={(e) => setInput(e.target.value)}
        />
        <Button type="submit" onClick={sendMessage}>Send</Button>
      </form>
    </div>
  );
};

export default ChatInput;
