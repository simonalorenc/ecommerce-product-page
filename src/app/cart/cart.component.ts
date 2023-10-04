import { Component, Input, OnInit } from '@angular/core';
import { ItemsService } from '../items.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  showContent: boolean = false;
  clicked: boolean = false;
  itemsNumber: number = 0;

  constructor(private itemsService: ItemsService) {
    this.itemsService.getClickedObservable().subscribe(_ => {
        this.itemsNumber = this.itemsService.getItemsNumber()
    })
  }

  ngOnInit(): void {
    
  }

  toggleContent() {
    this.showContent = !this.showContent;
  }
}
