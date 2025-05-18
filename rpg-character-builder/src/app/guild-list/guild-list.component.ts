import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-guild-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>List of Guilds</h1>
    @if (guilds.length > 0) {
      <div class="guilds-container">
        @for (guild of guilds; track guild.guildName) {
          <div class="guild-card">
            <h2>Guild Name: {{ guild.guildName }}</h2>
            <p>Description: {{ guild.description }}<br>
            Guild Type: {{ guild.type }}<br>
            Accepted Terms: {{ guild.acceptTerms }}<br>
            Notification Preference: {{ guild.notificationPreference }}</p>
          </div>
        }
      </div>
    }
    @else {
      <p>No guilds have been created yet.</p>
    }
  `,
  styles: `
  `
})
export class GuildListComponent {
  @Input() guilds!: any[];
}
