function terimainput(){
  let x=document.getElementById("saran").nama.value;
  let y=document.getElementById("saran").email.value;
  let z=document.getElementById("saran").judulweb.value;
  let a=document.getElementById("saran").komentar.value;
  let atpos=y.indexOf("@");
  let dotpos=y.lastIndexOf(".");

  if (x=="") {
    alert("Nama Wajib diisi");
    return false;
  }
  if (y==""){
    alert("Email Wajib diisi");
    return false;
  }
  if (atpos<1) {
    alert("Isi Email dengan Benar");
    return false;
  }
  if (dotpos<atpos+2) {
    alert("Isi Email dengan Benar");
    return false;
  }
  if (dotpos+1>=y.length) {
    alert("Isi Email dengan Benar");
    return false;
  }

  let tabel=document.getElementById("tabelinput");
  let row=tabel.insertRow(1);
  let cell1=row.insertCell(0);
  let cell2=row.insertCell(1);
  let cell3=row.insertCell(2);
  let cell4=row.insertCell(3);

  cell1.innerHTML = x;
  cell2.innerHTML = y;
  cell3.innerHTML = z;
  cell4.innerHTML = a;

  alert("Komentar berhasil dikirim");

}
