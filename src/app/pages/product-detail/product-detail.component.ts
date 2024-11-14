import { Component } from '@angular/core';
import { Product } from '../../models/product.model';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { routes } from '../../app.routes';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss'
})
export class ProductDetailComponent {
  product!: Product;
  quantity: number = 1;
  stars: number[] = [1, 1, 1, 1, 0.5];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    const productId = this.route.snapshot.paramMap.get('id');
    if (productId) {
      const product = this.productService.getProductById(productId);
      if (product) {
        this.product = product;
      } else {
        this.router.navigate(['/not-found']);
      }
    }
  }

  addToCart(): void {
    this.productService.addToCart(this.product, this.quantity);
    alert('Product added to cart!');
  }
}
