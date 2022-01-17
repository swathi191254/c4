import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Admin } from './Components/Admin';
import { Login } from './Components/Login';
import { Navbar } from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="./Components/Login" element={<Login />} ></Route>
        <Route path="./Components/Admin" element={<Admin />} ></Route>
      </Routes>
    </div>
  );
}

export default App