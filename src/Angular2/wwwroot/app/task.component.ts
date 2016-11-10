import { Component } from '@angular/core';
import {TaskService} from './task.service';
import {Hero} from './hero';


@Component({
    selector: 'task',
    providers: [TaskService],
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