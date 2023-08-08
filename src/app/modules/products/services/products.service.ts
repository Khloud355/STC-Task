import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import {Category, Product} from '../models/product.model'
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductserService {
  api_url = environment.API_URL;
  product : BehaviorSubject<any> = new BehaviorSubject('')
  constructor(private http: HttpClient) { }
  getProducts(): Observable<Product[]>{
 return this.http.get<Product[]>(this.api_url + 'products')
  }
  deleteProducts(id:number){
    return this.http.delete(this.api_url + `products/${id}`)
  }
  Addproduct(data:Product[]): Observable<Product[]>{
    return this.http.post<Product[]>(this.api_url + 'products',data)
  }
  updateProduct(data:Product[],id:number): Observable<Product[]>{
    return this.http.put<Product[]>(this.api_url+`products/${id}`,data)
  }
  getAllCategories(): Observable<Category[]>{
    return this.http.get<Category[]>(this.api_url +'products/categories')
  }
  getProductsOfCategory(cate_name:string): Observable<Product[]>{
    return this.http.get<Product[]>(this.api_url+ `products/category/${cate_name}`)

  }
  singleProduct(id:number): Observable<Product[]>{
    return this.http.get<Product[]>(this.api_url+`products/${id}`)
  }

}
