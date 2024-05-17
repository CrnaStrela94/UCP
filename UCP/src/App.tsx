import React, { useState } from 'react';
import personData from './jsonData/personData.json';
import UserForm from './components/UserForm';
import MatchList from './components/MatchList';

export interface User {
  firstName: string;
  lastName: string;
  interests: string[];
  nativeLanguage: string;
  imageSource: string;
}

const App: React.FC = () => {
  const people: {
    first_name: string;
    last_name: string;
    interests: string[];
    native_language: string;
    image_source: string;
  }[] = personData.people;

  const users: User[] = people.map((person) => {
    return {
      firstName: person.first_name,
      lastName: person.last_name,
      interests: person.interests,
      nativeLanguage: person.native_language,
      imageSource: person.image_source,
    };
  });

  const [currentUser, setCurrentUser] = useState<User | null>(null);

  const handleFormSubmit = (user: User) => {
    setCurrentUser(user);
  };

  return (
    <div className="app-container">
      {!currentUser ? (
        <UserForm onSubmit={handleFormSubmit} />
      ) : (
        <MatchList currentUser={currentUser} users={users} />
      )}
    </div>
  );
};

export default App;
