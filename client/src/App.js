import './App.css';
import { Routes, Route} from "react-router-dom";
import LandingPage from './webpages/LandingPage';
import ClassListPage from './webpages/ClassListPage';
import AccountingDashboard from  './webpages/AccountingDashboard'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/class-list" element={<ClassListPage/>} />
        <Route path="/accounting/*" element={<AccountingDashboard/>} />
      </Routes>
    </div>
  );
}

export default App;
