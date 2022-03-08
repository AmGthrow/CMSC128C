import './App.css';
import { Routes, Route} from "react-router-dom";
import Home from './webpages/Home';

function App() {
  return (
    <div className="App">
      <h1>Welcome to React Router!</h1>
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
    </div>
  );
}

export default App;
