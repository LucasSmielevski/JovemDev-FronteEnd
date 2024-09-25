import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro-produto',
  templateUrl: './cadastro-produto.component.html',
  styleUrl: './cadastro-produto.component.scss',
})
export class CadastroProdutoComponent {
  valueNome = '';
  valuePreco = '';

  form!: FormGroup;
  posts: any;

  constructor(
    private formbuilder: FormBuilder
    // private produtoService : ProdutoSerivce
  ) {}

  ngOnInit(): void {
    this.buildForm();
    // this.form.patchValue({name: "Lucas", estoque: 10})
  }

  buildForm() {
    console.log(this);

    this.form = this.formbuilder.group({
      name: [null, Validators.required],
      estoque: [0, (Validators.required, this.validacaoEstoque.bind(this))],
    });
    console.log(this.form.get('name')?.valueChanges);
    this.form.get('name')?.valueChanges.subscribe((value) => {
      console.log(value);
    });
  }

  validacaoEstoque(teste: FormGroup) {
    console.log(teste)
    if (teste.value <= 0) {
      return { estoqueMinimo: true };
    }
    return null;
  }

  cadastrar() {
    if (this.form.valid) {
      console.log(this.form.getRawValue());
      this.form.reset();
      return;
    }
  }
}
