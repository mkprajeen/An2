import { Component } from '@angular/core';
import {TaskService} from './task.service';
import {Hero} from './hero';

import {HERO_DI_CONFIG} from  './app.config';
import {APP_CONFIG} from  './app.config';
import { Inject } from '@angular/core';
import {AppConfig} from  './app.config';


@Component({
    selector: 'task',
    providers: [TaskService],   //Serive will be available to this componet and their childern
    //template: '<h4>My Tasks</h4>'
    templateUrl: './views/taskview.html'
})
export class TaskComponent {
    heroes: Hero[];
    appname: string;
    constructor(tasks: TaskService, @Inject(APP_CONFIG) config:AppConfig)
    {
        this.heroes = tasks.getTasks();
        this.appname = config.title;
    
    }
   
    
}