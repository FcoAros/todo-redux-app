import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { setFiltro } from '../../filtro/filtro.actions';
import { limpiarCompletados } from '../todo.actions';
let TodoFooterComponent = class TodoFooterComponent {
    constructor(store) {
        this.store = store;
        this.filtroActual = 'all';
        this.filtros = ['all', 'completados', 'pendientes'];
        this.pendientes = 0;
    }
    ngOnInit() {
        this.store.subscribe(state => {
            this.filtroActual = state.filtro;
            this.pendientes = state.todos.filter(todo => !todo.completado).length;
        });
    }
    cambiarFiltro(filtro) {
        this.store.dispatch(setFiltro({ filtro }));
    }
    limpiarCompletados() {
        this.store.dispatch(limpiarCompletados());
    }
};
TodoFooterComponent = __decorate([
    Component({
        selector: 'app-todo-footer',
        templateUrl: './todo-footer.component.html',
        styleUrls: ['./todo-footer.component.css']
    })
], TodoFooterComponent);
export { TodoFooterComponent };
//# sourceMappingURL=todo-footer.component.js.map