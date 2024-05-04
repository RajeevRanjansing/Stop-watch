
let hr=0;
let min=0;
let sec=0;
let mili=0;

let time=false;

function start(){
    time=true;
    myFun();
}


function stop(){
    time=false;
    myFun();
}

function restart(){
    location.reload();
}

function myFun(){
    if(time==true){
        mili=mili+1;
        if(mili==100){
            sec=sec+1;
            mili=0;
        }
        if(sec==60){
            min=min+1;
            sec=0;
        }
        if(min==60){
            hr=hr+1;
            min=0;
        }

        let getSec = sec;
        let getMin = min;
        let getHr = hr;

        if(sec < 10){
            getSec="0"+ sec;
        }
        if(min < 10){
            getMin="0" + min;
        }

        if(hr < 10){
            getHr="0"+ hr;
        }

        setTimeout("myFun()",10)
       document.getElementById("mili").innerHTML=mili;
       document.getElementById("sec").innerHTML=getSec;
       document.getElementById("min").innerHTML=getMin;
       document.getElementById("hr").innerHTML=getHr;
    }
}
































