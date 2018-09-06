import { Component, OnInit } from '@angular/core';

import { Hero } from 'src/app/heroes/shared/hero.model';
import { HEROES } from 'src/app/heroes/shared/mock-heroes';

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
	heroes = HEROES;
	selectedHero: Hero;

	constructor() { }

	ngOnInit() {
	}

	onSelect(hero) {
		console.log(hero);
		this.selectedHero = hero;
	}

}
