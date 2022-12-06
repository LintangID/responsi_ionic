import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PegawaiTambahPageRoutingModule } from './pegawai-tambah-routing.module';

import { PegawaiTambahPage } from './pegawai-tambah.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PegawaiTambahPageRoutingModule
  ],
  declarations: [PegawaiTambahPage]
})
export class PegawaiTambahPageModule {}
