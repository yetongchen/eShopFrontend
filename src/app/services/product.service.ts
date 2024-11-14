import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  // Mock data
  private products: Product[] = [
    {
      id: 1,
      name: 'Google Pixel 7 Pro',
      price: 899,
      description: 'The latest Google flagship with powerful AI capabilities.',
      longDescription: 'Google Pixel 7 Pro is equipped with advanced AI features and a top-tier camera system, making it ideal for capturing stunning photos and videos. With a sleek design and powerful processor, it provides a seamless experience for both work and play.',
      imageUrl: 'images/google-pixel-7-pro.png'
    },
    {
      id: 2,
      name: 'iPhone 15 Pro Max',
      price: 999,
      description: 'Apple\'s latest flagship with cutting-edge performance and cameras.',
      longDescription: 'The iPhone 15 Pro Max is designed for those who demand the best in technology and design. Featuring a powerful A-series chip, improved cameras, and a durable build, it delivers exceptional performance and longevity for both photography and everyday tasks.',
      imageUrl: 'images/iphone-15-pro-max.png'
    },
    {
      id: 3,
      name: 'OnePlus 10 Pro',
      price: 599,
      description: 'OnePlus flagship with fast performance and high-end features.',
      longDescription: 'The OnePlus 10 Pro combines high performance with excellent display quality and battery life. With 5G support, a smooth user interface, and fast charging capabilities, it’s designed for users who want speed and convenience at an affordable price.',
      imageUrl: 'images/oneplus-10-pro.png'
    },
    {
      id: 4,
      name: 'Apple iPhone 14',
      price: 799,
      description: 'A powerful and affordable Apple smartphone for everyone.',
      longDescription: 'The Apple iPhone 14 is the perfect balance of performance and price, featuring a high-quality camera, reliable battery life, and the intuitive iOS experience. It’s an ideal choice for users looking for an excellent smartphone without the Pro price tag.',
      imageUrl: 'images/iphone-14.png'
    }
  ];

  getProducts(): Product[] {
    return this.products;
  }

  getProductById(id: string): Product | undefined {
    return this.products.find(p => p.id.toString() === id.trim());
  }

  addToCart(product: Product, quantity: number): void {
    console.log(`Added ${quantity} of ${product.name} to the cart`);
  }
}
