import { Component } from '@angular/core';
import { BubbleSortComponent } from "./bubble-sort/bubble-sort.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [BubbleSortComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-algorithms';
}
