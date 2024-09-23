import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from '../../services/usuario.service';
import { ActivatedRoute } from '@angular/router';
import { Usuario } from '../../models/usuario';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrl: './cadastro-usuario.component.scss',
})
export class CadastroUsuarioComponent {
  form!: FormGroup;
  posts: any;
  user?: Usuario;

  constructor(
    private formbuilder: FormBuilder,
    private usuarioService: UsuarioService,
    private activateRoute: ActivatedRoute
  ) {
    this.activateRoute.params.subscribe((params) => {
      this.user = usuarioService.findById(params['id']);
    });
  }

  ngOnInit(): void {
    this.buildForm();
    if (this.user) {
      this.form.patchValue(this.user);
    }
    // this.form.patchValue({name: "Lucas", estoque: 10})
  }

  buildForm() {
    console.log(this);

    this.form = this.formbuilder.group({
      nome: [null, Validators.required],
      email: [null, (Validators.required, Validators.email)],
    });
    // console.log(this.form.get('name')?.valueChanges);
    // this.form.get('name')?.valueChanges.subscribe((value) => {
    //   console.log(value);
    // });
  }

  cadastrar() {
    const usuarioCadastro = this.form.getRawValue();
    if (usuarioCadastro.id || usuarioCadastro.id == 0) {
      
    } else {
      if (this.form.valid) {
        this.usuarioService.addUsuario(this.form.getRawValue());
        this.form.reset();
      }
    }
  }
}
