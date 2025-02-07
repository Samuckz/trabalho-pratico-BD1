import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/templates/header/header.component';
import { FooterComponent } from './components/templates/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NavComponent } from './components/templates/nav/nav.component';
import { HomeComponent } from './components/views/home/home.component';
import { CreateProductComponent } from './components/views/produto/create-product/create-product.component'
import { AppMaterialModule } from './shared/app-material/app-material.module';
import { CrudProdutoComponent } from './components/views/produto/crud-produto/crud-produto.component'
import { FormsModule } from '@angular/forms';
import { ProductReadComponent } from './components/views/produto/product-read/product-read.component';
import { ProductRead2Component } from './components/views/produto/product-read2/product-read2.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { ProductUpdateComponent } from './components/views/produto/product-update/product-update.component';
import { DeleteProductComponent } from './components/views/produto/delete-product/delete-product.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    CreateProductComponent,
    CrudProdutoComponent,
    ProductReadComponent,
    ProductRead2Component,
    ProductUpdateComponent,
    DeleteProductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppMaterialModule,
    FormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
