import { useContext } from "react";
import { authContext } from "../Components/AuthProvider";

const ProfilePage = () => {
  const { user } = useContext(authContext);

  return (
    <div className="flex items-center justify-center px-4 py-8">
      <div className="bg-white shadow-xl rounded-xl p-8 w-full max-w-xl">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">My Profile</h2>
        
        
        
        <div className="flex flex-col items-center space-y-4">
          <img
            src={user?.photoURL || "https://i.ibb.co/LdpFsnV/icons8-user-avatar-94.png"}
            alt="Profile"
            className="w-28 h-28 rounded-full object-cover border-4 border-blue-300"
          />
          <h3 className="text-2xl font-semibold text-gray-800">{user?.displayName || "N/A"}</h3>
          <p className="text-gray-600"><strong>Email:</strong> {user?.email}</p>
          
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
