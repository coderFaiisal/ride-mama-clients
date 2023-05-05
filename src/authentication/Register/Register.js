import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import { FaGoogle } from "react-icons/fa";
import { toast } from "react-hot-toast";

const Register = () => {
  const [isChecked, setIsChecked] = useState(false);
  const {
    createUser,
    googleUserLogin,
    errorMessage,
    updateUserName,
    setErrorMessage,
    varifyUser,
  } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPass.value;
    const profile = {
      displayName: name,
      photoURL: photo,
    };
    if (!/[A-Z].*[A-Z]/.test(password)) {
      setErrorMessage("Password at least have two uppercase");
      return;
    }
    if (!/[\W_]/.test(password)) {
      setErrorMessage("Password should have one special character");
      return;
    }
    if (password.length < 6) {
      setErrorMessage("Password should be 6 character");
      return;
    }
    if (password !== confirmPassword) {
      setErrorMessage("Confirm password don't match");
      return;
    }
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        handleUpdateUserName(profile);
        toast.success("User Created Successfully");
        setErrorMessage("");
        handleVarifyUser();
        form.reset();
      })
      .catch((e) => console.error(e));
  };

  const handleUpdateUserName = (profile) => {
    updateUserName(profile)
      .then(() => {})
      .catch((e) => console.error(e));
  };

  const handleVarifyUser = () => {
    varifyUser()
      .then(() => {
        toast.success(
          "Please, varify your email. Varification email send to your account."
        );
      })
      .catch((e) => console.error(e));
  };

  const handleGoogleLogin = () => {
    googleUserLogin()
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((e) => console.error(e));
  };

  const handleTermsChecked = (e) => {
    setIsChecked(e.target.checked);
  };

  return (
    <div className="min-h-screen bg-base-200">
      <div className="flex-col justify-center hero-content ">
        <div className="text-center lg:text-left">
          <h1 className="mb-2 text-5xl font-bold">Register</h1>
        </div>
        <div className="card w-full flex-shrink-0 max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Joe Doe"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                name="photo"
                placeholder="Your Photo URL"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="ABC@gmail.com"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                type="password"
                name="confirmPass"
                placeholder="Confirm Password"
                className="input input-bordered"
                required
              />
            </div>
            <p className="text-error">{errorMessage}</p>
            <label className="label">
              <div>
                <span className="label-text">Already Have an Account?</span>{" "}
                <Link to="/login" className="link link-hover underline">
                  Login
                </Link>
              </div>
            </label>
            <div className="flex items-center">
              <input
                onClick={handleTermsChecked}
                type="checkbox"
                className="checkbox-xs me-2"
              />
              <p>Agree Terms & Conditions?</p>
            </div>
            <div className="form-control mt-6">
              <input
                type="submit"
                value="Register"
                className="btn btn-primary -mt-4"
                disabled={!isChecked}
              />
            </div>
          </form>
          <button
            onClick={handleGoogleLogin}
            className="btn btn-outline m-8 -mt-2"
          >
            <FaGoogle className="me-2" /> Continue with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
