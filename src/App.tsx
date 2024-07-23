import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import ActiveConsignments from "./pages/Dashboard/SpecificShipmentsFullPage/SpecificShipmentsFullPage.tsx";
import DashboardSearchResult from "./pages/Dashboard/ConsignmentSearch/index.tsx";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn/index.tsx";
import SpecificConsignmentPage from "./pages/Dashboard/SpecificConsignmentPage/index.tsx";
import ConsignmentSearchPage from "./pages/Dashboard/ConsignmentSearch/index.tsx";
import TradeCustomDocumentationPage from "./pages/Dashboard/TradeCustomsDocumentationPage/index.tsx";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="loginform" element={<SignIn />} />
          <Route path="signup" element={<SignUp />} />

          <Route path="/*" element={<Dashboard />} />

          <Route path="shipments" element={<ActiveConsignments />} />
          <Route
            path="consignmentsearchresult"
            element={<DashboardSearchResult />}
          />

          <Route path="activeconsignments" element={<ConsignmentSearchPage />} />
          <Route
            path="specificconsignmentpage"
            element={<SpecificConsignmentPage />}
          />
          <Route
            path="tradecustomsdocumentationpage"
            element={<TradeCustomDocumentationPage />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
