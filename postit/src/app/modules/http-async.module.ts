import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { BaseUrlInterceptor } from './http-async/interceptors/base-url.interceptor';
import { BearerTokenInterceptor } from './http-async/interceptors/bearer-token.interceptor';
import { HttpAsyncService } from './http-async/services/http.async.service';


@NgModule({
  providers: [
    HttpAsyncService,
    { provide: HTTP_INTERCEPTORS, useClass: BaseUrlInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: BearerTokenInterceptor, multi: true },
  ],
})
export class HttpAsyncModule {}