import { Component } from '@angular/core';
import { InputAreaComponent } from './input-area/input-area.component';
import { BodyComponent } from './body/body.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [InputAreaComponent, BodyComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'todo';
  checked = false;
  todos: any[] = [{
    note: 'add your note',
    checked: false
  }];


  addNewNote(note:string) {
    let newNote = {note: note, checked: false}
    this.todos.push(newNote)
  }

  removeTodo(index: number) {
    this.todos.splice(index, 1);
  }

  checkTodo(index: number) {
    this.todos[index].checked = !this.todos[index].checked
  }

}
