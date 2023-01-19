import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages/homepage/Home";
import QuickStartLayout from "../pages/quickstart/QuickStartLayout";
import { CreateWallet } from "../pages/quickstart/createwallet/CreateWallet";
import { Addfunds } from "../pages/quickstart/addfunds/AddFunds";
import JoinLayer from "../pages/join/JoinLayer";
import { JoinMain } from "../pages/join/joinmain/JoinMain";
import Login from "../pages/login/Login";
import Affiliate from "../pages/affiliate/Affiliate";
import { JoinFree } from "../pages/join/joinfree/JoinFree";
import Smartcontract from "../pages/smartcontract/Smartcontract";
import Disclaimer from "../pages/disclaimer/Disclaimer";

export default function RouterComponent() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quick-start" element={<QuickStartLayout />} >
          <Route path="create-wallet" element={<CreateWallet />} />
          <Route path="add-funds" element={<Addfunds/>}/>
        </Route>
        <Route path="/join" element={<JoinLayer />}>
          <Route path="" element={<JoinMain/>} />
          <Route path="free-affiliate" element={<JoinFree/>} />
        </Route>
        <Route path="/login" element={<Login/>} />
        <Route path="/affiliate-opportunity" element={<Affiliate/>} />
        <Route path="/smart-contract" element={<Smartcontract/>}/>
        <Route path="/income-disclaimer" element={<Disclaimer/>} />
      </Routes>
    </Router>
  );
}
