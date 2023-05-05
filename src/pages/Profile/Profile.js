import React, { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider";

const Profile = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="card w-96 bg-base-100 shadow-xl mx-auto mt-10">
      <figure>
        <img className="h-36 w-36 rounded-full" src={user?.photoURL} alt="User Profile" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Name : {user?.displayName}</h2>
        <h2 className="card-title">
          Email : <div className="badge badge-secondary">{user?.email}</div>
        </h2>
        <h2 className="card-title">
          Last Login :{" "}
          <div className="card-title">{user?.metadata?.lastSignInTime}</div>
        </h2>
      </div>
    </div>
  );
};

export default Profile;
