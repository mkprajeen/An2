import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }   from './app.component';
import { TaskComponent }   from './task.component';
import { HeroFormComponent} from './hero-form.component'


@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [AppComponent, TaskComponent, HeroFormComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }