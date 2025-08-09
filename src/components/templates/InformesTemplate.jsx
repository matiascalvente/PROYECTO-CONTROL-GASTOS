import styled from "styled-components";
import {
  CalendarioLineal,
  Header,
  Tabs,
  ContentFiltros,
  Btndesplegable,
  ListaMenuDesplegable,
  DataDesplegableMovimientos,
  useOperaciones,
  Btnfiltro,
  v,
} from "../../index";
import { useState } from "react";
import dayjs from "dayjs";

export function InformesTemplate() {
  const {
    setTipoMovimientos,
    tipo,
    colorCategoria,
    año,
    mes,
    bgCategoria,
    tituloBtnDes,
    tituloBtnDesMovimientos,
  } = useOperaciones();
  const [stateTipo, setStateTipo] = useState(false);
  const [state, setState] = useState(false);
  const [value, setValue] = useState(dayjs(Date.now()));
  const [formatoFecha, setFormatoFecha] = useState("");

  function openTipo() {
    setStateTipo(!stateTipo);
    setState(false);
  }

  function cambiarTipo(p) {
    setTipoMovimientos(p);
    setStateTipo(!stateTipo);
    setState(false);
  }

  return (
    <Container>
      <header className="header">
        <Header
          stateConfig={{ state: state, setState: () => setState(!state) }}
        />
      </header>
      <section className="area1">
        <ContentFiltros>
          <div
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <Btndesplegable
              textcolor={colorCategoria}
              bgcolor={bgCategoria}
              text={tituloBtnDesMovimientos}
              funcion={openTipo}
            />
            {stateTipo && (
              <ListaMenuDesplegable
                data={DataDesplegableMovimientos}
                top="112%"
                funcion={(p) => cambiarTipo(p)}
              />
            )}
          </div>
        </ContentFiltros>
        <h1 className="titulo-principal">Informes</h1>
      </section>
      <section className="area2">
        <CalendarioLineal
          value={value}
          setValue={setValue}
          formatofecha={formatoFecha}
          setFormatoFecha={setFormatoFecha}
        />
      </section>
      <section className="main">
        <Tabs />
      </section>
    </Container>
  );
}

const Container = styled.div`
  min-height: 100vh;
  padding: 15px;
  width: 100%;
  background: ${({ theme }) => theme.bgtotal};
  color: ${({ theme }) => theme.text};
  display: grid;
  grid-template:
    "header" 100px
    "area1" 120px
    "area2" 80px
    "main" auto;
  gap: 15px;

  .header {
    grid-area: header;
    display: flex;
    align-items: center;
    padding: 0 20px;
  }

  .area1 {
    grid-area: area1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 15px;
    padding: 0 20px;

    .titulo-principal {
      font-weight: 600;
      color: ${({ theme }) => theme.bg5};
      margin: 0;
    }
  }

  .area2 {
    grid-area: area2;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 20px;
  }

  .main {
    grid-area: main;
    padding: 20px;
    background: ${({ theme }) => theme.bg};
    border-radius: 15px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  }
`;
