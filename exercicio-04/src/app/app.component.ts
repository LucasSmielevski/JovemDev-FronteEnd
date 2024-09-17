import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'exercicio-04';

  clientes : any[] = [];
  clienteEditado : any = null;

  adicionarCliente( cliente: any){
    if(this.clienteEditado){
      const index = this.clientes.findIndex(c => c === this.clienteEditado);
      console.log(index)
      this.clientes[index] = cliente
      this.clienteEditado = null;
    }else{
      this.clientes.push(cliente)
    }
  }

  editarCliente( cliente : any){
    this.clienteEditado = cliente
  }

  excluirCliente(cliente: any){
    this.clientes = this.clientes.filter( c => c !== cliente);
  }

}
