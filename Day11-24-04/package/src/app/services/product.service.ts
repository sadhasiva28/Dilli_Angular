import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  getproducts():Observable<any>{
    return this.http.get("http://localhost:4500/products")
  }
  getdetails(id:number):Observable<any>{
    return this.http.get("http://localhost:4500/details/"+id)
  }
  getproductsById(id:number):Observable<any>{
    return this.http.get("http://localhost:4500/products/"+id)
}
}
