import React from "react";

const Footer = () => {
  return (
    <footer>
      <p>
        {new Date().getFullYear()} - OneLife Grocery || Designed & Developed by
        <a
          href="https://github.com/developer-suhag"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          Suhag Al Amin
        </a>
      </p>
    </footer>
  );
};

export default Footer;
