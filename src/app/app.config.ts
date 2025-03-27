import {ApplicationConfig, provideZoneChangeDetection} from '@angular/core';
import {provideRouter, withComponentInputBinding} from '@angular/router';

import {routes} from './app.routes';
import {provideHttpClient, withInterceptors} from '@angular/common/http';
import {cookieInterceptor} from './infrastructure/cookie.interceptor';
import {refCount} from 'rxjs';
import {unauthorizedInterceptor} from './infrastructure/unauthorized.interceptor';

export const appConfig: ApplicationConfig = {
  providers:
    [provideZoneChangeDetection({eventCoalescing: true}),
      provideRouter(routes, withComponentInputBinding()),
      provideHttpClient(withInterceptors([cookieInterceptor, unauthorizedInterceptor]))
    ]
};
