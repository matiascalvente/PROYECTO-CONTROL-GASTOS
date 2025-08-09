import styled from "styled-components";
import {
  Header,
  Selector,
  v,
  ListaPaises,
  useUsuariosStore,
  ListaGenerica,
  TemasData,
  Btnsave,
  CardEliminarData,
} from "../../index";
import { useState } from "react";

export function ConfiguracionTemplate() {
  const { datausuarios, editartemamonedauser } = useUsuariosStore();
  const [select, setSelect] = useState([]);
  const [selectTema, setSelecttema] = useState([]);
  const [state, setState] = useState(false);
  const [stateListaPaises, setStateListaPaises] = useState(false);
  const [stateListaTemas, setStateListaTemas] = useState(false);

  //pais moneda
  const moneda = select.symbol ? select.symbol : datausuarios.moneda;
  const pais = select.countryName ? select.countryName : datausuarios.pais;
  const paisSeleccionado = " " + moneda + " " + pais;

  //tema
  const iconobd = datausuarios.tema === "0" ? "☀️" : "🌙";
  const temabd = datausuarios.tema === "0" ? "claro" : "oscuro";
  const temainicial = selectTema.tema ? selectTema.tema : temabd;
  const iconoinicial = selectTema.icono ? selectTema.icono : iconobd;
  const temaSeleccionado = iconoinicial + " " + temainicial;

  //funcion editar
  const editar = async () => {
    const themeElegido = selectTema.descripcion === "claro" ? "0" : "1";
    const p = {
      tema: themeElegido,
      moneda: moneda,
      pais: pais,
      id: datausuarios.id,
    };
    await editartemamonedauser(p);
  };

  return (
    <Container>
      <header className="header">
        <Header
          stateConfig={{ state: state, setState: () => setState(!state) }}
        />
      </header>

      <section className="main-content">
        <div className="settings-header">
          <h1 className="title">Configuración</h1>
          <p className="subtitle">Personaliza tu experiencia</p>
        </div>

        <SettingsCard>
          <h3 className="card-title">Preferencias</h3>

          <SettingItem>
            <div className="setting-info">
              <span className="setting-icon">💱</span>
              <div>
                <h4>Moneda</h4>
                <p className="setting-description">
                  Selecciona tu moneda local
                </p>
              </div>
            </div>
            <Selector
              state={stateListaPaises}
              color={v.colorselector}
              texto1={paisSeleccionado}
              funcion={() => setStateListaPaises(!stateListaPaises)}
            />
            {stateListaPaises && (
              <ListaPaises
                setSelect={(p) => setSelect(p)}
                setState={() => setStateListaPaises(!stateListaPaises)}
              />
            )}
          </SettingItem>

          <SettingItem>
            <div className="setting-info">
              <span className="setting-icon">🎨</span>
              <div>
                <h4>Tema</h4>
                <p className="setting-description">
                  Elige tu esquema de colores
                </p>
              </div>
            </div>
            <Selector
              texto1={temaSeleccionado}
              color={v.colorselector}
              state={stateListaTemas}
              funcion={() => setStateListaTemas(!stateListaTemas)}
            />
            {stateListaTemas && (
              <ListaGenerica
                bottom="88%"
                data={TemasData}
                setState={() => setStateListaTemas(!stateListaTemas)}
                funcion={setSelecttema}
              />
            )}
          </SettingItem>
        </SettingsCard>

        <div className="actions-section">
          <Btnsave
            titulo="Guardar Cambios"
            bgcolor={v.colorselector}
            icono={<v.iconoguardar />}
            funcion={editar}
          />
          <CardEliminarData />
        </div>
      </section>
    </Container>
  );
}

const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  background: ${({ theme }) => theme.bgtotal};
  color: ${({ theme }) => theme.text};
  display: grid;
  grid-template:
    "header" 80px
    "main" auto;
  gap: 20px;
  padding: 0 20px;

  .header {
    grid-area: header;
    display: flex;
    align-items: center;
    padding: 0 10px;
  }

  .main-content {
    grid-area: main;
    max-width: 800px;
    width: 100%;
    margin: 0 auto;
    padding-bottom: 40px;

    .settings-header {
      margin-bottom: 30px;
      text-align: center;

      .title {
        font-size: 2.5rem;
        font-weight: 700;
        color: ${({ theme }) => theme.bg5};
        margin-bottom: 8px;
      }

      .subtitle {
        font-size: 1rem;
        color: ${({ theme }) => theme.textSecondary};
      }
    }

    .actions-section {
      display: flex;
      flex-direction: column;
      gap: 20px;
      margin-top: 30px;
    }
  }
`;

const SettingsCard = styled.div`
  background: ${({ theme }) => theme.bg};
  border-radius: 16px;
  padding: 25px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 28px rgba(0, 0, 0, 0.15);
  }

  .card-title {
    font-size: 1.5rem;
    margin-bottom: 25px;
    color: ${({ theme }) => theme.textSecondary};
    padding-bottom: 10px;
    border-bottom: 1px solid ${({ theme }) => theme.border};
  }
`;

const SettingItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  border-bottom: 1px solid ${({ theme }) => theme.borderLight};
  position: relative;

  &:last-child {
    border-bottom: none;
  }

  .setting-info {
    display: flex;
    align-items: center;
    gap: 15px;

    .setting-icon {
      font-size: 1.8rem;
      background: ${({ theme }) => theme.bg};
      width: 50px;
      height: 50px;
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    h4 {
      font-size: 1.1rem;
      margin-bottom: 4px;
      font-weight: 600;
    }

    .setting-description {
      font-size: 0.9rem;
      color: ${({ theme }) => theme.textSecondary};
    }
  }
`;
