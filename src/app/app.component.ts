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

  addNewNote(note:string) {
    console.log(note)
  }
}
