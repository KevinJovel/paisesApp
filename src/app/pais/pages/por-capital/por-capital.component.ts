import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/paises.inteface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent implements OnInit {
  termino:string="";
  hayError:boolean=false;
  paises: Country[]=[];
  constructor(private paisService:PaisService) { }

  ngOnInit(): void {
  }
  buscar(termino:string){
    this.hayError=false;
    this.paisService.buscarPorCapital(termino).subscribe(res=>{
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
