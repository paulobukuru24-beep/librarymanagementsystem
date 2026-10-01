import React, { useState } from 'react';

function AddBook() {
  const [book, setBook] = useState({ title: '', author: '', isbn: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Kitabu Kipya:", book);
    alert("Kitabu kimeongezwa kwenye mfumo!");
  };

  return (
    <div className="card p-4 mx-auto shadow-sm" style={{ maxWidth: '600px' }}>
      <h3 className="mb-3 text-success">Ongeza Kitabu Kipya</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Jina la Kitabu</label>
          <input 
            id="title"
            type="text" 
            className="form-control" 
            value={book.title}
            onChange={(e) => setBook({...book, title: e.target.value})} 
            required 
          />
        </div>
        
        <div className="mb-3">
          <label htmlFor="author" className="form-label">Mwandishi (Author)</label>
          <input 
            id="author"
            type="text" 
            className="form-control" 
            value={book.author}
            onChange={(e) => setBook({...book, author: e.target.value})} 
            required 
          />
        </div>

        <div className="mb-3">
          <label htmlFor="isbn" className="form-label">Namba ya Kitabu (ISBN)</label>
          <input 
            id="isbn"
            type="text" 
            className="form-control" 
            value={book.isbn}
            onChange={(e) => setBook({...book, isbn: e.target.value})} 
            required 
          />
        </div>

        <button type="submit" className="btn btn-success w-100">Hifadhi Kitabu</button>
      </form>
    </div>
  );
}

export default AddBook;