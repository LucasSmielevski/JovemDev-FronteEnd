import { Component, OnInit } from '@angular/core';
import { ServicesService } from './main/services.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{

  constructor(private service : ServicesService){}

  title = 'http-example';

  ngOnInit(): void {
    this.service.buscarPosts().subscribe(valores => {
      console.log(valores)
    });
    this.service.buscarPostPorId(1).subscribe(valores => {
      console.log("buscando por id:" , valores)
    })
    this.service.buscarPostPorQueryParam(1).subscribe(valores => {
      console.log("buscando por query Param:" , valores)
    })
  }
}
