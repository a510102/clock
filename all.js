const hour = document.querySelector('.clock-hour');
const minute = document.querySelector('.clock-minute');
const second = document.querySelector('.clock-second');
const timearea = document.querySelector('.time-area');
let clockstr = 'Am';


getTime();
setInterval(()=>getTime(),1000);
function getTime() {
  let date = new Date();
  let hourtmie= date.getHours();
  let mintime = date.getMinutes();
  let secondtime = date.getSeconds();
  let timeStr ='';
  if (hourtmie > 12) {
    clockstr = 'Pm';
  } else {
    clockstr ="Am"
  }
  // 取角度
  let hourdeg = hourtmie * 30 - 90  ;
  let minutedeg = mintime * 6;
  let seconddeg = secondtime * 6 + 180;
  if(seconddeg > 360){
    seconddeg = seconddeg % 360
  }

  hour.style.transform =`rotate(${hourdeg}deg)`;
  
  minute.style.transform =`rotate(${minutedeg}deg)`;

  second.style.transform =`rotate(${seconddeg}deg)`;

  // console.log(second.style.trasform, minute.style.trasform)
  // showtime
  timeStr = `<p>${clockstr} ${hourtmie} : ${mintime} : ${secondtime} </p>`;
  timearea.innerHTML = timeStr;  
}
