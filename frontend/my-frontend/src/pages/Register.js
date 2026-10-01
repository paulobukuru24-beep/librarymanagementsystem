import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    registrationNumber: '',
    userId: '',
    email: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const trimmedUser = {
      fullName: formData.fullName.trim(),
      registrationNumber: formData.registrationNumber.trim(),
      userId: formData.userId.trim(),
      email: formData.email.trim()
    };

    if (!trimmedUser.fullName || !trimmedUser.registrationNumber || !trimmedUser.userId) {
      alert('Jaza jina, namba ya usajili na ID ya mtumiaji.');
      return;
    }

    const savedUsers = JSON.parse(localStorage.getItem('registeredUsers') || '[]');
    const duplicate = savedUsers.find(
      (user) =>
        user.registrationNumber.toLowerCase() === trimmedUser.registrationNumber.toLowerCase() ||
        user.userId.toLowerCase() === trimmedUser.userId.toLowerCase()
    );

    if (duplicate) {
      alert('Mtumiaji huyu tayari amesajiliwa. Tumia namba ya usajili au ID ya mtumiaji tofauti.');
      return;
    }

    const updatedUsers = [...savedUsers, trimmedUser];
    localStorage.setItem('registeredUsers', JSON.stringify(updatedUsers));
    alert('User amesajiliwa kwa mafanikio!');
    navigate('/');
  };

  return (
    <div className="card p-4 mx-auto shadow-sm" style={{ maxWidth: '500px' }}>
      <h3 className="mb-3 text-primary">Usajili wa Mtumiaji wa Maktaba</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="fullName" className="form-label">Jina la Mtumiaji</label>
          <input
            id="fullName"
            type="text"
            className="form-control"
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="registrationNumber" className="form-label">Namba ya Usajili</label>
          <input
            id="registrationNumber"
            type="text"
            className="form-control"
            value={formData.registrationNumber}
            onChange={(e) => setFormData({ ...formData, registrationNumber: e.target.value })}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="userId" className="form-label">ID ya Mtumiaji</label>
          <input
            id="userId"
            type="text"
            className="form-control"
            value={formData.userId}
            onChange={(e) => setFormData({ ...formData, userId: e.target.value })}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">Barua Pepe (Email)</label>
          <input
            id="email"
            type="email"
            className="form-control"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </div>

        <button type="submit" className="btn btn-primary w-100">Sajili Mtumiaji</button>
      </form>
    </div>
  );
}

export default Register;