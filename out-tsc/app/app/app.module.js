import { __decorate } from "tslib";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { TodoModule } from './todos/todo.module';
import { FooterComponent } from './footer/footer.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { ReactiveFormsModule } from '@angular/forms';
import { appReducers } from './app.reducer';
let AppModule = class AppModule {
};
AppModule = __decorate([
    NgModule({
        declarations: [
            AppComponent,
            FooterComponent
        ],
        imports: [
            BrowserModule,
            TodoModule,
            StoreModule.forRoot(appReducers, {
                runtimeChecks: {
                    strictStateImmutability: false,
                    strictActionImmutability: false
                }
            }),
            StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
            ReactiveFormsModule
        ],
        providers: [],
        bootstrap: [AppComponent]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map