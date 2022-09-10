import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './Frontend/Pages/Homepage';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route 
          path="/"
          element={<Homepage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
