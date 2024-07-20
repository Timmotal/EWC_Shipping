// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

function Register() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <div className="bg-gray-100 min-h-screen px-4 py-8 flex flex-col justify-center items-center">
      <div className="bg-white shadow-md rounded-lg px-10 py-6 w-full md:w-1/2">
        <div className=" mb-6">
          <img className="h-8 top-9 left-20 w-[97.86px]" src="East_West_Logo.png" alt="East West Company Logo" />
        </div>
        <h2 className="text-2xl font-semibold text-center mb-6">Sign Up to East-West Company</h2>
        <p className="text-gray-600 text-center mb-8">
          Sign Up to access your dashboard, settings and shipments.
        </p>
        
        <form className="space-y-4">
          <div className="flex space-x-4">
            <div className="w-full">
              <label htmlFor="firstName" className="text-2xl font-bold block text-sm font-medium text-gray-700 font-bold">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                placeholder="Placeholder"
                className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>
            <div className="w-full">
              <label htmlFor="lastName" className=" text-2xl font-bold block text-sm font-medium text-gray-700">
                Second Name
              </label>
              <input
                type="text"
                id="lastName"
                placeholder="Placeholder"
                className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>
          </div>
          <div className="w-full">
            <label htmlFor="workEmail" className="mb-4 text-2xl font-bold block text-sm font-medium text-gray-700">
              Work email
            </label>
            <input
              type="email"
              id="workEmail"
              placeholder="Placeholder"
              className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
          <div className="w-full">
            <label htmlFor="businessPhone" className="mb-4 text-2xl font-bold block text-sm font-medium text-gray-700">
              Business phone
            </label>
            <input
              type="tel"
              id="businessPhone"
              placeholder="+44 Placeholder"
              className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
          <div className="flex items-center space-x-2">
            <input type="checkbox" id="terms" className="w-5 h-5 accent-blue-500" />
            <label htmlFor="terms" className="text-sm font-medium text-gray-700">
              I agree to the terms of service and privacy policy
            </label>
          </div>
          <button type="submit" className="bg-[#0354A6] hover:bg-blue-700 text-white font-bold py-2 rounded-md w-full">
            Sign Up
          </button>
        </form>
        <p className="text-center text-sm text-gray-500 mt-4">
          Already have an account? Sign in
        </p>
      </div>
    </div>
    </>
  )
}

export default Register
