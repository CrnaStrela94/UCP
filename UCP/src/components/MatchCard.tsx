import React, { useState } from 'react';
import RoundButton from './btn/btn';
import ConnectModal from './ConnectModal/ConnectModal';
import { User } from '../App';

interface MatchCardProps {
  user: User;
  currentUserInterests: string[];
}

const MatchCard: React.FC<MatchCardProps> = ({
  user,
  currentUserInterests,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const commonInterests = user.interests.filter((interest) =>
    currentUserInterests.includes(interest)
  );

  const handleConnect = () => {
    setIsModalOpen(true);
  };

  const handleMessage = () => {
    alert(`Message ${user.firstName} ${user.lastName}`);
  };

  const handleSkip = () => {
    alert(`Skipped ${user.firstName} ${user.lastName}`);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handlePlanDate = (selectedInterests: string[]) => {
    alert(
      `Planned date with ${user.firstName} ${
        user.lastName
      } for interests: ${selectedInterests.join(', ')}`
    );
    closeModal();
  };

  return (
    <div>
      <div className="max-w-sm p-4 mt-10 m-4 border border-gray-300 rounded-lg shadow-lg bg-white">
        <div className="flex justify-center">
          <img
            src={user.imageSource}
            alt={`${user.firstName} ${user.lastName}`}
            className="w-32 h-32 object-cover object-center rounded-full border-4 border-white shadow-md -mt-16"
          />
        </div>
        <div className="p-4 text-center">
          <h3 className="text-xl font-semibold text-gray-800">
            {user.firstName} {user.lastName}
          </h3>
          <div className="flex flex-wrap justify-center mt-2">
            {user.interests.map((interest, index) => (
              <span
                key={index}
                className={`text-sm font-medium mr-2 px-3.5 py-1.5 rounded-full mb-2 ${
                  currentUserInterests.includes(interest)
                    ? 'bg-green-100 text-green-800'
                    : 'bg-blue-100 text-blue-800'
                }`}
              >
                {interest}
              </span>
            ))}
          </div>
          <p className="text-gray-600 mt-2">
            Native Language: {user.nativeLanguage}
          </p>
          <div className="mt-4 flex justify-center space-x-4">
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onClick={handleConnect}
            >
              Connect
            </button>
            <button
              className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
              onClick={handleMessage}
            >
              Message
            </button>
            <button
              className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
              onClick={handleSkip}
            >
              Remove
            </button>
          </div>
        </div>
      </div>
      <ConnectModal
        user={user}
        isOpen={isModalOpen}
        onClose={closeModal}
        onPlanDate={handlePlanDate}
        commonInterests={commonInterests}
      />
    </div>
  );
};

export default MatchCard;
