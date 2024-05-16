import React, { useState, useContext } from 'react';
import { UserContext } from '../../components/UserContext/Usercontext';
import './RegisterPage.scss';

const RegisterPage = () => {
  const { setUser } = useContext(UserContext);
  const [name, setName] = useState('');
  const [interests, setInterests] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const userInterests = interests.split(',').map(interest => interest.trim());
    setUser({ name, interests: userInterests });
    // Redirect to match page or next step
  };
  console.log('name', name);
  console.log('interests', interests);

  return (
    <div className="register-page">
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        <label>Interests (comma separated):</label>
        <input type="text" value={interests} onChange={(e) => setInterests(e.target.value)} required />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterPage;
