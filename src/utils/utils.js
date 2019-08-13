export const utils={
  getDate(){
    let now=new Date();
    let year=now.getFullYear();
    let month=now.getMonth()+1;
    let date=now.getDate();
    let hour=now.getHours()
    let min=now.getMinutes()
    let second=now.getSeconds();

    return `${year}-${formatTime(month)}-${formatTime(date)} 
    ${formatTime(hour)}:${formatTime(min)}:${formatTime(second)}`
  }
}

function formatTime(time){
 if(time<10){
   return time.toString().padStart(2,'0')
 }
 return time
}