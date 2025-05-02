import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthProvider";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { FaEnvelope, FaLock } from "react-icons/fa";

const Login = () => {
  // eslint-disable-next-line
  const [authUser, setAuthUser] = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };
    axios
      .post(`${import.meta.env.VITE_BASE_URL}/api/user/login`, userInfo, {
        withCredentials: true,
      })
      .then((response) => {
        if (response.data) {
          toast.success("Login successful");
        }
        localStorage.setItem("ChatApp", JSON.stringify(response.data));
        setAuthUser(response.data);
      })
      .catch((error) => {
        if (error.response) {
          toast.error("Error: " + error.response.data.error);
        }
      });
  };
  return (
    <>
      <div className="flex h-screen items-center justify-center bg-gray-900 text-white">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-gray-800 border border-gray-700 px-8 py-6 rounded-xl shadow-md space-y-6 w-full max-w-md"
        >
          <h1 className="text-3xl text-blue-500 font-extrabold text-center">
            Chatterbox
          </h1>
          <h2 className="text-lg text-center">
            Login with your{" "}
            <span className="text-blue-400 font-semibold">Account</span>
          </h2>
          <label className="input input-bordered flex items-center gap-3 bg-gray-700 border border-gray-600 text-white">
            <FaEnvelope className="text-xl text-gray-400" />
            <input
              type="text"
              className="grow bg-transparent outline-none"
              placeholder="Email"
              {...register("email", { required: true })}
            />
          </label>
          {errors.email && (
            <span className="text-red-400 text-sm font-medium">
              This field is required
            </span>
          )}
          <label className="input input-bordered flex items-center gap-3 bg-gray-700 border border-gray-600 text-white">
            <FaLock className="text-xl text-gray-400" />
            <input
              type="password"
              className="grow bg-transparent outline-none"
              placeholder="Password"
              {...register("password", { required: true })}
            />
          </label>
          {errors.password && (
            <span className="text-red-400 text-sm font-medium">
              This field is required
            </span>
          )}
          <div className="flex justify-center">
            <input
              type="submit"
              value="Login"
              className="text-white bg-blue-600 hover:bg-blue-700 transition-colors w-full rounded-lg py-2 font-semibold cursor-pointer"
            />
          </div>

          <p className="text-center text-sm">
            Don't have an account?
            <Link to={"/signup"} className="text-blue-400 hover:underline ml-1">
              Signup
            </Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default Login;
