import { createAction, props } from '@ngrx/store';
export const crear = createAction('[TODO] Crear Todo', props());
export const toggle = createAction('[TODO] Toggle Todo', props());
export const editar = createAction('[TODO] Editar Todo', props());
export const borrar = createAction('[TODO] Borrar Todo', props());
export const toggleAll = createAction('[TODO]  Toggle All', props());
//# sourceMappingURL=todo.actions.js.map