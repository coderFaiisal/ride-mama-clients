import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";
import { FaUserAlt } from "react-icons/fa";

const Navbar = () => {
  const { user, logoutUser } = useContext(AuthContext);

  const handleLogoutUser = () => {
    logoutUser()
      .then(() => {})
      .catch((e) => {
        console.error(e);
      });
  };

  return (
    <div className="navbar  bg-blue-900 sticky top-0 z-30">
      <div className="flex-1">
        <Link
          to="/"
          className="btn btn-ghost text-white normal-case font-bold text-2xl"
        >
          RIDE MAMA
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu text-white menu-horizontal px-1">
          <li className="me-2">
            <Link to="/">Home</Link>
          </li>
          <li className="me-2">
            <Link to="/blog">Blog</Link>
          </li>
          <li className="me-2">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
      <div className="flex-none gap-2">
        {user?.uid ? (
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-6 rounded-full">
                {user.photoURL ? (
                  <img src={user?.photoURL} alt="img" />
                ) : (
                  <FaUserAlt className="h-full w-full" />
                )}
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/profile" className="justify-between">
                  Profile
                </Link>
              </li>
              <li>
                <button onClick={handleLogoutUser}>Logout</button>
              </li>
            </ul>
          </div>
        ) : (
          <ul className="menu text-white menu-horizontal px-1">
            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Navbar;
