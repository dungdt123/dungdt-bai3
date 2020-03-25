import { Injectable } from "@angular/core";
import { data } from "../MockData";
import { Product } from "../Product";

@Injectable()
export class ProductService {
  products = data;
  constructor() {}

  getProducts() {
    console.log("Hello");
    return this.products;
  }
  removeProduct(id) {
    return (this.products = this.products.filter(product => product.id != id));
  }
  getProduct(id) {
    console.log(id);
    return this.products.find(product => product.id == id);
  }
  addProduct(product) {
     console.log(product);

    let newObj = {id: 6,...product};
    console.log(newObj);
    
    this.products.push(newObj);
    console.log(this.products)
  }
  editProduct(){

  }
  addCartProduct(){
    
  }
}
