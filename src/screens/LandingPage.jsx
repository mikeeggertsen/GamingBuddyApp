import { useState } from 'react';
import SignInInputs from '../components/inputs/SignInInputs';
import SignUpInputs from '../components/inputs/SignUpInputs';

export default function SignUp() {
  const [showSignIn, setShowSignIn] = useState(true);

  return (
    <div className="flex">
      <div className="flex justify-center items-center h-screen w-1/2 bg-theme-dark p-6">
        <img src="/gamestand.svg" alt="gamestand" />
      </div>
      <div className="flex flex-col items-center p-12 h-screen w-1/2 bg-theme-light-dark gap-12">
        <div className="flex flex-col items-center gap-6 w-2/3">
          <img className="h-32 w-auto" src="/signup.svg" alt="logo" />
          <h1 className="text-white text-center font-bold text-3xl">
            Welcome to Gaming Buddy
          </h1>
          <p className="text-white text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
            pariatur totam autem corrupti
          </p>
        </div>
        {showSignIn ? <SignInInputs /> : <SignUpInputs />}
        <div className="flex flex-row gap-2">
          <h5 className="text-white">
            {showSignIn
              ? `Don't have an account yet?`
              : 'Already have an account?'}
          </h5>
          <button
            onClick={() => setShowSignIn((prev) => !prev)}
            className="text-theme-green"
          >
            {showSignIn ? 'Sign Up' : 'Sign In'}
          </button>
        </div>
      </div>
    </div>
  );
}
