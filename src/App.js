import React from 'react'
import Home from './components/Home'
import Enquiry from './components/Enquiry'
 import Member from './components/Member';
 import Staff from './components/Plus/Staff/Staff';
 import Product from './components/Plus/Product/Product';
import Expense from './components/Plus/Expense/Expense';
import SupportRequest from './components/Plus/SupportRequest/SupportRequest';
import Turf from './components/Book/Turf'
import Event from './components/Book/Event'
import Class from './components/Book/Class'
import Enquiries from './components/Enquiries/Enquiries';
import Serach from './components/Search/Serach';
import Qs from './components/QS/Qs';
import AccountPlan from './components/Profile/AccountPlan';
import AddBranch from './components/Profile/AddBranch';
import AdminProfile from './components/Profile/AdminProfile';
import CentralPannle from './components/Profile/CentralPannle';
import LogOut from './components/Profile/LogOut';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Pos from './components/POS/Pos';
import Email from './components/Marketing/Communication/Email';
import Sms from './components/Marketing/Communication/Sms';
import PushNotification from './components/Marketing/Communication/PushNotification';
import CustomerMailList from './components/Marketing/Data/CustomerMailList';
import UnqualifieData from './components/Marketing/Data/UnqualifieData';
import Offers from './components/Marketing/Engagement/Offers';
import CustomerReviews from './components/Marketing/Promotion/CustomerReviews';
import YoactivCom from './components/Marketing/Promotion/YoactivCom';
import AssesmentTemplate from './components/Training/AssesmentTemplate';
import MealPlanTemplate from './components/Training/MealPlanTemplate';
import MyptDashbord from './components/Training/MyptDashbord';
import ExcerciseLibrary from './components/Training/ExcersizeLibrary';

function App(){
  return (
    <>

      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/Enquiry" exact element={<Enquiry />} />
          <Route path="/Member" exact element={<Member />} />
          <Route path="/Staff" exact element={<Staff />} />
          <Route path="/Product" exact element={<Product />} />
          <Route path="/Expense" exact element={<Expense />} />
          <Route path="/SupportRequest" exact element={<SupportRequest />} />
          <Route path="/Turf" exact element={<Turf />} />
          <Route path="/Expense" exact element={<Expense />} />
          <Route path="/Class" exact element={<Class />} />
          <Route path="/Event" exact element={<Event />} />
          <Route path="/Enquiries" exact element={<Enquiries />} />
          <Route path="/Search" exact element={<Serach />} />
          <Route path="/Qs" exact element={<Qs />} />
          <Route path="/AccountPlan" exact element={<AccountPlan />} />
          <Route path="/AddBranch" exact element={<AddBranch />} />
          <Route path="/AdminProfile" exact element={<AdminProfile />} />
          <Route path="/CentralPannle" exact element={<CentralPannle />} />
          <Route path="/Logout" exact element={<LogOut />} />
          <Route path="/Pos" exact element={<Pos/>} />
          <Route path="/Email" exact element={<Email/>} />
          <Route path="/Sms" exact element={<Sms/>} />
          <Route path="/PushNotification" exact element={<PushNotification/>} />
          <Route path="/CustomerMailList" exact element={<CustomerMailList/>} />
          <Route path="/UnqualifieData" exact element={<UnqualifieData/>} />
          <Route path="/Offers" exact element={<Offers/>} />
          <Route path="/CustomerReviews" exact element={<CustomerReviews/>} />
          <Route path="/YoactivCom" exact element={<YoactivCom/>} />
          <Route path="/AssesmentTemplate" exact element={<AssesmentTemplate/>} />
          <Route path="/MealPlanTemplate" exact element={<MealPlanTemplate/>} />
          <Route path="/MyptDashbord" exact element={<MyptDashbord/>} />
          <Route path="/ExcerciseLibrary" exact element={<ExcerciseLibrary/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
