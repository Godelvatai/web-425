import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, ReactiveFormsModule } from '@angular/forms';
import { GuildListComponent } from '../guild-list/guild-list.component';

@Component({
  selector: 'app-create-guild',
  standalone: true,
  imports: [ ReactiveFormsModule, CommonModule, GuildListComponent ],
  template: `
    <div class="createGuild-form-container">
      <form [formGroup]="createGuildForm" class="createGuild-form" (ngSubmit)="createGuild(); createGuildForm.reset();">
        <h1>Complete the form below to create a new guild.</h1>

        <fieldset>
          <legend>Create Guild Form</legend>

          <label>Guild Name</label>
          <input type="text" formControlName="guildName">

          <label>Description of Guild</label>
          <textarea rows="10" formControlName="description"></textarea>

          <label>Guild Type</label>
          <select formControlName="type">
            @for(type of guildTypes; track type){
              <option [value]="type">{{ type }}</option>
            }
          </select>

          <label>Accept Terms & Conditions</label>
          <input type="checkbox" formControlName="acceptTerms">

          <label>How would you like to receive your notifications</label>
          @for(notificationPreference of notificationPreferences; track notificationPreference) {
            <input type="radio" [value]="notificationPreference" formControlName="notificationPreference">{{ notificationPreference }}<br />
          }

          <input type="submit" [disabled]="!createGuildForm.valid" value="Create Guild">
        </fieldset>
      </form>

      <div class="guilds">
        <app-guild-list [guilds]="createdGuilds"></app-guild-list>
      </div>
    </div>
  `,
  styles: `
    .createGuild-form-container {
      display: flex;
      flex-direction: column;
      width: 80%;
      align-items: center;
    }

    .createGuild-form, .createGuild {
      width: 100%;
      margin-bottom: 20px;
    }

    .guilds-container {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-between;
      gap: 20px;
    }

    .guild-card {
      flex: 0 0 calc(50% - 20px);
      box-sizing: border-box;
      border: 1px solid #CCC;
      border-radius: 5px;
      padding: 20px;
      margin: 10px 0;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    label {
      display: block;
      margin-bottom: 5px;
    }

    label:first-of-type {
      margin-top: 0;
    }

    label:not(:first-of-type) {
      margin-top: 10px;
    }

    select {
      width: 20%;
      display: block;
      margin-bottom: 5px;
      padding: 8px;
      box-sizing: border-box;
    }

    textarea {
      width: 100%;
      margin-bottom: 5px;
      padding: 8px;
      box-sizing: border-box;
    }

    input[type="submit"] {
      display: block;
      padding: 8px;
      margin-bottom: 10px;
      box-sizing: border-box;
      float: right;
    }

    input[type="checkbox"] {
      box-sizing: border-box;
      margin-bottom: 10px;
    }

    fieldset {
      margin-bottom: 20px;
    }
  `
})
export class CreateGuildComponent {
  guildTypes: string[] = ['Competitive', 'Casual', 'Social', 'Educational'];
  notificationPreferences: string[] = ['Email', 'SMS', 'In-App'];
  createdGuilds: any[];

  createGuildForm: FormGroup = this.fb.group({
    guildName: [null, Validators.compose([Validators.required])],
    description: [null, Validators.compose([Validators.required])],
    type: [null, Validators.compose([Validators.required])],
    acceptTerms: [false, Validators.compose([Validators.required])],
    notificationPreference: [null, Validators.compose([Validators.required])]
  });

  @Output() guildList = new EventEmitter<any[]>();

  constructor(private fb: FormBuilder) {
    this.createdGuilds = [
      {
        guildName: 'Adventuring Guild',
        description: 'Guild for adventurers',
        type: 'Competitive',
        acceptTerms: true,
        notificationPreference: 'Email'
      },
      {
        guildName: 'Warriors Guild',
        description: 'Guild for warriors.',
        type: 'Casual',
        acceptTerms: true,
        notificationPreference: 'In-App'
      },
      {
        guildName: 'Society of Magic',
        description: 'Social group for mages',
        type: 'Social',
        acceptTerms: true,
        notificationPreference: 'SMS'
      }
    ];
  };

  createGuild() {
    const newGuild = {
      guildName: this.createGuildForm.value.guildName,
      description: this.createGuildForm.value.description,
      type: this.createGuildForm.value.type,
      acceptTerms: this.createGuildForm.value.acceptTerms,
      notificationPreference: this.createGuildForm.value.notificationPreference
    };

    this.createdGuilds.push(newGuild);
    this.guildList.emit(this.createdGuilds);
  };
}
