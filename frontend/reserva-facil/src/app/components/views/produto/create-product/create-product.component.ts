import { SnackBarService } from './../services/snackBar-service/snack-bar.service';
import { Product } from './../product.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductServiceService } from 'src/app/components/views/produto/services/produto-service/product-service.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  product: Product = {
    name: '',
    price: null
  }

  constructor(
    private service: ProductServiceService,
    private router: Router,
    private snackService: SnackBarService
  ) { }

  ngOnInit(): void {
    
  }

  salvar(): void{
    this.service.create(this.product).subscribe(
      () => {
        this.snackService.createSnackBar("Produto cadastrado com sucesso!")
        this.navigateProductsPage() 
      }
    )
    
  }

  navigateProductsPage(): void{
    this.router.navigate(['/products'])
  }


}
