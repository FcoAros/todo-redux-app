import { createReducer, on } from '@ngrx/store';
import { setFiltro } from './filtro.actions';
export const init = 'all';
// tslint:disable-next-line:variable-name
const _filtroReducer = createReducer(init, on(setFiltro, (state, { filtro }) => filtro));
// tslint:disable-next-line:typedef
export function filtroReducer(state, action) {
    return _filtroReducer(state, action);
}
//# sourceMappingURL=filtro.reducer.js.map