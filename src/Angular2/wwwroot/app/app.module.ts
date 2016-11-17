import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }   from './app.component';
import { TaskComponent }   from './task.component';
import { HeroFormComponent} from './hero-form.component'
import { TextBoxComponent} from './controlviewmodel/textbox.component'
import {Logger} from './logger.service'

import {OpaqueToken} from '@angular/core';
import {HERO_DI_CONFIG} from  './app.config';
import {APP_CONFIG} from  './app.config';


@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [AppComponent, TaskComponent, HeroFormComponent, TextBoxComponent],
    providers: [Logger, { provide: APP_CONFIG, useValue: HERO_DI_CONFIG }], //application wide services
    bootstrap: [AppComponent]
})
export class AppModule { }
