import styled from "styled-components";
import {
  Header,
  ContentFiltros,
  Btndesplegable,
  useOperaciones,
  ListaMenuDesplegable,
  DataDesplegableTipo,
  Btnfiltro,
  v,
  TablaCategorias,
  RegistrarCategorias,
  Lottieanimacion,
} from "../../index";
import { useState } from "react";
import vacioverde from "../../assets/vacioverde.json";
import vaciorojo from "../../assets/vaciorojo.json";

export function CategoriasTemplate({ data }) {
  const [openRegistro, SetopenRegistro] = useState(false);
  const [accion, setAccion] = useState("");
  const [dataSelect, setdataSelect] = useState([]);
  const [state, setState] = useState(false);
  const [stateTipo, setStateTipo] = useState(false);
  const { colorCategoria, tituloBtnDes, bgCategoria, setTipo, tipo } =
    useOperaciones();

  function cambiarTipo(p) {
    setTipo(p);
    setStateTipo(!stateTipo);
    setState(false);
  }

  function cerrarDesplegables() {
    setStateTipo(false);
    setState(false);
  }

  function openTipo() {
    setStateTipo(!stateTipo);
    setState(false);
  }

  function openUser() {
    setState(!state);
    setStateTipo(false);
  }

  function nuevoRegistro() {
    SetopenRegistro(!openRegistro);
    setAccion("Nuevo");
    setdataSelect([]);
  }

  return (
    <Container onClick={cerrarDesplegables}>
      {openRegistro && (
        <RegistrarCategorias
          dataSelect={dataSelect}
          onClose={() => SetopenRegistro(!openRegistro)}
          accion={accion}
        />
      )}

      <header className="header">
        <Header stateConfig={{ state: state, setState: openUser }} />
      </header>

      <section className="tipo">
        <ContentFiltros>
          <div onClick={(e) => e.stopPropagation()}>
            <Btndesplegable
              textcolor={colorCategoria}
              bgcolor={bgCategoria}
              text={tituloBtnDes}
              funcion={openTipo}
            />
            {stateTipo && (
              <ListaMenuDesplegable
                data={DataDesplegableTipo}
                top="112%"
                funcion={(p) => cambiarTipo(p)}
              />
            )}
          </div>
        </ContentFiltros>
      </section>

      <section className="area2">
        <ContentFiltro>
          <StyledButton
            onClick={nuevoRegistro}
            bgcolor={bgCategoria}
            textcolor={colorCategoria}
          >
            <v.agregar />
            <span>Nueva categoría</span>
          </StyledButton>
        </ContentFiltro>
      </section>

      <section className="main">
        {data.length === 0 ? (
          <EmptyStateContainer>
            <Lottieanimacion
              alto={250}
              ancho={250}
              animacion={tipo === "i" ? vacioverde : vaciorojo}
            />
            <EmptyStateText>
              {tipo === "i"
                ? "No hay categorías de ingresos"
                : "No hay categorías de gastos"}
            </EmptyStateText>
            <EmptyStateSubtext>
              Presiona el botón "Nueva categoría" para comenzar
            </EmptyStateSubtext>
          </EmptyStateContainer>
        ) : (
          <TableContainer>
            <TablaCategorias
              data={data}
              SetopenRegistro={SetopenRegistro}
              setdataSelect={setdataSelect}
              setAccion={setAccion}
            />
          </TableContainer>
        )}
      </section>
    </Container>
  );
}

// Estilos mejorados
const Container = styled.div`
  min-height: 100vh;
  padding: 15px;
  width: 100%;
  background: ${({ theme }) => theme.bgtotal};
  color: ${({ theme }) => theme.text};
  display: grid;
  grid-template:
    "header" 100px
    "tipo" 100px
    "area2" 50px
    "main" auto;
  transition: all 0.3s ease;

  .header {
    grid-area: header;
    display: flex;
    align-items: center;
  }

  .tipo {
    grid-area: tipo;
    display: flex;
    align-items: center;
  }

  .area2 {
    grid-area: area2;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  .main {
    grid-area: main;
  }

  @media (max-width: 768px) {
    grid-template:
      "header" 80px
      "tipo" 80px
      "area2" 60px
      "main" auto;
    padding: 10px;
  }
`;

const ContentFiltro = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const StyledButton = styled.button`
  background: ${({ bgcolor }) => bgcolor};
  color: ${({ textcolor }) => textcolor};
  border: none;
  padding: 16px 28px;
  border-radius: 8px;
  font-weight: 600;
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  transition: all 0.2s;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  }

  &:active {
    transform: translateY(0);
  }

  span {
    margin-left: 8px;
  }
`;

const EmptyStateContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 60vh;
  gap: 20px;
  text-align: center;
  padding: 20px;
`;

const EmptyStateText = styled.h3`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.text};
  margin-top: 20px;
  font-weight: 600;
`;

const EmptyStateSubtext = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.textSecondary};
  margin-bottom: 20px;
  max-width: 400px;
  line-height: 1.5;
`;

const TableContainer = styled.div`
  background: ${({ theme }) => theme.bg1};
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;
