import { Component, OnInit } from "@angular/core";
import { Product } from "../Product";
import { ProductService } from "../services/product.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-product-manager",
  templateUrl: "./product-manager.component.html",
  styleUrls: ["./product-manager.component.css"]
})
export class ProductManagerComponent implements OnInit {
  product: Product[];
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router : Router
  ) {}

  ngOnInit() {
    this.getProducts();
  }
  getProducts() {
    this.productService
      .getProducts()
      .subscribe(response => (this.products = response));
  }
  deleteProduct(id) {
    this.productService.deleteProduct(id).subscribe(data => this.router.navigateByUrl('/manager')
      
    )
  
  }
}
