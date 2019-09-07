import styled from 'styled-components';
import { ReactComponent as GoogleLogo } from '../../assets/google.svg';


export const SignInTitleContainer = styled.h2`
    margin: 10px 0;
`;

export const SignInContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 380px;
`;

export const SignInButtonsContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;


export const GoogleIcon = styled(GoogleLogo)`
    width:30px;
    margin:10px 5px 0px -25px
`;