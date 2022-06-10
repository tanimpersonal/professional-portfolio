import { useForm } from "@formspree/react";
import React from "react";

const Footer = () => {
  const [state, handleSubmit] = useForm("xeqndkdd");

  return (
    <footer className="footer p-10 bg-transparent text-white">
      <span className="footer-title">Newsletter</span>
      <div className="form-control w-80">
        <label className="label">
          <span className="label-text">Enter your email address</span>
        </label>
        <div className="relative">
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              placeholder="username@site.com"
              className="input input-bordered text-black w-full pr-16"
            />
            <input
              type="submit"
              className="btn btn-primary absolute top-0 right-0 rounded-l-none"
            />
          </form>

          {state.succeeded && <p>Submitted</p>}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
