import React from "react";
import { Container } from "semantic-ui-react";
import ContactForm from "./ContactForm";

const How = () => {
    return (
        <Container>
            <h1 id="how-header">How?</h1>
            <p>
                Oh! so you want to know how to get in contact with me? i'm glad to hear!
            </p>
            <div>
                <ContactForm />
            </div>
        </Container>
    );
};

export default How;