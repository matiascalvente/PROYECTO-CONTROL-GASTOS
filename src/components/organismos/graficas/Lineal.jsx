import styled from "styled-components";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export function Lineal({ datagrafica, data, titulo }) {
  const hasData =
    data && data.length > 0 && data.some((item) => item.total > 0);

  return (
    <Container>
      {hasData ? (
        <>
          <ChartContainer>
            <Line
              data={datagrafica}
              options={{
                responsive: true,
                plugins: {
                  legend: {
                    position: "top",
                  },
                  title: {
                    display: true,
                    text: titulo,
                    font: {
                      size: 16,
                    },
                  },
                },
                elements: {
                  line: {
                    tension: 0.3,
                    borderWidth: 2,
                  },
                  point: {
                    radius: 4,
                    hoverRadius: 6,
                  },
                },
              }}
            />
          </ChartContainer>
          <DataContainer>
            <h2 className="titulo-grafico">{titulo} por categoría</h2>
            <ListaCategorias>
              {data.map((item, index) => (
                <ItemCategoria key={index}>
                  <div className="contentDescripcion">
                    <span className="icono">{item.icono}</span>
                    <span className="descripcion">{item.descripcion}</span>
                  </div>
                  <span className="total">${item.total}</span>
                </ItemCategoria>
              ))}
            </ListaCategorias>
          </DataContainer>
        </>
      ) : (
        <MensajeSinDatos>
          No hay datos disponibles para mostrar en {titulo.toLowerCase()}
        </MensajeSinDatos>
      )}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  gap: 30px;
  padding: 20px;
`;

const ChartContainer = styled.div`
  width: 500px;
  height: 300px;
  background: ${({ theme }) => theme.bg};
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
`;

const DataContainer = styled.div`
  min-width: 250px;
  max-width: 350px;

  .titulo-grafico {
    font-size: 1.2rem;
    color: ${({ theme }) => theme.text};
    margin-bottom: 20px;
    font-weight: 500;
  }
`;

const ListaCategorias = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const ItemCategoria = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 15px;
  background: ${({ theme }) => theme.bg};
  border-radius: 8px;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 28px rgba(0, 0, 0, 0.22);
  }

  .contentDescripcion {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .icono {
    font-size: 1.2rem;
  }

  .descripcion {
    font-weight: 500;
  }

  .total {
    font-weight: 600;
    color: ${({ theme }) => theme.bg5};
  }
`;
const MensajeSinDatos = styled.div`
  width: 100%;
  text-align: center;
  padding: 40px;
  font-size: 1.1rem;
  color: ${({ theme }) => theme.textSecondary};
  background: ${({ theme }) => theme.bg};
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
`;
