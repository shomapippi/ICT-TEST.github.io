function set2fig(num) {
   // 桁数が1桁だったら先頭に0を加えて2桁に調整する
   var ret;
   if( num < 10 ) { ret = "0" + num; }
   else { ret = num; }
   return ret;
}
function load_date() {
   var nowTime = new Date();
   var nowYear = set2fig( nowTime.getFullYear() );
   var nowMonth = set2fig( nowTime.getMonth() );
   var nowdate = set2fig( nowTime.getDate() );
   var nowHour = set2fig( nowTime.getHours() );
   var nowMin  = set2fig( nowTime.getMinutes() );
   var nowSec  = set2fig( nowTime.getSeconds() );
   var msg = "<p class=\"now_times\">" + nowYear + "年" + nowMonth + "月" + nowdate + "日<br>" + nowHour + "時" + nowMin + "分" + nowSec + "秒</p>";
   document.getElementById("output_date").innerHTML = msg;
}
setInterval('load_date()',1000);