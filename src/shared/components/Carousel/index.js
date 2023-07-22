import React, { useState } from "react";
import {
  ButtonStyle,
  ButtonsContainer,
  CheckMark,
  MainContainer,
  StepContainer,
  StepCount,
  StepLabel,
  StepStyle,
  StepWrapper,
  StepsLabelContainer,
  Title,
} from "./Carousel.styled";


import CheckboxList from "../StepOne";
import Questions from "../StepTwo";
import StepThree from "../StepThree";
import Information from "../StepFour";
import Mualice from "../StepFive";

import { useNavigate } from "react-router-dom";




const steps = [
  {
    label: "Simptomlar",
    step: 1,
  },
  {
    label: "Suallar",
    step: 2,
  },
  {
    label: "Xəstəliklər",
    step: 3,
  },
  {
    label: "Məlumat",
    step: 4,
  },
  {
    label: "Müalicə",
    step: 5,
  },
];

const Carousel = () => {
  const [activeStep, setActiveStep] = useState(1);

  const nextStep = () => {
    setActiveStep(activeStep + 1);
  };

  const prevStep = () => {
    setActiveStep(activeStep - 1);
  };

  const totalSteps = steps.length;

  const width = `${(100 / (totalSteps - 1)) * (activeStep - 1)}%`;

  const renderStepComponent = () => {
    switch (activeStep) {
      case 1:
        return <CheckboxList />;
      case 2:
        return <Questions />;
      case 3:
        return <StepThree />;
      case 4:
        return <Information />;
      case 5:
        return <Mualice />;
      default:
        return null;
    }
  };

  const navigate = useNavigate();

  const handleGoToHome = () => {
    navigate("/");
  };

  return (
    <>
      <MainContainer>
        <Title>Addımları tamamlayaraq xəstəliyinizin nə olduğunu öyrənin</Title>
        <StepContainer width={width}>
          {steps.map(({ step, label }) => (
            <StepWrapper key={step}>
              <StepStyle step={activeStep >= step ? "completed" : "incomplete"}>
                {activeStep > step ? (
                  <CheckMark>L</CheckMark>
                ) : (
                  <StepCount>{step}</StepCount>
                )}
              </StepStyle>
              <StepsLabelContainer>
                <StepLabel key={step}>{label}</StepLabel>
              </StepsLabelContainer>
            </StepWrapper>
          ))}
        </StepContainer>
      </MainContainer>

      {renderStepComponent()}

      <ButtonsContainer>
        <ButtonStyle onClick={prevStep} disabled={activeStep === 1}>
          Geri
        </ButtonStyle>

        {/* <ButtonStyle
          $primary
          onClick={nextStep}
          disabled={activeStep === totalSteps}
        >
          {activeStep !== totalSteps ? "İrəli" : "Ana Səhifə"}
        </ButtonStyle> */}

        {activeStep !== totalSteps ? (
          <ButtonStyle
            $primary
            onClick={nextStep}
            disabled={activeStep === totalSteps}
          >
            İrəli
          </ButtonStyle>
        ) : (
          <ButtonStyle $primary onClick={handleGoToHome}>
            Ana Səhifə
          </ButtonStyle>
        )}
      </ButtonsContainer>
    </>
  );
};

export default Carousel;

