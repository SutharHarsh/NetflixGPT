import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../store/userSlice";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { LOGO } from "../utils/constant";
import { toggleGptSearchView } from "../store/gptSlice";
import { SUPPORTED_LANGUAGES } from "../utils/constant";
import { changeLangName } from "../store/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const gptSearchView = useSelector((state) => state.gpt.showGptSearch);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        console.log("Error:" + error);
      });
  };

  const handleGptSearch = () => {
    dispatch(toggleGptSearchView());
  };

  const handleLanguageName = (e) => {
    dispatch(changeLangName(e.target.value));
  };

  return (
    <div className="absolute w-full bg-gradient-to-b from-black z-10 flex justify-between items-center">
      <img className="w-44" src={LOGO} alt="Logo" />
      {user && (
        <div className="flex justify-between items-center gap-4">
          {gptSearchView && (
            <select
              onClick={(e) => handleLanguageName(e)}
              className="bg-white text-black px-4 p-2 rounded-lg "
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}

          <button
            onClick={handleGptSearch}
            className="bg-purple-700 hover:bg-purple-800 text-white px-4 p-2 rounded-md cursor-pointer"
          >
            GPT Search
          </button>
          <h1 className="text-white font-bold text-2xl">{user?.displayName}</h1>
          <div className="p-2">
            <img
              className="w-15 rounded-[50%]"
              src={user?.photoURL}
              alt="profile_image"
            />
          </div>
          <button
            onClick={handleSignOut}
            className="bg-red-600 p-2 text-white rounded-lg m-2 hover:bg-red-700 cursor-pointer"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
