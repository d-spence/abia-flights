import React, { useState, useEffect } from 'react';
import { MdVerticalAlignTop as TopIcon } from 'react-icons/md';

const ScrollTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    document.addEventListener('scroll', () => {
      toggleVisibility();
    });
  }, []);

  const toggleVisibility = () => {
    if (window.pageYOffset > 250) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  return (
    <>
      {visible && (
        <div onClick={scrollToTop}
          className="fixed bottom-2 right-2 flex flex-col bg-yellow-300 hover:bg-yellow-200 border border-gray-500 rounded p-1 cursor-pointer trans-med">
          <div className="text-xs text-center font-bold">TOP</div>
          <TopIcon
            className="h-9 w-auto -m-1"
          />
        </div>
      )}
    </>
  );
}

export default ScrollTop;
