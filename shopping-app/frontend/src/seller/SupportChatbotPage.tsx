import React, { useState, useRef, useEffect } from 'react';
import SellerSidebar from '../components/SellerSidebar';
import './SupportChatbotPage.css';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: string;
}

const SupportChatbotPage: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! I'm your seller support assistant. How can I help you today?",
      sender: 'bot',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (inputText.trim() === '') return;

    // Add user message
    const userMessage: Message = {
      id: messages.length + 1,
      text: inputText,
      sender: 'user',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages([...messages, userMessage]);
    setInputText('');
    setIsTyping(true);

    // Simulate bot response after a delay
    setTimeout(() => {
      const botResponse = generateBotResponse(inputText);
      const botMessage: Message = {
        id: messages.length + 2,
        text: botResponse,
        sender: 'bot',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000);
  };

  const generateBotResponse = (userInput: string): string => {
    const input = userInput.toLowerCase();
    
    // Simple response logic - in a real app, this would connect to an AI service
    if (input.includes('hello') || input.includes('hi') || input.includes('hey')) {
      return "Hello there! How can I assist you with your seller account today?";
    }
    
    if (input.includes('product') || input.includes('upload') || input.includes('list')) {
      return "To upload a product, go to the 'Products' section in your seller dashboard and click 'Add New Product'. You'll need to provide product details, images, pricing, and inventory information.";
    }
    
    if (input.includes('order') || input.includes('sale')) {
      return "You can view and manage your orders in the 'Orders' section of your seller dashboard. From there, you can update order status, track shipments, and communicate with buyers.";
    }
    
    if (input.includes('payment') || input.includes('settlement')) {
      return "Payment settlements are processed monthly. You can view your settlement history and update your bank details in the 'Payment Settlement' section of your dashboard.";
    }
    
    if (input.includes('promotion') || input.includes('discount') || input.includes('offer')) {
      return "To create promotions, visit the 'Promotions' section in your seller portal. You can set up discounts, special offers, and featured product campaigns.";
    }
    
    if (input.includes('verification') || input.includes('kyc') || input.includes('account')) {
      return "Your account verification status can be checked in the 'Verification' section. Make sure all your KYC documents are uploaded and approved to fully access seller features.";
    }
    
    if (input.includes('analytics') || input.includes('report') || input.includes('sales')) {
      return "Detailed sales analytics and reports are available in the 'Analytics' section. You can view performance metrics, sales trends, and customer insights.";
    }
    
    if (input.includes('help') || input.includes('support')) {
      return "I'm here to help! You can ask me about product listings, order management, payments, promotions, account verification, and analytics. What would you like to know?";
    }
    
    if (input.includes('thank')) {
      return "You're welcome! Is there anything else I can assist you with?";
    }
    
    // Default response
    const responses = [
      "I understand. Could you provide more details about your question?",
      "Thanks for sharing that. How else can I assist you today?",
      "I'm here to help with seller-related questions. Can you tell me more about what you need?",
      "For more complex issues, you can also contact our human support team through the 'Contact Support' option in your dashboard.",
      "Is there a specific feature or process you'd like to know more about?"
    ];
    
    return responses[Math.floor(Math.random() * responses.length)];
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const quickQuestions = [
    "How do I upload a product?",
    "Where can I view my orders?",
    "How does payment settlement work?",
    "How do I create a promotion?",
    "How do I check my verification status?"
  ];

  return (
    <div className="seller-layout">
      <SellerSidebar />
      <main className="support-chatbot-page">
        <div className="container">
          <div className="page-header">
            <h1>Support Chatbot</h1>
            <p>Get instant help with your seller account</p>
          </div>

          <div className="chat-container">
            <div className="chat-messages">
              {messages.map(message => (
                <div 
                  key={message.id} 
                  className={`message ${message.sender}`}
                >
                  <div className="message-content">
                    <p>{message.text}</p>
                    <span className="timestamp">{message.timestamp}</span>
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="message bot">
                  <div className="message-content">
                    <div className="typing-indicator">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            <div className="quick-questions">
              <h3>Quick Questions:</h3>
              <div className="questions-grid">
                {quickQuestions.map((question, index) => (
                  <button
                    key={index}
                    className="quick-question-btn"
                    onClick={() => {
                      setInputText(question);
                      setTimeout(() => {
                        const sendButton = document.querySelector('.send-btn') as HTMLButtonElement;
                        if (sendButton) sendButton.click();
                      }, 100);
                    }}
                  >
                    {question}
                  </button>
                ))}
              </div>
            </div>

            <div className="chat-input-container">
              <textarea
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message here..."
                className="chat-input"
                rows={3}
              />
              <button 
                className="send-btn"
                onClick={handleSend}
                disabled={inputText.trim() === '' || isTyping}
              >
                Send
              </button>
            </div>
          </div>

          <div className="support-info">
            <h2>Need More Help?</h2>
            <p>If you require assistance with complex issues or account-specific queries, our support team is available 24/7.</p>
            <div className="support-options">
              <button className="support-btn">
                Contact Human Support
              </button>
              <button className="support-btn">
                View Help Center
              </button>
              <button className="support-btn">
                Schedule a Call
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SupportChatbotPage;