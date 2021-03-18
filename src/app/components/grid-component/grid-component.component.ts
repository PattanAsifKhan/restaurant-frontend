import { Component, OnInit } from '@angular/core';
import { Item } from '../../model/item';

@Component({
  selector: 'app-grid-component',
  templateUrl: './grid-component.component.html',
  styleUrls: ['./grid-component.component.scss'],
})
export class GridComponentComponent implements OnInit {
  items!: Item[];
  itemId: number = 0;
  name: string = '';
  price: number = 0;
  quantity: number = 0;

  constructor() {}

  ngOnInit(): void {
    this.items = [];
  }
  addItem() {
    if (this.name != '' && this.quantity > 0) {
      this.items.push({
        itemId: this.items.length + 1,
        name: this.name,
        price: Math.ceil(this.quantity * Math.random() * 10),
        quantity: this.quantity,
      });
      this.itemId = 0;
      this.name = '';
      this.price = 0;
      this.quantity = 0;
    }
  }
}
