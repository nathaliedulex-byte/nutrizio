import { useRef, useState } from 'react';
import api, { withToken } from '../services/api';
import { useAuth } from '../context/AuthContext';
export default function ChatbotWidget() {
  const { token } = useAuth();
  const [messages, setMessages] = useState([{ role: 'assistant', content: 'Hi, I can help with calories, nutrients, recipes, and healthy meal ideas.' }]);
  const [input, setInput] = useState('');
  const scrollerRef = useRef(null);
  const sendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    const outgoing = { role: 'user', content: input };
    const next = [...messages, outgoing];
    setMessages(next);
    setInput('');
    const { data } = await api.post('/chatbot', { message: outgoing.content }, withToken(token));
    const updated = [...next, { role: 'assistant', content: data.reply }];
    setMessages(updated);
    requestAnimationFrame(() => {
      if (scrollerRef.current) scrollerRef.current.scrollTop = scrollerRef.current.scrollHeight;
    });
  };
  return (
    <div className="panel-card chatbot-card">
      <div className="section-head"><h2>Nutrition chatbot</h2></div>
      <div className="chat-scroll" ref={scrollerRef}>
        {messages.map((msg, index) => <div key={index} className={`chat-bubble ${msg.role}`}>{msg.content}</div>)}
      </div>
      <form onSubmit={sendMessage} className="d-flex gap-2 mt-3">
        <input className="form-control" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Ask about foods, calories, or meal ideas" />
        <button className="btn btn-success">Send</button>
      </form>
    </div>
  );
}
