import React from 'react'
import { Button, Container, Image, ImageCrc, ImageDnt, ImageSpr, Title, Title2 } from './Register.styled';
import img from "../../../images/register.svg";
import circle from "../../../images/circle.svg";
import donate from "../../../images/donate3d.svg";
import spiral from "../../../images/spiral.png";


const Register = () => {
  return (
    <>
      <Container>
        <Image src={img} />
        <Title>Pre Diagnosis</Title>
        <Title2>
          Daxil olun və elə indi xəstəliyinizin nə olduğunu öyrənin
        </Title2>
      </Container>
      <Button>Qeydiyyat</Button>
      <Button $primary>Daxil ol</Button>
      <ImageCrc src={circle} />
      <ImageDnt src={donate} />
      <ImageSpr src={spiral} />
    </>
  );
}

export default Register;
