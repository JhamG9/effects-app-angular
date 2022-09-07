import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioService } from 'src/app/services/usuario.service';
import { cargarUsuarios } from 'src/app/store/actions';
import { AppState } from 'src/app/store/app.reducer';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  usuarios: Usuario[] = [];
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {


    this.store.select('usuarios').subscribe(resp =>{
      this.usuarios = resp.users;
    })

    this.store.dispatch(cargarUsuarios());
    
    /* this.usuarioService.getUsers().subscribe((users) =>{
      this.usuarios = users;
      console.log(users);
    }); */
  }

}
