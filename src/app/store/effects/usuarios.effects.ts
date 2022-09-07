import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, mergeMap, tap } from "rxjs";
import { UsuarioService } from "src/app/services/usuario.service";
import { cargarUsuarios, cargarUsuariosSuccess } from "../actions";


@Injectable()
export class UsuariosEffects {

    constructor(private actions$: Actions,
        private usuarioService: UsuarioService) {
    }

    cargarUsuarios$ = createEffect(
        () => this.actions$.pipe(
            ofType(cargarUsuarios),
            tap(data => console.log("Effect data", data)),
            mergeMap(
                () => this.usuarioService.getUsers()
                    .pipe(
                        // tap para ver que pasa por aqui
                        // tap(data => console.log("Get ussers effect", data))

                        map(users => cargarUsuariosSuccess({usuarios: users}) )
                    )
            )
        )
    );

}
