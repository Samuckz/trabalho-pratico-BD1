import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DisciplinaResponseDTO } from 'src/app/interfaces/disciplina-model';
import { DisciplinaService } from 'src/app/services/disciplina.service';

@Component({
  selector: 'app-disciplinas-cheias',
  templateUrl: './disciplinas-cheias.component.html',
  styleUrls: ['./disciplinas-cheias.component.css']
})
export class DisciplinasCheiasComponent implements OnInit {

  disciplinas: DisciplinaResponseDTO[] = []
    displayedColumns = ['codigo', 'nome', 'curso', 'professor', 'qtdAlunos', 'action']
  
    constructor(
      private service: DisciplinaService,
      private router: Router
    ) { }
  
    ngOnInit(): void {
      this.service.listarDisciplinasCheias().subscribe((disciplinas) => {
        this.disciplinas = disciplinas
        console.log(disciplinas);
  
      });
    }

    navigate(url: string){
      this.router.navigate([url]);
    }

}
