import React from 'react'
import { Button, Container, Image, ImageCrc, ImageDnt, ImageSpr, Title, Title2 } from './Register.styled';
import { useNavigate } from "react-router-dom";

// images
import img from "../../../images/register.svg";
import circle from "../../../images/circle.svg";
import donate from "../../../images/donate3d.svg";
import spiral from "../../../images/spiral.png";


const Register = () => {

  const navigate = useNavigate();

  const onLogin = () => {
    navigate("/daxil-olmaq");
  };
  const onRegister = () => {
    navigate("/qeydiyyat");
  };

  return (
    <>
      <Container>
        <Image src={img} />
        <Title>Pre Diagnosis</Title>
        <Title2>
          Daxil olun və elə indi xəstəliyinizin nə olduğunu öyrənin
        </Title2>
      </Container>
      <Button onClick={onRegister}>Qeydiyyat</Button>
      <Button $primary onClick={onLogin}>
        Daxil ol
      </Button>
      <ImageCrc src={circle} />
      <ImageDnt src={donate} />
      <ImageSpr src={spiral} />
    </>
  );
}

export default Register;
