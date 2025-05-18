import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuildListComponent } from './guild-list.component';
import { CommonModule } from '@angular/common';

describe('GuildListComponent', () => {
  let component: GuildListComponent;
  let fixture: ComponentFixture<GuildListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GuildListComponent, CommonModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuildListComponent);
    component = fixture.componentInstance;

    const mockGuild = {
      guildName: 'Adventuring Guild',
      description: 'Guild for adventurers',
      type: 'Competitive',
      acceptTerms: true,
      notificationPreference: 'Email'
    };

    component.guilds = [mockGuild];

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display guilds that are in the guild list', () => {
    component.guilds = [{
      guildName: 'Adventuring Guild',
      description: 'Guild for adventurers',
      type: 'Competitive',
      acceptTerms: true,
      notificationPreference: 'Email'
    }];

    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('h2').textContent).toContain('Adventuring Guild');
    expect(compiled.querySelector('p').textContent).toContain('Guild for adventurers');
    expect(compiled.querySelector('p').textContent).toContain('Competitive');
    expect(compiled.querySelector('p').textContent).toContain('Email');
  });

  it('should display a message when there are no guilds in the list', () => {
    component.guilds = [];

    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('p').textContent).toContain('No guilds have been created yet.');
  });
});
