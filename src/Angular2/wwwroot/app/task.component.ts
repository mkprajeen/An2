import { Component } from '@angular/core';
import {TaskService} from './task.service';
import {Hero} from './hero';


@Component({
    selector: 'task',
    providers: [TaskService],   //Serive will be available to this componet and their childern
    //template: '<h4>My Tasks</h4>'
    templateUrl: './views/taskview.html'
})
export class TaskComponent {
    heroes: Hero[];
    constructor(tasks: TaskService)
    {
        this.heroes = tasks.getTasks();
    
    }
    //constructor()
    //{
    //    this.heroes = new TaskService().getTasks();
    //}

    
}