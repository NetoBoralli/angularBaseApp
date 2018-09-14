import { Component, OnInit } from '@angular/core';

import { Hero } from 'src/app/heroes/shared/hero.model';
import { HeroService } from 'src/app/heroes/shared/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[];

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes() {
    this.heroService.getHeroes().subscribe(data => {
      this.heroes = data;
    });
  }
}
