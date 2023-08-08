import { Component, OnInit } from '@angular/core';
import { Category, Product } from '../../models/product.model';
import { ProductserService } from '../../services/products.service';
@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.scss'],
})
export class UserViewComponent implements OnInit {
  selectedCategory?: string;
  selectedValue?: string;
  products: Product[] = []
  constructor(
    private productService: ProductserService,
  ) { }
  allCategories: Category[] = []
  ngOnInit(): void {
    this.getCategories();
    this.getAllProducts();
  }
  getCategories() {
    this.productService.getAllCategories().subscribe(res => {
      this.allCategories = res;
    });
  }
  getProductsOfCategory(selected: string) {
    this.productService.getProductsOfCategory(selected).subscribe(res => {
      this.products = res;
    });
  }

  getAllProducts() {
    this.productService.getProducts().subscribe(res => {
      this.products = res;
    });
  }

  onSubmit(value: string ='') {
    this.selectedValue = value;
    this.getProductsOfCategory(this.selectedValue);
    if (this.selectedValue == '') {
      this.getAllProducts();
    }
  }
}
