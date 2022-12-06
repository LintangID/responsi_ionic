import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-pegawai-edit',
  templateUrl: './pegawai-edit.page.html',
  styleUrls: ['./pegawai-edit.page.scss'],
})
export class PegawaiEditPage implements OnInit {
  id: any;
  nama: any;
  alamat: any;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public _apiService: ApiService
  ) {
    this.route.params.subscribe((param: any) => {
      this.id = param.id;
      console.log(this.id);
      this.ambilPegawai(this.id);
    });
  }

  ngOnInit() {}

  ambilPegawai(id: any) {
    this._apiService.lihat(id, '/lihatMatakuliah.php?id=').subscribe({
      next: (hasil: any) => {
        console.log('sukses', hasil);
        let pegawai = hasil;
        this.nama = pegawai.nama;
        this.alamat = pegawai.alamat;
      },
      error: (error: any) => {
        this._apiService.notif('gagal ambil data');
      },
    });
  }

  editPegawai() {
    let data = {
      id: this.id,
      nama: this.nama,
      alamat: this.alamat,
    };
    this._apiService.edit(data, '/edit_pegawai.php').subscribe({
      next: (hasil: any) => {
        console.log(hasil);
        this.id = '';
        this.nama = '';
        this.alamat = '';
        this._apiService.notif('berhasil edit Pegawai');
        this.router.navigateByUrl('/pegawai');
      },
      error: (err: any) => {
        this._apiService.notif('gagal edit Pegawai');
      },
    });
  }
}
