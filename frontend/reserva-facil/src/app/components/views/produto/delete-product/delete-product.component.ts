import { Component, Inject, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ProductServiceService } from '../services/produto-service/product-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SnackBarService } from '../services/snackBar-service/snack-bar.service';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent implements OnInit {

  product!: Product;

  constructor(
    private service: ProductServiceService,
    private router: Router,
    private route: ActivatedRoute,
    private snackService: SnackBarService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') as string
    
    this.service.readyById(id).subscribe((product) => {
      this.product = product;
    })
  }

  delete(): void{
    const id = this.route.snapshot.paramMap.get('id') as string
    this.service.delete(id).subscribe(() => {
      this.snackService.createSnackBar("Produto deletado com sucesso!")
      this.navigateProductsPage()
    })
  }

  navigateProductsPage(): void{
    this.router.navigate(['/products'])
  }

}
