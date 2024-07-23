// import React from 'react'
import { NavLink } from 'react-router-dom'

const LoginForm = () => {
  return (
    <div 
    className={`self-stretch flex flex-row justify-center text-black `}
    
  >
    <div className="w-[38.125rem] shadow-[0px_1px_5.7px_rgba(16,_24,_40,_0.08)] relative  bg-[#FFFFFF] z-10 rounded-lg flex flex-col  p-[1.937rem] border-[0.5px] border-solid ">
      
    <div className="absolute top-[2rem] left-[34.875rem] w-[1.25rem] h-[1.25rem] flex flex-row items-center justify-center py-[0.312rem] px-[0.25rem] box-border">
    <NavLink to="/">
            <img
              className="h-[0.719rem] w-[0.719rem] relative"
              loading="lazy"
              alt=""
              src="/icon-stroke.svg"
            />
    </NavLink>
          </div>
      {/* LOGIN COMPONENT */}
    <div className='mt-8 flex items-center justify-center text-center '>
        <div className="">
      <div className="header  mb-8  ">
        <h1 className="text-3xl mb-2 font-bold">Welcome back!</h1>
        <p className="text-gray-600 text-base max-w-72">
          Sign in to access your dashboard, settings and shipments.
        </p>
      </div>
      
    </div>
    {/*  */}
    </div>
    <div>
    <form className=" max-w-[38.125rem] text-left">
        <label htmlFor="email" className="text-2xl block mb-4  font-bold">
          Email
        </label>
        <input
          type="email"
          id="email"
          placeholder="Placeholder"
          className="w-[34.125rem] px-3 py-2 rounded-md border mb-4 border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
        <label htmlFor="password" className="text-2xl block mb-2 font-bold">
          Password
        </label>
        <input
          type="password"
          id="password"
          placeholder="Placeholder"
          className="w-[34.125rem] px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center">
            <input type="checkbox" id="remember-me" className="" />
            <label htmlFor="remember-me" className="text-gray-700">
              Keep me signed in
            </label>
          </div>
          <a href="#" className="text-blue-500 underline">
            Forgot Password?
          </a>
        </div>
        <button
          type="submit"
          className="w-[34.125rem] px-3 py-2 rounded-md bg-[#0354A6] text-white font-bold hover:bg-blue-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
        >
          Sign in
        </button>
      </form>
      <p className="text-center text-gray-600 mt-8">
        Don't have an account?{' '}
        <a href="#" className="text-blue-500 underline">
        <NavLink
          to="/signup"
        >
          Sign Up
        </NavLink>
        </a>
      </p>
    </div>

    </div>
  </div>
  )
}

export default LoginForm
