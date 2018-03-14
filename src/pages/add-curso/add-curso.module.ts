import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentsModule } from '../../components/components.module';
import { IonicPageModule } from 'ionic-angular';
import { AddCursoPage } from './add-curso';       
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [
    AddCursoPage,
  ],
  imports: [
    IonicPageModule.forChild(AddCursoPage),
    ComponentsModule,
    TranslateModule.forChild()
  ],
  exports: [
  	AddCursoPage
  ],
  schemas: [
  	CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class AddCursoPageModule {}
