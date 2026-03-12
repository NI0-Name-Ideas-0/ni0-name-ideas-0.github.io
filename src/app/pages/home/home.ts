import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
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

  protected readonly features = signal([
    'Aufgabenverwaltung mit Prioritäten und Deadlines',
    'Abhängigkeitsmanagement zwischen Aufgaben',
    'Automatische Arbeitsplanung und Zuweisung',
    'Fortschrittsverfolgung und Berichterstellung',
  ]);

  protected readonly quickLinks = signal([
    { label: 'Projekt ansehen', path: '/project' },
    { label: 'Team kennenlernen', path: '/team' },
    { label: 'Projektplan', path: '/plan' },
    { label: 'Fortschritt', path: '/documentation' },
  ]);
}
