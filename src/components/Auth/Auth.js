import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Auth() {
  return (
    <div className="auth-box">
      <nav>
        {/* <div className="panel-heading">Shopping List Login</div> */}
        <NavLink to="/auth/sign-in">Sign In</NavLink>
        <NavLink to="/auth/sign-up">Sign Up</NavLink>
        <label>Email</label>
        <input type="email" placeholder="johndoe@example.com" />
        <label>Password</label>
        <input type="password" placeholder="Password" />
        <div className="button">
          <button>Submit</button>
        </div>
      </nav>
    </div>
  );
}
