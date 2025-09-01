import React from "react";

const Contact = () => {
  const handleFormSubmit = (formData) => {
    const formInputData = Object.fromEntries(formData.entries());
    console.log(formInputData);
  };

  return (
    <>
      <section className="section-contact">
        <h2 className="container-title">Contact Us</h2>

        <div className="contact-wrapper container">
          <form action={handleFormSubmit}>
            <input
              type="text"
              required
              autoComplete="off"
              className="form-control"
              placeholder="Enter your name"
              name="username"
            />
            <input
              type="email"
              required
              autoComplete="off"
              className="form-control"
              placeholder="Enter your email"
              name="email"
            />
            <textarea
              required
              autoComplete="off"
              className="form-control"
              placeholder="Enter your message"
              name="message"
              rows="10"
            />
            <button type="submit" value="Send">
              Send
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
