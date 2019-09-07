import React from 'react';

import { ContactContainer } from './contact.styles';

import { ReactComponent as Loading} from '../../assets/loading.svg';

const Contact = () =>
(
    <ContactContainer>
    Hi, how are You?
    Have some questions? Want some coffee or beer? 
<Loading></Loading>
    </ContactContainer>
);

export default Contact;