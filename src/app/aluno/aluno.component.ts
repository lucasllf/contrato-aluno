import { Component, OnInit } from '@angular/core';
import { AlunoService } from '../services/aluno.service';
import { Aluno } from '../domain/aluno';

@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.css']
})
export class AlunoComponent implements OnInit {

  alunos : Aluno[]; //armazena os alunos no servidor

  constructor(private alunoService : AlunoService) { 
    this.getAlunos();
   }

  ngOnInit() {
  }

  getAlunos(){
    this.alunoService.getAlunos()
    .subscribe(response => {
      //Recebe JSON
      this.alunos = response["data"];
      console.log(response);
    })

  }

}
