import { create } from "zustand";
import {
  EditarCategorias,
  EliminarCategorias,
  EliminarCategoriasTodas,
  InsertarCategorias,
  MostrarCategorias,
} from "../index";
export const useCategoriasStore = create((set, get) => ({
  datacategoria: [],
  categoriaItemSelect: [],
  parametros: {},
  mostrarCategorias: async (p) => {
    const response = await MostrarCategorias(p);
    set({ parametros: p });
    set({ datacategoria: response });
    set({ categoriaItemSelect: response[0] });
    return response;
  },
  selectCategoria: (p) => {
    set({ categoriaItemSelect: p });
  },
  insertarCategorias: async (p) => {
    await InsertarCategorias(p);
    const { mostrarCategorias, parametros } = get();
    await mostrarCategorias(parametros);
  },
  eliminarCategoria: async (p) => {
    await EliminarCategorias(p);
    // Actualización optimista: eliminar la categoría del estado inmediatamente
    set((state) => ({
      datacategoria: state.datacategoria.filter((item) => item.id !== p.id),
      categoriaItemSelect:
        state.categoriaItemSelect?.id === p.id
          ? state.datacategoria[0] || null
          : state.categoriaItemSelect,
    }));
    // Luego actualizar desde el servidor
    const { mostrarCategorias, parametros } = get();
    await mostrarCategorias(parametros);
  },
  eliminarCategoriasTodas: async (p) => {
    await EliminarCategoriasTodas(p);
    const { mostrarCategorias } = get();
    await mostrarCategorias(p);
  },
  editarCategoria: async (p) => {
    await EditarCategorias(p);
    const { mostrarCategorias, parametros } = get();
    await mostrarCategorias(parametros);
  },
}));
