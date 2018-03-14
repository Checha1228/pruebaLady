import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ComponentsModule } from '../../components/components.module';
import { IonicPageModule } from 'ionic-angular';
import { CrearCursoPage } from './crear-curso';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    CrearCursoPage,
  ],
  imports: [
    HttpModule,
    IonicPageModule.forChild(CrearCursoPage),
    TranslateModule.forChild(),
    ComponentsModule
  ],
  exports: [
  	CrearCursoPage
  ],
  schemas: [
  	CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class CrearCursoPageModule {}
