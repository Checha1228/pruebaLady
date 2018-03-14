import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';

/**
 * Generated class for the AddMateriaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
	segment: 'add-materia'
})
@Component({
  selector: 'page-add-materia',
  templateUrl: 'add-materia.html',
})
export class AddMateriaPage {

  constructor(
  	public navCtrl: NavController, 
  	public navParams: NavParams,
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddMateriaPage');
  }

}
