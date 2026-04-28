import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent,IonGrid, IonRow, IonCol } from '@ionic/angular/standalone';
import { RickMortyService } from '../core/services/rick-morty';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonGrid, IonRow, IonCol],
})


export class HomePage implements OnInit {
  public characters: any[] = []

  constructor(private rickMortyService: RickMortyService) {}

  ngOnInit() {
    this.rickMortyService.getCharacters().subscribe((data: any) => {
      this.characters = data.results; 
      console.log('Personagens salvos:', this.characters);
    });
  }
}