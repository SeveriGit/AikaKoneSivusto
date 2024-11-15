function swapElm(){
    document.getElementById(target.id).replaceWith();
}
//taulu1.addEventListener("ondrop", function(){
    //document.getElementById(target.id).replaceWith();
//});
function swapElm1(){

}

/*let taulu2 = document.getElementById("taulu1");

let tal1 = [Object.getOwnPropertyNames(taulu2)];
console.log(tal1[1]);

let aar = Array.isArray(taulu2);
console.log(aar);
console.log(taulu2);
console.log(tal1);*/
//console.log(typeof );

let vastaus;
let aikax;
let aikay;
const t1 = document.getElementById("taulu1");
const aika = document.getElementById("TyAika");
const aikaa = document.getElementById("PyAika");
const pvts = document.getElementsByClassName("pvt");
var maEl = t1.getElementsByClassName("mnt");
const ma = document.getElementById("man");
var tiEl = t1.getElementsByClassName("tist");
const ti = document.getElementById("tis");
var keEl = t1.getElementsByClassName("kesk")
const ke = document.getElementById("kes");
var toEl = t1.getElementsByClassName("tors")
const to = document.getElementById("tor");
var peEl = t1.getElementsByClassName("perj")
const pe = document.getElementById("per");
var laEl = t1.getElementsByClassName("laun")
const la = document.getElementById("lau");
var suEl = t1.getElementsByClassName("sunn")
const su = document.getElementById("sun");


document.getElementById("btn1").onclick = function(){
    vastaus = document.getElementById("Otks").value;
    info = document.getElementById("inf").value;
    //document.getElementById("ax").textContent = vastaus;
    //pvts = document.getElementsByClassName("pvt").value;
    aikax = aika.value;
    aikax = Number(aikax);
    aikay = aikaa.value;
    aikay = Number(aikay);
    console.log(aikax);
    console.log(aikay);
    /*if(0 === aikax || aikax < 0.6){
        var elts = t1.getElementsByClassName("nol");
        for(var i = 0; i < elts.length; i++){
            elts[i].textContent = vastaus;
        }  
    }
    else if(1 === aikax || aikax < 1.6){
        var elts = t1.getElementsByClassName("yks");
        for(var i = 0; i < elts.length; i++){
            elts[i].textContent = vastaus;
        }  
    }*/
    
    if(ma.checked){
        if(aikax < aikay){
            var maEl2 = Array.from(maEl).slice(aikax,aikay+1);
            for(var i = 0; i < maEl2.length; i++){
                maEl2[i].textContent = vastaus;
            }
        }
        else if(aikax > aikay){
            var maEl3 = Array.from(maEl).slice(aikax,24);
            var maEl4 = Array.from(maEl).slice(0,aikay+1);
            var maEl5 = maEl3.concat(maEl4);
            var f1 = 24-aikax+aikay; 
            for(var i = 0; i <= f1; i++){
                maEl5[i].textContent = vastaus;
            }
        }
        else if(aikax === aikay){
            maEl[aikax].textContent = vastaus;
        }
    }
    if(ti.checked){
        if(aikax < aikay){
            var tiEl2 = Array.from(tiEl).slice(aikax,aikay+1);
            for(var i = 0; i < tiEl2.length; i++){
                tiEl2[i].textContent = vastaus;
            }
        }
        else if(aikax > aikay){
            var tiEl3 = Array.from(tiEl).slice(aikax,24);
            var tiEl4 = Array.from(tiEl).slice(0,aikay+1);
            var tiEl5 = tiEl3.concat(tiEl4);
            var f1 = 24-aikax+aikay; 
            for(var i = 0; i <= f1; i++){
                tiEl5[i].textContent = vastaus;
            }
        }
        else if(aikax === aikay){
            tiEl[aikax].textContent = vastaus;
        }
    }
    if(ke.checked){
        if(aikax < aikay){
            var keEl2 = Array.from(keEl).slice(aikax,aikay+1);
            for(var i = 0; i < keEl2.length; i++){
                keEl2[i].textContent = vastaus;
            }
        }
        else if(aikax > aikay){
            var keEl3 = Array.from(keEl).slice(aikax,24);
            var keEl4 = Array.from(keEl).slice(0,aikay+1);
            var keEl5 = keEl3.concat(keEl4);
            var f1 = 24-aikax+aikay; 
            for(var i = 0; i <= f1; i++){
                keEl5[i].textContent = vastaus;
            }
        }
        else if(aikax === aikay){
            keEl[aikax].textContent = vastaus;
        }
    }
    if(to.checked){
        if(aikax < aikay){
            var toEl2 = Array.from(toEl).slice(aikax,aikay+1);
            for(var i = 0; i < toEl2.length; i++){
                toEl2[i].textContent = vastaus;
            }
        }
        else if(aikax > aikay){
            var toEl3 = Array.from(toEl).slice(aikax,24);
            var toEl4 = Array.from(toEl).slice(0,aikay+1);
            var toEl5 = toEl3.concat(toEl4);
            var f1 = 24-aikax+aikay; 
            for(var i = 0; i <= f1; i++){
                toEl5[i].textContent = vastaus;
            }
        }
        else if(aikax === aikay){
            toEl[aikax].textContent = vastaus;
        }
    }
    if(pe.checked){
        if(aikax < aikay){
            var peEl2 = Array.from(peEl).slice(aikax,aikay+1);
            for(var i = 0; i < peEl2.length; i++){
                peEl2[i].textContent = vastaus;
            }
        }
        else if(aikax > aikay){
            var peEl3 = Array.from(peEl).slice(aikax,24);
            var peEl4 = Array.from(peEl).slice(0,aikay+1);
            var peEl5 = peEl3.concat(peEl4);
            var f1 = 24-aikax+aikay; 
            for(var i = 0; i <= f1; i++){
                peEl5[i].textContent = vastaus;
            }
        }
        else if(aikax === aikay){
            peEl[aikax].textContent = vastaus;
        }
    }
    if(la.checked){
        if(aikax < aikay){
            var laEl2 = Array.from(laEl).slice(aikax,aikay+1);
            for(var i = 0; i < laEl2.length; i++){
                laEl2[i].textContent = vastaus;
            }
        }
        else if(aikax > aikay){
            var laEl3 = Array.from(laEl).slice(aikax,24);
            var laEl4 = Array.from(laEl).slice(0,aikay+1);
            var laEl5 = laEl3.concat(laEl4);
            var f1 = 24-aikax+aikay; 
            for(var i = 0; i <= f1; i++){
                laEl5[i].textContent = vastaus;
            }
        }
        else if(aikax === aikay){
            laEl[aikax].textContent = vastaus;
        }
    }
    if(su.checked){
        if(aikax < aikay){
            var suEl2 = Array.from(suEl).slice(aikax,aikay+1);
            for(var i = 0; i < suEl2.length; i++){
                suEl2[i].textContent = vastaus;
            }
        }
        else if(aikax > aikay){
            var suEl3 = Array.from(suEl).slice(aikax,24);
            var suEl4 = Array.from(suEl).slice(0,aikay+1);
            var suEl5 = suEl3.concat(suEl4);
            var f1 = 24-aikax+aikay; 
            for(var i = 0; i <= f1; i++){
                suEl5[i].textContent = vastaus;
            }
        }
        else if(aikax === aikay){
            suEl[aikax].textContent = vastaus;
        }
    }
    else if(vastaus === ""||ma.checked === false&&ti.checked === false&&ke.checked === false&&to.checked === false&&pe.checked === false
        &&la.checked === false&&su.checked === false){
            document.getElementById("tyhjä").textContent = "Puuttuu tietoja";
    }
    else{
        document.getElementById("tyhjä").textContent = "";
    }
    document.getElementById("info1").textContent = vastaus+": "+info;

}

document.getElementById("rst").onclick = function(){
    var elts = t1.getElementsByClassName("mnt");
    for(var i = 0; i < elts.length; i++){
        elts[i].textContent = [];
    }
    var elts1 = t1.getElementsByClassName("tist");
    for(var i = 0; i < elts1.length; i++){
        elts1[i].textContent = [];
    }
    var elts2 = t1.getElementsByClassName("kesk");
    for(var i = 0; i < elts2.length; i++){
        elts2[i].textContent = [];
    }
    var elts3 = t1.getElementsByClassName("tors");
    for(var i = 0; i < elts3.length; i++){
        elts3[i].textContent = [];
    }
    var elts4 = t1.getElementsByClassName("perj");
    for(var i = 0; i < elts4.length; i++){
        elts4[i].textContent = [];
    }
    var elts5 = t1.getElementsByClassName("laun");
    for(var i = 0; i < elts5.length; i++){
        elts5[i].textContent = [];
    }
    var elts6 = t1.getElementsByClassName("sunn");
    for(var i = 0; i < elts6.length; i++){
        elts6[i].textContent = [];
    }
}
document.getElementById("rst1").onclick = function(){
    aikax = aika.value;
    aikax = Number(aikax);
    aikay = aikaa.value;
    aikay = Number(aikay);
    if(ma.checked){
        if(aikax < aikay){
            var maEl2 = Array.from(maEl).slice(aikax,aikay+1);
            for(var i = 0; i < maEl2.length; i++){
                maEl2[i].textContent = "";
            }
        }
    }
    else if(aikax > aikay){
        var maEl3 = Array.from(maEl).slice(aikax,24);
        var maEl4 = Array.from(maEl).slice(0,aikay+1);
        var maEl5 = maEl3.concat(maEl4);
        var f1 = 24-aikax+aikay; 
        for(var i = 0; i <= f1; i++){
            maEl5[i].textContent = "";
        }
    }
    else if(aikax === aikay){
        maEl[aikax].textContent = "";
    }
    if(ti.checked){
        if(aikax < aikay){
            var tiEl2 = Array.from(tiEl).slice(aikax,aikay+1);
            for(var i = 0; i < tiEl2.length; i++){
                tiEl2[i].textContent = "";
            }
        }
        else if(aikax > aikay){
            var tiEl3 = Array.from(tiEl).slice(aikax,24);
            var tiEl4 = Array.from(tiEl).slice(0,aikay+1);
            var tiEl5 = tiEl3.concat(tiEl4);
            var f1 = 24-aikax+aikay; 
            for(var i = 0; i <= f1; i++){
                tiEl5[i].textContent = "";
            }
        }
        else if(aikax === aikay){
            tiEl[aikax].textContent = "";
        }
    }
    if(ke.checked){
        if(aikax < aikay){
            var keEl2 = Array.from(keEl).slice(aikax,aikay+1);
            for(var i = 0; i < keEl2.length; i++){
                keEl2[i].textContent = "";
            }
        }
        else if(aikax > aikay){
            var keEl3 = Array.from(keEl).slice(aikax,24);
            var keEl4 = Array.from(keEl).slice(0,aikay+1);
            var keEl5 = keEl3.concat(keEl4);
            var f1 = 24-aikax+aikay; 
            for(var i = 0; i <= f1; i++){
                keEl5[i].textContent = "";
            }
        }
        else if(aikax === aikay){
            keEl[aikax].textContent = "";
        }
    }
    if(to.checked){
        if(aikax < aikay){
            var toEl2 = Array.from(toEl).slice(aikax,aikay+1);
            for(var i = 0; i < toEl2.length; i++){
                toEl2[i].textContent = "";
            }
        }
        else if(aikax > aikay){
            var toEl3 = Array.from(toEl).slice(aikax,24);
            var toEl4 = Array.from(toEl).slice(0,aikay+1);
            var toEl5 = toEl3.concat(toEl4);
            var f1 = 24-aikax+aikay; 
            for(var i = 0; i <= f1; i++){
                toEl5[i].textContent = "";
            }
        }
        else if(aikax === aikay){
            toEl[aikax].textContent = "";
        }
    }
    if(pe.checked){
        if(aikax < aikay){
            var peEl2 = Array.from(peEl).slice(aikax,aikay+1);
            for(var i = 0; i < peEl2.length; i++){
                peEl2[i].textContent = "";
            }
        }
        else if(aikax > aikay){
            var peEl3 = Array.from(peEl).slice(aikax,24);
            var peEl4 = Array.from(peEl).slice(0,aikay+1);
            var peEl5 = peEl3.concat(peEl4);
            var f1 = 24-aikax+aikay; 
            for(var i = 0; i <= f1; i++){
                peEl5[i].textContent = "";
            }
        }
        else if(aikax === aikay){
            peEl[aikax].textContent = "";
        }
    }
    if(la.checked){
        if(aikax < aikay){
            var laEl2 = Array.from(laEl).slice(aikax,aikay+1);
            for(var i = 0; i < laEl2.length; i++){
                laEl2[i].textContent = "";
            }
        }
        else if(aikax > aikay){
            var laEl3 = Array.from(laEl).slice(aikax,24);
            var laEl4 = Array.from(laEl).slice(0,aikay+1);
            var laEl5 = laEl3.concat(laEl4);
            var f1 = 24-aikax+aikay; 
            for(var i = 0; i <= f1; i++){
                laEl5[i].textContent = "";
            }
        }
        else if(aikax === aikay){
            laEl[aikax].textContent = "";
        }
    }
    if(su.checked){
        if(aikax < aikay){
            var suEl2 = Array.from(suEl).slice(aikax,aikay+1);
            for(var i = 0; i < suEl2.length; i++){
                suEl2[i].textContent = "";
            }
        }
        else if(aikax > aikay){
            var suEl3 = Array.from(suEl).slice(aikax,24);
            var suEl4 = Array.from(suEl).slice(0,aikay+1);
            var suEl5 = suEl3.concat(suEl4);
            var f1 = 24-aikax+aikay; 
            for(var i = 0; i <= f1; i++){
                suEl5[i].textContent = "";
            }
        }
        else if(aikax === aikay){
            suEl[aikax].textContent = "";
        }
    }
}