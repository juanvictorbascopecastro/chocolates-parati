import { Component } from '@angular/core';

@Component({
  selector: 'landing-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css',
})
export class NavBarComponent {
  public isDark: boolean = false;

  public showMenuPlanes: boolean = false;
  public showMobileMenu: boolean = false;

  scrollToSection(sectionId: string): void {
    this.showMobileMenu = false;
    const section = document.getElementById(sectionId);
    const sectionOffsetTop = section!.offsetTop;

    window.scrollTo({
      top: sectionOffsetTop,
      behavior: 'smooth',
    });
  }

  modeDark() {}
}
