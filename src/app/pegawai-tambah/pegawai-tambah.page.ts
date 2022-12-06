import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-pegawai-tambah',
  templateUrl: './pegawai-tambah.page.html',
  styleUrls: ['./pegawai-tambah.page.scss'],
})
export class PegawaiTambahPage implements OnInit {
  id: any;
  nama: any;
  alamat: any;
  constructor(private router: Router, public _apiService: ApiService) {}

  ngOnInit() {}

  addPegawai() {
    let data = {
      nama: this.nama,
      alamat: this.alamat,
    };
    this._apiService.tambah(data, '/tambah_pegawai.php').subscribe({
      next: (hasil: any) => {
        console.log(hasil);
        this.id = '';
        this.nama = '';
        this.alamat = '';
        this._apiService.notif('berhasil input Pegawai');
        this.router.navigateByUrl('/pegawai');
      },
      error: (err: any) => {
        this._apiService.notif('gagal input Pegawai');
      },
    });
  }
}
