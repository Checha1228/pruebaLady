import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CrearCursoPage } from '../pages/pages';
import { TranslateService } from '@ngx-translate/core';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = CrearCursoPage;
  private lang:string;

  constructor(
    platform: Platform, 
    statusBar: StatusBar, 
    splashScreen: SplashScreen,
    private translate: TranslateService
    ) {
    
    this.initTranslate();
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  initTranslate() {
        this.translate.setDefaultLang('en');
        this.lang="en";
        
        if (this.translate.getBrowserLang() !== undefined) {
            this.translate.use(this.translate.getBrowserLang());
            this.lang=this.translate.getBrowserLang();
        } else {
            this.translate.use('en');
            this.lang="en";
        }
        
    }
}

