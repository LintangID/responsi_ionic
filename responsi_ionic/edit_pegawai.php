<?php 
require 'koneksi.php'; 
$input = file_get_contents('php://input'); 
$data = json_decode($input,true); 
$pesan = []; 

$id = trim($data['id']); 
$nama = trim($data['nama']); 
$alamat = trim($data['alamt']); 
//jika nama pegawai dan alamat tidak kosong
if ($nama != '' and $alamat != '') { 
 $query = mysqli_query($koneksi, "update pegawai set 
nama='$nama',alamat='$alamat' where id='$id'"); 
 $pesan['status'] = 'berhasil'; 
} else { 
 $pesan['status'] = 'gagal'; 
} 
echo json_encode($pesan); 
echo mysqli_error($koneksi);


?>