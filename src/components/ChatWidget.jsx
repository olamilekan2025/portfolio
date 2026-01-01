import React, { useState, useRef, useEffect } from "react";
import { FaComments, FaTimes } from "react-icons/fa";
import "./ChatWidget.css";

const ChatWidget = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]); // start empty
  const [input, setInput] = useState("");
  const chatBodyRef = useRef(null);

  // Lock page scroll when chat is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Clean up on unmount
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  const toggleChat = () => setOpen(!open);

  const sendMessage = (sender = "user", text = input) => {
    if (!text.trim()) return;

    const newMessages = [...messages, { sender, text }];
    setMessages(newMessages);
    setInput("");

    // Scroll chat to bottom
    setTimeout(() => {
      if (chatBodyRef.current) {
        chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
      }
    }, 50);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      <div className="chat-icon" onClick={toggleChat}>
        {open ? <FaTimes size={20} /> : <FaComments size={20} />}
      </div>

      {open && (
        <div className="chat-window">
          <div className="chat-header">
            <h4>Chat</h4>
            <FaTimes className="close-btn" onClick={toggleChat} />
          </div>

          <div className="chat-body" ref={chatBodyRef}>
            {messages.length === 0 && (
              <p className="chat-empty">Start the conversation 👋</p>
            )}
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`chat-message ${
                  msg.sender === "user" ? "user-msg" : "client-msg"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          <div className="chat-footer">
            <textarea
              placeholder="Type a message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyPress}
            />
            <button onClick={() => sendMessage()}>Send</button>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatWidget;
