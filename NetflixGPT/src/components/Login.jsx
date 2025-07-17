import React, { useRef, useState } from "react";
import checkDataValid from "../utils/validate";
import Header from "./Header";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../store/userSlice";
import { BG_IMAGE_URL, PROFILE_IMAGE } from "../utils/constant";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const dispatch = useDispatch();

  const toggleSignIn = () => {
    setIsSignIn(!isSignIn);
  };

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const onSubmit = () => {
    const message = checkDataValid(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;

    if (!isSignIn) {
      // sign up logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // SIGNED UP
          const user = userCredential.user;

          // PROFILE UPDATE LOGIC
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: PROFILE_IMAGE,
          })
            .then(() => {
              // Profile updated!
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              // An error occurred
              setErrorMessage(error);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      // SIGN IN LOGIC
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  return (
    <div>
      <Header />
      <div>
        <img
          className="absolute"
          src={BG_IMAGE_URL}
          alt="backgroun_image"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute bg-black text-white w-3/12 p-8 my-35 mx-auto left-0 right-0 flex flex-col items-star rounded-lg bg-opacity-80"
        action=""
      >
        <h1 className="font-bold text-3xl pb-6">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            ref={name}
            className="bg-gray-700 p-3 my-4 w-full"
            type="text"
            placeholder="Enter Your Fullname"
          />
        )}

        <input
          ref={email}
          className="bg-gray-700 p-3 my-4 w-full"
          type="text"
          placeholder="Enter Your Email"
        />
        <input
          ref={password}
          className="bg-gray-700 p-3 my-4 w-full"
          type="password"
          placeholder="Enter Your Password"
        />
        <p className="text-red-600 font-bold py-2">{errorMessage}</p>
        <button
          onClick={onSubmit}
          className="w-full bg-red-700 hover:bg-red-800 cursor-pointer p-2 my-4 rounded-lg"
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p className="cursor-pointer" onClick={toggleSignIn}>
          {isSignIn
            ? "New to Netflix? Sign Up Now!"
            : "Already Registered? Sign In Now!"}
        </p>
      </form>
    </div>
  );
};

export default Login;
