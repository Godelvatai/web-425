import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-character-faction',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  template: `
    <div class="cfaction-container">
      <div *ngIf="factions; else noFactions">
        <h1>Character Factions</h1>
        <div *ngFor="let faction of factions" class="cfaction-card">
          <h3>{{ faction.name }}</h3>
          <p>{{ faction.description }}</p>
        </div>
      </div>
      <ng-template #noFactions>
        <h1>{{ noSpecialMessage }}</h1>
      </ng-template>
    </div>
  `,
  styles: `
    .cfaction-container {
      display: flex;
      flex-direction: column;
      padding: 0;
    }

    .cfaction-card {
      margin: 10px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      padding: 20px;
      width: 80%;
    }
  `
})
export class CharacterFactionComponent {
  factions: any = null;
  noSpecialMessage: string = '';

  constructor(private http: HttpClient) {
    this.http.get(`http://localhost:3000/api/character-factions`).subscribe({
      next: (res: any) => {
        console.log(res);
        this.factions = res;
      },
      error: (err) => {
        console.error('Error fetching character factions', err);
        if(err.error === 'Factions not found') {
          this.noSpecialMessage = 'No character factions were found.'
        } else {
          this.noSpecialMessage = 'Error fetching character factions.'
        }
      }
    });
  }
}
