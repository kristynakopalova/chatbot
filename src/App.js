import { useState, useRef, useEffect } from 'react';
import './App.css';
import { Message } from './components/message/Message';
import { generateResponse } from './generateResponse';

function App() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [isDisabled, setIsDisabled] = useState(false);
  const messageListRef = useRef(null);

  useEffect(() => {
    if (messageListRef.current) {
      messageListRef.current.scrollTop = messageListRef.current.scrollHeight;
    }
  }, [messages]);

  function handleChange(e) {
    setMessage(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setIsDisabled(true);
    setMessages((previousMessages) => [
      ...previousMessages,
      { sender: 'You', text: message },
    ]);
    setMessage('');
    const delay = Math.floor(Math.random() * (5000 - 3000 + 1)) + 3000;
    setTimeout(handleAnswer, delay);
  }

  function handleAnswer() {
    const answer = { sender: 'AI Chatbot', text: generateResponse() };
    setMessages((previousMessages) => [...previousMessages, answer]);
    setIsDisabled(false);
  }

  return (
    <div className="chat">
      <h1 className="headline">Chatbot</h1>
      <div className="message-list" ref={messageListRef}>
        {messages.map((item, index) => (
          <Message text={item.text} sender={item.sender} key={index} />
        ))}
        {isDisabled ? <div className="loader"></div> : <></>}
      </div>
      <div className="message-input">
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <input
              type="text"
              value={message}
              onChange={handleChange}
              placeholder="Type your message here..."
            />
            <input
              type="submit"
              value="Send"
              disabled={isDisabled}
              className="message-send"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
