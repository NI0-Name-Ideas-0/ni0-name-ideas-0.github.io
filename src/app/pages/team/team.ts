import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import type { TeamMember } from '../../models/team-member';

@Component({
  selector: 'app-team',
  templateUrl: './team.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TeamComponent {
  protected readonly members = signal<TeamMember[]>([
    {
      name: 'Paul Berndt',
      roles: ['Projektleitung'],
      github: 'https://github.com/Vectabyte',
    },
    {
      name: 'Konstantin Fastovski',
      roles: ['Verantwortlicher für Qualitätssicherung und Dokumentation'],
      github: 'https://github.com/Konstantin-Fastovski',
    },
    {
      name: 'Silas Rißler',
      roles: ['Verantwortlicher für Recherche', 'Verantwortlicher für Implementierung'],
    },
    {
      name: 'Felix Weglehner',
      roles: ['Verantwortlicher für Modellierung'],
      github: 'https://github.com/Placeblock',
    },
    {
      name: 'Elias Kerlin',
      roles: ['Technische Assistenz', 'Verantwortlicher für Tests'],
      github: 'https://github.com/LordEliasTM',
    },
  ]);
}
