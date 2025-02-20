import { Component, OnInit } from '@angular/core';
import { DisciplinaModel, DisciplinaResponseDTO } from 'src/app/interfaces/disciplina-model';
import { DisciplinaService } from 'src/app/services/disciplina.service';

@Component({
  selector: 'app-disciplinas-read',
  templateUrl: './disciplinas-read.component.html',
  styleUrls: ['./disciplinas-read.component.css']
})
export class DisciplinasReadComponent implements OnInit {

  disciplinas: DisciplinaResponseDTO[] = []
  displayedColumns = ['codigo', 'nome', 'curso', 'professor', 'qtdAlunos', 'action']

  constructor(
    private service: DisciplinaService,
  ) { }

  ngOnInit(): void {
    this.service.readForDisciplinaTable().subscribe((disciplinas) => {
      this.disciplinas = disciplinas
      console.log(disciplinas);

    });
  }

}
