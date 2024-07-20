// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import ConsignmentShippingSearchResult from './components/ConsignmentSearchHeader.tsx'
import Dashboard from './pages/Dashboard'
import ActiveConsignments from './pages/Dashboard/SpecificShipmentsFullPage/SpecificShipmentsFullPage.tsx'
import DashboardSearchResult from './pages/Dashboard/CosignmentSearch/index.tsx'
// import Login from './pages/Login'
// import Register from './pages/Register'
import SignUp from './pages/SignUp'
// import LoginForm from './pages/Login/index.tsx';
import SignIn from './pages/SignIn/index.tsx';
import TradeCustomsDocumentationDownloadPage from './components/CustomsTradeDoc/TradeCustomsDocumentationDownloadPage.tsx';
import CustomsDoc from './components/SpecificConsignmentBody.tsx';
// import TradeCustomDocsPage from './pages/Dashboard/TradeCustomDocs/index.tsx';
// import ConsignmentsFound from './components/ConsignmentsSearchResults.tsx';
// import CosignmentSearch from './pages/Dashboard/CosignmentSearch/index.tsx';
// import SpecificConsignment from './pages/Dashboard/SpecificConsignmentPage/index.tsx';
import SpecificConsignmentPage from './pages/Dashboard/SpecificConsignmentPage/index.tsx';
import CosignmentSearchPage from './pages/Dashboard/CosignmentSearch/index.tsx';
import TradeCustomDocumentationPage from './pages/Dashboard/TradeCustomsDocumentationPage/index.tsx';
// import LoginForm from './pages/Login';

function App() {


  return (
    <>
    {/* <BrowserRouter>
      <Routes>
      <Route path="login" element={<Login />} />
      <Route path="/*" element={<Home />} />
    </Routes>
    </BrowserRouter> */}
    
    <Router>
      <Routes>
    <Route path="/*" element={<Dashboard />} />

    
    <Route path="signup" element={<SignUp />} />
    <Route path="shipments" element={<ActiveConsignments />} />
    <Route path="consignmentsearchresult" element={<DashboardSearchResult />} />
    
    <Route path="loginform" element={<SignIn />} />
    
    <Route path="/customsdocs" element={<CustomsDoc />} />
    <Route path="docsdetails" element={<TradeCustomsDocumentationDownloadPage />} />


      {/* ACTIVE CONSIGNMENTS */}
    <Route path="activeconsignments" element={<CosignmentSearchPage />} />
    <Route path="specificconsignmentpage" element={<SpecificConsignmentPage />} />
    <Route path="tradecustomsdocumentationpage" element={ <TradeCustomDocumentationPage />} />
    <Route path="tradecustomsdocumentationpage" element={ <TradeCustomDocumentationPage />} />
  
    {/* <Route path="customsdocs" element={<CustomsDoc />} /> */}
    </Routes>
   {/* <Login /> */}
   {/* <Dashboard /> */}
   {/* <DashboardSearchResult /> */}
   {/* <ActiveConsignments /> */}
   {/* <SignUp /> */}
   {/* <Register /> */}

   </Router>
    </>
  )
}

export default App
