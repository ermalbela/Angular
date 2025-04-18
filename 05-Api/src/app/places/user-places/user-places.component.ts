import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';

import { PlacesContainerComponent } from '../places-container/places-container.component';
import { PlacesComponent } from '../places.component';
import { Place } from '../place.model';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { PlacesService } from '../places.service';

@Component({
  selector: 'app-user-places',
  standalone: true,
  templateUrl: './user-places.component.html',
  styleUrl: './user-places.component.css',
  imports: [PlacesContainerComponent, PlacesComponent],
})
export class UserPlacesComponent implements OnInit{
  isFetching = signal(false);
  error = signal('');
  
  private placesService = inject(PlacesService);
  private destroyRef = inject(DestroyRef);

  userPlaces = this.placesService.loadedUserPlaces;
  
  ngOnInit(): void {
    this.isFetching.set(true);
    const response = this.placesService.loadUserPlaces().subscribe({
      error: (err) => {
        console.log(err);
        this.error.set(err.statusText);
      },
      complete: () => {
        this.isFetching.set(false); 
      }
    })
    
    this.destroyRef.onDestroy(() => {
      response.unsubscribe();
    })
  }

  onDeletePlace(selectedPlace: Place){
    const subscription = this.placesService.removeUserPlace(selectedPlace).subscribe();

    this.destroyRef.onDestroy(() => {
      subscription.unsubscribe();
    })
  }
}
