import { useState } from 'react';

export default function SignInInputs() {
  const [signInState, setSignInState] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');

  function setSignUpProperty(property) {
    setSignInState((prev) => ({ ...prev, ...property }));
  }

  async function signIn() {
    setError('');
    const { email, password } = signInState;
    if (!email || !password) {
      setError(`Please fill out missing fields`);
      return;
    }
  }

  return (
    <>
      <div className="flex w-full flex-col items-center gap-4">
        <input
          className={inputStyle}
          type="email"
          placeholder="Email"
          value={signInState.email}
          onChange={({ target: { value } }) =>
            setSignUpProperty({ email: value })
          }
        />
        <input
          className={inputStyle}
          type="password"
          placeholder="Password"
          value={signInState.password}
          onChange={({ target: { value } }) =>
            setSignUpProperty({ password: value })
          }
        />
      </div>
      <div className="w-full flex flex-col items-center justify-center gap-2">
        <button
          onClick={signIn}
          className="bg-theme-green text-white w-2/3 py-2 rounded-md"
        >
          Sign in
        </button>
        {error && <p className="text-red-500">{error}</p>}
      </div>
    </>
  );
}

const inputStyle = 'w-2/3 rounded-md py-2 px-4';
