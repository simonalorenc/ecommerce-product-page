import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() counter!: number
  sneakers!: Product 

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.sneakers = this.productService.sneakers
  }
}
