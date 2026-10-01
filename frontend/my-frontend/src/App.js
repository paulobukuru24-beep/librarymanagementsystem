import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import AddBook from './pages/AddBook';
import BorrowBook from './pages/BorrowBook';
import ManageLoan from './pages/ManageLoan';

function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
        <Link className="navbar-brand" to="/">Library System</Link>
        <div className="navbar-nav ms-auto gap-2">
          <Link className="nav-link" to="/">Login</Link>
          <Link className="nav-link" to="/register">Register User</Link>
          <Link className="nav-link" to="/add-book">Add Book</Link>
          <Link className="nav-link" to="/borrow">Borrow Book</Link>
          <Link className="nav-link" to="/manage-loans">Manage Loans</Link>
        </div>
      </nav>

      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/add-book" element={<AddBook />} />
          <Route path="/borrow" element={<BorrowBook />} />
          <Route path="/manage-loans" element={<ManageLoan />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;