import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule} from "@angular/common/http";

import { AppRoutingModule } from "./app.routing";
import { AppComponent } from "./app.component";

// Custom Modules
import { SharedModule } from "./shared/shared.module";
import { UsuariosModule } from "./usuarios/usuarios.module";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, SharedModule, UsuariosModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
