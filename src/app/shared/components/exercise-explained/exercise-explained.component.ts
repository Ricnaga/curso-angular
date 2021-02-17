import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-exercise-explained',
  templateUrl: './exercise-explained.component.html',
  styleUrls: ['./exercise-explained.component.scss']
})
export class ExerciseExplainedComponent {
  @Input() valor = 0;
  @Output() valorChange = new EventEmitter();

  incrementar() {
    this.valor++;
    this.valorChange.emit(this.valor);
  }

  decrementar() {
    this.valor--;
    this.valorChange.emit(this.valor);
  }
}
