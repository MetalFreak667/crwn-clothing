import React from 'react';

import { ContactContainer, ContactForm } from './contact.styles';

const Contact = () =>
(
    <ContactContainer>
        <ContactForm to="net4metal+playing_with_react@gmail.com" titlePlaceholder="Subject" contentsPlaceholder="What you have to say" buttonText ="Send me and E-mail" />
    </ContactContainer>
);

export default Contact;