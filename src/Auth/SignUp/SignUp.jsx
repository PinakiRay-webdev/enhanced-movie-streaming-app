import React, { useState } from "react";
import { useSelector } from "react-redux";
import loginBg from "../../assets/loginBG.svg";
import google from "../../assets/google.svg";
import facebook from "../../assets/facebook.svg";
import { PiEyesLight } from "react-icons/pi";
import { RiEyeCloseLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const sidebarStatus = useSelector((state) => state.sidebar.isOpen);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const formSubmit = async (data) => {
    toast.loading("Logging....", { theme: "dark", position: "top-left" });
    await new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 1500);
    }).then(() => {
      toast.dismiss();
      toast.success("logged in successfully", {
        theme: "dark",
        position: "top-left",
      });
      console.log(data);
      reset();
    });
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
        <div className="w-[50vw] flex items-center justify-center order-last">
          <div className="w-[50%]">
            <h1 className="text-5xl font-semibold text-center">Join us 🚀</h1>
            <p className="opacity-60 text-sm text-center my-4">
              Step into the spotlight of cinematic wonders. <br />
              Register now and start your movie adventure!
            </p>

            {/* login form   */}
            <form onSubmit={handleSubmit(formSubmit)}>
              {/* first name and last name */}
              <div className="flex gap-3">
                <fieldset
                  className={`border-2 ${errors.firstname ? "border-red-500" : "border-green-700"} px-4 py-2 rounded-md`}
                >
                  <legend
                    className={`text-sm font-semibold ${errors.firstname ? "text-red-500" : "text-green-700"} px-1`}
                  >
                    {errors.firstname ? errors.firstname.message : "First name"}
                  </legend>
                  <input
                    {...register("firstname", {
                      required: {
                        value: true,
                        message: "First name is required",
                      },
                    })}
                    className="outline-none w-full"
                    type="email"
                    placeholder="Anuj"
                  />
                </fieldset>
                <fieldset className={`border-2 ${errors.lastname ? "border-red-500" : "border-green-700"} px-4 py-2 rounded-md`}>
                  <legend className={`text-sm font-semibold ${errors.lastname ? "text-red-500" : "text-green-700"} px-1`}>
                  {errors.lastname ? errors.lastname.message : "border-green-700"}
                  </legend>
                  <input
                    {...register("lastname", {
                      required: {
                        value: true,
                        message: "Last name is required",
                      },
                    })}
                    className="outline-none w-full"
                    type="email"
                    placeholder="raval"
                  />
                </fieldset>
              </div>

              <fieldset className={`border-2 ${errors.mail ? "border-red-500" : "border-green-700"} px-4 py-2 rounded-md mt-3`}>
                <legend className={`text-sm font-semibold ${errors.mail ? "text-red-500" : "text-green-700"} px-1`}>
                {errors.firstname ? errors.firstname.message : "Mail Address"}
                </legend>
                <input
                  {...register("mail", {
                    required: {
                      value: true,
                      message: "Email address is required",
                    },
                  })}
                  className="outline-none"
                  type="email"
                  placeholder="abc@example.com"
                />
              </fieldset>
              <fieldset className={`border-2 ${errors.password ? "border-red-500" : "border-green-700"} px-4 py-2 rounded-md mt-4`}>
                <legend className={`text-sm font-semibold ${errors.password ? "text-red-500" : "text-green-700"} px-1`}>
                {errors.password ? errors.password.message : "Password"}
                </legend>
                <div className="flex justify-between items-center">
                  <input
                    {...register("password", {
                      required: {
                        value: true,
                        message: "Password is required",
                      },
                    })}
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
              <button className="bg-green-700 w-full mt-6 py-2 text-white rounded-md">
                Sign up
              </button>
            </form>

            <div className="my-4 flex items-center gap-5">
              <div className="border border-zinc-600 opacity-50 h-0 w-full"></div>
              <p>or</p>
              <div className="border border-zinc-600 opacity-50 h-0 w-full"></div>
            </div>

            {/* social media login  */}

            <div className="flex gap-4">
              {/* login with google  */}
              <div className="py-2 bg-green-100 gap-5 border border-green-600 rounded-md cursor-pointer w-full">
                <img className="w-8 mx-auto" src={google} alt="" />
              </div>
              <div className="py-2 bg-green-100 gap-5 border border-green-600 rounded-md cursor-pointer w-full">
                <img className="w-8 mx-auto" src={facebook} alt="" />
              </div>
            </div>

            <p className="mt-5 text-center text-gray-700">
              Already have an account?{" "}
              <span
                onClick={() => navigate("/login")}
                className="text-green-900 cursor-pointer"
              >
                Log in
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

export default SignUp;