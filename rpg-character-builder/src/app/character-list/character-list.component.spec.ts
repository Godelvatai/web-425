import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterListComponent } from './character-list.component';
import { CommonModule } from '@angular/common';
import { Character } from '../create-character/create-character.component';

describe('CharacterListComponent', () => {
  let component: CharacterListComponent;
  let fixture: ComponentFixture<CharacterListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharacterListComponent, CommonModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharacterListComponent);
    component = fixture.componentInstance;

    const mockCharacter = {
      id: 12,
      name: "Jane Doe",
      gender: 'Female',
      class: 'Mage'
    }

    component.characters = [mockCharacter];

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display characters that are in the character list', () => {
    component.characters = [{
      id:12,
      name:'Jane Doe',
      gender:'Female',
      class:'Mage'
    }];

    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('li').textContent).toContain('Jane Doe');
    expect(compiled.querySelector('li').textContent).toContain('Female');
    expect(compiled.querySelector('li').textContent).toContain('Mage');
  });

  it('should display a message when there are no characters in the list', () => {
    component.characters = [];

    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('p').textContent).toContain('No characters have been created yet.');
  });
});
