import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import { FaGoogle } from "react-icons/fa";
import { toast } from "react-hot-toast";

const Login = () => {
  const { loginUser, googleUserLogin, setLoading } = useContext(AuthContext);
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    loginUser(email, password)
      .then((result) => {
        const user = result.user;
        if (user.emailVerified) {
          navigate(from, { replace: true });
        } else {
          toast.error(
            "Your email is not varified. Please, varify email from your account"
          );
        }
        form.reset();
      })
      .catch((e) => {
        const primaryMessage = e.message.split("/")[1];
        const finalMessage = primaryMessage.split(")")[0];
        toast.error(finalMessage);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleGoogleLogin = () => {
    googleUserLogin()
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((e) => console.error(e));
  };
  return (
    <div className="min-h-screen bg-base-200">
      <div className="flex-col justify-center hero-content ">
        <div className="text-center lg:text-left">
          <h1 className="mb-2 text-5xl font-bold">Login</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="abc@gmail.com"
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
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <Link className="label-text-alt">Forgot password?</Link>
              </label>

              <label className="label">
                <div>
                  <span className="label-text">Don't Have an Account?</span>{" "}
                  <Link to="/register" className="link link-hover underline">
                    Register
                  </Link>
                </div>
              </label>
            </div>
            <div className="form-control mt-6">
              <input type="submit" value="Login" className="btn btn-primary" />
            </div>
          </form>
          <button
            onClick={handleGoogleLogin}
            className="btn btn-outline m-8 mt-0"
          >
            <FaGoogle className="me-2" /> Continue with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
