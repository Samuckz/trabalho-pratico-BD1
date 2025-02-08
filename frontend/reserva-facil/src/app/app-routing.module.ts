import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/views/home/home.component';
import { CrudProdutoComponent } from './components/views/produto/crud-produto/crud-produto.component';
import { CreateProductComponent } from './components/views/produto/create-product/create-product.component';
import { ProductUpdateComponent } from './components/views/produto/product-update/product-update.component';
import { DeleteProductComponent } from './components/views/produto/delete-product/delete-product.component';
import { CrudReservasComponent } from './components/views/reservas/crud-reservas/crud-reservas.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "products",
    component: CrudProdutoComponent
  },
  {
    path: "products/create",
    component: CreateProductComponent
  },
  {
    path: "products/update/:id",
    component: ProductUpdateComponent
  },
  {
    path: "products/delete/:id",
    component: DeleteProductComponent
  },
  {
    path: "reservas",
    component: CrudReservasComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
