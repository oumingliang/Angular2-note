import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  // getHeroes(): Hero[] {
  //   return HEROES;
  // }

  // of(HEROES) 会返回一个 Observable<Hero[]>，它会发出单个值，这个值就是这些模拟英雄的数组。
  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }
  constructor(private messageService: MessageService) { }
}
