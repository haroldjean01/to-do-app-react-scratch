import React from 'react';
import { signOut } from '../services/auth.js';
import { useUser } from '../context/UserContext.js';

export default function Header() {
  const { setUser } = useUser();
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
      <button onClick={handleLogout}>SignOut</button>
    </header>
  );
}
