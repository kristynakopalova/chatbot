import './styles.css';

export function Message(props) {
  return (
    <div
      className={
        props.sender === 'AI Chatbot'
          ? 'bubble ai-response'
          : 'bubble user-text'
      }
    >
      <div className="message-sender">{props.sender}</div>
      <p className="message-text">{props.text}</p>
    </div>
  );
}
