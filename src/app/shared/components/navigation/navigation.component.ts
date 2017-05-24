import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from '../../shared.barrel';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  public constructor(public authService: AuthService,private translate:TranslateService) {
    translate.addLangs(["en","fr","hu"]);
    translate.setDefaultLang('en');

    let browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|fr|hu/)? browserLang : 'en');
 
  }

  public ngOnInit() {
    //
  }

}
