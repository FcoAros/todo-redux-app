import { createReducer, on } from '@ngrx/store';
import { setFiltro } from './filtro.actions';
export const init = 'completadossas';
// @ts-ignore
const _filtroReducer = createReducer(init, on(setFiltro, (state, { filtro }) => filtro));
export function filtroReducer(state, action) {
    return _filtroReducer(state, action);
}
//# sourceMappingURL=filtro.reducer.js.map