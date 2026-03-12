import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
  protected readonly menuOpen = signal(false);

  protected readonly navLinks = [
    { label: 'Home', path: '/home' },
    { label: 'Projekt', path: '/project' },
    { label: 'Team', path: '/team' },
    { label: 'Projektplan', path: '/plan' },
    { label: 'Dokumentation', path: '/documentation' },
  ];

  protected toggleMenu(): void {
    this.menuOpen.update(v => !v);
  }

  protected closeMenu(): void {
    this.menuOpen.set(false);
  }
}
