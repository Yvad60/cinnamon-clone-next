import React from 'react';

function Button({ children }) {
  return (
    <button className='py-3 px-10 bg-primary_blue text-white border-t-white border-t-2 shadow-[10px 0px 0px 0px white inset]'>
      {children}
    </button>
  );
}

export default Button;
