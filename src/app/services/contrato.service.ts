import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Contrato } from '../domain/contrato';

@Injectable()
export class ContratoService {

  constructor(private http : HttpClient) { }

  getContratos() : Observable<Contrato[]>{

    return this.http.get<Contrato[]>(`https://dados.ifrn.edu.br/dataset/15b94299-42f0-4018-ae04-f7bb2efaa86e/resource/97caced8-e6a3-4390-b9f4-7f54a6a8fe4b/download/dados_extraidos_recursos_contratos.json`);
  }

}
