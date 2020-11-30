const openModalBtn = document.getElementById('button')
const closeBtn = document.getElementById('close')
const submitBtn = document.getElementById('submit')
const modalDialog = document.getElementById('modal')
const modalForm = document.forms[0]


openModalBtn.onclick = () => modalDialog.showModal()
closeBtn.onclick = () => modalDialog.close()
submitBtn.onclick = () => modalForm.classList.add('checked')


let seconds=60;
let timer;
function myFunction() {
  if(seconds < 60) { // I want it to say 1:00, not 60
    document.getElementById("timer").innerHTML = seconds;
  }
  if (seconds >0 ) { // so it doesn't go to -1
     seconds--;
  } else {
     clearInterval(timer);
    return modalDialog.showModal()
  }
}
document.getElementById("startBtn").onclick = function() {
  if(!timer) {
    timer = window.setInterval(function() { 
      myFunction();
    }, 1000); // every second
  }
} 

document.getElementById("timer").innerHTML="1:00"; 