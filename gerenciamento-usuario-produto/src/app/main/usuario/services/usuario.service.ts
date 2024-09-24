import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private usuarios: Array<Usuario> = [];
  private count = 0;
  tunnedObservable$ = new Subject<string>();
  private usuarioCountSubject = new Subject<number>();
  usuarioCount$ = this.usuarioCountSubject.asObservable();

  constructor() {
    this.usuarioCountSubject.next(this.usuarios.length)
   }

  addUsuario(usuario : Usuario){
    usuario.id = this.count
    this.usuarios.push(usuario);
    this.usuarioCountSubject.next(this.usuarios.length);
    this.count++
  }

  findById(id : number){
    return this.usuarios.find(usuario => usuario.id == id)
  }

  editarUsuario(usuarioCadastro: Usuario){
    this.usuarios.forEach(usuario => {
      if(usuario.id === usuarioCadastro.id){
        usuario.nome = usuarioCadastro.nome
        usuario.email = usuarioCadastro.email
      }
    })
  }

  excluirUsuario(id : number){
    return this.usuarios = this.usuarios.filter(usuario => usuario.id != id)
  }

  getList(){
    return this.usuarios;
  }

  emitEvent(value : string){
    this.tunnedObservable$.next(value)
  }

}
