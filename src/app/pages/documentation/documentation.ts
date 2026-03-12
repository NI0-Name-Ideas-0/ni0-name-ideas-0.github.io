import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import type { ProgressEntry } from '../../models/progress-entry';

@Component({
  selector: 'app-documentation',
  templateUrl: './documentation.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DocumentationComponent {
  protected readonly entries = signal<ProgressEntry[]>([
    {
      week: 'Woche 1',
      date: '03.03. – 07.03.2026',
      items: [
        'Projekt gestartet, Repository angelegt',
        'Rollen im Team verteilt',
        'Kick-off Meeting abgehalten',
        'Risikoanalyse erstellt',
      ],
    },
    {
      week: 'Woche 2',
      date: '10.03. – 14.03.2026',
      items: [
        'Anforderungen gesammelt (Interviews & Brainstorming)',
        'Lastenheft begonnen',
        'Erste Use-Case-Diagramme erstellt',
        'Technologiestack festgelegt',
      ],
    },
  ]);
}
