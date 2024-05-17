import React from 'react';
import MatchCard from './MatchCard';

interface User {
  firstName: string;
  lastName: string;
  interests: string[];
  nativeLanguage: string;
  imageSource: string;
}

interface MatchListProps {
  currentUser: User;
  users: User[];
}

const MatchList: React.FC<MatchListProps> = ({ currentUser, users }) => {
  const matches = users.filter((user) =>
    user.interests.some((interest) => currentUser.interests.includes(interest))
  );

  return (
    <div className="min-h-screen flex items-center justify-center pt-10">
      <div className="flex flex-wrap justify-center">
        {matches.map((user, index) => (
          <MatchCard
            key={index}
            user={user}
            currentUserInterests={currentUser.interests}
          />
        ))}
      </div>
    </div>
  );
};

export default MatchList;
