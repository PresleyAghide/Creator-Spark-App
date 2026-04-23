import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonItem,
  IonLabel,
  IonInput,
  IonSelect,
  IonSelectOption,
  IonToggle,
  IonButton
} from '@ionic/angular/standalone';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonItem,
    IonLabel,
    IonInput,
    IonSelect,
    IonSelectOption,
    IonToggle,
    IonButton
  ],
})
export class SettingsPage {
  name: string = '';
  platform: string = '';
  darkMode: boolean = false;

  constructor(private storage: Storage) {}

  async saveSettings() {
    await this.storage.create();
    await this.storage.set('userName', this.name);
    await this.storage.set('platform', this.platform);
    await this.storage.set('darkMode', this.darkMode);

    alert('Settings saved 💾');
  }
}