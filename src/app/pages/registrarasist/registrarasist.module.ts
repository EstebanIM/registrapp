import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistrarasistPageRoutingModule } from './registrarasist-routing.module';

import { RegistrarasistPage } from './registrarasist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistrarasistPageRoutingModule
  ],
  declarations: [RegistrarasistPage]
})
export class RegistrarasistPageModule {}
