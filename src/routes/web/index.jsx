import { Route, Routes } from "react-router-dom";
import Home from "../../pages/web/Home";
import NotFound from "../../pages/web/NotFound";
import LoginSignup from "../../pages/web/auth/LoginSignup";
import ContactUs from "../../pages/web/ContactUs";
import TermsAndConditions from "../../components/web/policies/TermsAndConditions";
import PrivacyPolicy from "../../components/web/policies/PrivacyPolicy";
import PageContent from "../../pages/web/PageContent";
import Form from "../../pages/web/Form";
import DownloadApplyPage from "../../pages/web/DownloadApplyPage";
import Dashboard from "../../pages/user/Dashboard";
import Applyform from "../../pages/user/Applyform";
import Idcard from "../../pages/user/Idcard";
import Password from "../../pages/user/Password";
import History from "../../pages/web/page/History";
import Tributes from "../../pages/web/page/Tributes";
import ArtDiretion from "../../pages/web/page/ArtDiretion";
import CostumeDesigner from "../../pages/web/page/CostumeDesigner";
import Rules from "../../pages/web/page/Rules";
import MembershipTerms from "../../pages/web/page/MembershipTerms";
import ApplicationTrack from "../../pages/web/page/ApplicationTrack";
import Profile from "../../pages/user/Profile";
import Notification from "../../pages/web/page/Notification";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
     
      <Route path="*" element={<NotFound />} />
       <Route path="/auth/login" element={<LoginSignup />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/our-history" element={<History />} />
      <Route path="/our-tributes" element={<Tributes />} />
      <Route path="/living-legends-of-art-direction" element={<ArtDiretion />} />
      <Route path="/living-legends-of-costume-designer" element={<CostumeDesigner />} />
      <Route path="/rules" element={<Rules />} />
      <Route path="/membership-terms" element={<MembershipTerms />} />
      <Route path="/track-your-application" element={<ApplicationTrack />} />
    
      <Route path="/page/:label" element={<PageContent />} />
      <Route path="/apply-form/:type" element={<Form />} />
      <Route path="/download-apply-form" element={<DownloadApplyPage />} />
      <Route path="/member/dashboard" element={<Dashboard />} />
      <Route path="/member" element={<Dashboard />} />
      <Route path="/notifications" element={<Notification />} />
      <Route path="/member/profile" element={<Profile />} />
            <Route path="/member/download-apply-form" element={<Applyform />} />
      <Route path="/member/id-card" element={<Idcard />} />

      <Route path="/member/change-password" element={<Password/>} />
    </Routes>
  );
};
export default AppRoutes;
