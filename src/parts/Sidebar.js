import { DefaultAvatar } from "assets/images";
import { users } from "consts";
import React from "react";
import { useSelector } from "react-redux";
import { Link, withRouter } from "react-router-dom";

function Sidebar({ match, history }) {
  const logout = () => {
    users.logout().then(() => {
      localStorage.removeItem("BWAMICRO:token");
      history.push("/login");
    });
  };
  const getNavLinkClass = (path) => {
    return match.path === path
      ? "active bg-indigo-900 text-white"
      : "text-indigo-500";
  };
  const user = useSelector((state) => state.users);
  return (
    <aside
      className="bg-indigo-1000 max-h-screen h-screen overflow-y-auto"
      style={{ width: 280 }}
    >
      <div
        className="max-h-screen h-screen fixed bg-indigo-1000 flex flex-col content-between"
        style={{ width: 280 }}
      >
        <div className="flex flex-col mt-8 text-center">
          <div className="border border-indigo-500 p-2 mx-auto inline-flex rounded-full overflow-hidden mb-3">
            {user?.avatar ? (
              <img
                src={user?.avatar}
                alt={user?.name}
                className="rounded-full object-cover"
                style={{ width: 90, height: 90 }}
              />
            ) : (
              <DefaultAvatar
                className="fill-indigo-500"
                style={{ width: 90, height: 90 }}
              />
            )}
          </div>
          <h6 className="text-white text-xl">{user?.name}</h6>
          <span className="text-indigo-500 text-sm">{user?.profession}</span>
        </div>
        <ul className="main-menu mt-12">
          <li>
            <Link
              className={[
                "nav-link relative flex items-center py-3 px-5 transition-all duration-300 hover:text-white focus:outline-none active:text-white text-left",
                getNavLinkClass("/"),
              ].join(" ")}
              to="/"
            >
              My Class
            </Link>
          </li>
          <li>
            <a
              className="nav-link relative flex items-center py-3 px-5 transition-all duration-300 hover:text-white focus:outline-none active:text-white text-left text-indigo-500"
              href={`${process.env.REACT_APP_FRONTPAGE_URL}/courses`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Library
            </a>
          </li>
          <li>
            <Link
              className={[
                "nav-link relative flex items-center py-3 px-5 transition-all duration-300 hover:text-white focus:outline-none active:text-white text-left",
                getNavLinkClass("/transactions"),
              ].join(" ")}
              to="/transactions"
            >
              Transactions
            </Link>
          </li>
          <li>
            <Link
              className={[
                "nav-link relative flex items-center py-3 px-5 transition-all duration-300 hover:text-white focus:outline-none active:text-white text-left",
                getNavLinkClass("/settings"),
              ].join(" ")}
              to="/settings"
            >
              Settings
            </Link>
          </li>
        </ul>
        <div className="my-auto" />
        <ul className="main-menu mt-12">
          <li>
            <button
              className="nav-link relative flex items-center py-3 px-5 transition-all duration-300 hover:text-white focus:outline-none active:text-white text-left text-indigo-500"
              onClick={logout}
            >
              Logout
            </button>
          </li>
        </ul>
      </div>
    </aside>
  );
}
export default withRouter(Sidebar);
