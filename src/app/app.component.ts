import { Component, ElementRef, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { PartOneComponent } from './part-one/part-one.component';
import { PartTwoComponent } from './part-two/part-two.component';
import { PartThreeComponent } from './part-three/part-three.component';
import { PartFourComponent } from './part-four/part-four.component';
import { PartFiveComponent } from './part-five/part-five.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,PartOneComponent,PartTwoComponent,PartThreeComponent,PartFourComponent,
    PartFiveComponent,NavbarComponent,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event) {
    let element = document.querySelector('.navbar') as HTMLElement;
    if(document.documentElement.scrollTop > 400) {
      console.log('yes')
      element.classList.add('fixed', 'animating');
    } else {
      element.classList.remove('fixed', 'animating')
    }
  }
}
