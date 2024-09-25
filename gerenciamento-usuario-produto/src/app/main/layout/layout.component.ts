import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario/services/usuario.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent implements OnInit {
  usuarioCount: number = 0;
  private subs: Subscription[] = [];

  constructor(private service: UsuarioService) {}

  ngOnInit() {
    const countSubscription = this.service.usuarioCount$.subscribe(count => {
      this.usuarioCount = count;
    });
    this.subs.push(countSubscription);
  }
}
