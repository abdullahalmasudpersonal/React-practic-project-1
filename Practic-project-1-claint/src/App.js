
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import Home from './Pages/Home/Home/Home';
import Admission from './Pages/Admission/Admission';
import Register from './Pages/Login/Register/Register';
import Login from './Pages/Login/Login/Login';
import ConnectUs from './Pages/Links/ConnectUs/ConnectUs';
import Blog from './Pages/Blog';
import Founder from './Pages/About/Founder/Founder';
import History from './Pages/About/History/History';
import Principal from './Pages/About/Principal/Principal';
import VicePrincipal from './Pages/About/VicePrincipal/VicePrincipal';
import BordDerators from './Pages/Administration/BordDerators/BordDerators';
import FoundersMessage from './Pages/Administration/FoundersMessage/FoundersMessage';
import PresidentsMessage from './Pages/Administration/PresidentsMessage/PresidentsMessage';
import PrincipalMessage from './Pages/Administration/PrincipalMessage/PrincipalMessage';
import AllTeachers from './Pages/Administration/AllTeachers/AllTeachers';
import OfficerEmployee from './Pages/Administration/OfficerEmplayee/OfficerEmployee';
import MacFoundation from './Pages/Administration/MacFoundation/MacFoundation';
import TermsConditions from './Pages/Academics/Terms&Conditions/Terms&Conditions';
import Result from './Pages/Academics/Results/Result';
import ClassRoute from './Pages/Academics/ClassRoutine/ClassRoute';
import Syllabus from './Pages/Academics/Syllabus/Syllabus';
import ExaminationRoutine from './Pages/Academics/ExaminationRoutine/ExaminationRoutine';
import Notics from './Pages/Links/Notics/Notics';
import Library from './Pages/Links/Library/Library';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/admission' element={<Admission />} />
        <Route path='/connect_us' element={<ConnectUs />} />
        <Route path='history' element={<History />} />
        <Route path='founder' element={<Founder />} />
        <Route path='principal' element={<Principal />} />
        <Route path='vice_rincipal' element={<VicePrincipal />} />
        <Route path='bord_derators' element={<BordDerators />} />
        <Route path='Founders_message' element={<FoundersMessage />} />
        <Route path='presidents_message' element={<PresidentsMessage />} />
        <Route path='principal_message' element={<PrincipalMessage />} />
        <Route path='all_teachers' element={<AllTeachers />} />
        <Route path='officer_employee' element={<OfficerEmployee />} />
        <Route path='mac_foundation' element={<MacFoundation />} />
        <Route path='terms_conditions' element={<TermsConditions />} />
        <Route path='results' element={<Result />} />
        <Route path='class_routine' element={<ClassRoute />} />
        <Route path='syllabus' element={<Syllabus />} />
        <Route path='examination_routine' element={<ExaminationRoutine />} />
        <Route path='notics' element={<Notics />} />
        <Route path='library' element={<Library />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
