import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PegawaiTambahPage } from './pegawai-tambah.page';

const routes: Routes = [
  {
    path: '',
    component: PegawaiTambahPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PegawaiTambahPageRoutingModule {}
