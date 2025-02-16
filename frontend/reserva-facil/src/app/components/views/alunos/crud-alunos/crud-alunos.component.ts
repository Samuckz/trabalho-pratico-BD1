import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crud-alunos',
  templateUrl: './crud-alunos.component.html',
  styleUrls: ['./crud-alunos.component.css']
})
export class CrudAlunosComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToAlunosCreate() {
    this.router.navigate(['/alunos/create'])
  }

}
