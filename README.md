### REST WEBSERVICE NODE.JS
### DATABASE: engima_transaction_db

### add
- menambahkan transaksi baru dari proses buyticket Engima ke database WS Transaksi
- Table: transaction_tbl

### vacant
- melakukan pengecekan detail input form yang dimasukkan user dan mengupdate database apabila transfer berhasil dilakukan
- mengembalikan status transfer
- Table: transaction_tbl

### own_seat
- mengembalikan virtual account untuk pembelian tiket Engima
- mengupdate database dengan entry virtual account yang dihasilkan
- Table: transaction_tbl

### seats
- mengembalikan matriks berisi tabel riwayat transaksi user Bank Pro untuk ditampilkan di Transaction History Bank Pro
- Table: transaction_tbl

### va
- mengembalikan list seluruh virtual account di database Bank Pro
- Table: transaction_tbl

### status
- mengembalikan status film untuk mengecek review
- Table: transaction_tbl

### set_seat
- mengupdate seat yang telah dibeli untuk sebuah film pada jadwal tertentu
- Table: transaction_tbl

### set_status
- mengupdate status film
- Table: transaction_tbl

### set_rating_and_review
- mengembalikan status pembayaran sebuah transaksi di WS Transaksi dengan melakukan pengecekan apabila ada pembayaran yang sesuai
- Table: transaction_tbl

### movie_details
- mengembalikan detail film untuk ditampilkan pada transaction history
- Table: transaction_tbl


### PEMBAGIAN KERJA
- CI / CD : 13517131, 13515116, 13517008
- Eksplorasi dan setup mesin deployment : 13517131
- Linting : 13517131, 13515116, 13517008


### WS-TRANSAKSI: http://54.210.33.100:3005/