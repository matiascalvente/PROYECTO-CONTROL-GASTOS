import styled from "styled-components";
import { v, Btnsave } from "../../../index";

export function SidebarCard() {
  const handleContactClick = () => {
    window.location.href =
      "mailto:matiascalvente03@gmail.com?subject=Consulta sobre la aplicación&body=Hola Matías, ";
  };

  return (
    <Container>
      <span className="icon">{<v.iconoayuda />}</span>
      <div className="cardContent">
        <div className="circle1"></div>
        <div className="circle2"></div>
        <h3>Centro de ayuda</h3>
        <div className="contentBtn">
          <Btnsave
            titulo="Contactar"
            bgcolor="#a7a7a7"
            funcion={handleContactClick}
          />
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  padding: 1rem;
  text-align: center;
  position: relative;

  .icon {
    position: absolute;
    font-size: 3rem;
    border-radius: 50%;
    top: -8px;
    right: 50%;
    transform: translate(50%);
    z-index: 100;
  }
  .cardContent {
    position: relative;
    padding: 1rem;
    background: ${(props) => props.theme.bg5};
    border-radius: 10px;
    overflow: hidden;

    .circle1,
    .circle2 {
      position: absolute;
      background: ${(props) => props.theme.whiteBg};
      border-radius: 50%;
      opacity: 0.7;
    }
    .circle1 {
      height: 100px;
      width: 100px;
      top: -50px;
      left: -50px;
    }
    .circle2 {
      height: 130px;
      width: 130px;
      bottom: -80px;
      right: -70px;
    }
    h3 {
      font-size: 1.1rem;
      margin-top: 1rem;
      padding: 1rem 0;
      font-weight: 800;
      color: #ffffff;
    }
    .contentBtn {
      position: relative;
      margin-left: -8px;
    }
  }
`;
