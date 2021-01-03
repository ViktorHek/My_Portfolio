import React from "react";
import "../../index.css";
import ContactForm from "../ContactForm";

const How = () => {
  return (
    <div className="howContainer">
      <div className="howText">
        <h1>
          Oh! so you want to know how to get in contact with me? i'm glad to
          hear!
        </h1>
        <div>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default How;
