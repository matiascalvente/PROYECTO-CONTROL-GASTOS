import styled from "styled-components";
import Lottie from "lottie-react";

export function Lottieanimacion({ alto, ancho, animacion }) {
  return (
    <Container style={{ width: `${ancho}px`, height: `${alto}px` }}>
      <Lottie animationData={animacion} loop={true} autoplay={true} />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
