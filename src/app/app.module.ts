import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app.routing";
import { AppComponent } from "./app.component";
import { environment } from "src/environments/environment";

// NgRx
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { AppState, appReducers } from "./store/app.reducers";
import { effetsApp } from "./store/effects";

// Custom Modules
import { SharedModule } from "./shared/shared.module";
import { UsuariosModule } from "./usuarios/usuarios.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,

    // Custom Modules
    SharedModule,
    UsuariosModule,

    // NgRx
    StoreModule.forRoot<AppState>(appReducers),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    }),
    EffectsModule.forRoot(effetsApp)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
