import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  template: `
    <div>
      <h2>{{ 'HOME.TITLE' | translate }}</h2>
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
