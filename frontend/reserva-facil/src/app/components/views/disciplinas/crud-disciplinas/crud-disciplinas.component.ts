import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crud-disciplinas',
  templateUrl: './crud-disciplinas.component.html',
  styleUrls: ['./crud-disciplinas.component.css']
})
export class CrudDisciplinasComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigate(url: string) {
    this.router.navigate([url]);
  }
}
