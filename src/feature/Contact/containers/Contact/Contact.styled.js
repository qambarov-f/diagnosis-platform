import styled, { keyframes } from "styled-components" 


const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;



export const Title = styled.h1`
  padding: 10px;
  background-color: azure;
  color: blue;
  text-align: center;
`;

export const Button = styled.button`
  background: ${(props) => (props.$primary ? "#BF4F74" : "white")};
  color: ${(props) => (props.$primary ? "white" : "#BF4F74")};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #bf4f74;
  border-radius: 3px;
  animation: ${rotate} 2s linear infinite;

  /* 
  color: ${(styledProps) => {
    return styledProps.primary ? "purple" : "pink";
  }}; */

  color: ${(styledProps) => {
    switch (styledProps.color) {
      case "purple":
        return "purple";
      case "pink":
        return "pink";
      case "aqua":
        return "aqua";
      case "red":
        return "red";
      default:
        return "black";
    }
  }};
`;