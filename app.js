const loadText = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')

let load = 0;

let intrvl = setInterval(blurring, 30);

function blurring(){
    
    load++

    if(load > 99){
        clearInterval(intrvl)
    }

    loadText.innerText = `${load}%`
    loadText.style.opacity = outcome(load, 0, 100, 1, 0);
    
    bg.style.filter = `blur(${outcome(load, 0, 100, 30, 0)}px)`
    bg.style.transform = `scale(${outcome(load, 0, 100, 1.15, 1)})`
}

const outcome = (num, in_min, in_max, out_min, out_max) => {return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;}

