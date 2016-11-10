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
const core_1 = require('@angular/core');
//import {TASKS} from './mock-tasks';
const hero_1 = require('./hero');
let TaskService = class TaskService {
    getTasks() {
        return [
            new hero_1.Hero(1, 'Windstorm', 'test1'),
            new hero_1.Hero(13, 'Bombasto', 'test1'),
            new hero_1.Hero(15, 'Magneta', 'test1'),
            new hero_1.Hero(20, 'Tornado', 'test1')
        ];
        //return TASKS;
    }
};
TaskService = __decorate([
    core_1.Injectable(), 
    __metadata('design:paramtypes', [])
], TaskService);
exports.TaskService = TaskService;
//# sourceMappingURL=task.service.js.map