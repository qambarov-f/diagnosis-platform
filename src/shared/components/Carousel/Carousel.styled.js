import styled from "styled-components";


export const MainContainer = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  padding: 0 16px;
`;

export const StepContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 60px;
  position: relative;
  :before {
    content: "";
    position: absolute;
    background: #bcbfbf;
    height: 4px;
    width: 100%;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
  }
  :after {
    content: "";
    position: absolute;
    background: #12afb6;
    height: 4px;
    width: ${({ width }) => width};
    top: 50%;
    transition: 0.4s ease;
    transform: translateY(-50%);
    left: 0;
  }
`;

export const StepWrapper = styled.div`
  position: relative;
  z-index: 1;
`;

export const StepStyle = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: ${({ step }) =>
    step === "completed" ? "#12afb6" : "#BCBFBF"};
  border: 3px solid
    ${({ step }) => (step === "completed" ? "#12afb6" : "#BCBFBF")};
  transition: 0.4s ease;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StepCount = styled.span`
  font-size: 30px;
  font-weight: 600;
  background: none;
  color: #fff;
  @media (max-width: 600px) {
    font-size: 16px;
  }
`;

export const StepsLabelContainer = styled.div`
  position: absolute;
  top: 75px;
  background: none;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const StepLabel = styled.span`
  font-size: 22px;
  font-weight: 700;
  color: #023436;
  @media (max-width: 600px) {
    font-size: 16px;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px;
  margin-top: 50px;
`;

export const ButtonStyle = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
  margin: 15px;
  background: none;
  font-size: 20px;
  font-weight: 600;
  border: 1px solid #12afb6;
  background: ${(props) => (props.$primary ? "#12AFB6" : "none")};
  color: ${(props) => (props.$primary ? "white" : "#12AFB6")};
  cursor: pointer;
  padding: 8px;
  width: 120px;
  :active {
    transform: scale(0.98);
  }
  :disabled {
    background: ${(props) => (props.$primary ? "#12AFB6" : "none")};
    color: ${(props) => (props.$primary ? "white" : "#12AFB6")};
    cursor: not-allowed;
  }
`;

export const CheckMark = styled.div`
  font-size: 30px;
  font-weight: 600;
  color: #fff;
  background: none;
  -ms-transform: scaleX(-1) rotate(-46deg); /* IE 9 */
  -webkit-transform: scaleX(-1) rotate(-46deg); /* Chrome, Safari, Opera */
  transform: scaleX(-1) rotate(-46deg);
`;

export const Title = styled.h3`
  color: #023436;
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  text-align: center;
  margin-top: 50px;
`;