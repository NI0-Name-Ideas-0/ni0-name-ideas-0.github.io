import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import type { Milestone } from '../../models/milestone';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlanComponent {
  protected readonly milestones = signal<Milestone[]>([
    {
      title: 'Projektstart & Teamorganisation',
      date: '2026-03-01',
      description: 'Rollenverteilung, Projektsetup, Risikoanalyse',
      status: 'done',
    },
    {
      title: 'Anforderungsanalyse',
      date: '2026-03-15',
      description: 'Lastenheft, Anforderungsdokumentation, Stakeholder-Analyse',
      status: 'in-progress',
    },
    {
      title: 'Systemdesign',
      date: '2026-04-01',
      description: 'Architektur, UML-Diagramme, Datenbankschema',
      status: 'pending',
    },
    {
      title: 'Implementierung Phase 1',
      date: '2026-04-20',
      description: 'Backend-Grundstruktur, API-Design, Datenbankanbindung',
      status: 'pending',
    },
    {
      title: 'Implementierung Phase 2',
      date: '2026-05-10',
      description: 'Frontend-Entwicklung, Integration Backend/Frontend',
      status: 'pending',
    },
    {
      title: 'Testing & Qualitätssicherung',
      date: '2026-05-25',
      description: 'Unit-Tests, Integrationstests, Usability-Tests',
      status: 'pending',
    },
    {
      title: 'Abgabe & Präsentation',
      date: '2026-06-15',
      description: 'Finale Abgabe, Projektpräsentation, Dokumentation',
      status: 'pending',
    },
  ]);

  protected readonly workPackages = signal([
    {
      id: 'AP1',
      title: 'Projektmanagement',
      tasks: ['Rollenverteilung', 'Meetingprotokoll', 'Risikoverwaltung'],
    },
    {
      id: 'AP2',
      title: 'Anforderungsanalyse',
      tasks: ['Lastenheft', 'Pflichtenheft', 'Use-Case-Diagramme'],
    },
    {
      id: 'AP3',
      title: 'Systemdesign',
      tasks: ['Architekturdiagramm', 'ER-Diagramm', 'Klassendiagramm'],
    },
    {
      id: 'AP4',
      title: 'Implementierung',
      tasks: ['Backend (Go)', 'Frontend (Angular)', 'Datenbankschema'],
    },
    {
      id: 'AP5',
      title: 'Testing',
      tasks: ['Testplan', 'Unit-Tests', 'Systemtests'],
    },
    {
      id: 'AP6',
      title: 'Dokumentation',
      tasks: ['Entwicklerdokumentation', 'Benutzerdokumentation', 'Abschlussbericht'],
    },
  ]);
}
