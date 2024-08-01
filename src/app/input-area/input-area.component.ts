import { Component , Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-area',
  standalone: true,
  imports: [],
  templateUrl: './input-area.component.html',
  styleUrl: './input-area.component.css'
})
export class InputAreaComponent {
  @Output() noteAdd = new EventEmitter<string>();
  addNewNote(note:string) {
    this.noteAdd.emit(note)
  }
}
