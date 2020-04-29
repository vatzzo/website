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
    let optionsActive = document.querySelector('.nav-bar-active-container');
    optionsActive.classList.toggle('nav-bar-active-show');
  }

  scrollToPosition($element): void {
    let tak = document.querySelector('.nav-bar-active-show');
    if(tak) {
      tak.classList.remove('nav-bar-active-show');
    }
    $element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }
}