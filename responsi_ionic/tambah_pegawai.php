<?php 
require 'koneksi.php'; 
$input = file_get_contents('php://input'); 
$data = json_decode($input, true); 
$pesan = []; 
$nama = trim($data['nama']); 
$alamat = trim($data['alamat']); 
//jika nama pegawai dan alamat tidak kosong
if ($nama != '' and $alamat != '') { 
 $query = mysqli_query($koneksi, "insert into pegawai(nama,alamat) values('$nama','$alamat')"); 
 $pesan['status'] = 'berhasil'; 
} else { 
 $pesan['status'] = 'gagal'; 
} 
echo json_encode($pesan); 
echo mysqli_error($koneksi);

?>