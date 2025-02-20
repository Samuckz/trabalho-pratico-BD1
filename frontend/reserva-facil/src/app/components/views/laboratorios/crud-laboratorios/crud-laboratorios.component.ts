import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crud-laboratorios',
  templateUrl: './crud-laboratorios.component.html',
  styleUrls: ['./crud-laboratorios.component.css']
})
export class CrudLaboratoriosComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToAlunosCreate() {
    this.router.navigate(['/laboratorios/create'])
  }

  navigate(url: string){
    this.router.navigate([url]);
  }


}
