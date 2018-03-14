import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App, ViewController } from 'ionic-angular';
import { AddMateriaPage, CrearCursoPage } from '../pages'; 
import { TranslateService } from '@ngx-translate/core';
import {Http, Response} from '@angular/http';

/**
 * Generated class for the PageMateriaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
	segment: 'page-materia'
})
@Component({
  selector: 'page-page-materia',
  templateUrl: 'page-materia.html',
})
export class PageMateriaPage {
	items: any = [];
  loading: boolean;
  idCourse: number ;
  idTypeCourse: number ;
    itemExpandHeight: string =  "auto";
	private AddMateriaPage = AddMateriaPage


  constructor(
  	public navCtrl: NavController, 
  	public navParams: NavParams,
  	public viewCtrl: ViewController,
    public appCtrl: App,
    public http: Http

    ) {
    this.idCourse = navParams.get("idCourse");
    this.idTypeCourse = navParams.get("idTypeCourse");
  }

  ionViewDidLoad() {
    this.loading = true;
    this.http.request('https://5925e6b421cf650011fddcd7.mockapi.io/TypeCourse/'+this.idTypeCourse+'/Course/'+this.idCourse+'/Subject')
    .subscribe((res: Response) => {
      this.items = res.json();
      this.loading = false;
    });
  }

  expandItem(item){
 
        this.items.map((listItem) => {
 
            if(item == listItem){
                listItem.expanded = !listItem.expanded;
            } else {
                listItem.expanded = false;
            }
 
            return listItem;
 
        });
 
    }

    openPage(page){ 
        this.navCtrl.push(AddMateriaPage);
    }
    openPageIni(page){
        this.navCtrl.push(CrearCursoPage);
    }

}
