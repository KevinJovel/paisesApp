import { Component} from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/paises.inteface';
import { ClassField } from '@angular/compiler';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent {
  termino:string="";
  hayError:boolean=false;
  paises: Country[]=[];
  constructor( private paisService:PaisService ) { }

  buscar(){
    this.hayError=false;
    this.paisService.buscarPorPais(this.termino).subscribe(res=>{
      this.paises=res;
    },(err)=>{
      console.log(err);
      this.hayError=true;
    })

  }

}
