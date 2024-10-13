import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  setActive(event: Event) {
    const links = document.querySelectorAll('.sidebar ul li a');
    links.forEach(link => link.classList.remove('active'));
    const target = event.target as HTMLElement;

    if (target.tagName === 'A') {
      target.classList.add('active');
    } else {
      const closestLink = target.closest('a');
      if (closestLink) {
        closestLink.classList.add('active');
      }
    }
  }
}
