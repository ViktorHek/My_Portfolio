import React from "react";
import "../../index.css";
import ContactForm from "../ContactForm";

const How = () => {
  return (
    <div className="pageContainer">
      <h1 id="how-header">How?</h1>
      <p>
        Oh! so you want to know how to get in contact with me? i'm glad to hear!
      </p>
      <div>
        <ContactForm />
      </div>
    </div>
  );
};

export default How;
