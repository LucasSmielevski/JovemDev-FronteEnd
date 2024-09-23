import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private usuarios: Array<Usuario> = [];
  private count = 0;

  constructor() { }

  addUsuario(usuario : Usuario){
    usuario.id = this.count
    this.usuarios.push(usuario);
    this.count++
  }

  findById(id : number){
    return this.usuarios.find(usuario => usuario.id == id)
  }

  editarUsuario(usuarioCadastro: Usuario){
    this.usuarios.forEach(usuario => ())
  }

  getList(){
    return this.usuarios;
  }

}
