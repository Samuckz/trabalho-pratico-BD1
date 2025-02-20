import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crud-matriculas',
  templateUrl: './crud-matriculas.component.html',
  styleUrls: ['./crud-matriculas.component.css']
})
export class CrudMatriculasComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToReservasCreate() {
    this.router.navigate(['/reservas/create'])
  }

}
