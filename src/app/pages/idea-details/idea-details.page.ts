import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent
} from '@ionic/angular/standalone';
import { Router } from '@angular/router';

@Component({
  selector: 'app-idea-details',
  templateUrl: './idea-details.page.html',
  styleUrls: ['./idea-details.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent
  ],
})
export class IdeaDetailsPage implements OnInit {
  idea: any;

  constructor(private router: Router) {}

  ngOnInit() {
    this.idea = this.router.getCurrentNavigation()?.extras.state?.['idea'];
  }
}