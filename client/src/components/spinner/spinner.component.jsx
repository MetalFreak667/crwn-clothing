import React from 'react';

import {  SpinnerOverlay, LoadingContainer } from './spinner.styles'; 


const Spinner = () => (
    <SpinnerOverlay>
        <LoadingContainer></LoadingContainer>       
    </SpinnerOverlay>
);

export default Spinner;