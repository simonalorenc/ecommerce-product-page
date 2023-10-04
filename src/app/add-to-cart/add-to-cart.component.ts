import { Component, Input, OnInit, Output } from '@angular/core';
import { ItemsService } from '../items.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.scss']
})
export class AddToCartComponent implements OnInit {
  itemsNumber: number = 0
  @Input() counter!: number

  constructor(private itemsService: ItemsService) {
  }

  ngOnInit(): void {
  }

  addItem(): void {
    this.itemsNumber++
  }

  removeItem(): void {
    this.itemsNumber--
  }

  addToCart() {
    this.itemsService.addToCart(this.itemsNumber)
    this.itemsNumber = 0
  }
}
