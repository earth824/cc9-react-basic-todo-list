import { useState } from 'react';
import LoginForm from '../components/LoginForm';
import Notification from '../components/Notification';

function Login() {
  const [error, setError] = useState('');
  return (
    <>
      {error && <Notification message={error} />}
      <LoginForm setError={setError} />
    </>
  );
}

export default Login;
