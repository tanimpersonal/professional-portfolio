import React from "react";
import ContactForm from "../ContactForm/ContactForm";
import file from "../../Assets/Resume/Tanim Resume.pdf";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
const Header = () => {
  return (
    <div>
      <div className="navbar bg-transparent">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabindex="0" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>

            <ul
              tabindex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <label for="my-modal-4" class="modal-button bg-black">
                  Contact
                </label>
              </li>
            </ul>
          </div>
          <div className="my-link lg:ml-0 ml-[-12px]">
            <a className="btn btn-ghost normal-case text-xl">Tanim</a>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            <li>
              <label for="my-modal-4" class="modal-button">
                Contact
              </label>
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
      <input type="checkbox" id="my-modal-4" class="modal-toggle" />
      <label for="my-modal-4" class="modal  cursor-pointer">
        <label class="modal-box bg-black relative" for="">
          <ContactForm></ContactForm>
        </label>
      </label>
    </div>
  );
};

export default Header;
