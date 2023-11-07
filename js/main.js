var xuat = document.getElementById("xuat");
xuat.onclick = function () {
    var tenPhim = document.getElementById("tenPhim").value ;
    var veNguoiLon = document.getElementById("veNguoiLon").value ;
    var veTreEm = document.getElementById("veTreEm").value ;

    var veDaBan = 0;
    var doanhThu = 0;
    var tongTienTuThien = 0;
    var tienThuDuoc = 0;

    veDaBan = veNguoiLon + veTreEm ;
    doanhThu = veNguoiLon * 100000 + veTreEm * 50000 ;
    tongTienTuThien = doanhThu * 0.1 ;
    tienThuDuoc = doanhThu - tongTienTuThien ;

    // document.getElementById("inTenPhim").innerHTML = "Tên phim : " + tenPhim ;
    // document.getElementById("veDaBan").innerHTML = "Số vé đã bán : " + veDaBan ;
    // document.getElementById("doanhThu").innerHTML = "Doanh thu : " + doanhThu ;
    // document.getElementById("trichTuThien").innerHTML = "Trích % từ thiện : 10%";
    // document.getElementById("tongTienTuThien").innerHTML = "Tổng tiền trích từ thiện : " + tongTienTuThien ;
    // document.getElementById("tienThuDuoc").innerHTML = "Tổng thu được sau khi trừ : " + tienThuDuoc;

    document.getElementById("inTenPhim").innerHTML = tenPhim ;
    document.getElementById("veDaBan").innerHTML = veDaBan ;
    document.getElementById("doanhThu").innerHTML = doanhThu ;
    document.getElementById("trichTuThien").innerHTML = "10%";
    document.getElementById("tongTienTuThien").innerHTML = tongTienTuThien ;
    document.getElementById("tienThuDuoc").innerHTML = tienThuDuoc;

}