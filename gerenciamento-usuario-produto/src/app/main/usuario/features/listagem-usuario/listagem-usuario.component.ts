import { Component, OnDestroy, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../models/usuario';
import { Router } from '@angular/router';
import { Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-listagem-usuario',
  templateUrl: './listagem-usuario.component.html',
  styleUrl: './listagem-usuario.component.scss',
})
export class ListagemUsuarioComponent implements OnInit, OnDestroy {
  usuarios: Array<Usuario> = [];

  subs?: Array<Subscription> = [];
  usuarioCount: number = 0;

  constructor(private service: UsuarioService, private route: Router) {
    this.usuarios = service.getList();
    this.subs?.push(
      service.tunnedObservable$.subscribe((value) => console.log(value))
    );
  }

  ngOnDestroy(): void {
    console.log('Destroy');
    this.subs?.forEach((subscription) => subscription.unsubscribe());
  }

  tunnedObservable$ = new Subject<string>();

  ngOnInit() {
    this.atualizarListagem();

    this.tunnedObservable$.subscribe((value) =>
      console.log('Inscrição 1:', value)
    );

    // Assinando a contagem de usuários e armazenando na lista
    const countSubscription = this.service.usuarioCount$.subscribe((count) => {
      this.usuarioCount = count;
    });
    this.subs?.push(countSubscription);
  }

  emitValue() {
    this.tunnedObservable$.next(`${Math.random}`);
  }

  editarUsuario(usuario: Usuario) {
    this.route.navigateByUrl(`usuario/cadastro/${usuario.id}`);
  }

  excluirUsuario(id: number) {
    this.service.excluirUsuario(id);
    this.atualizarListagem();
  }

  atualizarListagem() {
    this.usuarios = this.service.getList();
  }
}
