// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import ConsignmentShippingSearchResult from './components/ConsignmentShippingSearch_Result'
import Dashboard from './pages/Dashboard'
import ActiveConsignments from './pages/Dashboard/ActiveConsignment.tsx'
import DashboardSearchResult from './pages/Dashboard/ConsignmentFound/search_result.tsx'
import Login from './pages/Login'
import Register from './pages/Register'
import SignUp from './pages/SignUp'

function App() {


  return (
    <>
   {/* <Login /> */}
   {/* <Dashboard /> */}
   {/* <DashboardSearchResult /> */}
   <ActiveConsignments />
   {/* <SignUp /> */}
   {/* <Register /> */}
    </>
  )
}

export default App
