import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCharacterComponent } from './create-character.component';

describe('CreateCharacterComponent', () => {
  let component: CreateCharacterComponent;
  let fixture: ComponentFixture<CreateCharacterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateCharacterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateCharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should generate a random character ID between 1 and 1000 with no decimal places', () => {
    component.createNewCharacter(); //This will trigger the generation of a new character ID
    expect(component.characterId).toBeGreaterThan(0);
    expect(component.characterId).toBeLessThanOrEqual(1000);
    expect(Number.isInteger(component.characterId)).toBe(true);
  });

  it('should add a new character with the correct customization', () => {
    component.characterId = 12;
    component.name = "Jane Doe"
    component.selectedGender = 'Female';
    component.selectedClass = 'Mage';
    component.addToCharacterList();
    const newCharacter = component.characters[0];

    expect(newCharacter.id).toBe(12);
    expect(newCharacter.name).toBe('Jane Doe');
    expect(newCharacter.gender).toBe('Female');
    expect(newCharacter.class).toBe('Mage');
  });

  it('should reset all form fields to their default values after resetForm is called', () => {
    component.characterId = 12;
    component.name = 'Jane Doe';
    component.selectedGender = 'Female';
    component.selectedClass = 'Mage';

    component.resetForm();

    expect(component.characterId).toBe(1);
    expect(component.name).toBe('');
    expect(component.selectedGender).toBe('');
    expect(component.selectedClass).toBe('');
  });
});
