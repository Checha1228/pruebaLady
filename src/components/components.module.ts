import { NgModule } from '@angular/core';
import { IonicModule }  from 'ionic-angular'

import { HeaderComponent } from './header/header';
import { AcordeonComponent } from './acordeon/acordeon';
@NgModule({
	declarations: [
		HeaderComponent,
    AcordeonComponent
	],
	imports: [
		IonicModule
	],
	exports: [
		HeaderComponent,
    AcordeonComponent
	]
})
export class ComponentsModule {}
