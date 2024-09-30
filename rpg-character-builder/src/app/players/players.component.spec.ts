import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayersComponent } from './players.component';

describe('PlayersComponent', () => {
  let component: PlayersComponent;
  let fixture: ComponentFixture<PlayersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should correctly display a list of rpg chartacters'), () => {
    const compiled = fixture.nativeElement as HTMLElement; //Get the compiled HTML of the component
    const playersCharacters = compiled.querySelectorAll('.player-character'); //Get all the players rpg characters
    expect(playersCharacters.length).toEqual(component.characters.length); //Check if the number of rpg charcters is equal to the number of items in the characters array
  }
});
