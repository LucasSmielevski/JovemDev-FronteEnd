import { ActivatedRoute } from '@angular/router';
import { Cliente } from './../models/cliente';
import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-formulario-cliente',
  templateUrl: './formulario-cliente.component.html',
  styleUrl: './formulario-cliente.component.scss'
})
export class FormularioClienteComponent implements OnChanges{

  @Output() adicionarCliente = new EventEmitter<any>();
  @Input() clienteEdicao ?: Cliente;

  id = 0
  valueNome ?: string;
  valueIdade ?: number;

  constructor(private route : ActivatedRoute){
    this.route.params.subscribe((valores) => {
      console.log(valores);
      const idCliente = valores["id"];
      console.log(idCliente)
    })
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(this.clienteEdicao){
      this.valueNome = this.clienteEdicao?.nome
      this.valueIdade = this.clienteEdicao?.idade
    }
  }

  cadastrarCliente(){
    if(this.valueNome && this.valueIdade){
      this.adicionarCliente.emit({nome : this.valueNome, idade : this.valueIdade});
      this.valueNome = ""
      this.valueIdade = undefined
    }else{
      alert("Campos não podem ser vazios")
    }
  }
}
