import { Component, OnInit } from '@angular/core';
import { AlunoModel } from 'src/app/interfaces/aluno-model';
import { AlunoService } from 'src/app/services/aluno-service';

@Component({
  selector: 'app-alunos-read',
  templateUrl: './alunos-read.component.html',
  styleUrls: ['./alunos-read.component.css']
})
export class AlunosReadComponent implements OnInit {

  alunos: AlunoModel[] = []
  displayedColumns = ['matricula', 'nome', 'dataNascimento', 'curso', 'action']

  constructor(
    private service: AlunoService,
  ) { }

  ngOnInit(): void {
    this.service.read().subscribe((alunos) => {
      this.alunos = alunos
      console.log(alunos);

    });
  }

}
