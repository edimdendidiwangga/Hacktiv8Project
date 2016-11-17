var input = [
                ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
                ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
                ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
                ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
            ]
function dataHandling(input2){
  var arr = []
    for (var i = 0; i < input2[0].length; i++) {
      arr.push([]);
    for (var j = 0; j < input2.length; j++) {
      arr[i][j] = input[j][i]
      }
    }

    return arr
}
  
  function tambah(array){
    array = dataHandling(input);
      array[0].splice(3, 2, "0005", "0006", "0007");
      array[1].splice(3, 2, "I Made Sanadhi Sutandi", "Nufus", "Sani");
      array[2].splice(3, 2, "Denpasar", "Muaro Bungo", "Jakarta");
      array[3].splice(3, 2, "13/9/1994", "10/8/1994", "19/7/1994");
      array[4].splice(3, 2, "Belajar", "Melukis", "Touring");
    return array;
  }

var bulan = [];
  for(var k = 0; k < tambah(input)[3].length; k++){
    bulan.push(tambah(input)[3][k].split("/")[1]);
  }
  
  for(var l = 0; l < bulan.length; l++){
    if(parseInt(bulan[l]) == 1){
      bulan[l] = "Januari";
    }
    else if(parseInt(bulan[l]) == 2){
      bulan[l] = "Februari";
    }
    else if(parseInt(bulan[l]) == 3){
      bulan[l] = "Maret";
    }
    else if(parseInt(bulan[l]) == 4){
      bulan[l] = "April";
    }
    else if(parseInt(bulan[l]) == 5){
      bulan[l] = "Mei";
    }
    else if(parseInt(bulan[l]) == 6){
      bulan[l] = "Juni";
    }
    else if(parseInt(bulan[l]) == 7){
      bulan[l] = "Juli";
    }
    else if(parseInt(bulan[l]) == 8){
      bulan[l] = "Agustus";
    }
    else if(parseInt(bulan[l]) == 9){
      bulan[l] = "September";
    }
    else if(parseInt(bulan[l]) == 10){
      bulan[l] = "Oktober";
    }
    else if(parseInt(bulan[l]) == 11){
      bulan[l] = "November";
    }
    else if(parseInt(bulan[l]) == 12){
      bulan[l] = "Desember";
    }
  }
bulan.sort();
tambah(input)[4].sort();
tambah(input)[3].sort();
tambah(input)[2].sort();
tambah(input)[1].sort();
tambah(input)[0].sort();

console.log("Daftar Nama ");
  for(var m = 0; m < tambah(input)[1].length; m++){
    var l = m+1;
    console.log(m + " - " + tambah(input)[1][m]);
  }
    console.log("Semua Tempat Lahir: ");
    console.log(tambah(input)[2].toString());
    console.log("Semua Bulan Kelahiran: ");
    console.log(bulan.toString());
    console.log("Semua Hobi: ");
    console.log(tambah(input)[4].toString());
