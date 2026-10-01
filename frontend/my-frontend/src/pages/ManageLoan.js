import React, { useState } from 'react';

function ManageLoan() {
  const [loans, setLoans] = useState([
    { id: 1, studentName: 'John Doe', bookTitle: 'Java Spring Boot', borrowDate: '2026-09-20', returnDate: '2026-10-05', status: 'BORROWED' },
    { id: 2, studentName: 'Amina Salum', bookTitle: 'Database Systems', borrowDate: '2026-09-15', returnDate: '2026-09-29', status: 'OVERDUE' }
  ]);

  const toggleStatus = (id) => {
    setLoans(loans.map(loan => {
      if (loan.id === id) {
        const newStatus = loan.status === 'RETURNED' ? 'BORROWED' : 'RETURNED';
        return { ...loan, status: newStatus };
      }
      return loan;
    }));
  };

  // Helper function ya kuchagua rangi ya badge badala ya nested ternary
  const getBadgeClass = (status) => {
    switch (status) {
      case 'RETURNED':
        return 'bg-success';
      case 'OVERDUE':
        return 'bg-danger';
      default:
        return 'bg-warning text-dark';
    }
  };

  return (
    <div className="card p-4 shadow-sm">
      <h3 className="mb-4 text-warning">Usimamizi wa Vitabu Vilivyoazimwa (Librarian Panel)</h3>
      <table className="table table-striped table-hover">
        <thead className="table-dark">
          <tr>
            <th>Mwanafunzi</th>
            <th>Kitabu</th>
            <th>Tarehe ya Kuazima</th>
            <th>Tarehe ya Kurudisha</th>
            <th>Hali (Status)</th>
            <th>Kitendo (Action)</th>
          </tr>
        </thead>
        <tbody>
          {loans.map((loan) => (
            <tr key={loan.id}>
              <td>{loan.studentName}</td>
              <td>{loan.bookTitle}</td>
              <td>{loan.borrowDate}</td>
              <td>{loan.returnDate}</td>
              <td>
                <span className={`badge ${getBadgeClass(loan.status)}`}>
                  {loan.status}
                </span>
              </td>
              <td>
                <button 
                  type="button"
                  className="btn btn-sm btn-outline-primary"
                  onClick={() => toggleStatus(loan.id)}
                >
                  Badili Status
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ManageLoan;