import { createReducer, on } from '@ngrx/store';
import { filtrosValidos, setFiltro } from './filtro.actions';

export const init: filtrosValidos = 'all';

const _filtroReducer = createReducer(init,
  on(setFiltro, (state, { filtro }) => filtro)
);

export function filtroReducer(state, action) {
  return _filtroReducer(state, action);
}
