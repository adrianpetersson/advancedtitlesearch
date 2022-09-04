import React from "react";

const Header = ({ setShowSearch, showSearch }) => {
  return (
    <div className='header'>
      <div className='header-text'>
        <h1>
          Advanced Title Search<span className='plus'>++</span>{" "}
        </h1>
        <div className='hero-text'>
          <h2>
            Discover movies you'll <span className='plus'> love.</span>
          </h2>
        </div>
      </div>
      {showSearch ? (
        ""
      ) : (
        <button onClick={() => setShowSearch(true)} className='btn1'>
          New search
        </button>
      )}
    </div>
  );
};

export default Header;
