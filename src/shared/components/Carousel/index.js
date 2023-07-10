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
  } from "./Carousel.styled";
  
import CheckboxList from "../StepOne";

  // icons
  // import { SlArrowLeft } from "react-icons/sl";
  // import { SlArrowRight } from "react-icons/sl";

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

    return (
      <>
        <MainContainer>
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

                    <CheckboxList/>

        <ButtonsContainer>
          <ButtonStyle onClick={prevStep} disabled={activeStep === 1}>
            Geri
          </ButtonStyle>
          <ButtonStyle
            $primary
            onClick={nextStep}
            disabled={activeStep === totalSteps}
          >
            İrəli
          </ButtonStyle>
        </ButtonsContainer>
      </>
    );
  };

  export default Carousel;
