import { Component} from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/paises.inteface';

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

  buscar(termino:string){
    this.hayError=false;
    this.paisService.buscarPorPais(termino).subscribe(res=>{
      this.paises=res;
    },(err)=>{
      console.log(err);
      this.hayError=true;
    })

  }
  sugerencias(termino:string){
    this.hayError=false;
  }

}
