import { TbUserEdit } from "react-icons/tb";
import { FaUserEdit } from "react-icons/fa";
import { IoMdPerson } from "react-icons/io";
import { RiLockPasswordFill } from "react-icons/ri";
import { RiLockPasswordLine } from "react-icons/ri";
import { FC, useState } from "react";
import SignupPhoto from "../assets/images/signupphoto.png";
import { MdEmail } from "react-icons/md";
import React from "react";
import { Link } from "react-router-dom";

export const SignUpDiv: FC = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");

  return (
    <form>
      <Link to="/sign-up">
        <div className="bg-register h-full flex flex-row text-center font-poppins justify-center border-solid">
          <div className="w-1/2 h-full">
            <img src={SignupPhoto} />
          </div>
          <div className="w-1/2">
            <h2>Sign Up </h2>
            <form className="px-6">
              <div className="flex flex-col ">
                <div className="border flex justify-center items-center border-black rounded-md h-12 mb-4 bg-transparent">
                  <div className="w-10 ml-3">
                    <FaUserEdit />
                  </div>
                  <div className="flex-grow ">
                    <input
                      className=" focus:outline-none w-full border-none focus:border-none bg-transparent text-left"
                      type="name"
                      placeholder="Enter First Name "
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </div>
                </div>
                <div className="border flex justify-center items-center border-black rounded-md h-12 mb-4 bg-transparent">
                  <div className="w-10 ml-3">
                    <TbUserEdit />
                  </div>
                  <div className=" flex-grow ">
                    <input
                      className=" focus:outline-none w-full bg-transparent text-left"
                      type="name"
                      placeholder=" Enter Last Name"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </div>
                </div>
                <div className="border flex justify-center items-center border-black rounded-md h-12 mb-4 bg-transparent">
                  <div className="w-10 ml-3">
                    <IoMdPerson />
                  </div>
                  <div className=" flex-grow ">
                    <input
                      className=" focus:outline-none w-full bg-transparent text-left"
                      type="name"
                      placeholder=" Enter UserName"
                      value={userName}
                      onChange={(e) => setUserName(e.target.value)}
                    />
                  </div>
                </div>
                <div className="border flex justify-center items-center border-black rounded-md h-12 mb-4 bg-transparent">
                  <div className="w-10 ml-3">
                    <MdEmail />
                  </div>
                  <div className=" flex-grow ">
                    <input
                      className=" focus:outline-none w-full bg-transparent text-left"
                      type="email"
                      placeholder=" Enter Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
                <div className="border flex justify-center items-center border-black rounded-md h-12 mb-4 bg-transparent">
                  <div className="w-10 ml-3">
                    <RiLockPasswordFill />
                  </div>
                  <div className=" flex-grow ">
                    <input
                      className=" focus:outline-none w-full bg-transparent text-left"
                      type="password"
                      placeholder=" Enter Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </div>
                <div className="border flex justify-center items-center border-black rounded-md h-12 mb-4 bg-transparent">
                  <div className="w-10 ml-3">
                    <RiLockPasswordLine />
                  </div>
                  <div className=" flex-grow ">
                    <input
                      className=" focus:outline-none w-full bg-transparent text-left"
                      type="password"
                      placeholder=" Enter confirm password"
                      value={confirmpassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </form>
            <div className="text-left pl-2 m-4 text-sm">
              <div className="flex">
                <input
                  type="checkbox"
                  className="border-none focus:outline-none"
                />
                <p className="ml-3">I agree to all the terms</p>
              </div>
              <button className=" bg-pink-400 text-left mt-3 mb-2 text-xs h-10 w-20 pl-5  text-white-100">
                Register
              </button>
              <div className=" flex">
                <p>Already Have an account?</p>
                <p className="text-blue-500 pl-2">Sign In</p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </form>
  );
};
