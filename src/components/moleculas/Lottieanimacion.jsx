import styled from "styled-components";
import Lottie from "lottie-react";
export function Lottieanimacion({ alto, ancho, animacion }) {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animacion,
  };
  return (
    <Container>
      <Lottie
        options={defaultOptions}
        height={`${alto}px`}
        width={`${ancho}px`}
        isClickToPauseDisabled
      />
    </Container>
  );
}
const Container = styled.div``;
