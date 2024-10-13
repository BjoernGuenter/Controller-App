import { Component, OnInit, OnDestroy, Renderer2  } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit, OnDestroy {
  private clickListener: (() => void) | undefined;

  constructor(private renderer: Renderer2) { }

  ngOnInit() {
    this.clickListener = this.renderer.listen('document', 'click', (event: MouseEvent) => {
      const targetElement = event.target as HTMLElement;
      const sidebar = document.querySelector('.sidebar');
      const menuIcon = document.querySelector('.menu-icon');
      
      if (sidebar && menuIcon && !sidebar.contains(targetElement) && !menuIcon.contains(targetElement)) {
        sidebar.classList.remove('active');
      }
    });
  }

  ngOnDestroy() {
    if (this.clickListener) {
      this.clickListener();
    }
  }

  toggleSidebar(event: MouseEvent) {
    event.stopPropagation(); // Verhindert, dass der Klick weitergegeben wird
    const sidebar = document.querySelector('.sidebar');
    if (sidebar) {
      sidebar.classList.toggle('active');
    }
  }
}
