import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../services/produto-service/product-service.service';
import { Product } from '../product.model';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {

  products: Product[] = []
  displayedColumns = ['id', 'name', 'price', 'action']

  constructor(
    private service: ProductServiceService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.service.read().subscribe((products) => {
      this.products = products
      console.log(products);
      
    });
  }

}
