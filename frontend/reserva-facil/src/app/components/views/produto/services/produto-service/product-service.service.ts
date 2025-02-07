import { Product } from '../../product.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  private readonly API = "http://localhost:3001/products"

  constructor(
    private http: HttpClient
  ) { }

  create(product: Product): Observable<Product>{
    return this.http.post<Product>(this.API, product);
  }

  read(): Observable<Product[]>{
    return this.http.get<Product[]>(this.API)
  }

  readyById(id: string): Observable<Product>{
    const urlConsultada = `${this.API}/${id}`
    return this.http.get<Product>(urlConsultada).pipe(
      map(obj => obj)
    )
  }

  update(product: Product): Observable<Product>{
    const urlConsultada = `${this.API}/${product.id}`
    return this.http.put<Product>(urlConsultada, product)
  }

  delete(id: string): Observable<Product>{
    const urlConsultada = `${this.API}/${id}`
    return this.http.delete<Product>(urlConsultada)
  }

}
