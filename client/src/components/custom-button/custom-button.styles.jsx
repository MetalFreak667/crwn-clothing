import styled,  { css } from 'styled-components';


const buttonStyles = css`
    background-color: black;
    color: white;
    border: none;
    &:hover {
        background-color: white;
        color: black;
        border: 1px solid black;
      }
    
    
`;

const invertedButtonStyles = css`
    background-color: white;
    color: black;
    border: 1px solid black;

    &:hover {
      background-color: black;
      color: white;
      border: 1px solid black;
    }
`;

const googleSignInStyles = css`
    background-color: #4285f4;
    color: white;

    &:hover {
    background-color: #357ae8;
    border: none;
    }
`;

const itemButtonStyles = css`
    width: 80%;
    opacity: 0.7;
    position: absolute;
    top: 255px;
    background-color: white;
    color: black;
    border: 1px solid black;
    
    &:hover { 
        opacity: 0.85;
        display: flex;
        background-color: black;
        color: white;
        border: 1px solid black;
      }    
`;

const getButtonStyles = props => {
    if(props.isGoogleSignIn){
        return googleSignInStyles;
    }

    if(props.isItem){
        return itemButtonStyles;
    }
    return props.inverted ? invertedButtonStyles : buttonStyles;
}


export const CustomButtonContainer = styled.button`
    min-width: 125px;
    width: auto;
    height: 50px;
    letter-spacing: 0.5px;
    line-height: 50px;
    padding: 0 35px 0 35px;
    font-size: 15px;    
    text-transform: uppercase;
    font-family: 'Open Sans Condensed';
    font-weight: bolder;    
    cursor: pointer;
    display: flex;
    justify-content: center;
    ${getButtonStyles}      

    img {
        margin:10px 5px 0px -25px
    }

    
`;