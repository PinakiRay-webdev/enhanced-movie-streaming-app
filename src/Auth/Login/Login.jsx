import React, { useState } from "react";
import { useSelector } from "react-redux";
import loginBg from "../../assets/loginBG.svg";
import google from "../../assets/google.svg";
import facebook from "../../assets/facebook.svg";
import { PiEyesLight } from "react-icons/pi";
import { RiEyeCloseLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const sidebarStatus = useSelector((state) => state.sidebar.isOpen);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const navigate = useNavigate();

  return (
    <div
      className={`w-full h-fit ${
        sidebarStatus ? "pl-[10vw]" : "pl-[5rem]"
      } transition-all ease-in-out duration-150`}
    >
      <div className="h-screen bg-white flex justify-between">
        {/* login area  */}
        <div className="w-[50vw] flex items-center justify-center">
          <div>
            <h1 className="text-5xl font-semibold">Welcome back</h1>
            <p className="opacity-60 text-sm text-center my-4">
              Discover blockbuster hits and timeless classics. <br /> Log in to
              start the show!
            </p>

            {/* login form   */}
            <form>
              <fieldset className="border-2 border-green-600 px-4 py-2 rounded-md">
                <legend className="text-sm font-semibold text-green-700 px-1">
                  Email Address
                </legend>
                <input
                  className="outline-none"
                  type="email"
                  placeholder="abc@example.com"
                />
              </fieldset>
              <fieldset className="border-2 border-green-600 px-4 py-2 rounded-md mt-4">
                <legend className="text-sm font-semibold text-green-700 px-1">
                  Password
                </legend>
                <div className="flex justify-between items-center">
                  <input
                    className="outline-none"
                    type={isPasswordVisible ? "text" : "password"}
                    placeholder="*********"
                  />
                  <p
                    onClick={togglePasswordVisibility}
                    className="cursor-pointer p-1"
                  >
                    {isPasswordVisible ? <PiEyesLight /> : <RiEyeCloseLine />}
                  </p>
                </div>
              </fieldset>
              <p className="text-sm font-semibold text-green-900 mt-2 cursor-pointer text-right">
                Forgot password ?
              </p>
              <button className="bg-green-700 w-full mt-6 py-2 text-white rounded-md">
                Log In
              </button>
            </form>

            <div className="my-4 flex items-center gap-5">
              <div className="border border-zinc-600 opacity-50 h-0 w-full"></div>
              <p>or</p>
              <div className="border border-zinc-600 opacity-50 h-0 w-full"></div>
            </div>

            {/* social media login  */}

            <div>
              {/* login with google  */}
              <div className="flex items-center bg-green-100 py-2 justify-center gap-5 border border-green-600 rounded-md cursor-pointer">
                <img className="w-8" src={google} alt="" />
                <p>Log in with Google</p>
              </div>
              <div className="flex items-center bg-green-100 py-2 justify-center gap-5 border border-green-600 rounded-md mt-3 cursor-pointer">
                <img className="w-8" src={facebook} alt="" />
                <p>Log in with Facebook</p>
              </div>
            </div>

            <p className="mt-5 text-center text-gray-700">
              Didn't have an account?{" "}
              <span
                onClick={() => navigate("/signup")}
                className="text-green-900 cursor-pointer"
              >
                Sign up
              </span>{" "}
            </p>
          </div>
        </div>

        {/* login bg area  */}
        <div className="w-[50vw] h-screen">
          <img className="w-full h-full object-cover" src={loginBg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Login;
