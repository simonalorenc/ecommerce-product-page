import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnChanges{
  @Input() counter!: number

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
  }
}
