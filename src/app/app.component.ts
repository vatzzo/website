import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @HostListener('window:scroll', ['$event'])

  onScollChangeNav() {
    let nav = document.querySelector('nav');
    if (window.pageYOffset > nav.clientHeight) {
      nav.classList.add('nav-active');
    } else {
      nav.classList.remove('nav-active');
    }
  }

  showNavOptions() {
    let optionsActive = document.querySelector('.for-mobile nav');
    optionsActive.classList.toggle('nav-active');
  }

  scrollToPosition($element): void {
    let tak = document.querySelector('.nav-mobile');
    tak.classList.remove('nav-active');
    $element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }



}