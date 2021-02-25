import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/paises.inteface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {
  pais:Country;

  constructor(private activatedRoute:ActivatedRoute, private paisService:PaisService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      params=>{
        let id= params.id;
        this.paisService.RecuperarPais(id).subscribe(res=>{
           this.pais = res;
        })
      }
    )

  }

}
