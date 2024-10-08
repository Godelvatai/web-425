import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  template: `
    <div class="wrapper">
      <header class="banner">
        <img src="/assets/rpg-character-builder-heading.png" alt="website banner for rpg character builder" class="banner-img">
      </header>

      <div class="sign-in-container">
        <a routerLink="/signin" class="sign-in-link">Sign In</a>
      </div>

      <main class="main-content">
        <nav class="navbar">
          <ul>
            <li><a routerLink="/">Home</a></li>
            <li><a routerLink="/players">Players</a></li>
            <li><a routerLink="/create-character">Create Character</a></li>
            <li><a routerLink="/create-guild">Create Guild</a></li>
            <li><a routerLink="/character-faction">Character Faction</a></li>
          </ul>
        </nav>

        <section class="content">
          <router-outlet />
        </section>
      </main>

      <footer class="footer">
        <nav class="footer-nav">
          <a routerLink="/">Home</a>
          <a routerLink="/players">Players</a>
          <a routerLink="/create-character">Create Character</a>
          <a routerLink="/create-guild">Create Guild</a>
          <a routerLink="/character-faction">Character Faction</a>
        </nav>
      </footer>
    </div>
  `,
  styles: [
    `
    .sign-in-container{
      text-align: right;
      padding-right: 20px;
      margin-top: 10px;
    }

    .sign-in-link{
      color: #000000;
      text-decoration: none;
      font-family: 'Lato', sans-serif;
    }

    .sign-in-link:hover{
      text-decoration: underline;
    }
    `
  ]
})
export class AppComponent {
  title = 'RPG Character Builder';
}
