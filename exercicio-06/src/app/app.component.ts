import { Component } from '@angular/core';
import { Funcionario } from './models/funcionario';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'exercicio-06';


  funcionarios : Funcionario[] = [];
  funcionarioEditado : any = null;

  adicionarCliente( cliente: any){
    if(this.funcionarioEditado){
      const index = this.funcionarios.findIndex(f => f === this.funcionarioEditado);
      this.funcionarios[index] = cliente
      this.funcionarioEditado = null;
    }else{
      this.funcionarios.push(cliente)
    }
  }

  editarCliente( cliente : any){
    this.funcionarioEditado = cliente
  }

  excluirCliente(cliente: any){
    this.funcionarios = this.funcionarios.filter( f => f !== cliente);
  }
}
