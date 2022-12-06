import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AutoLoginGuard } from './guards/auto-login.guard';
import { AuthGuard } from './guards/auth.guard';
const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
    canLoad: [AuthGuard], // Secure all child pages
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./login/login.module').then((m) => m.LoginPageModule),
    canLoad: [AutoLoginGuard],
  },
  {
    path: 'pegawai',
    loadChildren: () => import('./pegawai/pegawai.module').then( m => m.PegawaiPageModule)
  },
  {
    path: 'pegawai-tambah',
    loadChildren: () => import('./pegawai-tambah/pegawai-tambah.module').then( m => m.PegawaiTambahPageModule)
  },
  {
    path: 'pegawai-edit',
    loadChildren: () => import('./pegawai-edit/pegawai-edit.module').then( m => m.PegawaiEditPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
