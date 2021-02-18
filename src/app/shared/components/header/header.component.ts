import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class HeaderComponent implements OnInit {
  @Input() newTitle: string;

  title = 'Seja bem-vindo from header';

  constructor() { }

  ngOnInit(): void {
  }
}
