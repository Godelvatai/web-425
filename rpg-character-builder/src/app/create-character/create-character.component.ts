export interface Character {
  id: number;
  name: string;
  gender: string;
  class: string;
}

export interface CharacterList {
  characters: Character[];
}

import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create-character',
  standalone: true,
  imports: [ FormsModule, CommonModule],
  template: `
    <div class="character-form-container">
      <form class="character-form" #createCharacterForm="ngForm" (ngSubmit)="createNewCharacter();">
        <h1>Complete the form below to create a new character.</h1>

        <fieldset>
          <legend>Create Character</legend>

          <label for="name">Name</label>
          <input type="text" id="name" name="name" class="text-input" maxlength="25" required [(ngModel)]="name" ngModel>

          <label for="gender">Gender</label>
          <select id="gender" name="gender" required [(ngModel)]="selectedGender" ngModel>
            <option value="">=Select One=</option>
            @for (gender of genders; track gender) {
              <option value="{{ gender }}">{{ gender }}</option>
            }
          </select>

          <label for="class">Class</label>
          <select id="class" name="class" required [(ngModel)]="selectedClass" ngModel>
            <option value="">=Select One=</option>
            @for (class of classes; track class) {
              <option value="{{ class }}">{{ class }}</option>
            }
          </select>

          <input type="submit" value="Create Character" />
        </fieldset>
      </form>

      <div class="character-list">
        <h1>Newly Created Characters</h1>

        @if (characterList.characters.length > 0) {
          <ul>
            @for (character of characterList.characters; track character) {
              <li>
                <strong>{{ character.name }}</strong>
                <br />
                {{ character.gender }}
                <br />
                {{ character.class }}
              </li>
            }
          </ul>
        }
      </div>
    </div>
  `,
  styles: [`
    .character-form-container {
      display: flex;
      justify-content: space-between;
      gap: 10px;
    }

    .character-form {
      flex: 1;
      margin-right: 20px;
    }

    fieldset {
      margin-bottom: 20px;
    }

    label, select, .text-input {
      display: block;
      margin-bottom: 5px;
    }

    .text-input, select, input[type="submit"] {
      padding: 8px;
      box-sizing: border-box;
    }

    select {
      width: 100%;
    }

    .text-input {
      width: 20%;
    }

    input[type="submit"] {
      float: right;
    }

    .character-list li {
      margin-bottom: 10px;
      padding: 5px;
    }
  `]
})
export class CreateCharacterComponent {
  characterList: CharacterList;
  genders: string[];
  classes: string[];
  characterId: number;
  name: string;
  selectedGender: string;
  selectedClass: string;

  constructor() {
    this.characterList = { characters: [] };
    this.classes = [ 'Warrior', 'Rogue', 'Mage' ];
    this.genders = [ 'Male', 'Female', 'Other' ];
    this.characterId = 1;
    this.name = '';
    this.selectedGender = '';
    this.selectedClass = '';
  }

  createNewCharacter() {
    this.characterId = Math.floor(Math.random() * 1000) + 1;
    this.addToCharacterList();
  }

  addToCharacterList() {
    this.characterList.characters.push({
      id: this.characterId,
      name: this.name,
      gender: this.selectedGender,
      class: this.selectedClass
    });
    this.resetForm();
  }

  resetForm() {
    this.characterId = 1;
    this.name = '';
    this.selectedGender = '';
    this.selectedClass = '';
  }
}
