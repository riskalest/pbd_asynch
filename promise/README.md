echo " # Promise :
Promise adalah object yang merepresentasikan nilai hasil 
dari sebuah operasi asynchronous. Isi dari Promise hanya 
dapat diketahui ketika Promise tersebut dieksekusi.
Promise memiliki 3 kondisi nilai balik:

    Pending, pada kondisi ini nilai balik belum dapat ditentukan karena operasi asynchronous belum selesai. Dengan analogi hutang di atas, ini adalah kondisi saat kamu baru saja meminjamkan uangmu.
    Fulfilled, operasi asynchronous sudah selesai dan Promise memiliki nilai. Ini adalah kondisi saat temanmu sukses membayar hutangnya.
    Rejected, operasi asynchronous gagal diselesaikan. Nilai balik dari Promise tersebut isinya alasan kenapa operasi gagal diselesaikan. Sama seperti saat kamu menagih hutang temanmu dan dia gagal bayar, maka dia akan memberikan alasan."