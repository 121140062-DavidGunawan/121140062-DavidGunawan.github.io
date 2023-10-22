document.getElementById("listsidebar1").addEventListener("click", function() {
  window.location.href = "../home/index.html";
});
document.getElementById("listsidebar2").addEventListener("click", function() {
  window.location.href = "../form/form.html";
});
document.getElementById("listsidebar3").addEventListener("click", function() {
  window.location.href = "../table/table.html";
});

let datatable = []
var dummy1 = ["Budi", 121140104, "Farmasi", "budi@121140104@student.itera.ac.id", "1248fafj25", "Laki-Laki", "12/04/2003", "Jl. Panjaitan No 2"];
datatable.push(dummy1);
var dummy2 = ["Adi", 121150052, "Teknik Geomatika", "adi@121150052@student.itera.ac.id", "4gi285g9fi", "Laki-Laki", "30/09/2002", "Jl. Antasari No 32"];
datatable.push(dummy2);
var dummy3 = ["Adel", 121142085, "Teknik Elektro", "adel@121142085@student.itera.ac.id", "gsobj8204fa", "Perempuan", "03/04/2003", "Jl. Diponegoro No 80"];
datatable.push(dummy3);
var dummy4 = ["David", 121140062, "Teknik Informatika", "david@121140062@student.itera.ac.id", "asifja89fjw", "Laki-Laki", "02/01/2003", "Jl. Sulaiman No 31"];
datatable.push(dummy4);
var dummy5 = ["Novia", 121420067, "Teknik Mesin", "novia@121420067@student.itera.ac.id", "oajvaijv34", "Perempuan", "30/11/2003", "Jl. Sultan Agung No 2"];
datatable.push(dummy5);

const itemtable = JSON.parse(sessionStorage.getItem('ArrayList'));

if (sessionStorage.length>0) {
  datatable = itemtable
  sessionStorage.setItem('ArrayList', JSON.stringify(datatable));
}
function createtable () {
for (let i=0; i<= datatable.length; i++) {
    var nama = datatable[i][0];
    var nim = datatable[i][1];
    var prodi = datatable[i][2];
    var email = datatable[i][3];
    var pw = datatable[i][4];
    var kelamin = datatable[i][5];
    var tgllahir = datatable[i][6];
    var alamat = datatable[i][7];

    var tr = document.createElement('tr');

    var td1 = tr.appendChild(document.createElement('td'));
    var td2 = tr.appendChild(document.createElement('td'));
    var td3 = tr.appendChild(document.createElement('td'));
    var td4 = tr.appendChild(document.createElement('td'));
    var td5 = tr.appendChild(document.createElement('td'));
    var td6 = tr.appendChild(document.createElement('td'));
    var td7 = tr.appendChild(document.createElement('td'));
    var td8 = tr.appendChild(document.createElement('td'));


    td1.innerHTML=nama;
    td2.innerHTML=nim;
    td3.innerHTML=prodi;
    td4.innerHTML=email;
    td5.innerHTML=pw;
    td6.innerHTML=kelamin;
    td7.innerHTML=tgllahir;
    td8.innerHTML=alamat;

    document.getElementById("tabel").appendChild(tr);
}
}

createtable();