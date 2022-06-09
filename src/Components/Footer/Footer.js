import { useForm } from "@formspree/react";
import React from "react";

const Footer = () => {
  const [state, handleSubmit] = useForm("xeqndkdd");

  return (
    <footer class="footer p-10 bg-transparent text-white">
      <div>
        <span class="footer-title">Services</span>
      </div>
      <div>
        <span class="footer-title">Company</span>
      </div>
      <div>
        <span class="footer-title">Legal</span>
      </div>
      <div>
        <span class="footer-title">Newsletter</span>
        <div class="form-control w-80">
          <label class="label">
            <span class="label-text">Enter your email address</span>
          </label>
          <div class="relative">
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                name="email"
                placeholder="username@site.com"
                class="input input-bordered text-black w-full pr-16"
              />
              <input
                type="submit"
                class="btn btn-primary absolute top-0 right-0 rounded-l-none"
              />
            </form>

            {state.succeeded && <p>Submitted</p>}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
