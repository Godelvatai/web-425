export interface rpgCharacter {
  name: string;
  gender: string;
  class: string;
  faction: string;
  startingLocation: string;
  funFact: string;
}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-players',
  standalone: true,
  imports: [ CommonModule ],
  template: `
    <div>
      <h1>RPG Characters</h1>
      <ul class="characters-container">
        @for (item of characters; track item) {
          <li class="player-character">
            <div class="card">
              <h3>{{ item.name }}</h3>
              <p>{{ item.gender }}</p>
              <p>{{ item.name }} is a {{ item.class }} and is a member of {{ item.faction }}</p>
              <p>{{ item.name }}'s adventure began at {{ item.startingLocation }}</p>
              <p>{{ item.funFact }}</p>
            </div>
          </li>
        }
      </ul>
    </div>
  `,
  styles: [
    `
    .characters-container {
      display: flex;
      flex-wrap: wrap;
      list-style-type: none;
      padding: 0;
    }

    .player-character {
      flex: 0 1 calc(33.33% - 20px);
      margin: 10px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }

    .card {
      padding: 20px;
      background-color: white;
    }
    `
  ]
})
export class PlayersComponent {
  characters: rpgCharacter[];

  constructor() {
    this.characters = [
      {
        "name": "Morneiros Telumbe",
        "gender": "Other",
        "class": "Rogue",
        "faction": "Charlantan's Acting Company",
        "startingLocation": "The Feywilds",
        "funFact": "Was forever turned into a plant shaped man who's body is made of vines due to a bad magical apocalyptic event."
      },
      {
        "name": "Tristan Vildan Morningcrest III",
        "gender": "Male",
        "class": "Warrior",
        "faction": "Paladin Oath of Vengeance",
        "startingLocation": "Tranqcorr Kingdom",
        "funFact": "Was born larger than typical Tabaxi and so he was naturally bigger and stronger than his peers."
      },
      {
        "name": "Saraquiel Ariuk",
        "gender": "Female",
        "class": "Warrior",
        "faction": "The High Seraphs of Selûne",
        "startingLocation": "Gates of the Moon",
        "funFact": "Was on track to become a general in the army of the goddess Selûne before a planar disaster caused her fall from grace that made her into a mortal being."
      },
      {
        "name": "Faedove Eilrona",
        "gender": "Female",
        "class": "Warrior",
        "faction": "The Creator's Rebellion",
        "startingLocation": "The Dark Tower of Capricorn",
        "funFact": "Was placed into a highly advanced version of a Warforged body by a mad scientist named The Creator."
      },
      {
        "name": "Shu Ereghast",
        "gender": "Male",
        "class": "Mage",
        "faction": "The Heroes' Desciple",
        "startingLocation": "Town Portsmouth",
        "funFact": "Was chosen to be trained by the entire party of legendary heroes but suffers from self confidence problems."
      },
      {
        "name": "Bella Tornur",
        "gender": "Female",
        "class": "Warrior",
        "faction": "The Gladitors of Guaran Prison",
        "startingLocation": "Guaran Prison",
        "funFact": "She was born into the gladitoral prison of Guaran and was taught how to fight while growing up. She has earned her release multiple times but enjoys fighting so much that she has refused to leave."
      },
      {
        "name": "Faerax",
        "gender": "Other",
        "class": "Mage",
        "faction": "Shades of the Shadowfell",
        "startingLocation": "Town Portsmouth",
        "funFact": "Due to a tragic event, they became fused with the energy of the Shadowfell and can now travel through shadows and use shadows to empower their magic."
      },
      {
        "name": "Edward",
        "gender": "Male",
        "class": "Mage",
        "faction": "The Withered Alliance",
        "startingLocation": "Fenroth",
        "funFact": "His ability to cast magic was sealed once so he found a way to carve the magical symbols into his hand and channel magic through his blood."
      },
      {
        "name": "Willowhorn",
        "gender": "Other",
        "class": "Warrior",
        "faction": "The Wanderers",
        "startingLocation": "Kingdom of the Twin Dragons",
        "funFact": "They have traveled to nearly every established kingdom in the world."
      },
      {
        "name": "Kyzer Hirayama",
        "gender": "Male",
        "class": "Warrior",
        "faction": "Monastery of the Redeemed",
        "startingLocation": "Stonefist Village",
        "funFact": "Despite becoming blind from an injury, a monk from the monastery was able to teach him a way to track his surrounds with Ki energy, granting him the ability to take up his Naginata once again."
      }
    ]
  }
}
