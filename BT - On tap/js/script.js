var tieudeTag = document.getElementById('tieude-id')
var hinhanhTag = document.getElementById('hinhanh-id')
var noidungTag = document.getElementById('noidung-id')

function saveData() {
    console.log("Tạo bài viết thành công");
}

function deleteDate() {
    tieudeTag.value = ""
    hinhanhTag.value = ""
    noidungTag.value = ""
}