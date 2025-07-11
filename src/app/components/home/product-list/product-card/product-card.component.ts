// src/app/home/product-list/product-card/product-card.component.ts
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../../../models/product.interface';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent {
  @Input() product!: Product;
  imageBaseUrl = environment.imageBaseUrl;

  get finalPrice(): number {
    return this.product.price * (1 - this.product.promotion_percentage / 100);
  }
}
