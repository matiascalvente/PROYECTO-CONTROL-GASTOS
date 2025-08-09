import styled from "styled-components";
import { Btnsave, v, useAuthStore } from "../../index";
export function LoginTemplate() {
  const { signInWithGoogle } = useAuthStore();

  return (
    <Container imgfondo={v.imagenfondo}>
      <LoginCard>
        <span className="version">versión 1.0</span>
        <LogoContainer>
          <img src={v.logo} alt="FinTrack Logo" className="logo" />
        </LogoContainer>
        <Titulo>FinTrack</Titulo>
        <Subtitulo>Toma el control de tus gastos e ingresos</Subtitulo>
        <GoogleButton
          titulo="Iniciar con Google"
          icono={<v.iconogoogle />}
          bgcolor={v.colorSecundario}
          funcion={signInWithGoogle}
        />
      </LoginCard>
    </Container>
  );
}

const Container = styled.div`
  background-image: url(${(props) => props.imgfondo});
  background-position: center;
  background-size: cover;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

const LoginCard = styled.div`
  background: rgba(19, 19, 19, 0.9);
  backdrop-filter: blur(10px);
  border-radius: 24px;
  gap: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  text-align: center;
  width: 100%;
  max-width: 450px;

  .version {
    color: #727272;
    font-size: 0.8rem;
    align-self: flex-start;
    margin-bottom: -10px;
  }

  @media (max-width: 768px) {
    padding: 30px;
    max-width: 90%;
  }

  @media (max-width: 480px) {
    padding: 20px;
    max-width: 16%;
  }
`;

const LogoContainer = styled.div`
  width: 120px;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;

  .logo {
    width: 170%;
    height: auto;
    animation: flotar 2s ease-in-out infinite alternate;

    @media (max-width: 480px) {
      width: 80%;
    }
  }

  @keyframes flotar {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-15px);
    }
  }
`;
const Titulo = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  color: #ffffff;
  margin: 0;
  background: linear-gradient(90deg, #ffffff, #dddddd);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 768px) {
    font-size: 2.8rem;
  }

  @media (max-width: 480px) {
    font-size: 2.2rem;
  }
`;

const Subtitulo = styled.p`
  color: #a0a0a0;
  font-size: 1.1rem;
  margin: 0;
  line-height: 1.5;
  max-width: 300px;

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const GoogleButton = styled(Btnsave)`
  width: 100%;
  max-width: 280px;
  margin-top: 10px;
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 480px) {
    max-width: 100%;
  }
`;
