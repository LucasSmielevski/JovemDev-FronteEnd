import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Funcionario } from '../models/funcionario';

@Component({
  selector: 'app-listagem-funcionario',
  templateUrl: './listagem-funcionario.component.html',
  styleUrl: './listagem-funcionario.component.scss'
})
export class ListagemFuncionarioComponent {

  @Input() funcionarios : any[] = [];
  @Output() clienteEditar = new EventEmitter<any>();
  @Output() clienteExcluir = new EventEmitter<any>();

  editarCliente(funcionario : Funcionario){
    this.route.navigateByUrl(`funcionario/cadastro/${funcionario.id}`)
    this.clienteEditar.emit(funcionario)
  }

  excluirCliente(funcionario : any){
    this.clienteExcluir.emit(funcionario)
  }

  constructor(private route : Router){
  }

  editarFuncionario(){
    this.route.navigate(["/funcionario/cadastro/2"])
  }
}
