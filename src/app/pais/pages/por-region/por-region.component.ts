import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/paises.inteface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
    `
    button{
      margin-right:5px;
    }
    `
  ]
})
export class PorRegionComponent {
  regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  paises: Country[] = [];
  hayError: boolean = false;
  regionActiva: string = "";
  constructor(private paisService: PaisService) { }

  activarRegion(region: string) {
    if (this.regionActiva === region) { return }
    this.regionActiva = region;

    this.paisService.buscarPorRegion(region).subscribe(res => {
      this.paises = res;
      // console.log(res);
    });
  }
}
