import { Component } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../models/usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listagem-usuario',
  templateUrl: './listagem-usuario.component.html',
  styleUrl: './listagem-usuario.component.scss',
})
export class ListagemUsuarioComponent {
  usuarios: Array<Usuario> = [];

  constructor(private service: UsuarioService,
    private route: Router) {
    this.usuarios = service.getList();
  }

  ngOnInit(){
    this.atualizarListagem()
  }

  editarUsuario(usuario: Usuario) {
    this.route.navigateByUrl(`usuario/cadastro/${usuario.id}`);
  }

  excluirUsuario(id: number) {

  }

  atualizarListagem(){

  }
}
