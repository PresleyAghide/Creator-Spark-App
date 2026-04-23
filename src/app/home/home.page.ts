import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent
} from '@ionic/angular/standalone';
import { Haptics, ImpactStyle } from '@capacitor/haptics';
import { ApiService } from '../services/api.service';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButton,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent
  ],
})
export class HomePage implements OnInit {
  ideas: any[] = [];
  userName: string = '';

  constructor(
    private apiService: ApiService,
    private storage: Storage
  ) {}

  async ngOnInit() {
    await this.storage.create();

    this.userName = (await this.storage.get('userName')) || '';

    this.apiService.getIdeas().subscribe((data: any) => {
      this.ideas = data.slice(0, 5).map((item: any, index: number) => ({
        id: item.id,
        title: this.getCreatorTitle(index),
        body: this.getCreatorBody(index, item.body)
      }));
    });
  }

  getCreatorTitle(index: number): string {
    const titles = [
      'TikTok Storytime Idea',
      'YouTube Challenge Concept',
      'Instagram Reel Hook',
      'Behind The Scenes Video',
      'Day In The Life Content'
    ];

    return titles[index] || 'Creator Content Idea';
  }

  getCreatorBody(index: number, originalText: string): string {
    const bodies = [
      'Film a quick storytime about a funny or unexpected moment and start with a strong hook.',
      'Create a challenge-style video where the viewer wants to see the result at the end.',
      'Use a short emotional or funny hook in the first 3 seconds to stop people scrolling.',
      'Show the process behind your content, including planning, filming, mistakes, and final result.',
      'Record a simple day-in-the-life video with fast cuts, captions, and natural personality.'
    ];

    return bodies[index] || originalText;
  }

  async saveIdea(idea: any) {
    let favorites = (await this.storage.get('favorites')) || [];
    favorites.push(idea);
    await this.storage.set('favorites', favorites);

    await Haptics.impact({ style: ImpactStyle.Medium });

    alert('Saved to favorites ⭐');
  }
}