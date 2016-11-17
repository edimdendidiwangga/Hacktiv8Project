var input = [
                ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
                ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
                ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
                ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
            ]
function dataHandling(input2){

  var arr = []

    for (var i = 0; i < input2.length; i++) {

      console.log("Nomor ID: " + input2[i][0]);
      console.log("Nama Lengkap: " + input2[i][1]);
      console.log("TTL: " + input2[i][2] + " " + input2[i][3]);
      console.log("Hobby: " + input2[i][4]);

      arr.push([]);
      for (var j = 0; j < input2.length; j++) {
        arr[i][j] = input[j][i]

      }
    }

    return arr
}
console.log(dataHandling(input))
