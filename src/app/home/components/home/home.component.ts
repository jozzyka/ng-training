import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  template: `
    <div>
      <h2>{{ 'HOME.TITLE' | translate }}</h2>
      <label>
        {{ 'HOME.SELECT' | translate }}
        <select #langSelect (change)="translate.use(langSelect.value)">
          <option *ngFor="let lang of translate.getLangs()" [value]="lang" [selected]="lang === translate.currentLang">{{ lang }}</option>
        </select>
      </label>
    </div>`
})
export class HomeComponent implements OnInit {

  
  public constructor(private translate:TranslateService) { 
    translate.addLangs(["en","fr","hu"]);
    translate.setDefaultLang('en');

    let browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|fr|hu/)? browserLang : 'en');
  }


  ngOnInit() {
  }

}
