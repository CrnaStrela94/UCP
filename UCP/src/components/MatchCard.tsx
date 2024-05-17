import React from 'react';

interface User {
    firstName: string;
    lastName: string;
    interests: string[];
}

interface MatchCardProps {
    user: User;
}

const MatchCard: React.FC<MatchCardProps> = ({ user }) => {
    const handleConnect = () => {
        alert(`Connect with ${user.firstName} ${user.lastName}`);
    };

    const handleMessage = () => {
        alert(`Message ${user.firstName} ${user.lastName}`);
    };

    const handleSkip = () => {
        alert(`Skipped ${user.firstName} ${user.lastName}`);
    };

    return (
        <div className="match-card">
            <h3>{user.firstName} {user.lastName}</h3>
            <p>Interests: {user.interests.join(', ')}</p>
            <button onClick={handleConnect}>Connect</button>
            <button onClick={handleMessage}>Message</button>
            <button onClick={handleSkip}>Skip</button>
        </div>
    );
};

export default MatchCard;
