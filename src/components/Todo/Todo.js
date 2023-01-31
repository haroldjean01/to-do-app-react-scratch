import React from 'react';
import { Redirect } from 'react-router-dom';
import { useUser } from '../../context/UserContext.js';
import { UserContext } from './context/UserContext.js';
export default function Todo() {
  const user = useUser(UserContext);
  if (!user) {
    return <Redirect to="/auth/sign-in" />;
  }
  return <div>Todo</div>;
}
