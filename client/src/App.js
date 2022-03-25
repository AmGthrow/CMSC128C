import './App.css';
import { Routes, Route} from "react-router-dom";
import LandingPage from './webpages/LandingPage';
import ClassListPage from './webpages/ClassListPage';
import Dashboard from './webpages/Dashboard';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/class-list" element={<ClassListPage/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
      </Routes>
    </div>
  );
}

export default App;
