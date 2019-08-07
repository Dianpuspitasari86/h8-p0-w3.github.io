var input = ['0001', 'Roman Alamsyah', 'Bandar Lampung', '21/05/1989', 'Membaca']

function dataHandling2(input) {
   input.splice(0, 5, '0001', 'Roman Alamsyah Elsharawy', 'Provinsi Bandar Lampung',  '21/05/1989', 'Pria', 'SMA Internasional Metro')
   console.log(input);

   var date = input[3].split('/');
   var month = Number(date[1][1]);
   
   switch(month) {
      case 1 : month = 'January'; break;
      case 2 : month = 'Februari'; break;
      case 3 : month = 'Maret'; break;
      case 4 : month = 'April'; break;
      case 5 : month = 'Mei'; break;
      case 6 : month = 'Juni'; break;
      case 7 : month = 'Juli'; break;
      case 8 : month = 'Agustus'; break;
      case 9 : month = 'September'; break;
      case 10: month = 'Oktober'; break;
      case 11: month = 'November'; break;
      case 12: month = 'Desember'; break;
   }
   console.log(month);

   var sorting = date.sort(function(a, b){
      return b-a
   })
   console.log(sorting);

   var join = sorting.join('-') 
      console.log(join);

   var name = input[1].slice(0,15)
      console.log(name)
} 

dataHandling2(input);