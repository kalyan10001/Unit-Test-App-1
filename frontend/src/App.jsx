import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { UserProvider } from './context/UserContext.jsx';
import Home from './pages/Home.jsx';
import AddUser from './pages/AddUser.jsx';

function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <nav className="p-4 bg-blue-600 text-white flex gap-4">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/add" className="hover:underline">Add User</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddUser />} />
        </Routes>
      </UserProvider>
    </BrowserRouter>
  );
}
export default App;