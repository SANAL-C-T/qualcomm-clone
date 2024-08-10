var b1=document.getElementById("bt1");
var b2=document.getElementById("bt2");


b1.addEventListener("mouseenter",changebg1);
b2.addEventListener("mouseenter",changebg2);
b1.addEventListener("mouseout",previousbg1);
b2.addEventListener("mouseout",previousbg2);

function changebg1(){
    b1.style.backgroundColor="#000";

}

function changebg2(){
    b2.style.backgroundColor = "#000";

}

function previousbg1(){
    b2.style.backgroundColor="rgba(255, 255, 255, 0.158) ";
}

function previousbg2(){
    b1.style.backgroundColor="rgba(255, 255, 255, 0.158) ";
    
}




let open=false;
function loadProductMenu() {
    if(open==false){
        document.getElementById("produ").style.display = "block";
        open=true;
        if(loadService=true){
            document.getElementById("produService").style.display = "none";
            loadService=false;
        }
        if(loadService=true){
            document.getElementById("produCompany").style.display = "none";
            loadCompany=false;
        }
    }else{
        document.getElementById("produ").style.display = "none";
        open=false;
    }
 
}


let loadService=false;
function loadServiceMenu(){
    if(loadService==false){
        document.getElementById("produService").style.display = "block";
         if(loadService=true){
            document.getElementById("produCompany").style.display = "none";
            loadCompany=false;
        };
        if(open=true){
            document.getElementById("produ").style.display = "none"; 
            open=false;
        }
        if(loadService=true){
            document.getElementById("produCompany").style.display = "none";
            loadCompany=false;
        }

    }else{
        document.getElementById("produService").style.display = "none";
        loadService=false;
    }
}

let loadCompany=false;
function loadCompayMenu(){
    if(loadCompany==false){
        document.getElementById("produCompany").style.display = "block";
        loadService=true;
        if(open=true){
            document.getElementById("produ").style.display = "none"; 
            open=false;
        }
        if(loadService=true){
            document.getElementById("produService").style.display = "none";
            loadService=false
        }


    }else{
        document.getElementById("produCompany").style.display = "none";
        loadCompany=false;
    }
}
