import React, { FC, useState } from "react";
import { FaUserEdit } from "react-icons/fa";
import { IoMdPerson } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill, RiLockPasswordLine } from "react-icons/ri";
import { TbUserEdit } from "react-icons/tb";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import SignupPhoto from "../assets/images/signupphoto.png"; 
import { login } from "../lib/users/userSlice";

export const SignUpDiv: FC = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch(
      login({
        firstName,
        lastName,
        userName,
        email,
        password,
        confirmPassword: confirmpassword,
        isLoggedIn: true,
        id: "",
      })
    );
  };

  return (
    <div className="bg-register h-full flex flex-row text-center font-poppins justify-center border-solid">
      <div className="w-1/2 h-full hidden md:block">
        <img
          src={SignupPhoto}
          alt="Sign Up"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Form Section */}
      <div className="w-full md:w-1/2 flex flex-col justify-center">
        <h2 className="text-2xl font-semibold mb-4">Sign Up</h2>

        <form onSubmit={handleSubmit} className="px-6">
          <div className="flex flex-col">
            {/* First Name */}
            <div className="border flex justify-center items-center border-black rounded-md h-12 mb-4 bg-transparent">
              <div className="w-10 ml-3">
                <FaUserEdit />
              </div>
              <input
                className="focus:outline-none w-full bg-transparent text-left"
                type="text"
                placeholder="Enter First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>

            {/* Last Name */}
            <div className="border flex justify-center items-center border-black rounded-md h-12 mb-4 bg-transparent">
              <div className="w-10 ml-3">
                <TbUserEdit />
              </div>
              <input
                className="focus:outline-none w-full bg-transparent text-left"
                type="text"
                placeholder="Enter Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>

            {/* Username */}
            <div className="border flex justify-center items-center border-black rounded-md h-12 mb-4 bg-transparent">
              <div className="w-10 ml-3">
                <IoMdPerson />
              </div>
              <input
                className="focus:outline-none w-full bg-transparent text-left"
                type="text"
                placeholder="Enter Username"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>

            {/* Email */}
            <div className="border flex justify-center items-center border-black rounded-md h-12 mb-4 bg-transparent">
              <div className="w-10 ml-3">
                <MdEmail />
              </div>
              <input
                className="focus:outline-none w-full bg-transparent text-left"
                type="email"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/* Password */}
            <div className="border flex justify-center items-center border-black rounded-md h-12 mb-4 bg-transparent">
              <div className="w-10 ml-3">
                <RiLockPasswordFill />
              </div>
              <input
                className="focus:outline-none w-full bg-transparent text-left"
                type="password"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {/* Confirm Password */}
            <div className="border flex justify-center items-center border-black rounded-md h-12 mb-4 bg-transparent">
              <div className="w-10 ml-3">
                <RiLockPasswordLine />
              </div>
              <input
                className="focus:outline-none w-full bg-transparent text-left"
                type="password"
                placeholder="Enter Confirm Password"
                value={confirmpassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
          </div>

          {/* Terms + Submit */}
          <div className="text-left pl-2 m-4 text-sm">
            <div className="flex">
              <input
                type="checkbox"
                className="border-none focus:outline-none"
              />
              <p className="ml-3">I agree to all the terms</p>
            </div>

            <button
              type="submit"
              className="bg-pink-400 text-left mt-3 mb-2 text-xs h-10 w-20 pl-5 text-white"
            >
              Register
            </button>

            <div className="flex text-sm mt-2">
              <p>Already have an account?</p>
              <Link to="/sign-in" className="text-blue-500 pl-2">
                Sign In
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
