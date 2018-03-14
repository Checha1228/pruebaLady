import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ComponentsModule } from '../../components/components.module';
import { IonicPageModule } from 'ionic-angular';
import { PageMateriaPage } from './page-materia';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    PageMateriaPage,
  ],
  imports: [
    HttpModule,
    IonicPageModule.forChild(PageMateriaPage),
    ComponentsModule,
    TranslateModule.forChild()
  ],
  exports: [
  	PageMateriaPage
  ],
  schemas: [
  	CUSTOM_ELEMENTS_SCHEMA
  ],
  })
export class PageMateriaPageModule {}
