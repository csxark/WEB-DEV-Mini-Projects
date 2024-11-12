let intervalid;
const randomcolor = function () {
    const hex ='0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
        }
    return color;
}

const startchangecolor =function () {

    function changebgcolor() {
        document.body.style.backgroundColor=randomcolor();
    };
    if (!intervalid) {
        intervalid=setInterval(changebgcolor, 1000);
    };
};

const stopchangecolor = function () {
    clearInterval(intervalid);
    intervalid=null;
};

document.querySelector("#start").addEventListener('click',startchangecolor);
document.querySelector("#stop").addEventListener('click',stopchangecolor);


