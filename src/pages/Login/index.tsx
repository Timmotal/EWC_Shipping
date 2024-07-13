import React from 'react'

const Login = () => {
  return (
    <div className='mt-10 flex justify-center items-center'>
        <div className="welcome-back-sign-in-form">
      <div className="header text-center mb-8">
        <h1 className="text-3xl mb-2 font-bold">Welcome back!</h1>
        <p className="text-gray-600">
          Sign in to access your dashboard, settings and shipments.
        </p>
      </div>
      <form className="form mx-auto w-full max-w-sm">
        <label htmlFor="email" className="text-2xl block mb-4  font-bold">
          Email
        </label>
        <input
          type="email"
          id="email"
          placeholder="Placeholder"
          className="w-[546px] px-3 py-2 rounded-md border mb-4 border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
        <label htmlFor="password" className="text-2xl block mb-2 font-bold">
          Password
        </label>
        <input
          type="password"
          id="password"
          placeholder="Placeholder"
          className="w-[546px] px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center">
            <input type="checkbox" id="remember-me" className="mr-2" />
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
          className="w-[546px] px-3 py-2 rounded-md bg-[#0354A6] text-white font-bold hover:bg-blue-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
        >
          Sign in
        </button>
      </form>
      <p className="text-center text-gray-600 mt-4">
        Don't have an account?{' '}
        <a href="#" className="text-blue-500 underline">
          Sign Up
        </a>
      </p>
    </div>
    </div>
  )
}

export default Login
