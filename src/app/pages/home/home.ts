import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  protected readonly projectName = signal('ChronoScope');
  protected readonly projectStatus = signal('Anforderungsanalyse');

  protected readonly slides = signal([
    { title: 'Produktvorschau 1', description: 'Screenshot oder Mockup kommt hier' },
    { title: 'Produktvorschau 2', description: 'Screenshot oder Mockup kommt hier' },
    { title: 'Produktvorschau 3', description: 'Screenshot oder Mockup kommt hier' },
  ]);

  protected readonly currentSlide = signal(0);
  protected readonly slide = computed(() => this.slides()[this.currentSlide()]);

  protected prev(): void {
    this.currentSlide.update(i => (i - 1 + this.slides().length) % this.slides().length);
  }

  protected next(): void {
    this.currentSlide.update(i => (i + 1) % this.slides().length);
  }

  protected readonly features = signal([
    'Aufgabenverwaltung mit Prioritäten und Deadlines',
    'Abhängigkeitsmanagement zwischen Aufgaben',
    'Automatische Arbeitsplanung und Zuweisung',
    'Fortschrittsverfolgung und Berichterstellung',
  ]);

  protected readonly externalLinks = signal([
    { label: 'Repository', url: 'https://github.com/orgs/NI0-Name-Ideas-0/repositories', domain: 'github.com', icon: 'https://github.githubassets.com/favicons/favicon.png', iconDark: 'https://github.githubassets.com/favicons/favicon-dark.png' },
    { label: 'ClickUp', url: 'https://app.clickup.com/90121535866/v/s/90126615524', domain: 'app.clickup.com' },
  ]);
}
