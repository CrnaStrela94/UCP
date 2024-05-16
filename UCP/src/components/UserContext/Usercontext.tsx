import { createContext, useState, useEffect } from 'react';
import AppRouter from '../../routes/router';
import Connect from '../../routes/Connect';

export const UserContext = createContext<any>(null);

export const UserProvider = ({ children }: { children: any }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
    }
  }, [user]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
      <AppRouter />
      <Connect />
    </UserContext.Provider>
  );
};