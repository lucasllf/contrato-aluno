import { Component, OnInit } from '@angular/core';
import { ContratoService } from '../services/contrato.service';
import { Contrato } from '../domain/contrato';

@Component({
  selector: 'app-contrato',
  templateUrl: './contrato.component.html',
  styleUrls: ['./contrato.component.css']
})
export class ContratoComponent implements OnInit {

  contratos : Contrato[]; // armazena os contratos do servidor remoto

  constructor(private contratoService : ContratoService) {
    this.getContratos();
   }

  ngOnInit() {
  }

  getContratos(){
    this.contratoService.getContratos()
      .subscribe(response => {
        // Recebe JSON
        this.contratos = response;
        console.log(response);
      })
  }

}
