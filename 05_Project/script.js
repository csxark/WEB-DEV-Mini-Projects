const clock=document.querySelector('#clock')
const D_te=document.querySelector('#date')
setInterval(function() {
    let date=new Date();
    D_te.innerHTML=date.toLocaleDateString();
    clock.innerHTML=date.toLocaleTimeString();
},1000) 