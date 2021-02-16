import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import * as actions from '../todo.actions';
let TodoAddComponent = class TodoAddComponent {
    constructor(store) {
        this.store = store;
        this.txtInput = new FormControl('', Validators.required);
    }
    ngOnInit() {
    }
    agregar() {
        if (this.txtInput.invalid)
            return;
        this.store.dispatch(actions.crear({ texto: this.txtInput.value }));
        this.txtInput.reset();
    }
};
TodoAddComponent = __decorate([
    Component({
        selector: 'app-todo-add',
        templateUrl: './todo-add.component.html',
        styleUrls: ['./todo-add.component.css']
    })
], TodoAddComponent);
export { TodoAddComponent };
//# sourceMappingURL=todo-add.component.js.map