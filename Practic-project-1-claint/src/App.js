
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import Home from './Pages/Home/Home/Home';
import About from './Pages/About/About';
import Academics from './Pages/Academics/Academics';
import Administration from './Pages/Administration/Administration';
import Admission from './Pages/Admission/Admission';
import Register from './Pages/Login/Register/Register';
import Login from './Pages/Login/Login/Login';
import Gallery from './Pages/Gallery/Gallery';
import Students from './Pages/Students/Students';
import ConnectUs from './Pages/ConnectUs/ConnectUs';


function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/academics' element={<Academics />} />
        <Route path='/administration' element={<Administration />} />
        <Route path='/admission' element={<Admission />} />
        <Route path='/students' element={<Students />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/about' element={<About />} />
        <Route path='/connectUs' element={<ConnectUs />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
