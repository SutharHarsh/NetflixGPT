import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        console.log("Sign-out successful.");
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        console.log("Error:" + error);
      });
  };
  return (
    <div className="absolute w-full bg-gradient-to-b from-black z-10 flex justify-between items-center">
      <img
        className="w-44"
        src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-07-01/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt=""
      />
      {user && (
        <div className="flex justify-between items-center gap-4">
          <h1 className="text-white font-bold text-2xl">{user?.displayName}</h1>
          <div className="p-2">
            <img
            className="w-20 rounded-[50%]" 
            src={user?.photoURL} 
            alt="profile_image" />
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
