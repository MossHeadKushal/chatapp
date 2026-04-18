import React, { useState, useRef, useEffect } from 'react';
import { chatDummyData } from '../assets/assets';
import { formatMessageTime } from '../library/util.ts';

const ChatContainer: React.FC = () => {

    interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  createdAt: Date;
}

  const [messages, setMessages] = useState<Message[]>(
    chatDummyData.map((m) => ({
      ...m,
      createdAt: new Date(),
    }))
  );

  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Bot messagae letter by letter
  const typeBotMessage = (fullText: string) => {
    let index = 0;
    const id = Date.now();

    // Add empty bot message first
    setMessages((prev) => [
      ...prev,
      { id, text: '', sender: 'bot', createdAt: new Date() },
    ]);

    const typingInterval = setInterval(() => {
      setMessages((prev) => {
        const lastMsgIndex = prev.findIndex((m) => m.id === id);
        if (lastMsgIndex === -1) return prev;

        const updatedMsg = {
          ...prev[lastMsgIndex],
          text: fullText.slice(0, index + 1),
        };

        const newMessages = [
          ...prev.slice(0, lastMsgIndex),
          updatedMsg,
          ...prev.slice(lastMsgIndex + 1),
        ];

        return newMessages;
      });

      index++;
      if (index === fullText.length) clearInterval(typingInterval);
    }, 80);
  };

  const sendBotReply = (userText: string) => {
    const typingMsg: Message = {
      id: Date.now(),
      text: 'Typing...',
      sender: 'bot',
      createdAt: new Date(),
    };

    setMessages((prev) => [...prev, typingMsg]);

    setTimeout(() => {
      const matched = chatDummyData.find(
        (item) =>
          item.sender === 'user' &&
          item.text.toLowerCase() === userText.toLowerCase()
      );

      const botReply = chatDummyData.find(
        (item) => (matched ? item.id === matched.id + 1 : false)
      ) || {
        text: "Sorry, I don't understand that yet!",
      };

      setMessages((prev) => prev.filter((m) => m.id !== typingMsg.id));

      typeBotMessage(botReply.text);
    }, 1000);
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userText = input.trim();

    setMessages((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        text: userText,
        sender: 'user',
        createdAt: new Date(),
      },
    ]);

    setInput('');

    sendBotReply(userText);
  };

  return (
    <div className="flex flex-col flex-1 overflow-hidden bg-white">
      {/* Header */}
      <div className="bg-gray-50 p-4">
        <h2 className="text-lg font-semibold">Technical Interview</h2>
      </div>

      {/* Messages */}
      <div className="flex-1 min-h-0 overflow-y-auto p-6 space-y-4">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex items-end ${
              msg.sender === 'user' ? 'justify-end' : 'justify-start'
            } gap-2`}
          >
            <div
              className={`relative max-w-[75%] p-3 rounded-lg shadow-sm ${
                msg.sender === 'user'
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-100 text-gray-900'
              }`}
              title={new Date(msg.createdAt).toLocaleString()}
            >
              <span className="block mb-2 whitespace-pre-wrap break-all">
                {msg.text}
              </span>
              <span
                className={`absolute bottom-1 text-[10px] ${
                  msg.sender === 'user'
                    ? 'right-2 text-gray-200'
                    : 'left-2 text-gray-500'
                }`}
              >
                {formatMessageTime(msg.createdAt)}
              </span>
            </div>
          </div>
        ))}

        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="p-4 bg-white">
        <div className="flex">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Type a message..."
            className="flex-1 border border-gray-300 rounded-2xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-200"
          />
          <button
            onClick={handleSend}
            className="ml-2 bg-blue-100 px-6 py-3 rounded-2xl hover:bg-blue-300 cursor-pointer"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatContainer;
