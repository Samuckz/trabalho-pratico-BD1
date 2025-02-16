import { Component, OnInit } from '@angular/core';
import { DisciplinaModel } from 'src/app/interfaces/disciplina-model';
import { DisciplinaService } from 'src/app/services/disciplina.service';

@Component({
  selector: 'app-disciplinas-read',
  templateUrl: './disciplinas-read.component.html',
  styleUrls: ['./disciplinas-read.component.css']
})
export class DisciplinasReadComponent implements OnInit {

  disciplinas: DisciplinaModel[] = []
  displayedColumns = ['codigo', 'nome', 'curso', 'professor', 'action']

  constructor(
    private service: DisciplinaService,
  ) { }

  ngOnInit(): void {
    this.service.read().subscribe((disciplinas) => {
      this.disciplinas = disciplinas
      console.log(disciplinas);

    });
  }

}
