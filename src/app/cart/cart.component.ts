import { Component, Input, OnInit } from '@angular/core';
import { ItemsService } from '../items.service';
import { ProductService } from '../product.service';
import { Product } from '../product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  showContent: boolean = false;
  clicked: boolean = false;
  itemsNumber: number = 0;
  sneakers!: Product
  sum: number = 0

  constructor(private itemsService: ItemsService, private productService: ProductService) {
    this.itemsService.getClickedObservable().subscribe(_ => {
        this.itemsNumber = this.itemsService.getItemsNumber()
        this.sneakers = this.productService.sneakers
        const price = Number(this.sneakers.salePrice.slice(1))
        this.sum = price * this.itemsNumber
    })
  }

  ngOnInit(): void {
    
  }

  toggleContent() {
    this.showContent = !this.showContent;
    
  }
}
