import { Component, Input } from '@angular/core';
import { Character } from '../create-character/create-character.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-character-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>List of Character</h1>
    @if (characters.length > 0) {
      <ul>
        @for (character of characters; track character.id) {
          <li><b>{{ character.name }}</b>:  {{ character.gender }} {{ character.class }}</li>
        }
      </ul>
    }
    @else {
      <p>No characters have been created yet.</p>
    }
  `,
  styles: `

  `
})
export class CharacterListComponent {
  @Input() characters!: Character[];
}
