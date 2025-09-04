// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Homepage from './Page/Homepage'; // Use relative path correctly
import Aboutpage from './Page/Aboutpage'; // Use relative path correctly

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
         <Route path="/about" element={<Aboutpage />} />
      </Routes>
    </Router>
  );
}


export default App;
