import { Component, inject } from '@angular/core';
import { AlertController } from '@ionic/angular';
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  imports: [IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonContent, IonHeader, IonTitle, IonToolbar],
})
export class Tab1Page {
  private readonly alertController = inject(AlertController);

  async soyUnBoton(): Promise<void> {
    const alert = await this.alertController.create({
      header: 'Mensaje para ti',
      message: 'Soy un boton, nada especial',
      buttons: ['ok?'],
    });

    await alert.present();
  }
}
