import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';
import { PlayersComponent } from './players/players.component';
import { Routes, Router } from '@angular/router';

describe('AppComponent (Standalone)', () => {
  beforeEach(async () => {
    const activatedRouteStub = {
      snapshot: {
        paramMap: {
          get: () => 'staticValue',
        },
      },
      queryParams: of({}),
    };

    const routes: Routes = [
      { path: 'players', component: PlayersComponent }
    ]

    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes(routes),
        PlayersComponent
      ],
      providers: [
        { provide: ActivatedRoute, useValue: activatedRouteStub },
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have correct route for PlayersComponent`, () => {
    const router = TestBed.inject(Router);
    const route = router.config.find(r => r.path === 'players');
    expect(route).toBeDefined(); //Check if the route is defined
    if(route) {
      expect(route.component).toBe(PlayersComponent); //Check if the component is PlayersComponent
    }
  });
});
