import { Injectable } from '@angular/core';
import { Hero } from './hero';
import {HEROES} from './mock-heroes';
import { Observable } from 'rxjs/Rx';
import { of } from 'rxjs/observable/of';
import { MessageService } from './message.service';

@Injectable()
export class HeroService {

  constructor(private messageService: MessageService) { }

getHeroes():Observable<Hero[]> {
  // TODO: send message after fetching the heroes
  this.messageService.add('HeroService: fetched heroes');
  return of (HEROES);
}
}