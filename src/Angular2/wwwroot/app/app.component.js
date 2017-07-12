"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const hero_1 = require("./hero");
let AppComponent = class AppComponent {
    constructor() {
        this.id = 30;
        this.title = 'Tour of Heroes';
        this.heroes = [
            new hero_1.Hero(1, 'Windstorm', 'test1'),
            new hero_1.Hero(13, 'Bombasto', 'test1'),
            new hero_1.Hero(15, 'Magneta', 'test1'),
            new hero_1.Hero(20, 'Tornado', 'test1')
        ];
        this.myHero = this.heroes[0];
        this.name = "Prajeen";
        console.log("app starts....");
    }
    addHero(newHero) {
        if (newHero) {
            this.id += 1;
            this.heroes.push(new hero_1.Hero(this.id, newHero, 'test1'));
        }
    }
    onClickMe() {
        this.name = "Name changed to Kumar";
    }
    onKey(event) {
        this.name += event.target.value + ' | ';
    }
};
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        //template: '<h1>My First Angular App by {{name}}</h1> <task>loading...</task>'
        templateUrl: './views/contact.html'
    }),
    __metadata("design:paramtypes", [])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map