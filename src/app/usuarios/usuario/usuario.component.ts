import { Component, OnInit, OnDestroy } from "@angular/core";
import { AppState } from "src/app/store/app.reducers";
import { Store } from "@ngrx/store";
import { User } from "src/app/models/usuario.model";
import { LoadUser } from "../../store/actions/usuario.actions";
import { ActivatedRoute } from "@angular/router";
import { filter } from "rxjs/operators";
import { Subscription } from "rxjs";

@Component({
  selector: "app-usuario",
  templateUrl: "./usuario.component.html",
  styles: []
})
export class UsuarioComponent implements OnInit, OnDestroy {
  user: User;
  loading: boolean;
  error: any;

  suscriptionParams = new Subscription();
  suscriptionUser = new Subscription();

  constructor(
    private store: Store<AppState>,
    private activateRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.suscriptionParams = this.activateRoute.params.subscribe(params => {
      const id = params["id"];
      this.store.dispatch(new LoadUser(+id));
    });

    this.suscriptionUser = this.store
      .select("user")
      .subscribe(userState => {
        this.user = userState.user;
        this.loading = userState.loading;
        this.error = userState.error;
        console.log(this.user);
      });
  }

  ngOnDestroy() {
    this.suscriptionParams.unsubscribe();
    this.suscriptionUser.unsubscribe();
  }
}
