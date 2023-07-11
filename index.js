var b1=document.getElementById("bt1");
var b2=document.getElementById("bt2");


b1.addEventListener("click",changebg1);
b2.addEventListener("mouseenter",changebg2);
b1.addEventListener("mouseleave",previousbg1);
b2.addEventListener("mouseleave",previousbg2);

function changebg1(){
    document.getElementById("bt1").style.backgroundColor="#000";

}

function changebg2(){
    b2.style.backgroundColor = "rgba(249, 245, 245, 0.976)";

}

function previousbg1(){
    b2.style.backgroundColor="rgba(255, 255, 255, 0.158) ";
}

function previousbg2(){
    b1.style.backgroundColor="rgba(255, 255, 255, 0.158) ";
    
}





