import React from 'react';

const Footer = () => {
  return (
    <footer className="flex flex-col bg-gradient-to-b from-blue-400 to-blue-200 py-5 px-2 sm:px-12 mt-auto">
      <div className="text-center">
        Flight information listed is subject to change and its accuracy is not guaranteed. For the most current information, please contact your airline directly.
      </div>
      <div className="text-center text-sm pt-2 pr-10">
        <b>WARNING:</b> This website has no affiliation with Austin-Bergstrom Airport and is provided strictly for informational/educational purposes only using publicly available data.
      </div>
    </footer>
  );
}

export default Footer;
