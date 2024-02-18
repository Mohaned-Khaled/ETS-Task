import { Component } from '@angular/core';
import { NavbarComponent } from '../components/navbar/navbar.component';

@Component({
  selector: 'app-part-one',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './part-one.component.html',
  styleUrl: './part-one.component.scss'
})
export class PartOneComponent {

}
