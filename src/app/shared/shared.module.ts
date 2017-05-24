import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule,TranslateLoader } from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { Http } from '@angular/http';
import {
  NotFoundComponent,
  NavigationComponent,
  ApiService,
  AuthService,
  AuthGuard
} from './shared.barrel';

export function HttpLoaderFactory(http: Http){
  return new TranslateHttpLoader(http);
}

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [Http]
      }
 } )
  ],
  exports: [
    NotFoundComponent,
    NavigationComponent
  ],
  declarations: [
    NotFoundComponent,
    NavigationComponent
  ],
  providers: [
    ApiService,
    AuthService,
    AuthGuard
  ]
})
export class SharedModule { }
