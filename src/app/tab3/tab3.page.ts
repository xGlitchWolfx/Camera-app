import { Component } from '@angular/core';
import { IonCol, IonContent, IonGrid, IonHeader, IonImg, IonRow, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { PhotoService } from '../services/photo.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  imports: [IonCol, IonContent, IonGrid, IonHeader, IonImg, IonRow, IonTitle, IonToolbar],
})
export class Tab3Page {
  constructor(public readonly photoService: PhotoService) {}

  async ngOnInit(): Promise<void> {
    await this.photoService.loadSaved();
  }
}
