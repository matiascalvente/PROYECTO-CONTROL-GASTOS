import styled from "styled-components";
import {
  ContentAccionesTabla,
  useCategoriasStore,
  Paginacion,
} from "../../../index";
import Swal from "sweetalert2";
import { v } from "../../../styles/variables";
import { useState, useEffect } from "react";

export function TablaCategorias({
  data,
  SetopenRegistro,
  setdataSelect,
  setAccion,
}) {
  if (data.length == 0) return;
  const [pagina, setPagina] = useState(1);
  const [porPagina, setPorPagina] = useState(10);
  const mx = data.length / porPagina;
  const maximo = mx < 1 ? 1 : mx;
  const [isMobile, setIsMobile] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < parseInt(v.bpbart));
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    // Detectar cambios en el sidebar
    const sidebar = document.querySelector(".Sidebarbutton");
    const observer = new MutationObserver(() => {
      const transform = window
        .getComputedStyle(sidebar)
        .getPropertyValue("transform");
      setSidebarOpen(transform !== "none");
    });

    if (sidebar) {
      observer.observe(sidebar, {
        attributes: true,
        attributeFilter: ["style"],
      });
    }

    return () => {
      window.removeEventListener("resize", handleResize);
      observer.disconnect();
    };
  }, []);

  const { eliminarCategoria } = useCategoriasStore();

  function eliminar(p) {
    Swal.fire({
      title: "¿Estás seguro(a)?",
      text: "Una vez eliminado, ¡no podrá recuperar este registro!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, eliminar",
      backdrop: `
        rgba(0,0,0,0.4)
        url("/images/nyan-cat.gif")
        left top
        no-repeat
      `,
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await eliminarCategoria({ id: p.id, idusuario: p.idusuario });
        } catch (error) {
          console.error("Error al eliminar categoría:", error);
          Swal.fire("Error", "No se pudo eliminar la categoría", "error");
        }
      }
    });
  }

  function editar(data) {
    SetopenRegistro(true);
    setdataSelect(data);
    setAccion("Editar");
  }

  return (
    <PremiumContainer $sidebarOpen={sidebarOpen && isMobile}>
      <PremiumTable>
        <TableHeader $hide={sidebarOpen && isMobile}>
          <TableHeaderRow>
            <TableHeaderCell>Descripción</TableHeaderCell>
            <TableHeaderCell>Icono</TableHeaderCell>
            <TableHeaderCell>Color</TableHeaderCell>
            <TableHeaderCell>Acciones</TableHeaderCell>
          </TableHeaderRow>
        </TableHeader>

        <TableBody>
          {data
            .slice(
              (pagina - 1) * porPagina,
              (pagina - 1) * porPagina + porPagina
            )
            .map((item) => (
              <TableRow key={item.id}>
                <TableCell>
                  <CategoryName>{item.descripcion}</CategoryName>
                </TableCell>

                <TableCell>
                  <IconContainer>
                    {item.icono && <IconPreview>{item.icono}</IconPreview>}
                  </IconContainer>
                </TableCell>

                <TableCell>
                  <ColorBadge color={item.color} />
                </TableCell>

                <TableCell>
                  <ActionsContainer>
                    <ContentAccionesTabla
                      funcionEditar={() => editar(item)}
                      funcionEliminar={() => eliminar(item)}
                    />
                  </ActionsContainer>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </PremiumTable>

      <PaginationContainer>
        <Paginacion pagina={pagina} setPagina={setPagina} maximo={maximo} />
      </PaginationContainer>
    </PremiumContainer>
  );
}

// Estilos premium
const PremiumContainer = styled.div`
  position: relative;
  margin: 2em auto;
  max-width: 950px;
  //max-width: ${v.bphomer};
  background: ${({ theme }) => theme.bg2};
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.border};
  transition: transform 0.3s ease;
  z-index: 1;

  ${({ $sidebarOpen }) =>
    $sidebarOpen &&
    `
    transform: translateX(60%);
    opacity: 0.8;
    pointer-events: none;
  `}

  @media (max-width: ${v.bpbart}) {
    margin: 2em;
    ${({ $sidebarOpen }) =>
      $sidebarOpen &&
      `
      transform: translateX(70%);
    `}
  }
`;

const PremiumTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 0.95rem;
`;

const TableHeader = styled.thead`
  background: ${({ theme }) => theme.bg3};
  position: sticky;
  top: 0;
  z-index: 10;
`;

const TableHeaderRow = styled.tr`
  border-bottom: 2px solid ${({ theme }) => theme.border};
`;

const TableHeaderCell = styled.th`
  padding: 18px 16px;
  text-align: center;
  font-weight: 600;
  color: ${({ theme }) => theme.text};
  text-transform: uppercase;
  font-size: 0.8rem;
  letter-spacing: 0.5px;
`;

const TableBody = styled.tbody``;

const TableRow = styled.tr`
  transition: all 0.2s ease;
  border-bottom: 1px solid ${({ theme }) => theme.border};

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background: ${({ theme }) => theme.bg3};
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  }
`;

const TableCell = styled.td`
  padding: 20px;
  vertical-align: middle;
  text-align: center;
`;

const CategoryName = styled.div`
  font-weight: 500;
  color: ${({ theme }) => theme.text};
  font-size: 0.95rem;
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const IconPreview = styled.div`
  font-size: 1.2rem;
`;

const ColorBadge = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 8px;
  background: ${({ color }) => color};
  margin: 0 auto;
  box-shadow: 0 2px 8px ${({ color }) => color}40;
  border: 1px solid rgba(0, 0, 0, 0.1);
`;

const ActionsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
`;

const PaginationContainer = styled.div`
  padding: 20px;
  display: flex;
  justify-content: center;
  border-top: 1px solid ${({ theme }) => theme.border};
`;
