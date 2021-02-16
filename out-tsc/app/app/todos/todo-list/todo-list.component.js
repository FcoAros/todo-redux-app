import { __decorate } from "tslib";
import { Component } from '@angular/core';
let TodoListComponent = class TodoListComponent {
    constructor(store) {
        this.store = store;
        this.todos = [];
    }
    ngOnInit() {
        this.store.select('todos').subscribe(todos => {
            this.todos = todos;
        });
    }
};
TodoListComponent = __decorate([
    Component({
        selector: 'app-todo-list',
        templateUrl: './todo-list.component.html',
        styleUrls: ['./todo-list.component.css']
    })
], TodoListComponent);
export { TodoListComponent };
//# sourceMappingURL=todo-list.component.js.map