import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App, ViewController } from 'ionic-angular';
import { AddCursoPage, PageMateriaPage } from '../pages'; 
import { TranslateService } from '@ngx-translate/core';
import {Http, Response} from '@angular/http';
/**        
 * Generated class for the CrearCursoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
	segment:'cursos-page'
})

@Component({
  selector: 'page-crear-curso',
  templateUrl: 'crear-curso.html',
})
export class CrearCursoPage {
    items: any = [];
    typeCourses : any = []; 
    itemExpandHeight: string =  "auto";
    private AddCursoPage = AddCursoPage;
    private PageMateriaPage = PageMateriaPage;
    data: string;
    loading: boolean;
    

  constructor(
  	public navCtrl: NavController, 
  	public navParams: NavParams,
    public viewCtrl: ViewController,  
    public appCtrl: App,
    public http: Http
    
  	){
  }

  ionViewDidLoad() {
    this.loading = true;
    this.http.request('https://5925e6b421cf650011fddcd7.mockapi.io/TypeCourse')
    .subscribe((res: Response) => {
      this.typeCourses = res.json();
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
        this.navCtrl.push(AddCursoPage);
    }
    openPageIni(page,idCourse,idTypeCourse){
        this.navCtrl.push(PageMateriaPage,{
          idCourse: idCourse,
          idTypeCourse: idTypeCourse
        });
    }
    getCourses(idType) {
      this.http.request('https://5925e6b421cf650011fddcd7.mockapi.io/TypeCourse/'+idType+'/Course')
      .subscribe((res: Response) => {
        console.log(res.json);
        this.items = res.json();
        this.loading = false;
      });
    }


}
