import React from "react";
import "../../index.css";
import ContactForm from "../ContactForm";

const How = () => {
  return (
    <div className="howContainer">
      <div className="howText">
        <h1>
          Oh! so you want to know how to get in contact with me? Please send a message
        </h1>
        <div>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default How;
