import React from 'react';
import { signOut } from '../services/auth.js';
import { useUser } from '../context/UserContext.js';

export default function Header() {
  const { user, setUser } = useUser();
  const handleLogout = async () => {
    try {
      await signOut();
      setUser(null);
    } catch (e) {
      console.error(e.message);
    }
  };
  return (
    <header>
      <h1>Header</h1>
      {user && (
        <nav>
          <button onClick={handleLogout}>SignOut</button>
          <p>Hello {user.email}</p>
        </nav>
      )}
    </header>
  );
}
