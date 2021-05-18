function getEle(ele) {
    return document.getElementById(ele)
}

var valida = new Validation()
arrNhanVien = []
getEle("btnXacNhan").addEventListener("click", function () {

    var nhanVien = new NhanVien();
    nhanVien.maNhanVien = getEle("maNhanVien").value;
    nhanVien.tenNhanVien = getEle("tenNhanVien").value;
    nhanVien.luongCoBan = getEle("luongCoBan").value;
    nhanVien.gioLam = getEle("gioLam").value;
    nhanVien.heSoChucVu = getEle("chucVu").value;
    nhanVien.email = getEle("email").value;
    nhanVien.phone = getEle("sdt").value;

    // Tạo một cái cờ và gán cho nó là true
    var valid = true

    // Kiểm tra rổng khi người dùng nhập
    valid &= valida.kiemTraRong(nhanVien.maNhanVien, 'error_required_maNhanVien', 'Mã nhân viên') & valida.kiemTraRong(nhanVien.tenNhanVien, 'error_required_tenNhanVien', 'Tên nhân viên ') & valida.kiemTraRong(nhanVien.email, 'error_required_email', 'Email') & valida.kiemTraRong(nhanVien.phone, 'error_required_phone', 'Phone') & valida.kiemTraRong(nhanVien.luongCoBan, 'error_required_luongCoBan', 'Lương cơ bản') & valida.kiemTraRong(nhanVien.gioLam, 'error_required_gioLam', 'Giờ làm')

    // Kiểm tra định dạng ký tự
    valid &= valida.kiemTraEmail(nhanVien.email, 'error_regex_email', 'Email')


    // Kiểm tra độ dài ký tự
    valid &= valida.kiemTraDoDai(nhanVien.tenNhanVien, 4, 6, 'error_min_max_tenNhanVien', 'Tên ')

    if (!valid) {
        return
    }

    arrNhanVien.push(nhanVien)
    var tagChucVu = getEle("chucVu");
    var opTagChucVu = tagChucVu[tagChucVu.selectedIndex];
    nhanVien.chucVu = opTagChucVu.innerHTML;

    renderTable(arrNhanVien);
})
function renderTable(arrNV) {
    var contentTable = '';
    for (var i = 0; i < arrNV.length; i++) {
        var nv = arrNV[i];
        var nhanVien = new NhanVien(nv.maNhanVien, nv.tenNhanVien, nv.email, nv.phone, nv.chucVu, nv.luongCoBan, nv.gioLam, nv.heSoChucVu)
        contentTable += `
            <tr>
            <td>${nhanVien.maNhanVien}</td>
            <td>${nhanVien.tenNhanVien}</td>
            <td>${nhanVien.chucVu}</td>
            <td>${nhanVien.luongCoBan}</td>
            <td>${nhanVien.tinhLuongNV()}</td>
            <td>${nhanVien.gioLam}</td>
            <td>${nhanVien.xepLoai()}</td>
            <td><button class ="btn btn-danger" onclick = xoaSinhVien(${nhanVien.maNhanVien})>Xoa</button></td>
            <td><button class = "btn btn-info" onclick = suaNhanVien(${nhanVien.maNhanVien})>Sua</button></td>
            </tr>
            `
    }
    document.querySelector("#btlTbody").innerHTML = contentTable;
}


function xoaSinhVien(maSV) {
    for (var i = arrNhanVien.length - 1; i >= 0; i--) {
        var nv = arrNhanVien[i]
        console.log(nv)
        if (nv.maNhanVien == maSV) {
            arrNhanVien.splice(i, 1)
        }
    }
    renderTable(arrNhanVien)
}

function suaNhanVien(maSV) {
    for (i = 0; i < arrNhanVien.length; i++) {
        var nv = arrNhanVien[i]
        if (nv.maNhanVien == maSV) {
            getEle("maNhanVien").value = nv.maNhanVien;
            getEle("tenNhanVien").value = nv.tenNhanVien;
            getEle("luongCoBan").value = nv.luongCoBan;
            getEle("gioLam").value = nv.gioLam;
            getEle("chucVu").innerHTM = nv.chucVu;
        }
    }
}

getEle("btnLuu").addEventListener("click", function () {
    var nhanVien = new NhanVien();

    nhanVien.maNhanVien = getEle("maNhanVien").value;
    nhanVien.tenNhanVien = getEle("tenNhanVien").value;
    nhanVien.luongCoBan = getEle("luongCoBan").value;
    nhanVien.gioLam = getEle("gioLam").value;
    nhanVien.chucVu = getEle("chucVu").value;

    for (var i = 0; i < arrNhanVien.length; i++) {
        var nvUpdate = arrNhanVien[i]
        if (nvUpdate.maNhanVien === nhanVien.maNhanVien) {
            nvUpdate.maNhanVien = nhanVien.maNhanVien;
            nvUpdate.tenNhanVien = nhanVien.tenNhanVien;
            nvUpdate.luongCoBan = nhanVien.luongCoBan;
            nvUpdate.gioLam = nhanVien.gioLam;
            nvUpdate.chucVu = nhanVien.chucVu;
        }
    }
    renderTable(arrNhanVien);
})