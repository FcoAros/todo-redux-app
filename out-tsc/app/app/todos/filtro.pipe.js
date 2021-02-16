import { __decorate } from "tslib";
import { Pipe } from '@angular/core';
let FiltroPipe = class FiltroPipe {
    transform(todos, filtro) {
        switch (filtro) {
            case 'completados':
                return todos.filter(todo => todo.completado);
            case 'pendientes':
                return todos.filter(todo => !todo.completado);
            case 'all':
                return todos;
        }
    }
};
FiltroPipe = __decorate([
    Pipe({
        name: 'filtroTodo'
    })
], FiltroPipe);
export { FiltroPipe };
//# sourceMappingURL=filtro.pipe.js.map