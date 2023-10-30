function saveData() {
    var tieudeTag = document.getElementById("tieude_id");
    var noidungTag = document.getElementById("noidung_id");
    
    let a = tieudeTag.value;
    let b = noidungTag.value;

    if(a.length >= 10 && a.length <= 200) {
        if(b.length >= 20 && b.length <= 500) {
            console.log("Tạo bài viết thành công");
        }
    }
}

function deleteDate() {
    var tieudeTag = document.getElementById("tieude_id");
    var hinhanhTag = document.getElementById("hinhanh_id");
    var noidungTag = document.getElementById("noidung_id");
    tieudeTag.value = "";
    hinhanhTag.value = "";
    noidungTag.value = "";
}