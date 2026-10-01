import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    fullName: '',
    registrationNumber: '',
    userId: ''
  });
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const savedUsers = JSON.parse(localStorage.getItem('registeredUsers') || '[]');
    const foundUser = savedUsers.find(
      (user) =>
        user.fullName.toLowerCase().trim() === credentials.fullName.toLowerCase().trim() &&
        user.registrationNumber.trim() === credentials.registrationNumber.trim() &&
        user.userId.trim() === credentials.userId.trim()
    );

    if (!foundUser) {
      setError('User siyo aliyesajiliwa. Tafadhali jiandikishe kwanza kabla ya kukopa kitabu.');
      return;
    }

    localStorage.setItem('currentUser', JSON.stringify(foundUser));
    setError('');
    alert('Umeingia kwenye mfumo kwa mafanikio!');
    navigate('/borrow');
  };

  return (
    <div className="card p-4 mx-auto shadow-sm" style={{ maxWidth: '420px' }}>
      <h3 className="mb-3 text-primary">Ingia Mfumoni (Login)</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="login-fullName" className="form-label">Jina la Mtumiaji</label>
          <input
            id="login-fullName"
            type="text"
            className="form-control"
            value={credentials.fullName}
            onChange={(e) => setCredentials({ ...credentials, fullName: e.target.value })}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="login-registrationNumber" className="form-label">Namba ya Usajili</label>
          <input
            id="login-registrationNumber"
            type="text"
            className="form-control"
            value={credentials.registrationNumber}
            onChange={(e) => setCredentials({ ...credentials, registrationNumber: e.target.value })}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="login-userId" className="form-label">ID ya Mtumiaji</label>
          <input
            id="login-userId"
            type="text"
            className="form-control"
            value={credentials.userId}
            onChange={(e) => setCredentials({ ...credentials, userId: e.target.value })}
            required
          />
        </div>

        {error && <div className="alert alert-danger">{error}</div>}

        <button type="submit" className="btn btn-primary w-100">Ingia</button>
      </form>
    </div>
  );
}

export default Login;