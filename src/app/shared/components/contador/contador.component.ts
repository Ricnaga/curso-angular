import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.scss']
})
export class ContadorComponent implements OnInit {
  @Input() initialValue: number;
  @Output() addModifiedValue = new EventEmitter();
  @Output() subModifiedValue = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  addOnClick(initialValue) {
    this.addModifiedValue.emit(initialValue);
  }

  subOnClick(initialValue) {
    this.subModifiedValue.emit(initialValue);
  }

}
