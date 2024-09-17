import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-lista-clientes',
  templateUrl: './lista-clientes.component.html',
  styleUrl: './lista-clientes.component.scss'
})
export class ListaClientesComponent {
  @Input() clientes : any[] = [];
  @Output() clienteEditar = new EventEmitter<any>();
  @Output() clienteExcluir = new EventEmitter<any>();

  editarCliente(cliente : any){
    this.clienteEditar.emit(cliente)
  }

  excluirCliente(cliente : any){
    this.clienteExcluir.emit(cliente)
  }

}
