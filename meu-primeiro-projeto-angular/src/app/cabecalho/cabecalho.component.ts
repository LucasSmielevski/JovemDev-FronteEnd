import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrl: './cabecalho.component.scss'
})
export class CabecalhoComponent {
   @Input() tituloDoPai ?: string;
  valorInput = "";

  // @Output() trocarTituloEvent = new EventEmitter<string>();

  // trocarTitulo(){
  //   this.trocarTituloEvent.emit("Novo Titulo")
  // }

  @Output() pesquisaEvent = new EventEmitter<string>();



  printarCampo(){
    this.pesquisaEvent.emit(this.valorInput)
  }

  meuLink = "google.com"

}
