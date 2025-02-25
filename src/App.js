// App.js
import './App.css';
import styled, { ThemeProvider } from 'styled-components';
import { darkTheme } from './utils/Themes';
import Navbar from './components/Navbar';
import Hero from './components/HeroSection';
import Education from './components/Education';
import Skills from './components/Skills';
import { BrowserRouter as Router } from "react-router-dom";
import Experience from "./components/Experience";
import { useState } from 'react';

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  height: 100%;
  overflow-x: hidden;
`;

const Wrapper = styled.div`
  background: linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%), 
              linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%);
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%,30% 98%, 0 100%);
`;

const ChatbotToggle = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  padding: 10px 15px;
  background-color: ${({ theme }) => theme.primary};
  color: #fff;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
`;

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSend = async () => {
    if (input.trim() !== "") {
      const userMessage = { text: input, sender: "user" };
      setMessages((prev) => [...prev, userMessage]);

      const aiResponse = await getAIResponse(input);
      setMessages((prev) => [...prev, { text: aiResponse, sender: "bot" }]);

      setInput("");
    }
  };

  const getAIResponse = async (userInput) => {
    if (userInput.toLowerCase().includes("hello")) {
      return "Hi there! How can I help you today?";
    } else if (userInput.toLowerCase().includes("portfolio")) {
      return "This portfolio showcases my skills, projects, and contact information.";
    } else if (userInput.toLowerCase().includes("contact")) {
      return "You can contact me at your.email@example.com.";
    } else {
      return "I'm not sure how to respond to that. Try asking something else!";
    }
  };

  return (
    <div style={{
      position: 'fixed',
      bottom: '80px',
      right: '20px',
      width: '300px',
      background: 'linear-gradient(135deg, #000000, #4B0082)',
      borderRadius: '10px',
      boxShadow: '0 0 10px rgba(0,0,0,0.5)',
      overflow: 'hidden'
    }}>
      <div style={{ padding: '10px', backgroundColor: '#4B0082', color: 'white', fontWeight: 'bold' }}>
        AI Chatbot
      </div>
      <div style={{ height: '200px', overflowY: 'auto', padding: '10px', color: 'white' }}>
        {messages.map((msg, index) => (
          <div key={index} style={{ textAlign: msg.sender === 'user' ? 'right' : 'left' }}>
            <div style={{
              display: 'inline-block',
              backgroundColor: msg.sender === 'user' ? '#6A0DAD' : '#1C1C1C',
              padding: '5px 10px',
              borderRadius: '10px',
              marginBottom: '5px',
              color: 'white'
            }}>
              {msg.text}
            </div>
          </div>
        ))}
      </div>
      <div style={{ display: 'flex', padding: '10px', borderTop: '1px solid #444' }}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask something..."
          style={{ flex: 1, padding: '5px', borderRadius: '5px', border: '1px solid #ccc' }}
        />
        <button onClick={handleSend} style={{ marginLeft: '5px', padding: '5px 10px', borderRadius: '5px', backgroundColor: '#4B0082', color: 'white', border: 'none' }}>
          Send
        </button>
      </div>
    </div>
  );
};

function App() {
  const [showChatbot, setShowChatbot] = useState(false);

  return (
    <ThemeProvider theme={darkTheme}>
      <Router>
        <Navbar />
        <Body>
          <Hero />
          <Wrapper>
            <Skills />
            <Experience />
            <Education />
          </Wrapper>
          {showChatbot && <Chatbot />}
          <ChatbotToggle onClick={() => setShowChatbot(!showChatbot)}>
            {showChatbot ? 'Close Chatbot' : 'Open Chatbot'}
          </ChatbotToggle>
        </Body>
      </Router>
    </ThemeProvider>
  );
}

export default App;
