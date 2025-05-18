import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { CharacterFactionComponent } from './character-faction.component';

describe('CreateFactionComponent', () => {
  let component: CharacterFactionComponent;
  let fixture: ComponentFixture<CharacterFactionComponent>;
  let httpTestingController: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ CharacterFactionComponent, HttpClientTestingModule ]
    })
    .compileComponents();

    httpTestingController = TestBed.inject(HttpTestingController);

    fixture = TestBed.createComponent(CharacterFactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should handle errors when data is not found.', () => {
    const expectedMessage = "Error fetching character factions.";
    const req = httpTestingController.expectOne(`http://localhost:3000/api/character-factions`);
    req.flush('faction not found', { status: 404, statusText: 'Not Found' });

    expect(component.noSpecialMessage).toEqual(expectedMessage);
    httpTestingController.verify();
  });

  it('should correctly fetch a list of character factions.', () => {
    const mockFactions = [{
      name: "Shroomite Tinkerers",
      description: "Where machine meets mushroom. Bio-engineering but with magic and old science."
    },{
      name: "Desert Thorns",
      description: "Just a bunch of cacti."
    }];

    const req = httpTestingController.expectOne(`http://localhost:3000/api/character-factions`);
    req.flush(mockFactions);

    expect(component.factions.length).toBe(2);
    expect(component.factions).toEqual(mockFactions);
    httpTestingController.verify();
  });

  it('should update the characterFactions div when character factions are found.', () => {
    const mockFactions = [{
      name: "Shroomite Tinkerers",
      description: "Where machine meets mushroom. Bio-engineering but with magic and old science."
    }];

    const req = httpTestingController.expectOne(`http://localhost:3000/api/character-factions`);
    req.flush(mockFactions);

    expect(component.factions).toEqual(mockFactions);
    httpTestingController.verify();
  });
});
