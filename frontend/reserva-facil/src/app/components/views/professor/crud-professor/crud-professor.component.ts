import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crud-professor',
  templateUrl: './crud-professor.component.html',
  styleUrls: ['./crud-professor.component.css']
})
export class CrudProfessorComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToProfessorCreate() {
    this.router.navigate(['/professores/create'])
  }

}
