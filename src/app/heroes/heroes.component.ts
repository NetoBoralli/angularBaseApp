import { Component, OnInit } from '@angular/core';

import { Hero } from 'src/app/heroes/shared/hero.model';
import { HeroService } from 'src/app/heroes/shared/hero.service';

@Component({
	selector: 'app-heroes',
	templateUrl: './heroes.component.html',
	styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

	hero: Hero = {
		id: 1,
		name: 'Windstorm'
	};
	heroes: Hero[];
	selectedHero: Hero;

	constructor(private heroService: HeroService) { }

	ngOnInit() {
		this.getHeroes();
	}

	onSelect(hero) {
		this.selectedHero = hero;
	}

	getHeroes() {
		this.heroService.getHeroes().subscribe(data => {
			this.heroes = data;
		});
	}
}
