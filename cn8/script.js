let a = 0;
let b = 0;
let s ;
function bian() {
    var huan = document.querySelector(".ring");
    huan.style.transform  = "rotate("+a+"deg)";
    a++;
    b++;
}
function dian(){
    if(b==0){
        s = setInterval(bian,10);
    }else{
        b=0;
        clearTimeout(s);
    }
}