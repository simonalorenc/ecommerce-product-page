import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  cartNumberSubject = new BehaviorSubject<number>(0)
  private onAddToCartClickSubject = new BehaviorSubject<void>(undefined)

  constructor() { }

  addToCart(number: number) {
    const newItemsNumber = this.cartNumberSubject.value + number
    this.cartNumberSubject.next(newItemsNumber)
    this.onAddToCartClickSubject.next()
  }

  getClickedObservable() {
    return this.onAddToCartClickSubject.asObservable()
  }

  getItemsNumber() {
    return this.cartNumberSubject.value
  }

  removeAllItems() {
    this.cartNumberSubject.next(0)
    console.log(this.cartNumberSubject.value)
  }
}
