// console.log(global);

const time = 1000;
setTimeout(() => {
    console.log(`I'm timing out in ${time} secs`);
    clearInterval(int);
}, 5000);

const int = setInterval(() => {
    console.log(`I run at every ${time} intervals`);
}, time);
