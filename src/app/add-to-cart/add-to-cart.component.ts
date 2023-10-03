import { Component, Input, OnInit, Output } from '@angular/core';
import { ItemsService } from '../items.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.scss']
})
export class AddToCartComponent implements OnInit {
  itemsNumber!: number
  @Input() counter!: number

  constructor(private itemsService: ItemsService) {
    this.itemsNumber = itemsService.itemsNumber
  }

  ngOnInit(): void {
    this.itemsService.getItemsNumberObservable().subscribe(number => {
      this.itemsNumber = number
    })
  }

  addItem(): void {
    this.itemsService.addItem()
  }

  removeItem(): void {
    this.itemsService.removeItem()
  }

  addToCart() {
    const dataToSend = this.itemsNumber
    this.itemsService.setItemsNumber(dataToSend)
    this.itemsService.setClicked()
  }
}
