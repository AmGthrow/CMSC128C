import './App.css';
import { Routes, Route} from "react-router-dom";
import LandingPage from './webpages/LandingPage';
import ClassListPage from './webpages/ClassListPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/class-list" element={<ClassListPage/>} />
      </Routes>
    </div>
  );
}

export default App;
