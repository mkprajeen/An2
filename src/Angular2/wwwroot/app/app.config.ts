﻿import {OpaqueToken} from '@angular/core';
export interface AppConfig
{
    apiEndpoint: string;
    title: string;
}

export const HERO_DI_CONFIG: AppConfig = {
    apiEndpoint: 'api.heroes.com',
    title: 'Angular2Sol-> Dependency Injection'
};

export let APP_CONFIG = new OpaqueToken('app.config');