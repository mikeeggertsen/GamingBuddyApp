import { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { userState } from '../../recoil/atoms/user';
import { signInUser } from '../../requests/auth';

export default function SignInInputs() {
  const [signInState, setSignInState] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const setUser = useSetRecoilState(userState);

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
    const { token, user } = await signInUser(email, password);

    if (token && user) {
      setSignInState({
        email: '',
        password: '',
      });
      localStorage.setItem('token', token);
      setUser(user, token);
      window.location = '/dashboard';
    } else {
      setError('Failed to sign in');
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
