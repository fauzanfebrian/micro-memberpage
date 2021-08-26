import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  const submit = () => {};
  return (
    <footer className="container mx-auto px-4">
      <div className="flex justify-between flex-wrap">
        <div className="w-full md:w-1/6 mb-4">
          <h6 className="text-white text-lg">Company</h6>
          <ul className="mt-4">
            <li className="mt-2">
              <Link
                className="text-indigo-500 hover:text-teal hover:underline"
                to="#"
              >
                Api Developer
              </Link>
            </li>
            <li className="mt-2">
              <Link
                className="text-indigo-500 hover:text-teal hover:underline"
                to="#"
              >
                Career
              </Link>
            </li>
            <li className="mt-2">
              <Link
                className="text-indigo-500 hover:text-teal hover:underline"
                to="#"
              >
                Our Story
              </Link>
            </li>
            <li className="mt-2">
              <Link
                className="text-indigo-500 hover:text-teal hover:underline"
                to="#"
              >
                New Soon
              </Link>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/6 mb-4">
          <h6 className="text-white text-lg">Student</h6>
          <ul className="mt-4">
            <li className="mt-2">
              <Link
                className="text-indigo-500 hover:text-teal hover:underline"
                to="#"
              >
                Get Scholarship
              </Link>
            </li>
            <li className="mt-2">
              <Link
                className="text-indigo-500 hover:text-teal hover:underline"
                to="#"
              >
                Our Pathskills
              </Link>
            </li>
            <li className="mt-2">
              <Link
                className="text-indigo-500 hover:text-teal hover:underline"
                to="#"
              >
                All Features
              </Link>
            </li>
            <li className="mt-2">
              <Link
                className="text-indigo-500 hover:text-teal hover:underline"
                to="#"
              >
                Refund Policy
              </Link>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/6 mb-4">
          <h6 className="text-white text-lg">Touch Us</h6>
          <p className="mt-4 text-indigo-500 leading-loose">
            Micro Center <br />
            Alleysi Block X No.12 <br />
            Jakarta Selata, Indonesia <br />
            +21 2020 5555
          </p>
        </div>
        <div className="w-full md:w-2/6 mb-4">
          <h6 className="text-white text-lg">Promotions</h6>
          <h6 className="text-sm text-indigo-500 mt-4">
            Submit your email for new updates
          </h6>
          <form onSubmit={submit} className="mt-5">
            <input
              type="text"
              className="bg-white focus:outline-none border-0 px-6 py-3 w-1/2"
              placeholder="Your email address"
            />
            <button className="w-1/2 bg-orange-500 hover:bg-orange-400 transition-all duration-200 focus:outline-none shadow-inner text-white px-6 py-3">
              Register Now
            </button>
          </form>
        </div>
      </div>
      <div className="border-t border-gray-800 mt-8 text-center py-8">
        <p className="text-indigo-500">
          2020 Copyright Micro by BuildWith Angga. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
