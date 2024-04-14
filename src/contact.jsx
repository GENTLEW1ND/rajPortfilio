import React, { useEffect, useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import "./contact.css";
import "./util.css";

const Contact = () => {
  const [state, handleSubmit] = useForm("mkndpklp");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (state.succeeded) {
      setSubmitted(true);
    }
  }, [state.succeeded]);

  return (
    <div className="parent-container">
      <h3 className="contact__title">Hit me up!</h3>
      <form onSubmit={handleSubmit} className="inputs-box">
        <label htmlFor="email" className="label">
          Email Address
        </label>
        <input
          id="email"
          type="email"
          name="email"
          className="inputs"
          placeholder="Your Email"
        />
        <label htmlFor="name" className="label">
          Full Name
        </label>
        <input
          id="name"
          type="name"
          name="name"
          className="inputs"
          placeholder="Your good name"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <label htmlFor="message" className="label">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          className="inputs"
          placeholder="A short message for me"
          maxLength="100"
          style={{
            width: "300px",
            height: "100px",
            resize: "none",
            overflow: "hidden",
          }}
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        {submitted ? (
          <p>Thanks for joining!</p>
        ) : (
          <button type="submit" disabled={state.submitting} className="btn">
            Submit
          </button>
        )}
      </form>
    </div>
  );
};

export default Contact;
