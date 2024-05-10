import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PopupForm from './PopupForm';

const Navbar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');
    const [isFormOpen, setIsFormOpen] = useState(false);
  
    const toggleForm = () => {
      setIsFormOpen(!isFormOpen);
    };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim() !== '') {
      onSearch(searchQuery); 
      setSearchQuery('');
    }
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light fixed-top ">
        
        <div className="container col">
          <Link to='/' className="navbar-brand text-primary title"><img src="/src/img/pokemon.png" alt="" /></Link>
        </div>
        <div className="mx-5">
          <form className="d-flex" role="search" onSubmit={handleSearch}>
            <input
              className="form-control col me-2 w-50"
              type="search"
              aria-label="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)} />
            <button className="btn btn-outline btnsearch" type="submit"><img src="" alt="" />
              <svg width="25" height="25" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M38.9167 42.125L24.4792 27.6875C23.3333 28.6042 22.0156 29.3299 20.526 29.8646C19.0365 30.3993 17.4514 30.6667 15.7708 30.6667C11.6076 30.6667 8.08458 29.2244 5.20167 26.34C2.31875 23.4556 0.876529 19.9325 0.875001 15.7708C0.873473 11.6092 2.3157 8.08611 5.20167 5.20167C8.08764 2.31722 11.6107 0.875 15.7708 0.875C19.931 0.875 23.4548 2.31722 26.3423 5.20167C29.2298 8.08611 30.6713 11.6092 30.6667 15.7708C30.6667 17.4514 30.3993 19.0365 29.8646 20.526C29.3299 22.0156 28.6042 23.3333 27.6875 24.4792L42.125 38.9167L38.9167 42.125ZM15.7708 26.0833C18.6354 26.0833 21.0707 25.0811 23.0767 23.0767C25.0826 21.0722 26.0849 18.6369 26.0833 15.7708C26.0818 12.9047 25.0796 10.4702 23.0767 8.46729C21.0738 6.46438 18.6385 5.46139 15.7708 5.45833C12.9032 5.45528 10.4687 6.45826 8.46729 8.46729C6.4659 10.4763 5.46292 12.9108 5.45833 15.7708C5.45375 18.6308 6.45674 21.0661 8.46729 23.0767C10.4778 25.0872 12.9124 26.0894 15.7708 26.0833Z" fill="#FFD233" />
              </svg>
            </button>
          </form>
        </div>
        <a onClick={toggleForm} className="m-3 d-flex justify-content-end col form">Form</a>
        

      </nav>
      <div className="popform">
      {isFormOpen && <PopupForm onClose={toggleForm}/>}
      </div>
    </>
  )
}

export default Navbar