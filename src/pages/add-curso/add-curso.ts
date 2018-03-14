import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AddCursoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
	segment: 'add-curso'
})
@Component({
  selector: 'page-add-curso',
  templateUrl: 'add-curso.html',
})
export class AddCursoPage {

  constructor(
  	public navCtrl: NavController, 
  	public navParams: NavParams
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddCursoPage');
  }

}
