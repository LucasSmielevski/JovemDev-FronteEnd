import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'meu-primeiro-projeto-angular';

  // trocarTitulo(titulo : string){
  //   this.title = titulo;
  // }

  printarCampo(pesquisa : string){
    alert(pesquisa)
  }

  clientes = [
    {nome : "Lucas"},
    {nome : "Lucas"},
    {nome : "Lucas"},
    {nome : "Lucas"}
  ]
}
