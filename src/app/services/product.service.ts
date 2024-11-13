import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  // Mock data
  private products: Product[] = [
    { id: 1, name: 'Google Pixel 7 Pro', price: 899, imageUrl: 'images/google-pixel-7-pro.png' },
    { id: 2, name: 'iPhone 15 Pro Max', price: 999, imageUrl: 'images/iphone-15-pro-max.png' },
    { id: 3, name: 'OnePlus 10 Pro', price: 599, imageUrl: 'images/oneplus-10-pro.png' },
    { id: 4, name: 'Apple iPhone 14', price: 799, imageUrl: 'images/iphone-14.png' },
  ];

  getProducts(): Product[] {
    return this.products;
  }
}
