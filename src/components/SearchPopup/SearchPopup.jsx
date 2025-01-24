// SearchPopup.jsx
import React, { useState } from 'react';

const SearchPopup = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    // Handle search logic
    console.log('Searching for:', searchQuery);
  };

  return (
    <div className="ms-search-popup" id="ms_search">
      <div className="ms-search-detail">
        <form>
          <input placeholder="جستجو..." id="ms_search_box" type="search" />
          <button type="submit">
            <img
              src="assets/img/icons/search.svg"
              className="svg_img pro_svg"
              alt="search"
            />
          </button>
        </form>
        <div className="ms-search-close">
          <a href="javascript:void(0)">
            <img
              src="assets/img/icons/close.svg"
              className="svg_img pro_svg"
              alt="close"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default SearchPopup;