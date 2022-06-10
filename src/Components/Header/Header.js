import React from "react";
import ContactForm from "../ContactForm/ContactForm";
import file from "../../Assets/Resume/Tanim Resume.pdf";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
const Header = () => {
  return (
    <div>
      <div className="navbar bg-transparent">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex="0" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>

            <ul
              tabIndex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <label htmlFor="my-modal-4" className="modal-button bg-black">
                  Contact
                </label>
              </li>
            </ul>
          </div>
          <div className="my-link lg:ml-0 ml-[-20px]">
            <Link
              to="/"
              className="btn btn-ghost normal-case text-xl lg:text-3xl"
            >
              Tanim
            </Link>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            <li>
              <label htmlFor="my-modal-4" className="modal-button">
                Contact
              </label>
            </li>
            <li>
              <Link to="/blogs">
                <label htmlFor="my-modal-4" className="modal-button">
                  Blogs
                </label>
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a href={file} download className="btn">
            <FontAwesomeIcon
              className="mr-2"
              icon={faDownload}
            ></FontAwesomeIcon>
            Resume
          </a>
        </div>
      </div>
      <input type="checkbox" id="my-modal-4" className="modal-toggle" />
      <label htmlFor="my-modal-4" className="modal  cursor-pointer">
        <label className="modal-box bg-black relative" htmlFor="">
          <ContactForm></ContactForm>
        </label>
      </label>
    </div>
  );
};

export default Header;
