import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/paises.inteface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiURL: string = ' https://restcountries.eu/rest/v2';
  get httpParams() {
    return new HttpParams().set('fields', 'name;capital;alpha2Code;flag;population');
  }
  constructor(private http: HttpClient) { }

  buscarPorPais(termino: string): Observable<Country[]> {
    const url = `${this.apiURL}/name/${termino}`;
    return this.http.get<Country[]>(url, { params: this.httpParams });
  }
  buscarPorCapital(termino: string): Observable<Country[]> {
    const url = `${this.apiURL}/capital/${termino}`;
    return this.http.get<Country[]>(url, { params: this.httpParams });
  }
  RecuperarPais(id: string): Observable<Country> {
    const url = `${this.apiURL}/alpha/${id}`;
    return this.http.get<Country>(url);
  }
  buscarPorRegion(id: string): Observable<Country[]> {
    const url = `${this.apiURL}/region/${id}`;
    return this.http.get<Country[]>(url, { params: this.httpParams });
  }
}
