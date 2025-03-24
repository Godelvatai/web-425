import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  template: `
    <div>
      <h1>RPG Characters</h1>
      <p>In the vast world of fantasy RPG's, there are many forms of media that one can use to interact with worlds that only exist in our imaginations. Many of these forms of media involve TTRPGs or Tabletop Role-Playing Games, where you create a custom character that you use to interact with the world built by the groups game master.</p>
      <p>Having trouble figuring out where to start with making your character? This site is aimed at making it easier and accessible to put together a custom character that you can use to bring to your next game!</p>
      <div class="highlights-container">
        <div class="highlight">
          <img
            src="/assets/dnd-character-sheet-example.jpg"
            alt="image of a character sheet designed to track the character information for Dungeons and Dragons"
          />
          <p>Here is an example of a blank character sheet for a game of Dungeons and Dragons 3rd Edition, tracking multiple important facets of character information like the 6 base stats of the character as well as hit points and many other things that you would need to reference often during a game.</p>
        </div>

        <div class="highlight">
          <img
            src="/assets/personalized-character-sheet-with-character-art.jpg"
            alt="image of a personalized 5th edition Dungeons and Dragons character sheet"
          />
          <p>Here is another character sheet example where the player personalized the design of their character sheet to include artwork of their character. One of the many forms of personalization and attachment that makes playing these fantasy characters a fun and unique experience!</p>
        </div>

        <div class="highlight">
          <img
            src="/assets/character-art.jpg"
            alt="image of artwork of a custom built rpg character from multiple views"
          />
          <p>If you are an artist, or support artists through commissioning work from them, nothing pairs with a the character creation process like artwork that can bring life into a character for you. RPG communities across the web have artists who make art of their own characters and other characters, as customizing your own character is a fun experience and can often hold many positive memories for those who enjoy different forms of creative, fantasy based, hobbies.</p>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
    .highlights-container {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      flex-wrap: wrap;
      gap: 20px;
    }
    .highlight {
      text-align: center;
      flex: 0 1 calc(33.333% - 20px);
      box-sizing: border-box;
    }
    .highlight img {
      max-width: 100%;
      height: auto;
      object-fit: cover;
    }
    .highlight p {
      margin-top: 10px;
    }
    `
  ]
})
export class HomeComponent {

}
