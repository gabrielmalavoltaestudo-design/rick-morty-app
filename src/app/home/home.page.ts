import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent,IonGrid, IonRow, IonCol, IonInfiniteScroll, IonInfiniteScrollContent } from '@ionic/angular/standalone';
import { RickMortyService } from '../core/services/rick-morty';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonGrid, IonRow, IonCol, IonInfiniteScroll, IonInfiniteScrollContent],
})


export class HomePage implements OnInit {
  public characters: any[] = [];
  public currentPage: number = 1;

  constructor(private rickMortyService: RickMortyService) {}

  ngOnInit() {
    this.loadCharacters();
  }

  loadCharacters(event?: any) {
    this.rickMortyService.getCharacters(this.currentPage).subscribe((data: any) => {

      this.characters = [...this.characters, ...data.results];
      
      if (event) {
        event.target.complete();
      }

  
      if (!data.info.next && event) {
        event.target.disabled = true;
      }
    });
  }

  loadMore(event: any) {
    this.currentPage++;
    this.loadCharacters(event); 
  }
}