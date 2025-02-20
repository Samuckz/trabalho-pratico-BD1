import { Component, OnInit } from '@angular/core';
import { MatriculaModel } from 'src/app/interfaces/matricula-model';
import { DisciplinaService } from 'src/app/services/disciplina.service';

@Component({
  selector: 'app-read-matriculas',
  templateUrl: './read-matriculas.component.html',
  styleUrls: ['./read-matriculas.component.css']
})
export class ReadMatriculasComponent implements OnInit {

  matriculas: MatriculaModel[] = []
  displayedColumns = ['matricula', 'nomeAluno', 'codigoDisciplina', 'nomeDisciplina']

  constructor(
    private service: DisciplinaService,
  ) { }

  ngOnInit(): void {
    this.service.listarMatriculas().subscribe((matriculas) => {
      this.matriculas = matriculas
      console.log(matriculas);

    });
  }

}
