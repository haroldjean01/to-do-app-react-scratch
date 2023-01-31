import React from 'react';
import { useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { useUser } from '../../context/UserContext.js';
import { authUser } from '../../services/auth.js';

export default function Auth() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { type } = useParams();
  const { user, setUser } = useUser();

  const submitAuth = async (e) => {
    console.log('type', type);
    e.preventDefault();
    try {
      const newUser = await authUser(email, password, type);
      console.log('newUser', newUser);
      setUser(newUser);
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <>
      <div className="auth-box">
        <form onSubmit={submitAuth}>
          <nav>
            {/* <div className="panel-heading">Shopping List Login</div> */}
            <NavLink to="/auth/sign-in">Sign In</NavLink>
            <NavLink to="/auth/sign-up">Sign Up</NavLink>
            <label>Email</label>
            <input
              type="email"
              placeholder="johndoe@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label>Password</label>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <div className="button">
              <button>Submit</button>
            </div>
          </nav>
        </form>
      </div>
    </>
  );
}
