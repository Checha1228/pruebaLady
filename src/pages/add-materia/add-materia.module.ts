import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentsModule } from '../../components/components.module';
import { IonicPageModule } from 'ionic-angular';
import { TranslateModule } from '@ngx-translate/core';
import { AddMateriaPage } from './add-materia';

@NgModule({
  declarations: [
    AddMateriaPage,
  ],
  imports: [
    IonicPageModule.forChild(AddMateriaPage),
    ComponentsModule,
    TranslateModule.forChild()
  ],
  exports: [
  	AddMateriaPage
  ],
  schemas: [
  	CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class AddMateriaPageModule {}
