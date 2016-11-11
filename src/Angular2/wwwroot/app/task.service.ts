import {Injectable} from '@angular/core';
import {Hero} from './hero';
import { Logger }  from './logger.service';

@Injectable()
export class TaskService {
    constructor(private logger: Logger) { }
    getTasks()
    {
        this.logger.log('Service Call Getting Tasks  ...');
        return [
            new Hero(1, 'Windstorm', 'test1'),
            new Hero(13, 'Bombasto', 'test1'),
            new Hero(15, 'Magneta', 'test1'),
            new Hero(20, 'Tornado', 'test1')
        ];

    }
}