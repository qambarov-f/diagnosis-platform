import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button`
  background: ${(props) => (props.$primary ? "#12AFB6" : "none")};
  color: ${(props) => (props.$primary ? "white" : "#12AFB6")};
  border: 1px solid ${(props) => (props.$primary ? "#12AFB6" : "#12AFB6")};
  border-radius: 15px;
  width: 200px;
  height: 50px;
  font-size: 18px;
  position: relative;
  margin: 10px;
  transition: all ease 500ms;
  :hover {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    transform: scale(1.03);
  }
`;

export const Image = styled.img`
  height: 310px;
  width: 310px;
`;

export const Title = styled.h4`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 29px;
  line-height: 60px;
  color: #023436;
`;

export const Title2 = styled.h6`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
`;
export const ImageCrc = styled.img`
  position: absolute;
  left: 260px;
  top: 170px;
  width: 50px;
  height: 50px;
`;

export const ImageDnt = styled.img`
  position: absolute;
  width: 120px;
  top: 250px;
  left: 320px;
`;

export const ImageSpr = styled.img`
  position: absolute;
  width: 300px;
  transform: rotate(95deg);
  right: 15px;
  top: 290px;
`;
