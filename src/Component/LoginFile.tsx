import { FC } from "react"
import { IoMdPerson } from "react-icons/io";
import { RiLockPasswordLine } from "react-icons/ri";
import LoginPhoto from "../assets/images/login.png";
import FacebookLogo from "../assets/images/facebook.png";
import GoogleLogo from "../assets/images/google.png";
import CrossLogo from "../assets/images/xlogo.png";


export const RegisterForm:FC =()=>{
  return(
    <div className="bg-register h-screen flex-row flex border-solid text-center">
      <div className="w-1/2 flex flex-col text-center pt-20">
      <h2 className="text-left pl-6 mb-3">Sign In</h2>
      <form className="px-6">
      <div >
        <div className="border flex  justify-center items-center border-black rounded-md h-12  mb-4 bg-transparent">
        <div className="ml-3">
          <IoMdPerson />
        </div>
        <div className="flex-grow">
          <input className="w-full bg-transparent text-left" type="text" placeholder="Enter Username"/>
        </div>
        </div>
      
        <div className="border flex justify-center items-center border-black rounded-md h-12 mb-4 bg-transparent">
          <div className="w-10 ml-3">
            <RiLockPasswordLine/>
          </div>
          <input className="w-full bg-transparent text-left" type="password" placeholder="Enter Password"/>
        </div>
        <div className=" flex flex-row pt-2">
          <input type="checkbox" />
          <p className="text-sm pl-5">Remember Me</p>
        </div>
        <div className="text-left mb-4 pt-5 pb-6">
        <button className=" text-white text-sm h-10 w-20 bg-pink-400"> Login</button>
        </div>
        <div className="flex flex-row text-sm">
          <p> Or, Login with</p>
          <div className="flex flex-row mb-4">
          <img src={FacebookLogo} className="h-5 w-5"/>
          <img src={GoogleLogo} className="h-5 w-5"/>
          <img src={CrossLogo} className="h-5 w-5"/>
          </div>
        </div>
        <div className="text-xs flex flex-row">
          <p> Don't have an account?</p>
          <p className="text-blue-600"> Create one</p>
        </div>
       </div>
      </form>  
      </div>   
      <div className="w-1/2 pt-28">
        <img src={LoginPhoto}/> 
      </div>
      </div>
  )
}