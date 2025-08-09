import styled from "styled-components";
import { Icono } from "../../index";

export function Btnsave({ funcion, titulo, bgcolor, icono, url }) {
  const handleClick = (e) => {
    if (url) {
      window.open(url, "_blank");
    }
    if (funcion) {
      funcion(e);
    }
  };

  return (
    <Container type="submit" $bgcolor={bgcolor} onClick={handleClick}>
      {icono && <Icono>{icono}</Icono>}
      <span>{titulo}</span>
    </Container>
  );
}

const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  background: ${(props) => props.$bgcolor || props.theme.primary};
  color: ${({ theme }) => theme.text};
  border: none;
  padding: 0.8rem 1.8rem;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  }

  &:active {
    transform: translateY(0);
  }

  span {
    white-space: nowrap;
  }
`;
