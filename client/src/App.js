import './App.css';
import { Routes, Route} from "react-router-dom";
import LandingPage from './webpages/LandingPage';
import AboutUsPage from './webpages/AboutUsPage';
import CoursesPage from './webpages/CoursesPage';
import EnrollNowPage from './webpages/EnrollNowPage';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="about" element={<AboutUsPage/>}/>
        <Route path="courses" element={<CoursesPage/>} />
        <Route path="enroll" element={<EnrollNowPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
