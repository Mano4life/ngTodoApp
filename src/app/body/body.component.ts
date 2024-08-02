import { NgClass } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [NgClass],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {
  @Input() todos!: any[];
  @Output() removeTodoEmitter = new EventEmitter<number>();
  @Output() checkTodoEmitter = new EventEmitter<number>();

  removeTodo(index: number) {
    this.removeTodoEmitter.emit(index);
  }

  checkTodo(index: number) {
    this.checkTodoEmitter.emit(index);
  }
}
