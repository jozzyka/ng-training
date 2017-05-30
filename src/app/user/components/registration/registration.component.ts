import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Response } from '@angular/http';
import { TranslateService } from '@ngx-translate/core';
import { User, UserService } from '../../user.barrel';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  public loading: boolean = true;
  public user: User = new User();;
  public form = new FormGroup(
    {
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      passwordConfirm: new FormControl('', [Validators.required, Validators.minLength(6)]),
    },
    RegistrationComponent.passwordMatchValidator
    
  );

  public constructor(private _userService: UserService,private translate:TranslateService) {
    translate.addLangs(["en","fr","hu","ci"]);
    translate.setDefaultLang('en');

    let browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|fr|hu|ci/)? browserLang : 'en');
    
  }

  public ngOnInit() {
    this.loading = false;
  }

  public register() {
    if (this.loading) {
      return;
    }
    this.loading = true;
    this._userService.register(this.user).subscribe(
      (response: Response) => {
        console.log(response);
        window.alert(this.translate.get('REGISTRATION.SUCCESS').subscribe((res: string) => {
          console.log(res);
        }));
        this.user = new User();
        this.form.reset();
        this.loading = false;
      },
      (error: any) => {
        console.log(error);
        window.alert(this.translate.get('REGISTRATION.FAILED').subscribe((res: string) => {
          console.log(res);
        }));
        this.loading = false;
      },
      () => {
        //
      }
    );
  }

  public static passwordMatchValidator(g: FormGroup) {
    return g.get('password').value === g.get('passwordConfirm').value ? null : {'mismatch': true};
  }

}
