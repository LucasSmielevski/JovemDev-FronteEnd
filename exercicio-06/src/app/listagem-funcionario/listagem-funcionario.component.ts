import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-listagem-funcionario',
  templateUrl: './listagem-funcionario.component.html',
  styleUrl: './listagem-funcionario.component.scss'
})
export class ListagemFuncionarioComponent {

  @Input() funcionarios : any[] = [];
  @Output() clienteEditar = new EventEmitter<any>();
  @Output() clienteExcluir = new EventEmitter<any>();

  editarCliente(funcionario : any){
    this.clienteEditar.emit(funcionario)
  }

  excluirCliente(funcionario : any){
    this.clienteExcluir.emit(funcionario)
  }

  constructor(private route : Router){
  }

  editarFuncionario(){
    this.route.navigate(["/funcionario/cadastro/id"])
  }
}
