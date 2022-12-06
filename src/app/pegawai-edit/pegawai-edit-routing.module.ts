import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PegawaiEditPage } from './pegawai-edit.page';

const routes: Routes = [
  {
    path: '',
    component: PegawaiEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PegawaiEditPageRoutingModule {}
