import React, { useState } from 'react';

function Dashboard() {
  const [dataList, setDataList] = useState([]);
  const [itemName, setItemName] = useState('');

  const handleAdd = (e) => {
    e.preventDefault();
    if (!itemName) return;
    setDataList([...dataList, { id: Date.now(), name: itemName }]);
    setItemName('');
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-primary">Mfumo wa Usimamizi</h2>
      
      <div className="card p-4 mb-4 shadow-sm">
        <form onSubmit={handleAdd} className="d-flex gap-2">
          <input 
            type="text" 
            className="form-control" 
            placeholder="Ingiza jina au taarifa..." 
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
          />
          <button type="submit" className="btn btn-success px-4">Ongeza</button>
        </form>
      </div>

      <div className="card p-3 shadow-sm">
        <table className="table table-hover">
          <thead className="table-dark">
            <tr>
              <th>ID</th>
              <th>Taarifa</th>
            </tr>
          </thead>
          <tbody>
            {dataList.length === 0 ? (
              <tr>
                <td colSpan="2" className="text-center">Hakuna data bado.</td>
              </tr>
            ) : (
              dataList.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Dashboard;