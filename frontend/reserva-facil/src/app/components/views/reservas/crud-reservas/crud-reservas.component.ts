import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crud-reservas',
  templateUrl: './crud-reservas.component.html',
  styleUrls: ['./crud-reservas.component.css'],
})
export class CrudReservasComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToReservasCreate() {
    this.router.navigate(['/reservas/create'])
  }

}
