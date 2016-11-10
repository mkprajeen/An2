import {Injectable} from '@angular/core';
//import {TASKS} from './mock-tasks';
import {Hero} from './hero';

@Injectable()
export class TaskService {
    getTasks()
    {
        return [
            new Hero(1, 'Windstorm', 'test1'),
            new Hero(13, 'Bombasto', 'test1'),
            new Hero(15, 'Magneta', 'test1'),
            new Hero(20, 'Tornado', 'test1')
        ];
        //return TASKS;
    }
}