import React, { useState } from 'react';
import { User } from '../../App';

interface FakeMessageModalProps {
  user: User;
  isOpen: boolean;
  onClose: () => void;
}

const FakeMessageModal: React.FC<FakeMessageModalProps> = ({
  user,
  isOpen,
  onClose,
}) => {
  const [userMessage, setUserMessage] = useState('');
  const [messages, setMessages] = useState<string[]>([]);

  if (!isOpen) return null;

  const generateFakeMessage = (user: User) => {
    const greetings = [
      `Hey ${user.firstName}, how are you?`,
      `Hi ${user.firstName}! Hope you're having a great day!`,
      `Hello ${user.firstName}, what's up?`,
    ];

    const interestMessages = user.interests.map(
      (interest: string) =>
        `I noticed you're into ${interest}. That's really cool!`
    );

    const languageMessage = `I see you speak ${user.nativeLanguage}. I'd love to learn more about your language and culture!`;

    const randomGreeting =
      greetings[Math.floor(Math.random() * greetings.length)];
    const randomInterestMessage =
      interestMessages[Math.floor(Math.random() * interestMessages.length)];

    return `${randomGreeting} ${randomInterestMessage} ${languageMessage}`;
  };

  const initialMessage = generateFakeMessage(user);
  const fakeResponse =
    "Thanks for reaching out! I'd love to chat more about that.";

  const handleSendMessage = () => {
    if (userMessage.trim() !== '') {
      setMessages([...messages, userMessage, fakeResponse]);
      setUserMessage('');
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-semibold mb-4">
          Conversation with {user.firstName}
        </h2>
        <div className="flex flex-col space-y-2 mb-4">
          <div className="self-end bg-blue-500 text-white p-3 rounded-lg rounded-br-none shadow-md">
            {initialMessage}
          </div>
          <div className="self-start bg-gray-200 text-gray-900 p-3 rounded-lg rounded-bl-none shadow-md">
            {fakeResponse}
          </div>
          {messages.map((message, index) => (
            <div
              key={index}
              className={`p-3 rounded-lg shadow-md ${
                index % 2 === 0
                  ? 'self-end bg-blue-500 text-white rounded-br-none'
                  : 'self-start bg-gray-200 text-gray-900 rounded-bl-none'
              }`}
            >
              {message}
            </div>
          ))}
        </div>
        <input
          type="text"
          value={userMessage}
          onChange={(e) => setUserMessage(e.target.value)}
          placeholder="Type your message..."
          className="w-full p-2 border border-gray-300 rounded-lg mb-4"
        />
        <div className="flex justify-between">
          <button
            onClick={handleSendMessage}
            className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            Send
          </button>
          <button
            onClick={onClose}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default FakeMessageModal;
