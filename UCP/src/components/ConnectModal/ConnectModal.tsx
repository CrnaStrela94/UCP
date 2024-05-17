import React, { useState } from 'react';
import { User } from '../../App';

interface ConnectModalProps {
  user: User;
  isOpen: boolean;
  onClose: () => void;
  onPlanDate: (selectedInterests: string[]) => void;
  commonInterests: string[];
}

const ConnectModal: React.FC<ConnectModalProps> = ({
  user,
  isOpen,
  onClose,
  onPlanDate,
  commonInterests,
}) => {
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);

  if (!isOpen) return null;

  const handleCheckboxChange = (interest: string) => {
    setSelectedInterests((prevSelected) =>
      prevSelected.includes(interest)
        ? prevSelected.filter((i) => i !== interest)
        : [...prevSelected, interest]
    );
  };

  const handlePlanDate = () => {
    onPlanDate(selectedInterests);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            &times;
          </button>
        </div>
        <div className="text-center">
          <img
            src={user.imageSource}
            alt={`${user.firstName} ${user.lastName}`}
            className="w-32 h-32 object-cover object-center rounded-full border-4 border-white shadow-md mx-auto"
          />
          <h3 className="text-xl font-semibold text-gray-800 mt-4">
            {user.firstName} {user.lastName}
          </h3>
          <p className="text-gray-600 mt-2">
            Native Language: {user.nativeLanguage}
          </p>
          <div className="mt-4 text-left">
            <h4 className="text-lg font-semibold text-gray-800 mb-2">
              Common Interests:
            </h4>
            {commonInterests.map((interest, index) => (
              <div key={index} className="flex items-center mb-2">
                <input
                  type="checkbox"
                  id={`interest-${index}`}
                  className="mr-2"
                  checked={selectedInterests.includes(interest)}
                  onChange={() => handleCheckboxChange(interest)}
                />
                <label htmlFor={`interest-${index}`} className="text-gray-800">
                  {interest}
                </label>
              </div>
            ))}
          </div>
          <button
            onClick={handlePlanDate}
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Plan Date
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConnectModal;
