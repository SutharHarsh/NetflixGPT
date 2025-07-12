import React, { useState } from "react";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const toggleSignIn = () => {
    setIsSignIn(!isSignIn);
  };
  return (
    <div>
      <div>
        <img
          className="absolute"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/7d2359a4-434f-4efa-9ff3-e9d38a8bde7f/web/IN-en-20250707-TRIFECTA-perspective_4faa9280-a2c5-4e07-aafc-a45ce43fea09_small.jpg"
          alt="backgroun_image"
        />
      </div>
      <form
        className="absolute bg-black text-white w-3/12 p-8 my-35 mx-auto left-0 right-0 flex flex-col items-star rounded-lg bg-opacity-80"
        action=""
      >
        <h1 className="font-bold text-3xl pb-6">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            className="bg-gray-700 p-3 my-4 w-full"
            type="text"
            placeholder="Enter Your Fullname"
          />
        )}

        <input
          className="bg-gray-700 p-3 my-4 w-full"
          type="text"
          placeholder="Enter Your Email"
        />
        <input
          className="bg-gray-700 p-3 my-4 w-full"
          type="password"
          placeholder="Enter Your Password"
        />
        <button className="w-full bg-red-700 p-2 my-4 rounded-lg">
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p className="cursor-pointer" onClick={toggleSignIn}>
            {isSignIn ? "New to Netflix? Sign Up Now!" : "Already Registered? Sign In Now!"}
          
        </p>
      </form>
    </div>
  );
};

export default Login;
