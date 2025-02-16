import { Component, OnInit } from '@angular/core';
import { ProfessorModel } from 'src/app/interfaces/professor-model';
import { ProfessorService } from 'src/app/services/professor-service';

@Component({
  selector: 'app-professor-read',
  templateUrl: './professor-read.component.html',
  styleUrls: ['./professor-read.component.css']
})
export class ProfessorReadComponent implements OnInit {

  professores: ProfessorModel[] = []
  displayedColumns = ['id', 'name', 'especialidade', 'dataNascimento', 'action']

  constructor(
    private service: ProfessorService,
  ) { }

  ngOnInit(): void {
    this.service.read().subscribe((professores) => {
      this.professores = professores
      console.log(professores);

    });
  }

}
