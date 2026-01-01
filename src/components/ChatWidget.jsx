import React, { useState, useRef, useEffect } from "react";
import { FaTimes, FaComments, FaPaperPlane } from "react-icons/fa";
import "./ChatWidget.css";

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]); // start empty
  const [input, setInput] = useState("");
  const [sender, setSender] = useState("client"); // client or owner
  const chatBodyRef = useRef(null);

  // Lock scroll and scroll to bottom
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen, messages]);

  // Send message
  const sendMessage = () => {
    if (!input.trim()) return;

    const newMsg = {
      id: Date.now(),
      sender: sender,
      text: input.trim(),
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, newMsg]);
    setInput("");

    // Optional: auto-switch sender for demonstration
    // sender === "client" ? setSender("owner") : setSender("client");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      {/* Floating Button */}
      <button className="chat-float-btn" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FaTimes size={24} /> : <FaComments size={30} />}
        {!isOpen && <span className="chat-tooltip">Chat with me</span>}
      </button>

      {/* Overlay */}
      {isOpen && <div className="chat-overlay" onClick={() => setIsOpen(false)} />}

      {/* Chat Window */}
      {isOpen && (
        <div className="chat-window">
          {/* Header */}
          <div className="chat-header">
            <div className="header-info">
              <div className="avatar">OJ</div>
              <div>
                <h4>Oladunjoye Jelili</h4>
                <span className="status">Frontend Developer</span>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)}>
              <FaTimes />
            </button>
          </div>

          {/* Messages */}
          <div className="chat-body" ref={chatBodyRef}>
            {messages.length === 0 && (
              <p className="chat-empty">Start the conversation 👋</p>
            )}
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`message ${msg.sender === "client" ? "client-msg" : "owner-msg"}`}
              >
                <div className="bubble">
                  <p>{msg.text}</p>
                  {msg.time && <span className="time">{msg.time}</span>}
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="chat-input">
            {/* Sender toggle */}
            <select value={sender} onChange={(e) => setSender(e.target.value)}>
              <option value="client">Client</option>
              <option value="owner">You</option>
            </select>

            <textarea
              rows="1"
              placeholder="Type your message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyPress}
            />
            <button onClick={sendMessage} disabled={!input.trim()}>
              <FaPaperPlane />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatWidget;
