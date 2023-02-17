import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { SharedMaterialModule } from 'src/app/modules/shared-material/shared-material.module';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    SharedMaterialModule
  ]
})
export class LoginModule { }
