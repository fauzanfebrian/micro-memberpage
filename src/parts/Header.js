import { Link, withRouter } from "react-router-dom";
import propTypes from "prop-types";
import { Logo } from "assets/images";
import React from "react";

function Header({ onLight, location }) {
  const linkColor = onLight ? "text-gray-900" : "text-white";

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
    <header className="flex justify-between items-center">
      <div style={{ height: 54 }}>
        <Logo className={onLight ? "fill-gray-900" : "fill-white"} />
      </div>

      <ul className="flex">
        <li>
          <LinkHeader title="Home" href="/" />
        </li>
        <li>
          <LinkHeader title="Pricing" href="/" />
        </li>
        <li>
          <LinkHeader title="Features" href="/" />
        </li>
        <li>
          <LinkHeader title="Story" href="/" />
        </li>
        <li>
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
