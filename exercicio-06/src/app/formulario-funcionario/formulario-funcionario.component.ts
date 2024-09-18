import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { Funcionario } from '../models/funcionario';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-formulario-funcionario',
  templateUrl: './formulario-funcionario.component.html',
  styleUrl: './formulario-funcionario.component.scss'
})
export class FormularioFuncionarioComponent {
  @Output() adicionarFuncionario = new EventEmitter<any>();
  @Input() funcionarioEdicao ?: Funcionario;

  id = 0
  valueNome ?: string;
  valueEmail ?: string;

  constructor(private route : ActivatedRoute){
    this.route.params.subscribe((valores) => {
      console.log(valores);
      const idCliente = valores["id"];
      console.log(idCliente)
    })
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(this.funcionarioEdicao){
      this.valueNome = this.funcionarioEdicao?.nome
      this.valueEmail = this.funcionarioEdicao.email
    }
  }

  cadastrarFuncionario(){
    if(this.valueNome && this.valueEmail){
      this.adicionarFuncionario.emit({nome : this.valueNome, idade : this.valueEmail});
      this.valueNome = ""
      this.valueEmail = ""
    }else{
      alert("Campos não podem ser vazios")
    }
  }
}
