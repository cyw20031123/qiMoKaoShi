let d = 0;
let i = 10;
function ji(){
    let year = document.querySelector(".year");
    if(i > 0){
        
        year.innerHTML=i +"秒";
        i--;
        setTimeout(ji,100);
    }else{
        year.innerHTML="拜年了！点击领红包";
    }
}

function dian(){
    if(d == 0){
        setTimeout(ji,1);
        d++;
    }else{
        document.querySelector(".svg1").style.display="block";
        document.querySelector(".dian").style.display="block";
    }
}

document.querySelector(".svg1").addEventListener("click",()=>{
    document.querySelector(".svg1").style.display="none";
    document.querySelector(".dian").style.display="none";
    document.querySelector(".svg2").style.display="block";
});