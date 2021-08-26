import { Link, withRouter } from "react-router-dom";
import propTypes from "prop-types";
import { Logo } from "assets/images";
import React, { useState } from "react";
import { useEffect } from "react";

function Header({ onLight, location }) {
  useEffect(() => {
    document.getElementsByTagName("body")[0].className = "";
  }, []);
  const [toggle, setToggle] = useState(false);
  const toggleClick = () => {
    setToggle(!toggle);
    document
      .getElementsByTagName("body")[0]
      .classList.toggle("overflow-hidden");
  };
  const linkColor = onLight && !toggle ? "text-gray-900" : "text-white";

  const linkCTA =
    location.pathname.indexOf("/login") > -1 ? `/register` : `/login`;
  const textCTA =
    location.pathname.indexOf("/login") > -1 ? "Register" : "Login";

  const LinkHeader = ({ title, href = "/" }) => (
    <Link
      to={href}
      className={[
        linkColor,
        "hover:text-teal text-lg px-6 py-3 font-medium",
      ].join(" ")}
    >
      {title}
    </Link>
  );

  return (
    <header
      className={
        toggle
          ? "fixed z-50 bg-indigo-1000 inset-0 pt-10"
          : "flex justify-between items-center"
      }
    >
      <div className="flex flex-1 justify-between items-center px-4">
        <Logo className={onLight && !toggle ? "fill-gray-900" : "fill-white"} />
        <div
          onClick={toggleClick}
          className={`toggle md:hidden ${toggle ? "active" : ""} ${
            onLight && !toggle ? "dark" : ""
          }`}
        />
      </div>

      <ul
        className={["md:flex items-center", toggle ? "" : "hidden"].join(" ")}
      >
        <li className="my-4 md:my-0">
          <LinkHeader title="Home" href="/" />
        </li>
        <li className="my-4 md:my-0">
          <LinkHeader title="Pricing" href="/" />
        </li>
        <li className="my-4 md:my-0">
          <LinkHeader title="Features" href="/" />
        </li>
        <li className="my-4 md:my-0">
          <LinkHeader title="Story" href="/" />
        </li>
        <li className="my-8 md:my-0">
          <Link
            to={linkCTA}
            className="bg-indigo-700 hover:bg-indigo-800 transition-all duration-200 text-white hover:text-teal text-lg px-6 py-3 font-medium ml-6"
          >
            {textCTA}
          </Link>
        </li>
      </ul>
    </header>
  );
}

Header.propTypes = {
  onLight: propTypes.bool,
};

export default withRouter(Header);
