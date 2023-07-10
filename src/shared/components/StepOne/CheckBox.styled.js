import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  display: grid;
  /* grid-templat-columns: repeat(3, 1fr); */
  margin: 50px 370px 20px 260px;
  border-radius: 4px;
  grid-template-columns: auto auto auto;
  align-items: center;
  padding: 10px;
`;

export const Label = styled.label`
  display: flex;
  justify-content: flex-start;
  /* align-items: center; */
  /* padding: 20px; */
  font-size: 22px;
  text-align: center;
  margin-left: 120px;
  font-family: "Poppins", sans-serif;
`;


export const Input = styled.input`
  cursor: pointer;
  background-color: #c9e8eb;
  background: none;
  margin-right: 15px;
`;
