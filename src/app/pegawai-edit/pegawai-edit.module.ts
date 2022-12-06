import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PegawaiEditPageRoutingModule } from './pegawai-edit-routing.module';

import { PegawaiEditPage } from './pegawai-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PegawaiEditPageRoutingModule
  ],
  declarations: [PegawaiEditPage]
})
export class PegawaiEditPageModule {}
