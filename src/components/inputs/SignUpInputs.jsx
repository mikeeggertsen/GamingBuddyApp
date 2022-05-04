import { useState } from 'react';

export default function SignUpInputs() {
  const [signUpState, setSignUpState] = useState({
    email: '',
    password: '',
    repeatPassword: '',
  });
  const [error, setError] = useState('');

  function setSignUpProperty(property) {
    setSignUpState((prev) => ({ ...prev, ...property }));
  }

  async function signUp() {
    setError('');
    const { email, password, repeatPassword } = signUpState;

    if (!email || !password || !repeatPassword) {
      setError(`Please fill out missing fields`);
      return;
    }

    if (password !== repeatPassword) {
      setError(`Passwords doesn't match`);
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
          value={signUpState.email}
          onChange={({ target: { value } }) =>
            setSignUpProperty({ email: value })
          }
        />
        <input
          className={inputStyle}
          type="password"
          placeholder="Password"
          value={signUpState.password}
          onChange={({ target: { value } }) =>
            setSignUpProperty({ password: value })
          }
        />
        <input
          className={inputStyle}
          type="password"
          placeholder="Repeat password"
          value={signUpState.repeatPassword}
          onChange={({ target: { value } }) =>
            setSignUpProperty({ repeatPassword: value })
          }
        />
      </div>
      <div className="w-full flex flex-col items-center justify-center gap-2">
        <button
          onClick={signUp}
          className="bg-theme-green text-white w-2/3 py-2 rounded-md"
        >
          Sign up
        </button>
        {error && <p className="text-red-500">{error}</p>}
      </div>
    </>
  );
}

const inputStyle = 'w-2/3 rounded-md py-2 px-4';
