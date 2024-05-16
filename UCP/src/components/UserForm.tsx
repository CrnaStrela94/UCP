import React, { useState } from 'react';
import { User } from '../App';

interface UserFormProps {
    onSubmit: (user: User) => void;
}

const UserForm: React.FC<UserFormProps> = ({ onSubmit }) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [interests, setInterests] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const interestsArray = interests.split(',').map(interest => interest.trim());
        onSubmit({
            firstName, lastName, interests: interestsArray,
            nativeLanguage: '',
            imageSource: ''
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="Interests (comma separated)"
                value={interests}
                onChange={(e) => setInterests(e.target.value)}
                required
            />
            <button type="submit">Submit</button>
        </form>
    );
};

export default UserForm;
