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
  itemsNumber!: number;

  constructor(private itemsService: ItemsService) {
    this.itemsService.getClickedObservable().subscribe(clicked => {
      if (clicked) {
        this.itemsService.getItemsNumberObservable().subscribe(number => {
          this.itemsNumber = number
        })
        this.clicked = true
      }
    })
  }

  ngOnInit(): void {
    
  }

  toggleContent() {
    this.showContent = !this.showContent;
  }
}
