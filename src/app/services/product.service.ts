import { Injectable } from "@angular/core";
import { data } from "../MockData";
import { Product } from "../Product";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
@Injectable()
export class ProductService {
  products = data;
  api = "https://5e7b1abd0e04630016332ad7.mockapi.io";
  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.api}/product`);
  }
  getProduct(id): Observable<Product> {
    console.log(id);
    return this.http.get<Product>(`${this.api}/product/${id}`);
  }
  removeProduct(id) :Observable<Product> {
    return this.http.delete<Product>(`${this.api}/product/${id}`)
  }
  addProduct(product) {
    console.log(product);

    let newObj = { id: 6, ...product };
    console.log(newObj);

    this.products.push(newObj);
    console.log(this.products);
  }
  editProduct(product): Observable<Product> {
    return this.http.put<Product>(`${this.api}/product/${product.id}`, product);
  }
  addCartProduct(product): Observable<Product> {
    return this.http.post<Product>(`${this.api}/product`, product);
    // let newObj = { id: 6, ...product };
    // this.products.push(newObj);
  }

  deleteProduct(id) : Observable<any>{
   
    return this.http.detele(`${this.api}/product/${id}`);
  }
}
