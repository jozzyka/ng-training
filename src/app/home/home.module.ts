import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule,TranslateLoader } from '@ngx-translate/core';
import { HomeRoutingModule } from './home.routing';
import { HomeComponent } from './components/home/home.component';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpModule, Http} from '@angular/http';
export function HttpLoaderFactory(http: Http) {
    return new TranslateHttpLoader(http);
}

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [Http]
            }
        })
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
