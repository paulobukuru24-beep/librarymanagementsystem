import React, { useState } from 'react';

function BorrowBook() {
  const currentUser = JSON.parse(localStorage.getItem('currentUser') || 'null');
  const [borrowData, setBorrowData] = useState({
    bookId: '',
    registrationNumber: currentUser?.registrationNumber || '',
    userId: currentUser?.userId || '',
    returnDate: ''
  });
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!currentUser) {
      setError('Lazima uingie kwanza kwenye mfumo kabla ya kukopa kitabu.');
      return;
    }

    if (
      borrowData.registrationNumber.trim() !== currentUser.registrationNumber ||
      borrowData.userId.trim() !== currentUser.userId
    ) {
      setError('User siyo aliyesajiliwa kwa usajili huu. Tumia taarifa za mtumiaji aliyesajiliwa.');
      return;
    }

    setError('');
    console.log('Borrow Request:', { ...borrowData, fullName: currentUser.fullName });
    alert('Ombi la kuazima kitabu limetumwa kwa mafanikio!');
  };

  if (!currentUser) {
    return (
      <div className="card p-4 mx-auto shadow-sm" style={{ maxWidth: '500px' }}>
        <h3 className="mb-3 text-info">Azima Kitabu</h3>
        <div className="alert alert-warning">
          Lazima uingie kwanza kwa jina, namba ya usajili na ID yako ili upate huduma ya kukopa kitabu.
        </div>
      </div>
    );
  }

  return (
    <div className="card p-4 mx-auto shadow-sm" style={{ maxWidth: '500px' }}>
      <h3 className="mb-3 text-info">Azima Kitabu</h3>
      <p className="text-muted mb-3">Mtumiaji: {currentUser.fullName}</p>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="bookId" className="form-label">ID au Jina la Kitabu</label>
          <input
            id="bookId"
            type="text"
            className="form-control"
            value={borrowData.bookId}
            onChange={(e) => setBorrowData({ ...borrowData, bookId: e.target.value })}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="registrationNumber" className="form-label">Namba ya Usajili</label>
          <input
            id="registrationNumber"
            type="text"
            className="form-control"
            value={borrowData.registrationNumber}
            onChange={(e) => setBorrowData({ ...borrowData, registrationNumber: e.target.value })}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="userId" className="form-label">ID ya Mtumiaji</label>
          <input
            id="userId"
            type="text"
            className="form-control"
            value={borrowData.userId}
            onChange={(e) => setBorrowData({ ...borrowData, userId: e.target.value })}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="returnDate" className="form-label">Tarehe ya Kurudisha</label>
          <input
            id="returnDate"
            type="date"
            className="form-control"
            value={borrowData.returnDate}
            onChange={(e) => setBorrowData({ ...borrowData, returnDate: e.target.value })}
            required
          />
        </div>

        {error && <div className="alert alert-danger">{error}</div>}

        <button type="submit" className="btn btn-info text-white w-100">Azima Kitabu</button>
      </form>
    </div>
  );
}

export default BorrowBook;