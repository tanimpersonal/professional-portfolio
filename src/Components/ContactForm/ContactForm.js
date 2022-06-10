import { useForm } from "@formspree/react";
import React from "react";

const ContactForm = () => {
  const [state, handleSubmit] = useForm("mknyebew");

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your name"
          className="input w-full max-w-xs mb-2"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your email"
          className="input w-full max-w-xs mb-2"
          required
        />
        <textarea
          className="rounded-xl w-full px-4 py-4 text-sm focus:border-0"
          name="message"
          placeholder="Your Message"
        ></textarea>
        <input type="submit" value="Message Me!" className="btn" />
      </form>
      {state.succeeded && (
        <p className="mt-5 text-success">
          Thank you for messaging. I will come back to you as soon as possible!
        </p>
      )}
    </div>
  );
};

export default ContactForm;
