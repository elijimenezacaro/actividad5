import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BlogComponent } from './components/blog/blog.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, BlogComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'actividad5';
}
