import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  itemsNumber: number = 0
  private itemsNumberSubject = new BehaviorSubject<number>(0)
  private clickSubject = new BehaviorSubject<boolean>(false)

  constructor() { }

  setClicked() {
    this.clickSubject.next(true)
  }

  getClickedObservable() {
    return this.clickSubject.asObservable()
  }

  addItem() {
    this.itemsNumber ++
    this.itemsNumberSubject.next(this.itemsNumber)
  }

  removeItem() {
    this.itemsNumber --
    if (this.itemsNumber < 0) {
      this.itemsNumber = 0
    }
    this.itemsNumberSubject.next(this.itemsNumber)
  }

  setItemsNumber(items: number) {
    this.itemsNumberSubject.next(items)
  }

  getItemsNumberObservable() {
    return this.itemsNumberSubject.asObservable()
  }

  displayNumberOfItems() {
    this.itemsNumberSubject.asObservable().subscribe(number => {
      console.log(number)
    })
  }
}
