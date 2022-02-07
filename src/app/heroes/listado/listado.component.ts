import { splitClasses } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent implements OnInit {

  heroes: string []=['Goku','Vegeta','Piccolo','Gohan'];
  heroeBorrado:string='';
  
  constructor() { 

    console.log('constructor');
  }

   borrarHeroe(){

   console.log('borrando...');

   const heroeBorrado = this.heroes.shift() || '';
   this.heroeBorrado = heroeBorrado;
   }

  ngOnInit(): void {
    console.log('ngOnInit');

  }

}
