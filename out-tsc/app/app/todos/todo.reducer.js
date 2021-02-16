import { createReducer, on } from '@ngrx/store';
import { borrar, crear, editar, toggle, toggleAll } from './todo.actions';
import { Todo } from './models/todo.model';
export const estadoInicial = [
    new Todo('Salvar al mundo'),
    new Todo('Vencer a Thanos'),
    new Todo('Comprar traje de Ironman'),
    new Todo('Robar escudo del Capitán América')
];
const _todoReducer = createReducer(estadoInicial, on(crear, (state, { texto }) => [...state, new Todo(texto)]), on(toggle, (state, { id }) => {
    return state.map(todo => {
        if (todo.id === id) {
            return Object.assign(Object.assign({}, todo), { completado: !todo.completado });
        }
        else {
            return todo;
        }
    });
}), on(editar, (state, { id, texto }) => {
    return state.map(todo => {
        if (todo.id === id) {
            return Object.assign(Object.assign({}, todo), { texto });
        }
        else {
            return todo;
        }
    });
}), on(borrar, (state, { id }) => state.filter(todo => todo.id !== id)), on(toggleAll, (state, { completado }) => {
    return state.map(todo => {
        return Object.assign(Object.assign({}, todo), { completado });
    });
}));
export function todoReducer(state, action) {
    return _todoReducer(state, action);
}
//# sourceMappingURL=todo.reducer.js.map