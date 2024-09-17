import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-formulario-cliente',
  templateUrl: './formulario-cliente.component.html',
  styleUrl: './formulario-cliente.component.scss'
})
export class FormularioClienteComponent {

  valueNome = "";
  valueIdade = "";

  @Output() adicionarCliente = new EventEmitter<any>();

  cadastrarCliente(){
    let cliente = { nome : this.valueNome , idade : this.valueIdade}
    this.adicionarCliente.emit(cliente);
    this.valueNome = ""
    this.valueIdade = ""
  }
}
