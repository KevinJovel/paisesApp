import { Placeholder } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-input-buscar',
  templateUrl: './input-buscar.component.html'
})
export class InputBuscarComponent implements OnInit {
  termino: string="";
  @Input('placeholder') placeholder;
  @Output() onEnter: EventEmitter<String>= new EventEmitter();
  @Output() onDebounce: EventEmitter<String>= new EventEmitter();

  debouncer: Subject<String>= new Subject();
  constructor() { }

  ngOnInit(): void {
    this.debouncer
    .pipe(
      debounceTime( 300 )
    )
    .subscribe(valor =>{
      this.onDebounce.emit(valor);
    })
  }
  buscar(){
    this.onEnter.emit(this.termino);
  }
  teclaPresionada( event: any ){
      this.debouncer.next(this.termino);
  }

}
