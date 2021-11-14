import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div>
      <h1>Hi, this is a landing page</h1>
      <Link to="signup">Sign up</Link>
      <Link to="login">Log in</Link>
    </div>
  );
};

export default LandingPage;
