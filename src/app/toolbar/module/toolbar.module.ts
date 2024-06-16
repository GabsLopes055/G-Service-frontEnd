import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToolbarRoutingModule } from './toolbar-routing.module';
import { AngularMaterialModule } from '../../shared/angular-material/angular-material.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ToolbarRoutingModule,
    AngularMaterialModule
  ]
})
export class ToolbarModule { }
