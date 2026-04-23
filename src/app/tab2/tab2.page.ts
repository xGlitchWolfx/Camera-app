import { Component } from '@angular/core';
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonContent,
  IonFab,
  IonFabButton,
  IonHeader,
  IonIcon,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { PhotoService } from '../services/photo.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  imports: [IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonContent, IonFab, IonFabButton, IonHeader, IonIcon, IonTitle, IonToolbar],
})
export class Tab2Page {
  constructor(public readonly photoService: PhotoService) {}

  async ngOnInit(): Promise<void> {
    await this.photoService.loadSaved();
  }

  async addPhotoToGallery(): Promise<void> {
    await this.photoService.addNewToGallery();
  }
}
