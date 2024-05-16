import React from 'react';
import MatchCard from './MatchCard';

interface User {
    firstName: string;
    lastName: string;
    interests: string[];
}

interface MatchListProps {
    currentUser: User;
    users: User[];
}

const MatchList: React.FC<MatchListProps> = ({ currentUser, users }) => {
    const matches = users.filter(user =>
        user.interests.some(interest => currentUser.interests.includes(interest))
    );

    return (
        <div className="match-list">
            {matches.map((user, index) => (
                <MatchCard key={index} user={user} />
            ))}
        </div>
    );
};

export default MatchList;
