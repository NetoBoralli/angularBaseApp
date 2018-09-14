import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Hero } from 'src/app/heroes/shared/hero.model';
import { HEROES } from 'src/app/heroes/shared/mock-heroes';
import { MessageService } from 'src/app/messages/shared/message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    this.messageService.add('Hero Service: fetched heroes');
    return of(HEROES);
  }

  getHero(id: number): Observable<Hero> {
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }
}
