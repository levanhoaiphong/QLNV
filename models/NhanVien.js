function NhanVien(maNV, tenNV, email, phone, chucVu, luongCoBan, gioLam, heSoChucVu) {
    this.maNhanVien = maNV;
    this.tenNhanVien = tenNV;
    this.email = email;
    this.phone = phone;
    this.chucVu = chucVu;
    this.luongCoBan = luongCoBan;
    this.gioLam = gioLam;
    this.heSoChucVu = heSoChucVu;

    this.tinhLuongNV = function () {
        var tinhLuong = this.luongCoBan * this.heSoChucVu
        return tinhLuong;
    };

    this.xepLoai = function () {
        var xepLoai = '';
        if (this.gioLam > 120 && this.gioLam > 100) {
            xepLoai = 'Xuat xac'
        } else if (this.gioLam <= 100 && this.gioLam > 80) {
            xepLoai = 'Gioi'
        } else if (this.gioLam <= 80 && this.gioLam > 60) {
            xepLoai = 'Kha'
        } else if (this.gioLam <= 60 && this.gioLam > 40) {
            xepLoai = 'Trung binh'
        } else {
            xepLoai = 'Yeu'
        }
        return xepLoai
    };
}
