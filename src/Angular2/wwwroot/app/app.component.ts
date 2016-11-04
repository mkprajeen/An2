import { Component } from '@angular/core';
import { Hero } from './hero';


@Component({
    selector: 'my-app',
    //template: '<h1>My First Angular App by {{name}}</h1> <task>loading...</task>'
    templateUrl: './views/contact.html'
})
export class AppComponent {
    id: number = 30;
    name: string;
    title = 'Tour of Heroes';
    heroes = [
        new Hero(1, 'Windstorm','test1'),
        new Hero(13, 'Bombasto',  'test1'),
        new Hero(15, 'Magneta', 'test1'),
        new Hero(20, 'Tornado', 'test1')
    ];
    myHero = this.heroes[0];

    constructor()
    {
        this.name = "Prajeen";
        console.log("app starts....");
    }
    addHero(newHero: string) {
        if (newHero) {
            this.id += 1;
            this.heroes.push(new Hero(this.id, newHero,  'test1'));
        }
    }
    onClickMe()
    {
        this.name = "Name changed to Kumar";
    }

    onKey(event: any) {
        this.name += event.target.value + ' | ';
    }


}




