import { __decorate } from "tslib";
import { Component } from '@angular/core';
import * as actions from '../todo.actions';
let TodoPageComponent = class TodoPageComponent {
    constructor(store) {
        this.store = store;
        this.completado = false;
    }
    ngOnInit() {
    }
    toggleAll() {
        this.completado = !this.completado;
        this.store.dispatch(actions.toggleAll({ completado: this.completado }));
    }
};
TodoPageComponent = __decorate([
    Component({
        selector: 'app-todo-page',
        templateUrl: './todo-page.component.html',
        styleUrls: ['./todo-page.component.css']
    })
], TodoPageComponent);
export { TodoPageComponent };
//# sourceMappingURL=todo-page.component.js.map