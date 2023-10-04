import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  sneakers: Product = {
    title: 'Fall Limited Sneakers',
    description: `These low-profile sneakers are your perfect casual wear companion.
    Featuring a durable rubber outer sole, they’ll withstand everything the
    weather can offer`,
    salePrice: '$125.00',
    discount: '50%',
    regularPrice: '$250.00',
    photos: {
        mainPhoto: '/assets/images/image-product-1.jpg', 
        others: ['/assets/images/image-product-1.jpg',
      '/assets/images/image-product-2.jpg', '/assets/images/image-product-3.jpg', '/assets/images/image-product-4.jpg']
    }
  }
  constructor() { }
}
