import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectComponent {
  protected readonly requirements = signal([
    'Benutzer können Aufgaben erstellen, bearbeiten und löschen',
    'Aufgaben können Unterprojekten zugewiesen werden',
    'Abhängigkeiten zwischen Aufgaben können definiert werden',
    'Automatische Berechnung kritischer Pfade',
    'Benachrichtigungen bei Fälligkeit und Änderungen',
    'Exportfunktion für Berichte (PDF, CSV)',
  ]);

  protected readonly technologies = signal([
    { name: 'Angular', category: 'Frontend' },
    { name: 'TypeScript', category: 'Frontend' },
    { name: 'Tailwind CSS', category: 'Frontend' },
    { name: 'Go', category: 'Backend' },
    { name: 'PostgreSQL', category: 'Datenbank' },
    { name: 'Docker', category: 'Deployment' },
  ]);
}
