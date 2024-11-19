/*function swapElm(){
    document.getElementById(target.id).replaceWith();
}
//taulu1.addEventListener("ondrop", function(){
    //document.getElementById(target.id).replaceWith();
//});
/*function swapElm1(){

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
let vik;
var viikko = document.getElementById("viikko");
vik = viikko.value;
vik = Number(vik);
/*if(vik == 1){
    const t1 = document.getElementById("taulu1");
}
if(vik == 2){
    const t1 = document.getElementById("taulu2");
}*/
//const t1 = document.getElementById("taulu1");
//const t2 = document.getElementById("taulu2");
const aika = document.getElementById("TyAika");
const aikaa = document.getElementById("PyAika");
const pvts = document.getElementsByClassName("pvt");

const ma = document.getElementById("man");
const ti = document.getElementById("tis");
const ke = document.getElementById("kes");
const to = document.getElementById("tor");
const pe = document.getElementById("per");
const la = document.getElementById("lau");
const su = document.getElementById("sun");

/*var maEl = t1.getElementsByClassName("mnt");
var tiEl = t1.getElementsByClassName("tist");
var keEl = t1.getElementsByClassName("kesk");
var toEl = t1.getElementsByClassName("tors");
var peEl = t1.getElementsByClassName("perj");
var laEl = t1.getElementsByClassName("laun");
var suEl = t1.getElementsByClassName("sunn");*/
//var kaikkiEl = maEl.concat(tiEl,keEl,toEl,peEl,laEl,suEl);

document.getElementById("btn1").onclick = function(){
    vastaus = document.getElementById("Otks").value;
    info = document.getElementById("inf").value;
    //document.getElementById("ax").textContent = vastaus;
    //pvts = document.getElementsByClassName("pvt").value;
    aikax = aika.value;
    aikax = Number(aikax);
    aikay = aikaa.value;
    aikay = Number(aikay);
    vik = viikko.value;
    vik = Number(vik);
    if(vik == 1){
        let t1 = document.getElementById("taulu1");
        var maEl = t1.getElementsByClassName("mnt");
        var tiEl = t1.getElementsByClassName("tist");
        var keEl = t1.getElementsByClassName("kesk");
        var toEl = t1.getElementsByClassName("tors");
        var peEl = t1.getElementsByClassName("perj");
        var laEl = t1.getElementsByClassName("laun");
        var suEl = t1.getElementsByClassName("sunn");
    }
    if(vik == 2){
        let t1 = document.getElementById("taulu2");
        var maEl = t1.getElementsByClassName("mnt");
        var tiEl = t1.getElementsByClassName("tist");
        var keEl = t1.getElementsByClassName("kesk");
        var toEl = t1.getElementsByClassName("tors");
        var peEl = t1.getElementsByClassName("perj");
        var laEl = t1.getElementsByClassName("laun");
        var suEl = t1.getElementsByClassName("sunn");
    }
    if(vik == 3){
        let t1 = document.getElementById("taulu3");
        var maEl = t1.getElementsByClassName("mnt");
        var tiEl = t1.getElementsByClassName("tist");
        var keEl = t1.getElementsByClassName("kesk");
        var toEl = t1.getElementsByClassName("tors");
        var peEl = t1.getElementsByClassName("perj");
        var laEl = t1.getElementsByClassName("laun");
        var suEl = t1.getElementsByClassName("sunn");
    }
    if(vik == 4){
        let t1 = document.getElementById("taulu4");
        var maEl = t1.getElementsByClassName("mnt");
        var tiEl = t1.getElementsByClassName("tist");
        var keEl = t1.getElementsByClassName("kesk");
        var toEl = t1.getElementsByClassName("tors");
        var peEl = t1.getElementsByClassName("perj");
        var laEl = t1.getElementsByClassName("laun");
        var suEl = t1.getElementsByClassName("sunn");
    }
    if(vik == 5){
        let t1 = document.getElementById("taulu5");
        var maEl = t1.getElementsByClassName("mnt");
        var tiEl = t1.getElementsByClassName("tist");
        var keEl = t1.getElementsByClassName("kesk");
        var toEl = t1.getElementsByClassName("tors");
        var peEl = t1.getElementsByClassName("perj");
        var laEl = t1.getElementsByClassName("laun");
        var suEl = t1.getElementsByClassName("sunn");
    }
    if(vik == 6){
        let t1 = document.getElementById("taulu6");
        var maEl = t1.getElementsByClassName("mnt");
        var tiEl = t1.getElementsByClassName("tist");
        var keEl = t1.getElementsByClassName("kesk");
        var toEl = t1.getElementsByClassName("tors");
        var peEl = t1.getElementsByClassName("perj");
        var laEl = t1.getElementsByClassName("laun");
        var suEl = t1.getElementsByClassName("sunn");
    }
    if(vik == 7){
        let t1 = document.getElementById("taulu7");
        var maEl = t1.getElementsByClassName("mnt");
        var tiEl = t1.getElementsByClassName("tist");
        var keEl = t1.getElementsByClassName("kesk");
        var toEl = t1.getElementsByClassName("tors");
        var peEl = t1.getElementsByClassName("perj");
        var laEl = t1.getElementsByClassName("laun");
        var suEl = t1.getElementsByClassName("sunn");
    }
    if(vik == 8){
        let t1 = document.getElementById("taulu8");
        var maEl = t1.getElementsByClassName("mnt");
        var tiEl = t1.getElementsByClassName("tist");
        var keEl = t1.getElementsByClassName("kesk");
        var toEl = t1.getElementsByClassName("tors");
        var peEl = t1.getElementsByClassName("perj");
        var laEl = t1.getElementsByClassName("laun");
        var suEl = t1.getElementsByClassName("sunn");
    }
    if(vik == 9){
        let t1 = document.getElementById("taulu9");
        var maEl = t1.getElementsByClassName("mnt");
        var tiEl = t1.getElementsByClassName("tist");
        var keEl = t1.getElementsByClassName("kesk");
        var toEl = t1.getElementsByClassName("tors");
        var peEl = t1.getElementsByClassName("perj");
        var laEl = t1.getElementsByClassName("laun");
        var suEl = t1.getElementsByClassName("sunn");
    }
    if(vik == 10){
        let t1 = document.getElementById("taulu10");
        var maEl = t1.getElementsByClassName("mnt");
        var tiEl = t1.getElementsByClassName("tist");
        var keEl = t1.getElementsByClassName("kesk");
        var toEl = t1.getElementsByClassName("tors");
        var peEl = t1.getElementsByClassName("perj");
        var laEl = t1.getElementsByClassName("laun");
        var suEl = t1.getElementsByClassName("sunn");
    }
    if(vik == 11){
        let t1 = document.getElementById("taulu11");
        var maEl = t1.getElementsByClassName("mnt");
        var tiEl = t1.getElementsByClassName("tist");
        var keEl = t1.getElementsByClassName("kesk");
        var toEl = t1.getElementsByClassName("tors");
        var peEl = t1.getElementsByClassName("perj");
        var laEl = t1.getElementsByClassName("laun");
        var suEl = t1.getElementsByClassName("sunn");
    }
    if(vik == 12){
        let t1 = document.getElementById("taulu12");
        var maEl = t1.getElementsByClassName("mnt");
        var tiEl = t1.getElementsByClassName("tist");
        var keEl = t1.getElementsByClassName("kesk");
        var toEl = t1.getElementsByClassName("tors");
        var peEl = t1.getElementsByClassName("perj");
        var laEl = t1.getElementsByClassName("laun");
        var suEl = t1.getElementsByClassName("sunn");
    }
    if(vik == 13){
        let t1 = document.getElementById("taulu13");
        var maEl = t1.getElementsByClassName("mnt");
        var tiEl = t1.getElementsByClassName("tist");
        var keEl = t1.getElementsByClassName("kesk");
        var toEl = t1.getElementsByClassName("tors");
        var peEl = t1.getElementsByClassName("perj");
        var laEl = t1.getElementsByClassName("laun");
        var suEl = t1.getElementsByClassName("sunn");
    }
    if(vik == 14){
        let t1 = document.getElementById("taulu14");
        var maEl = t1.getElementsByClassName("mnt");
        var tiEl = t1.getElementsByClassName("tist");
        var keEl = t1.getElementsByClassName("kesk");
        var toEl = t1.getElementsByClassName("tors");
        var peEl = t1.getElementsByClassName("perj");
        var laEl = t1.getElementsByClassName("laun");
        var suEl = t1.getElementsByClassName("sunn");
    }
    if(vik == 15){
        let t1 = document.getElementById("taulu15");
        var maEl = t1.getElementsByClassName("mnt");
        var tiEl = t1.getElementsByClassName("tist");
        var keEl = t1.getElementsByClassName("kesk");
        var toEl = t1.getElementsByClassName("tors");
        var peEl = t1.getElementsByClassName("perj");
        var laEl = t1.getElementsByClassName("laun");
        var suEl = t1.getElementsByClassName("sunn");
    }
    if(vik == 16){
        let t1 = document.getElementById("taulu16");
        var maEl = t1.getElementsByClassName("mnt");
        var tiEl = t1.getElementsByClassName("tist");
        var keEl = t1.getElementsByClassName("kesk");
        var toEl = t1.getElementsByClassName("tors");
        var peEl = t1.getElementsByClassName("perj");
        var laEl = t1.getElementsByClassName("laun");
        var suEl = t1.getElementsByClassName("sunn");
    }
    if(vik == 17){
        let t1 = document.getElementById("taulu17");
        var maEl = t1.getElementsByClassName("mnt");
        var tiEl = t1.getElementsByClassName("tist");
        var keEl = t1.getElementsByClassName("kesk");
        var toEl = t1.getElementsByClassName("tors");
        var peEl = t1.getElementsByClassName("perj");
        var laEl = t1.getElementsByClassName("laun");
        var suEl = t1.getElementsByClassName("sunn");
    }
    if(vik == 18){
        let t1 = document.getElementById("taulu18");
        var maEl = t1.getElementsByClassName("mnt");
        var tiEl = t1.getElementsByClassName("tist");
        var keEl = t1.getElementsByClassName("kesk");
        var toEl = t1.getElementsByClassName("tors");
        var peEl = t1.getElementsByClassName("perj");
        var laEl = t1.getElementsByClassName("laun");
        var suEl = t1.getElementsByClassName("sunn");
    }
    if(vik == 19){
        let t1 = document.getElementById("taulu19");
        var maEl = t1.getElementsByClassName("mnt");
        var tiEl = t1.getElementsByClassName("tist");
        var keEl = t1.getElementsByClassName("kesk");
        var toEl = t1.getElementsByClassName("tors");
        var peEl = t1.getElementsByClassName("perj");
        var laEl = t1.getElementsByClassName("laun");
        var suEl = t1.getElementsByClassName("sunn");
    }
    if(vik == 20){
        let t1 = document.getElementById("taulu20");
        var maEl = t1.getElementsByClassName("mnt");
        var tiEl = t1.getElementsByClassName("tist");
        var keEl = t1.getElementsByClassName("kesk");
        var toEl = t1.getElementsByClassName("tors");
        var peEl = t1.getElementsByClassName("perj");
        var laEl = t1.getElementsByClassName("laun");
        var suEl = t1.getElementsByClassName("sunn");
    }
    if(vik == 21){
        let t1 = document.getElementById("taulu21");
        var maEl = t1.getElementsByClassName("mnt");
        var tiEl = t1.getElementsByClassName("tist");
        var keEl = t1.getElementsByClassName("kesk");
        var toEl = t1.getElementsByClassName("tors");
        var peEl = t1.getElementsByClassName("perj");
        var laEl = t1.getElementsByClassName("laun");
        var suEl = t1.getElementsByClassName("sunn");
    }
    if(vik == 22){
        let t1 = document.getElementById("taulu22");
        var maEl = t1.getElementsByClassName("mnt");
        var tiEl = t1.getElementsByClassName("tist");
        var keEl = t1.getElementsByClassName("kesk");
        var toEl = t1.getElementsByClassName("tors");
        var peEl = t1.getElementsByClassName("perj");
        var laEl = t1.getElementsByClassName("laun");
        var suEl = t1.getElementsByClassName("sunn");
    }
    if(vik == 23){
        let t1 = document.getElementById("taulu23");
        var maEl = t1.getElementsByClassName("mnt");
        var tiEl = t1.getElementsByClassName("tist");
        var keEl = t1.getElementsByClassName("kesk");
        var toEl = t1.getElementsByClassName("tors");
        var peEl = t1.getElementsByClassName("perj");
        var laEl = t1.getElementsByClassName("laun");
        var suEl = t1.getElementsByClassName("sunn");
    }
    if(vik == 24){
        let t1 = document.getElementById("taulu24");
        var maEl = t1.getElementsByClassName("mnt");
        var tiEl = t1.getElementsByClassName("tist");
        var keEl = t1.getElementsByClassName("kesk");
        var toEl = t1.getElementsByClassName("tors");
        var peEl = t1.getElementsByClassName("perj");
        var laEl = t1.getElementsByClassName("laun");
        var suEl = t1.getElementsByClassName("sunn");
    }    
    if(vik == 25){
        let t1 = document.getElementById("taulu25");
        var maEl = t1.getElementsByClassName("mnt");
        var tiEl = t1.getElementsByClassName("tist");
        var keEl = t1.getElementsByClassName("kesk");
        var toEl = t1.getElementsByClassName("tors");
        var peEl = t1.getElementsByClassName("perj");
        var laEl = t1.getElementsByClassName("laun");
        var suEl = t1.getElementsByClassName("sunn");
    }    
    if(vik == 26){
        let t1 = document.getElementById("taulu26");
        var maEl = t1.getElementsByClassName("mnt");
        var tiEl = t1.getElementsByClassName("tist");
        var keEl = t1.getElementsByClassName("kesk");
        var toEl = t1.getElementsByClassName("tors");
        var peEl = t1.getElementsByClassName("perj");
        var laEl = t1.getElementsByClassName("laun");
        var suEl = t1.getElementsByClassName("sunn");
    }
    if(vik == 27){
        let t1 = document.getElementById("taulu27");
        var maEl = t1.getElementsByClassName("mnt");
        var tiEl = t1.getElementsByClassName("tist");
        var keEl = t1.getElementsByClassName("kesk");
        var toEl = t1.getElementsByClassName("tors");
        var peEl = t1.getElementsByClassName("perj");
        var laEl = t1.getElementsByClassName("laun");
        var suEl = t1.getElementsByClassName("sunn");
    }
    if(vik == 28){
        let t1 = document.getElementById("taulu28");
        var maEl = t1.getElementsByClassName("mnt");
        var tiEl = t1.getElementsByClassName("tist");
        var keEl = t1.getElementsByClassName("kesk");
        var toEl = t1.getElementsByClassName("tors");
        var peEl = t1.getElementsByClassName("perj");
        var laEl = t1.getElementsByClassName("laun");
        var suEl = t1.getElementsByClassName("sunn");
    }
    if(vik == 29){
        let t1 = document.getElementById("taulu29");
        var maEl = t1.getElementsByClassName("mnt");
        var tiEl = t1.getElementsByClassName("tist");
        var keEl = t1.getElementsByClassName("kesk");
        var toEl = t1.getElementsByClassName("tors");
        var peEl = t1.getElementsByClassName("perj");
        var laEl = t1.getElementsByClassName("laun");
        var suEl = t1.getElementsByClassName("sunn");
    }
    if(vik == 30){
        let t1 = document.getElementById("taulu30");
        var maEl = t1.getElementsByClassName("mnt");
        var tiEl = t1.getElementsByClassName("tist");
        var keEl = t1.getElementsByClassName("kesk");
        var toEl = t1.getElementsByClassName("tors");
        var peEl = t1.getElementsByClassName("perj");
        var laEl = t1.getElementsByClassName("laun");
        var suEl = t1.getElementsByClassName("sunn");
    }
    if(vik == 31){
        let t1 = document.getElementById("taulu31");
        var maEl = t1.getElementsByClassName("mnt");
        var tiEl = t1.getElementsByClassName("tist");
        var keEl = t1.getElementsByClassName("kesk");
        var toEl = t1.getElementsByClassName("tors");
        var peEl = t1.getElementsByClassName("perj");
        var laEl = t1.getElementsByClassName("laun");
        var suEl = t1.getElementsByClassName("sunn");
    }
    if(vik == 32){
        let t1 = document.getElementById("taulu32");
        var maEl = t1.getElementsByClassName("mnt");
        var tiEl = t1.getElementsByClassName("tist");
        var keEl = t1.getElementsByClassName("kesk");
        var toEl = t1.getElementsByClassName("tors");
        var peEl = t1.getElementsByClassName("perj");
        var laEl = t1.getElementsByClassName("laun");
        var suEl = t1.getElementsByClassName("sunn");
    }
    if(vik == 33){
        let t1 = document.getElementById("taulu33");
        var maEl = t1.getElementsByClassName("mnt");
        var tiEl = t1.getElementsByClassName("tist");
        var keEl = t1.getElementsByClassName("kesk");
        var toEl = t1.getElementsByClassName("tors");
        var peEl = t1.getElementsByClassName("perj");
        var laEl = t1.getElementsByClassName("laun");
        var suEl = t1.getElementsByClassName("sunn");
    }
    if(vik == 34){
        let t1 = document.getElementById("taulu34");
        var maEl = t1.getElementsByClassName("mnt");
        var tiEl = t1.getElementsByClassName("tist");
        var keEl = t1.getElementsByClassName("kesk");
        var toEl = t1.getElementsByClassName("tors");
        var peEl = t1.getElementsByClassName("perj");
        var laEl = t1.getElementsByClassName("laun");
        var suEl = t1.getElementsByClassName("sunn");
    }
    if(vik == 35){
        let t1 = document.getElementById("taulu35");
        var maEl = t1.getElementsByClassName("mnt");
        var tiEl = t1.getElementsByClassName("tist");
        var keEl = t1.getElementsByClassName("kesk");
        var toEl = t1.getElementsByClassName("tors");
        var peEl = t1.getElementsByClassName("perj");
        var laEl = t1.getElementsByClassName("laun");
        var suEl = t1.getElementsByClassName("sunn");
    }
    if(vik == 36){
        let t1 = document.getElementById("taulu36");
        var maEl = t1.getElementsByClassName("mnt");
        var tiEl = t1.getElementsByClassName("tist");
        var keEl = t1.getElementsByClassName("kesk");
        var toEl = t1.getElementsByClassName("tors");
        var peEl = t1.getElementsByClassName("perj");
        var laEl = t1.getElementsByClassName("laun");
        var suEl = t1.getElementsByClassName("sunn");
    }
    if(vik == 37){
        let t1 = document.getElementById("taulu37");
        var maEl = t1.getElementsByClassName("mnt");
        var tiEl = t1.getElementsByClassName("tist");
        var keEl = t1.getElementsByClassName("kesk");
        var toEl = t1.getElementsByClassName("tors");
        var peEl = t1.getElementsByClassName("perj");
        var laEl = t1.getElementsByClassName("laun");
        var suEl = t1.getElementsByClassName("sunn");
    }
    if(vik == 38){
        let t1 = document.getElementById("taulu38");
        var maEl = t1.getElementsByClassName("mnt");
        var tiEl = t1.getElementsByClassName("tist");
        var keEl = t1.getElementsByClassName("kesk");
        var toEl = t1.getElementsByClassName("tors");
        var peEl = t1.getElementsByClassName("perj");
        var laEl = t1.getElementsByClassName("laun");
        var suEl = t1.getElementsByClassName("sunn");
    } 
    if(vik == 39){
        let t1 = document.getElementById("taulu39");
        var maEl = t1.getElementsByClassName("mnt");
        var tiEl = t1.getElementsByClassName("tist");
        var keEl = t1.getElementsByClassName("kesk");
        var toEl = t1.getElementsByClassName("tors");
        var peEl = t1.getElementsByClassName("perj");
        var laEl = t1.getElementsByClassName("laun");
        var suEl = t1.getElementsByClassName("sunn");
    }
    if(vik == 40){
        let t1 = document.getElementById("taulu40");
        var maEl = t1.getElementsByClassName("mnt");
        var tiEl = t1.getElementsByClassName("tist");
        var keEl = t1.getElementsByClassName("kesk");
        var toEl = t1.getElementsByClassName("tors");
        var peEl = t1.getElementsByClassName("perj");
        var laEl = t1.getElementsByClassName("laun");
        var suEl = t1.getElementsByClassName("sunn");
    }
    if(vik == 41){
        let t1 = document.getElementById("taulu41");
        var maEl = t1.getElementsByClassName("mnt");
        var tiEl = t1.getElementsByClassName("tist");
        var keEl = t1.getElementsByClassName("kesk");
        var toEl = t1.getElementsByClassName("tors");
        var peEl = t1.getElementsByClassName("perj");
        var laEl = t1.getElementsByClassName("laun");
        var suEl = t1.getElementsByClassName("sunn");
    }
    if(vik == 42){
        let t1 = document.getElementById("taulu42");
        var maEl = t1.getElementsByClassName("mnt");
        var tiEl = t1.getElementsByClassName("tist");
        var keEl = t1.getElementsByClassName("kesk");
        var toEl = t1.getElementsByClassName("tors");
        var peEl = t1.getElementsByClassName("perj");
        var laEl = t1.getElementsByClassName("laun");
        var suEl = t1.getElementsByClassName("sunn");
    }
    if(vik == 43){
        let t1 = document.getElementById("taulu43");
        var maEl = t1.getElementsByClassName("mnt");
        var tiEl = t1.getElementsByClassName("tist");
        var keEl = t1.getElementsByClassName("kesk");
        var toEl = t1.getElementsByClassName("tors");
        var peEl = t1.getElementsByClassName("perj");
        var laEl = t1.getElementsByClassName("laun");
        var suEl = t1.getElementsByClassName("sunn");
    }
    if(vik == 44){
        let t1 = document.getElementById("taulu44");
        var maEl = t1.getElementsByClassName("mnt");
        var tiEl = t1.getElementsByClassName("tist");
        var keEl = t1.getElementsByClassName("kesk");
        var toEl = t1.getElementsByClassName("tors");
        var peEl = t1.getElementsByClassName("perj");
        var laEl = t1.getElementsByClassName("laun");
        var suEl = t1.getElementsByClassName("sunn");
    }
    if(vik == 45){
        let t1 = document.getElementById("taulu45");
        var maEl = t1.getElementsByClassName("mnt");
        var tiEl = t1.getElementsByClassName("tist");
        var keEl = t1.getElementsByClassName("kesk");
        var toEl = t1.getElementsByClassName("tors");
        var peEl = t1.getElementsByClassName("perj");
        var laEl = t1.getElementsByClassName("laun");
        var suEl = t1.getElementsByClassName("sunn");
    }
    if(vik == 46){
        let t1 = document.getElementById("taulu46");
        var maEl = t1.getElementsByClassName("mnt");
        var tiEl = t1.getElementsByClassName("tist");
        var keEl = t1.getElementsByClassName("kesk");
        var toEl = t1.getElementsByClassName("tors");
        var peEl = t1.getElementsByClassName("perj");
        var laEl = t1.getElementsByClassName("laun");
        var suEl = t1.getElementsByClassName("sunn");
    }
    if(vik == 47){
        let t1 = document.getElementById("taulu47");
        var maEl = t1.getElementsByClassName("mnt");
        var tiEl = t1.getElementsByClassName("tist");
        var keEl = t1.getElementsByClassName("kesk");
        var toEl = t1.getElementsByClassName("tors");
        var peEl = t1.getElementsByClassName("perj");
        var laEl = t1.getElementsByClassName("laun");
        var suEl = t1.getElementsByClassName("sunn");
    }
    if(vik == 48){
        let t1 = document.getElementById("taulu48");
        var maEl = t1.getElementsByClassName("mnt");
        var tiEl = t1.getElementsByClassName("tist");
        var keEl = t1.getElementsByClassName("kesk");
        var toEl = t1.getElementsByClassName("tors");
        var peEl = t1.getElementsByClassName("perj");
        var laEl = t1.getElementsByClassName("laun");
        var suEl = t1.getElementsByClassName("sunn");
    }
    if(vik == 49){
        let t1 = document.getElementById("taulu49");
        var maEl = t1.getElementsByClassName("mnt");
        var tiEl = t1.getElementsByClassName("tist");
        var keEl = t1.getElementsByClassName("kesk");
        var toEl = t1.getElementsByClassName("tors");
        var peEl = t1.getElementsByClassName("perj");
        var laEl = t1.getElementsByClassName("laun");
        var suEl = t1.getElementsByClassName("sunn");
    }
    if(vik == 50){
        let t1 = document.getElementById("taulu50");
        var maEl = t1.getElementsByClassName("mnt");
        var tiEl = t1.getElementsByClassName("tist");
        var keEl = t1.getElementsByClassName("kesk");
        var toEl = t1.getElementsByClassName("tors");
        var peEl = t1.getElementsByClassName("perj");
        var laEl = t1.getElementsByClassName("laun");
        var suEl = t1.getElementsByClassName("sunn");
    }
    if(vik == 51){
        let t1 = document.getElementById("taulu51");
        var maEl = t1.getElementsByClassName("mnt");
        var tiEl = t1.getElementsByClassName("tist");
        var keEl = t1.getElementsByClassName("kesk");
        var toEl = t1.getElementsByClassName("tors");
        var peEl = t1.getElementsByClassName("perj");
        var laEl = t1.getElementsByClassName("laun");
        var suEl = t1.getElementsByClassName("sunn");
    }
    if(vik == 52){
        let t1 = document.getElementById("taulu52");
        var maEl = t1.getElementsByClassName("mnt");
        var tiEl = t1.getElementsByClassName("tist");
        var keEl = t1.getElementsByClassName("kesk");
        var toEl = t1.getElementsByClassName("tors");
        var peEl = t1.getElementsByClassName("perj");
        var laEl = t1.getElementsByClassName("laun");
        var suEl = t1.getElementsByClassName("sunn");
    }

    /*if(vik == 2){
        aikax = aikax + 170;
        aikay = aikay + 170;
    }*/
    
    //console.log(aikay);
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
            var maEl4 = Array.from(tiEl).slice(0,aikay+1);
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
            var tiEl4 = Array.from(keEl).slice(0,aikay+1);
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
            var keEl4 = Array.from(toEl).slice(0,aikay+1);
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
            var toEl4 = Array.from(peEl).slice(0,aikay+1);
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
            var peEl4 = Array.from(laEl).slice(0,aikay+1);
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
            var laEl4 = Array.from(suEl).slice(0,aikay+1);
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
            if(vik == 1){
                let t1 = document.getElementById("taulu1");
                let t2 = document.getElementById("taulu2");
                var suEl = t1.getElementsByClassName("sunn");
                var maEl = t2.getElementsByClassName("mnt");
            }
            if(vik == 2){
                let t1 = document.getElementById("taulu2");
                let t2 = document.getElementById("taulu3");
                var suEl = t1.getElementsByClassName("sunn");
                var maEl = t2.getElementsByClassName("mnt");
            }
            if(vik == 3){
                let t1 = document.getElementById("taulu3");
                let t2 = document.getElementById("taulu4");
                var suEl = t1.getElementsByClassName("sunn");
                var maEl = t2.getElementsByClassName("mnt");
            }
            if(vik == 4){
                let t1 = document.getElementById("taulu4");
                let t2 = document.getElementById("taulu5");
                var suEl = t1.getElementsByClassName("sunn");
                var maEl = t2.getElementsByClassName("mnt");
            }
            if(vik == 5){
                let t1 = document.getElementById("taulu5");
                let t2 = document.getElementById("taulu6");
                var suEl = t1.getElementsByClassName("sunn");
                var maEl = t2.getElementsByClassName("mnt");
            }
            if(vik == 6){
                let t1 = document.getElementById("taulu6");
                let t2 = document.getElementById("taulu7");
                var suEl = t1.getElementsByClassName("sunn");
                var maEl = t2.getElementsByClassName("mnt");
            }
            if(vik == 7){
                let t1 = document.getElementById("taulu7");
                let t2 = document.getElementById("taulu8");
                var suEl = t1.getElementsByClassName("sunn");
                var maEl = t2.getElementsByClassName("mnt");
            }
            if(vik == 8){
                let t1 = document.getElementById("taulu8");
                let t2 = document.getElementById("taulu9");
                var suEl = t1.getElementsByClassName("sunn");
                var maEl = t2.getElementsByClassName("mnt");
            }
            if(vik == 9){
                let t1 = document.getElementById("taulu9");
                let t2 = document.getElementById("taulu10");
                var suEl = t1.getElementsByClassName("sunn");
                var maEl = t2.getElementsByClassName("mnt");
            }
            if(vik == 10){
                let t1 = document.getElementById("taulu10");
                let t2 = document.getElementById("taulu11");
                var suEl = t1.getElementsByClassName("sunn");
                var maEl = t2.getElementsByClassName("mnt");
            }
            if(vik == 11){
                let t1 = document.getElementById("taulu11");
                let t2 = document.getElementById("taulu12");
                var suEl = t1.getElementsByClassName("sunn");
                var maEl = t2.getElementsByClassName("mnt");
            }
            if(vik == 12){
                let t1 = document.getElementById("taulu12");
                let t2 = document.getElementById("taulu13");
                var suEl = t1.getElementsByClassName("sunn");
                var maEl = t2.getElementsByClassName("mnt");
            }
            if(vik == 13){
                let t1 = document.getElementById("taulu13");
                let t2 = document.getElementById("taulu14");
                var suEl = t1.getElementsByClassName("sunn");
                var maEl = t2.getElementsByClassName("mnt");
            }
            if(vik == 14){
                let t1 = document.getElementById("taulu14");
                let t2 = document.getElementById("taulu15");
                var suEl = t1.getElementsByClassName("sunn");
                var maEl = t2.getElementsByClassName("mnt");
            }
            if(vik == 15){
                let t1 = document.getElementById("taulu15");
                let t2 = document.getElementById("taulu16");
                var suEl = t1.getElementsByClassName("sunn");
                var maEl = t2.getElementsByClassName("mnt");
            }
            if(vik == 16){
                let t1 = document.getElementById("taulu16");
                let t2 = document.getElementById("taulu17");
                var suEl = t1.getElementsByClassName("sunn");
                var maEl = t2.getElementsByClassName("mnt");
            }
            if(vik == 17){
                let t1 = document.getElementById("taulu17");
                let t2 = document.getElementById("taulu18");
                var suEl = t1.getElementsByClassName("sunn");
                var maEl = t2.getElementsByClassName("mnt");
            }
            if(vik == 18){
                let t1 = document.getElementById("taulu18");
                let t2 = document.getElementById("taulu19");
                var suEl = t1.getElementsByClassName("sunn");
                var maEl = t2.getElementsByClassName("mnt");
            }
            if(vik == 19){
                let t1 = document.getElementById("taulu19");
                let t2 = document.getElementById("taulu20");
                var suEl = t1.getElementsByClassName("sunn");
                var maEl = t2.getElementsByClassName("mnt");
            }
            if(vik == 20){
                let t1 = document.getElementById("taulu20");
                let t2 = document.getElementById("taulu21");
                var suEl = t1.getElementsByClassName("sunn");
                var maEl = t2.getElementsByClassName("mnt");
            }
            if(vik == 21){
                let t1 = document.getElementById("taulu21");
                let t2 = document.getElementById("taulu22");
                var suEl = t1.getElementsByClassName("sunn");
                var maEl = t2.getElementsByClassName("mnt");
            }
            if(vik == 22){
                let t1 = document.getElementById("taulu22");
                let t2 = document.getElementById("taulu23");
                var suEl = t1.getElementsByClassName("sunn");
                var maEl = t2.getElementsByClassName("mnt");
            }
            if(vik == 23){
                let t1 = document.getElementById("taulu23");
                let t2 = document.getElementById("taulu24");
                var suEl = t1.getElementsByClassName("sunn");
                var maEl = t2.getElementsByClassName("mnt");
            }
            if(vik == 24){
                let t1 = document.getElementById("taulu24");
                let t2 = document.getElementById("taulu25");
                var suEl = t1.getElementsByClassName("sunn");
                var maEl = t2.getElementsByClassName("mnt");
            }
            if(vik == 25){
                let t1 = document.getElementById("taulu25");
                let t2 = document.getElementById("taulu26");
                var suEl = t1.getElementsByClassName("sunn");
                var maEl = t2.getElementsByClassName("mnt");
            }
            if(vik == 26){
                let t1 = document.getElementById("taulu26");
                let t2 = document.getElementById("taulu27");
                var suEl = t1.getElementsByClassName("sunn");
                var maEl = t2.getElementsByClassName("mnt");
            }
            if(vik == 27){
                let t1 = document.getElementById("taulu27");
                let t2 = document.getElementById("taulu28");
                var suEl = t1.getElementsByClassName("sunn");
                var maEl = t2.getElementsByClassName("mnt");
            }
            if(vik == 28){
                let t1 = document.getElementById("taulu28");
                let t2 = document.getElementById("taulu29");
                var suEl = t1.getElementsByClassName("sunn");
                var maEl = t2.getElementsByClassName("mnt");
            }
            if(vik == 29){
                let t1 = document.getElementById("taulu29");
                let t2 = document.getElementById("taulu30");
                var suEl = t1.getElementsByClassName("sunn");
                var maEl = t2.getElementsByClassName("mnt");
            }
            if(vik == 30){
                let t1 = document.getElementById("taulu30");
                let t2 = document.getElementById("taulu31");
                var suEl = t1.getElementsByClassName("sunn");
                var maEl = t2.getElementsByClassName("mnt");
            }
            if(vik == 31){
                let t1 = document.getElementById("taulu31");
                let t2 = document.getElementById("taulu32");
                var suEl = t1.getElementsByClassName("sunn");
                var maEl = t2.getElementsByClassName("mnt");
            }
            if(vik == 32){
                let t1 = document.getElementById("taulu32");
                let t2 = document.getElementById("taulu33");
                var suEl = t1.getElementsByClassName("sunn");
                var maEl = t2.getElementsByClassName("mnt");
            }
            if(vik == 33){
                let t1 = document.getElementById("taulu33");
                let t2 = document.getElementById("taulu34");
                var suEl = t1.getElementsByClassName("sunn");
                var maEl = t2.getElementsByClassName("mnt");
            }
            if(vik == 34){
                let t1 = document.getElementById("taulu34");
                let t2 = document.getElementById("taulu35");
                var suEl = t1.getElementsByClassName("sunn");
                var maEl = t2.getElementsByClassName("mnt");
            }
            if(vik == 35){
                let t1 = document.getElementById("taulu35");
                let t2 = document.getElementById("taulu36");
                var suEl = t1.getElementsByClassName("sunn");
                var maEl = t2.getElementsByClassName("mnt");
            }
            if(vik == 36){
                let t1 = document.getElementById("taulu36");
                let t2 = document.getElementById("taulu37");
                var suEl = t1.getElementsByClassName("sunn");
                var maEl = t2.getElementsByClassName("mnt");
            }
            if(vik == 37){
                let t1 = document.getElementById("taulu37");
                let t2 = document.getElementById("taulu38");
                var suEl = t1.getElementsByClassName("sunn");
                var maEl = t2.getElementsByClassName("mnt");
            }
            if(vik == 38){
                let t1 = document.getElementById("taulu38");
                let t2 = document.getElementById("taulu39");
                var suEl = t1.getElementsByClassName("sunn");
                var maEl = t2.getElementsByClassName("mnt");
            }
            if(vik == 39){
                let t1 = document.getElementById("taulu39");
                let t2 = document.getElementById("taulu40");
                var suEl = t1.getElementsByClassName("sunn");
                var maEl = t2.getElementsByClassName("mnt");
            }
            if(vik == 40){
                let t1 = document.getElementById("taulu40");
                let t2 = document.getElementById("taulu41");
                var suEl = t1.getElementsByClassName("sunn");
                var maEl = t2.getElementsByClassName("mnt");
            }
            if(vik == 41){
                let t1 = document.getElementById("taulu41");
                let t2 = document.getElementById("taulu42");
                var suEl = t1.getElementsByClassName("sunn");
                var maEl = t2.getElementsByClassName("mnt");
            }
            if(vik == 42){
                let t1 = document.getElementById("taulu42");
                let t2 = document.getElementById("taulu43");
                var suEl = t1.getElementsByClassName("sunn");
                var maEl = t2.getElementsByClassName("mnt");
            }
            if(vik == 43){
                let t1 = document.getElementById("taulu43");
                let t2 = document.getElementById("taulu44");
                var suEl = t1.getElementsByClassName("sunn");
                var maEl = t2.getElementsByClassName("mnt");
            }
            if(vik == 44){
                let t1 = document.getElementById("taulu44");
                let t2 = document.getElementById("taulu45");
                var suEl = t1.getElementsByClassName("sunn");
                var maEl = t2.getElementsByClassName("mnt");
            }
            if(vik == 45){
                let t1 = document.getElementById("taulu45");
                let t2 = document.getElementById("taulu46");
                var suEl = t1.getElementsByClassName("sunn");
                var maEl = t2.getElementsByClassName("mnt");
            }
            if(vik == 46){
                let t1 = document.getElementById("taulu46");
                let t2 = document.getElementById("taulu47");
                var suEl = t1.getElementsByClassName("sunn");
                var maEl = t2.getElementsByClassName("mnt");
            }
            if(vik == 47){
                let t1 = document.getElementById("taulu47");
                let t2 = document.getElementById("taulu48");
                var suEl = t1.getElementsByClassName("sunn");
                var maEl = t2.getElementsByClassName("mnt");
            }
            if(vik == 48){
                let t1 = document.getElementById("taulu48");
                let t2 = document.getElementById("taulu49");
                var suEl = t1.getElementsByClassName("sunn");
                var maEl = t2.getElementsByClassName("mnt");
            }
            if(vik == 49){
                let t1 = document.getElementById("taulu49");
                let t2 = document.getElementById("taulu50");
                var suEl = t1.getElementsByClassName("sunn");
                var maEl = t2.getElementsByClassName("mnt");
            }
            if(vik == 50){
                let t1 = document.getElementById("taulu50");
                let t2 = document.getElementById("taulu51");
                var suEl = t1.getElementsByClassName("sunn");
                var maEl = t2.getElementsByClassName("mnt");
            }
            if(vik == 51){
                let t1 = document.getElementById("taulu51");
                let t2 = document.getElementById("taulu52");
                var suEl = t1.getElementsByClassName("sunn");
                var maEl = t2.getElementsByClassName("mnt");
            }
            if(vik == 52){
                let t1 = document.getElementById("taulu52");
                let t2 = document.getElementById("taulu1");
                var suEl = t1.getElementsByClassName("sunn");
                var maEl = t2.getElementsByClassName("mnt");
            }

            var suEl3 = Array.from(suEl).slice(aikax,24);
            var suEl4 = Array.from(maEl).slice(0,aikay+1);
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
    /*document.getElementById("info1").textContent = vastaus+": "+info;
    const para = document.createElement("p")
    const node = document.createTextNode(vastaus+": "+info);
    para.appendChild(node);
    const infEl = document.getElementById("VTS");
    infEl.appendChild(para);*/

}

document.getElementById("rst").onclick = function(){
    if(vik == 1){
        let t1 = document.getElementById("taulu1");
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
    if(vik == 2){
        let t1 = document.getElementById("taulu2");
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
    if(vik == 3){
        let t1 = document.getElementById("taulu3");
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
    if(vik == 4){
        let t1 = document.getElementById("taulu4");
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
    if(vik == 5){
        let t1 = document.getElementById("taulu5");
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
    if(vik == 6){
        let t1 = document.getElementById("taulu6");
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
    if(vik == 7){
        let t1 = document.getElementById("taulu7");
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
    if(vik == 8){
        let t1 = document.getElementById("taulu8");
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
    if(vik == 9){
        let t1 = document.getElementById("taulu9");
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
    if(vik == 10){
        let t1 = document.getElementById("taulu10");
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
    if(vik == 11){
        let t1 = document.getElementById("taulu11");
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
    if(vik == 12){
        let t1 = document.getElementById("taulu12");
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
    if(vik == 13){
        let t1 = document.getElementById("taulu13");
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
    if(vik == 14){
        let t1 = document.getElementById("taulu14");
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
    if(vik == 15){
        let t1 = document.getElementById("taulu15");
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
    if(vik == 16){
        let t1 = document.getElementById("taulu16");
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
    if(vik == 17){
        let t1 = document.getElementById("taulu17");
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
    if(vik == 18){
        let t1 = document.getElementById("taulu18");
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
    if(vik == 19){
        let t1 = document.getElementById("taulu19");
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
    if(vik == 20){
        let t1 = document.getElementById("taulu20");
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
    if(vik == 21){
        let t1 = document.getElementById("taulu21");
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
    if(vik == 22){
        let t1 = document.getElementById("taulu22");
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
    if(vik == 23){
        let t1 = document.getElementById("taulu23");
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
    if(vik == 24){
        let t1 = document.getElementById("taulu24");
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
    if(vik == 25){
        let t1 = document.getElementById("taulu25");
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
    if(vik == 26){
        let t1 = document.getElementById("taulu26");
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
    if(vik == 27){
        let t1 = document.getElementById("taulu27");
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
    if(vik == 28){
        let t1 = document.getElementById("taulu28");
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
    if(vik == 29){
        let t1 = document.getElementById("taulu29");
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
    if(vik == 30){
        let t1 = document.getElementById("taulu30");
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
    if(vik == 31){
        let t1 = document.getElementById("taulu31");
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
    if(vik == 32){
        let t1 = document.getElementById("taulu32");
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
    if(vik == 33){
        let t1 = document.getElementById("taulu33");
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
    if(vik == 34){
        let t1 = document.getElementById("taulu34");
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
    if(vik == 35){
        let t1 = document.getElementById("taulu35");
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
    if(vik == 36){
        let t1 = document.getElementById("taulu36");
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
    if(vik == 37){
        let t1 = document.getElementById("taulu37");
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
    if(vik == 38){
        let t1 = document.getElementById("taulu38");
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
    if(vik == 39){
        let t1 = document.getElementById("taulu39");
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
    if(vik == 40){
        let t1 = document.getElementById("taulu40");
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
    if(vik == 41){
        let t1 = document.getElementById("taulu41");
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
    if(vik == 42){
        let t1 = document.getElementById("taulu42");
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
    if(vik == 43){
        let t1 = document.getElementById("taulu43");
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
    if(vik == 44){
        let t1 = document.getElementById("taulu44");
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
    if(vik == 45){
        let t1 = document.getElementById("taulu45");
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
    if(vik == 46){
        let t1 = document.getElementById("taulu46");
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
    if(vik == 47){
        let t1 = document.getElementById("taulu47");
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
    if(vik == 48){
        let t1 = document.getElementById("taulu48");
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
    if(vik == 49){
        let t1 = document.getElementById("taulu49");
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
    if(vik == 50){
        let t1 = document.getElementById("taulu50");
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
    if(vik == 51){
        let t1 = document.getElementById("taulu51");
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
    if(vik == 52){
        let t1 = document.getElementById("taulu52");
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

    //document.getElementById("info1").textContent = "";
}
document.getElementById("rst1").onclick = function(){
    aikax = aika.value;
    aikax = Number(aikax);
    aikay = aikaa.value;
    aikay = Number(aikay);
    if(vik == 1){
        let t1 = document.getElementById("taulu1");
        var maEl = t1.getElementsByClassName("mnt");
        var tiEl = t1.getElementsByClassName("tist");
        var keEl = t1.getElementsByClassName("kesk");
        var toEl = t1.getElementsByClassName("tors");
        var peEl = t1.getElementsByClassName("perj");
        var laEl = t1.getElementsByClassName("laun");
        var suEl = t1.getElementsByClassName("sunn");
    }
    if(vik == 2){
        let t1 = document.getElementById("taulu2");
        var maEl = t1.getElementsByClassName("mnt");
        var tiEl = t1.getElementsByClassName("tist");
        var keEl = t1.getElementsByClassName("kesk");
        var toEl = t1.getElementsByClassName("tors");
        var peEl = t1.getElementsByClassName("perj");
        var laEl = t1.getElementsByClassName("laun");
        var suEl = t1.getElementsByClassName("sunn");
    }
    if(vik == 3){
        let t1 = document.getElementById("taulu3");
        var maEl = t1.getElementsByClassName("mnt");
        var tiEl = t1.getElementsByClassName("tist");
        var keEl = t1.getElementsByClassName("kesk");
        var toEl = t1.getElementsByClassName("tors");
        var peEl = t1.getElementsByClassName("perj");
        var laEl = t1.getElementsByClassName("laun");
        var suEl = t1.getElementsByClassName("sunn");
    }
    if(vik == 4){
        let t1 = document.getElementById("taulu4");
        var maEl = t1.getElementsByClassName("mnt");
        var tiEl = t1.getElementsByClassName("tist");
        var keEl = t1.getElementsByClassName("kesk");
        var toEl = t1.getElementsByClassName("tors");
        var peEl = t1.getElementsByClassName("perj");
        var laEl = t1.getElementsByClassName("laun");
        var suEl = t1.getElementsByClassName("sunn");
    }
    if(vik == 5){
        let t1 = document.getElementById("taulu5");
        var maEl = t1.getElementsByClassName("mnt");
        var tiEl = t1.getElementsByClassName("tist");
        var keEl = t1.getElementsByClassName("kesk");
        var toEl = t1.getElementsByClassName("tors");
        var peEl = t1.getElementsByClassName("perj");
        var laEl = t1.getElementsByClassName("laun");
        var suEl = t1.getElementsByClassName("sunn");
    }
    if(vik == 6){
        let t1 = document.getElementById("taulu6");
        var maEl = t1.getElementsByClassName("mnt");
        var tiEl = t1.getElementsByClassName("tist");
        var keEl = t1.getElementsByClassName("kesk");
        var toEl = t1.getElementsByClassName("tors");
        var peEl = t1.getElementsByClassName("perj");
        var laEl = t1.getElementsByClassName("laun");
        var suEl = t1.getElementsByClassName("sunn");
    }
    if(vik == 7){
        let t1 = document.getElementById("taulu7");
        var maEl = t1.getElementsByClassName("mnt");
        var tiEl = t1.getElementsByClassName("tist");
        var keEl = t1.getElementsByClassName("kesk");
        var toEl = t1.getElementsByClassName("tors");
        var peEl = t1.getElementsByClassName("perj");
        var laEl = t1.getElementsByClassName("laun");
        var suEl = t1.getElementsByClassName("sunn");
    }
    if(vik == 8){
        let t1 = document.getElementById("taulu8");
        var maEl = t1.getElementsByClassName("mnt");
        var tiEl = t1.getElementsByClassName("tist");
        var keEl = t1.getElementsByClassName("kesk");
        var toEl = t1.getElementsByClassName("tors");
        var peEl = t1.getElementsByClassName("perj");
        var laEl = t1.getElementsByClassName("laun");
        var suEl = t1.getElementsByClassName("sunn");
    }
    if(vik == 9){
        let t1 = document.getElementById("taulu9");
        var maEl = t1.getElementsByClassName("mnt");
        var tiEl = t1.getElementsByClassName("tist");
        var keEl = t1.getElementsByClassName("kesk");
        var toEl = t1.getElementsByClassName("tors");
        var peEl = t1.getElementsByClassName("perj");
        var laEl = t1.getElementsByClassName("laun");
        var suEl = t1.getElementsByClassName("sunn");
    }
    if(vik == 10){
        let t1 = document.getElementById("taulu10");
        var maEl = t1.getElementsByClassName("mnt");
        var tiEl = t1.getElementsByClassName("tist");
        var keEl = t1.getElementsByClassName("kesk");
        var toEl = t1.getElementsByClassName("tors");
        var peEl = t1.getElementsByClassName("perj");
        var laEl = t1.getElementsByClassName("laun");
        var suEl = t1.getElementsByClassName("sunn");
    }
    if(vik == 11){
        let t1 = document.getElementById("taulu11");
        var maEl = t1.getElementsByClassName("mnt");
        var tiEl = t1.getElementsByClassName("tist");
        var keEl = t1.getElementsByClassName("kesk");
        var toEl = t1.getElementsByClassName("tors");
        var peEl = t1.getElementsByClassName("perj");
        var laEl = t1.getElementsByClassName("laun");
        var suEl = t1.getElementsByClassName("sunn");
    }
    if(vik == 12){
        let t1 = document.getElementById("taulu12");
        var maEl = t1.getElementsByClassName("mnt");
        var tiEl = t1.getElementsByClassName("tist");
        var keEl = t1.getElementsByClassName("kesk");
        var toEl = t1.getElementsByClassName("tors");
        var peEl = t1.getElementsByClassName("perj");
        var laEl = t1.getElementsByClassName("laun");
        var suEl = t1.getElementsByClassName("sunn");
    }
    if(vik == 13){
        let t1 = document.getElementById("taulu13");
        var maEl = t1.getElementsByClassName("mnt");
        var tiEl = t1.getElementsByClassName("tist");
        var keEl = t1.getElementsByClassName("kesk");
        var toEl = t1.getElementsByClassName("tors");
        var peEl = t1.getElementsByClassName("perj");
        var laEl = t1.getElementsByClassName("laun");
        var suEl = t1.getElementsByClassName("sunn");
    }
    if(vik == 14){
        let t1 = document.getElementById("taulu14");
        var maEl = t1.getElementsByClassName("mnt");
        var tiEl = t1.getElementsByClassName("tist");
        var keEl = t1.getElementsByClassName("kesk");
        var toEl = t1.getElementsByClassName("tors");
        var peEl = t1.getElementsByClassName("perj");
        var laEl = t1.getElementsByClassName("laun");
        var suEl = t1.getElementsByClassName("sunn");
    }
    if(vik == 15){
        let t1 = document.getElementById("taulu15");
        var maEl = t1.getElementsByClassName("mnt");
        var tiEl = t1.getElementsByClassName("tist");
        var keEl = t1.getElementsByClassName("kesk");
        var toEl = t1.getElementsByClassName("tors");
        var peEl = t1.getElementsByClassName("perj");
        var laEl = t1.getElementsByClassName("laun");
        var suEl = t1.getElementsByClassName("sunn");
    }
    if(vik == 16){
        let t1 = document.getElementById("taulu16");
        var maEl = t1.getElementsByClassName("mnt");
        var tiEl = t1.getElementsByClassName("tist");
        var keEl = t1.getElementsByClassName("kesk");
        var toEl = t1.getElementsByClassName("tors");
        var peEl = t1.getElementsByClassName("perj");
        var laEl = t1.getElementsByClassName("laun");
        var suEl = t1.getElementsByClassName("sunn");
    }
    if(vik == 17){
        let t1 = document.getElementById("taulu17");
        var maEl = t1.getElementsByClassName("mnt");
        var tiEl = t1.getElementsByClassName("tist");
        var keEl = t1.getElementsByClassName("kesk");
        var toEl = t1.getElementsByClassName("tors");
        var peEl = t1.getElementsByClassName("perj");
        var laEl = t1.getElementsByClassName("laun");
        var suEl = t1.getElementsByClassName("sunn");
    }
    if(vik == 18){
        let t1 = document.getElementById("taulu18");
        var maEl = t1.getElementsByClassName("mnt");
        var tiEl = t1.getElementsByClassName("tist");
        var keEl = t1.getElementsByClassName("kesk");
        var toEl = t1.getElementsByClassName("tors");
        var peEl = t1.getElementsByClassName("perj");
        var laEl = t1.getElementsByClassName("laun");
        var suEl = t1.getElementsByClassName("sunn");
    }
    if(vik == 19){
        let t1 = document.getElementById("taulu19");
        var maEl = t1.getElementsByClassName("mnt");
        var tiEl = t1.getElementsByClassName("tist");
        var keEl = t1.getElementsByClassName("kesk");
        var toEl = t1.getElementsByClassName("tors");
        var peEl = t1.getElementsByClassName("perj");
        var laEl = t1.getElementsByClassName("laun");
        var suEl = t1.getElementsByClassName("sunn");
    }
    if(vik == 20){
        let t1 = document.getElementById("taulu20");
        var maEl = t1.getElementsByClassName("mnt");
        var tiEl = t1.getElementsByClassName("tist");
        var keEl = t1.getElementsByClassName("kesk");
        var toEl = t1.getElementsByClassName("tors");
        var peEl = t1.getElementsByClassName("perj");
        var laEl = t1.getElementsByClassName("laun");
        var suEl = t1.getElementsByClassName("sunn");
    }
    if(vik == 21){
        let t1 = document.getElementById("taulu21");
        var maEl = t1.getElementsByClassName("mnt");
        var tiEl = t1.getElementsByClassName("tist");
        var keEl = t1.getElementsByClassName("kesk");
        var toEl = t1.getElementsByClassName("tors");
        var peEl = t1.getElementsByClassName("perj");
        var laEl = t1.getElementsByClassName("laun");
        var suEl = t1.getElementsByClassName("sunn");
    }
    if(vik == 22){
        let t1 = document.getElementById("taulu22");
        var maEl = t1.getElementsByClassName("mnt");
        var tiEl = t1.getElementsByClassName("tist");
        var keEl = t1.getElementsByClassName("kesk");
        var toEl = t1.getElementsByClassName("tors");
        var peEl = t1.getElementsByClassName("perj");
        var laEl = t1.getElementsByClassName("laun");
        var suEl = t1.getElementsByClassName("sunn");
    }
    if(vik == 23){
        let t1 = document.getElementById("taulu23");
        var maEl = t1.getElementsByClassName("mnt");
        var tiEl = t1.getElementsByClassName("tist");
        var keEl = t1.getElementsByClassName("kesk");
        var toEl = t1.getElementsByClassName("tors");
        var peEl = t1.getElementsByClassName("perj");
        var laEl = t1.getElementsByClassName("laun");
        var suEl = t1.getElementsByClassName("sunn");
    }
    if(vik == 24){
        let t1 = document.getElementById("taulu24");
        var maEl = t1.getElementsByClassName("mnt");
        var tiEl = t1.getElementsByClassName("tist");
        var keEl = t1.getElementsByClassName("kesk");
        var toEl = t1.getElementsByClassName("tors");
        var peEl = t1.getElementsByClassName("perj");
        var laEl = t1.getElementsByClassName("laun");
        var suEl = t1.getElementsByClassName("sunn");
    }    
    if(vik == 25){
        let t1 = document.getElementById("taulu25");
        var maEl = t1.getElementsByClassName("mnt");
        var tiEl = t1.getElementsByClassName("tist");
        var keEl = t1.getElementsByClassName("kesk");
        var toEl = t1.getElementsByClassName("tors");
        var peEl = t1.getElementsByClassName("perj");
        var laEl = t1.getElementsByClassName("laun");
        var suEl = t1.getElementsByClassName("sunn");
    }    
    if(vik == 26){
        let t1 = document.getElementById("taulu26");
        var maEl = t1.getElementsByClassName("mnt");
        var tiEl = t1.getElementsByClassName("tist");
        var keEl = t1.getElementsByClassName("kesk");
        var toEl = t1.getElementsByClassName("tors");
        var peEl = t1.getElementsByClassName("perj");
        var laEl = t1.getElementsByClassName("laun");
        var suEl = t1.getElementsByClassName("sunn");
    }
    if(vik == 27){
        let t1 = document.getElementById("taulu27");
        var maEl = t1.getElementsByClassName("mnt");
        var tiEl = t1.getElementsByClassName("tist");
        var keEl = t1.getElementsByClassName("kesk");
        var toEl = t1.getElementsByClassName("tors");
        var peEl = t1.getElementsByClassName("perj");
        var laEl = t1.getElementsByClassName("laun");
        var suEl = t1.getElementsByClassName("sunn");
    }
    if(vik == 28){
        let t1 = document.getElementById("taulu28");
        var maEl = t1.getElementsByClassName("mnt");
        var tiEl = t1.getElementsByClassName("tist");
        var keEl = t1.getElementsByClassName("kesk");
        var toEl = t1.getElementsByClassName("tors");
        var peEl = t1.getElementsByClassName("perj");
        var laEl = t1.getElementsByClassName("laun");
        var suEl = t1.getElementsByClassName("sunn");
    }
    if(vik == 29){
        let t1 = document.getElementById("taulu29");
        var maEl = t1.getElementsByClassName("mnt");
        var tiEl = t1.getElementsByClassName("tist");
        var keEl = t1.getElementsByClassName("kesk");
        var toEl = t1.getElementsByClassName("tors");
        var peEl = t1.getElementsByClassName("perj");
        var laEl = t1.getElementsByClassName("laun");
        var suEl = t1.getElementsByClassName("sunn");
    }
    if(vik == 30){
        let t1 = document.getElementById("taulu30");
        var maEl = t1.getElementsByClassName("mnt");
        var tiEl = t1.getElementsByClassName("tist");
        var keEl = t1.getElementsByClassName("kesk");
        var toEl = t1.getElementsByClassName("tors");
        var peEl = t1.getElementsByClassName("perj");
        var laEl = t1.getElementsByClassName("laun");
        var suEl = t1.getElementsByClassName("sunn");
    }
    if(vik == 31){
        let t1 = document.getElementById("taulu31");
        var maEl = t1.getElementsByClassName("mnt");
        var tiEl = t1.getElementsByClassName("tist");
        var keEl = t1.getElementsByClassName("kesk");
        var toEl = t1.getElementsByClassName("tors");
        var peEl = t1.getElementsByClassName("perj");
        var laEl = t1.getElementsByClassName("laun");
        var suEl = t1.getElementsByClassName("sunn");
    }
    if(vik == 32){
        let t1 = document.getElementById("taulu32");
        var maEl = t1.getElementsByClassName("mnt");
        var tiEl = t1.getElementsByClassName("tist");
        var keEl = t1.getElementsByClassName("kesk");
        var toEl = t1.getElementsByClassName("tors");
        var peEl = t1.getElementsByClassName("perj");
        var laEl = t1.getElementsByClassName("laun");
        var suEl = t1.getElementsByClassName("sunn");
    }
    if(vik == 33){
        let t1 = document.getElementById("taulu33");
        var maEl = t1.getElementsByClassName("mnt");
        var tiEl = t1.getElementsByClassName("tist");
        var keEl = t1.getElementsByClassName("kesk");
        var toEl = t1.getElementsByClassName("tors");
        var peEl = t1.getElementsByClassName("perj");
        var laEl = t1.getElementsByClassName("laun");
        var suEl = t1.getElementsByClassName("sunn");
    }
    if(vik == 34){
        let t1 = document.getElementById("taulu34");
        var maEl = t1.getElementsByClassName("mnt");
        var tiEl = t1.getElementsByClassName("tist");
        var keEl = t1.getElementsByClassName("kesk");
        var toEl = t1.getElementsByClassName("tors");
        var peEl = t1.getElementsByClassName("perj");
        var laEl = t1.getElementsByClassName("laun");
        var suEl = t1.getElementsByClassName("sunn");
    }
    if(vik == 35){
        let t1 = document.getElementById("taulu35");
        var maEl = t1.getElementsByClassName("mnt");
        var tiEl = t1.getElementsByClassName("tist");
        var keEl = t1.getElementsByClassName("kesk");
        var toEl = t1.getElementsByClassName("tors");
        var peEl = t1.getElementsByClassName("perj");
        var laEl = t1.getElementsByClassName("laun");
        var suEl = t1.getElementsByClassName("sunn");
    }
    if(vik == 36){
        let t1 = document.getElementById("taulu36");
        var maEl = t1.getElementsByClassName("mnt");
        var tiEl = t1.getElementsByClassName("tist");
        var keEl = t1.getElementsByClassName("kesk");
        var toEl = t1.getElementsByClassName("tors");
        var peEl = t1.getElementsByClassName("perj");
        var laEl = t1.getElementsByClassName("laun");
        var suEl = t1.getElementsByClassName("sunn");
    }
    if(vik == 37){
        let t1 = document.getElementById("taulu37");
        var maEl = t1.getElementsByClassName("mnt");
        var tiEl = t1.getElementsByClassName("tist");
        var keEl = t1.getElementsByClassName("kesk");
        var toEl = t1.getElementsByClassName("tors");
        var peEl = t1.getElementsByClassName("perj");
        var laEl = t1.getElementsByClassName("laun");
        var suEl = t1.getElementsByClassName("sunn");
    }
    if(vik == 38){
        let t1 = document.getElementById("taulu38");
        var maEl = t1.getElementsByClassName("mnt");
        var tiEl = t1.getElementsByClassName("tist");
        var keEl = t1.getElementsByClassName("kesk");
        var toEl = t1.getElementsByClassName("tors");
        var peEl = t1.getElementsByClassName("perj");
        var laEl = t1.getElementsByClassName("laun");
        var suEl = t1.getElementsByClassName("sunn");
    } 
    if(vik == 39){
        let t1 = document.getElementById("taulu39");
        var maEl = t1.getElementsByClassName("mnt");
        var tiEl = t1.getElementsByClassName("tist");
        var keEl = t1.getElementsByClassName("kesk");
        var toEl = t1.getElementsByClassName("tors");
        var peEl = t1.getElementsByClassName("perj");
        var laEl = t1.getElementsByClassName("laun");
        var suEl = t1.getElementsByClassName("sunn");
    }
    if(vik == 40){
        let t1 = document.getElementById("taulu40");
        var maEl = t1.getElementsByClassName("mnt");
        var tiEl = t1.getElementsByClassName("tist");
        var keEl = t1.getElementsByClassName("kesk");
        var toEl = t1.getElementsByClassName("tors");
        var peEl = t1.getElementsByClassName("perj");
        var laEl = t1.getElementsByClassName("laun");
        var suEl = t1.getElementsByClassName("sunn");
    }
    if(vik == 41){
        let t1 = document.getElementById("taulu41");
        var maEl = t1.getElementsByClassName("mnt");
        var tiEl = t1.getElementsByClassName("tist");
        var keEl = t1.getElementsByClassName("kesk");
        var toEl = t1.getElementsByClassName("tors");
        var peEl = t1.getElementsByClassName("perj");
        var laEl = t1.getElementsByClassName("laun");
        var suEl = t1.getElementsByClassName("sunn");
    }
    if(vik == 42){
        let t1 = document.getElementById("taulu42");
        var maEl = t1.getElementsByClassName("mnt");
        var tiEl = t1.getElementsByClassName("tist");
        var keEl = t1.getElementsByClassName("kesk");
        var toEl = t1.getElementsByClassName("tors");
        var peEl = t1.getElementsByClassName("perj");
        var laEl = t1.getElementsByClassName("laun");
        var suEl = t1.getElementsByClassName("sunn");
    }
    if(vik == 43){
        let t1 = document.getElementById("taulu43");
        var maEl = t1.getElementsByClassName("mnt");
        var tiEl = t1.getElementsByClassName("tist");
        var keEl = t1.getElementsByClassName("kesk");
        var toEl = t1.getElementsByClassName("tors");
        var peEl = t1.getElementsByClassName("perj");
        var laEl = t1.getElementsByClassName("laun");
        var suEl = t1.getElementsByClassName("sunn");
    }
    if(vik == 44){
        let t1 = document.getElementById("taulu44");
        var maEl = t1.getElementsByClassName("mnt");
        var tiEl = t1.getElementsByClassName("tist");
        var keEl = t1.getElementsByClassName("kesk");
        var toEl = t1.getElementsByClassName("tors");
        var peEl = t1.getElementsByClassName("perj");
        var laEl = t1.getElementsByClassName("laun");
        var suEl = t1.getElementsByClassName("sunn");
    }
    if(vik == 45){
        let t1 = document.getElementById("taulu45");
        var maEl = t1.getElementsByClassName("mnt");
        var tiEl = t1.getElementsByClassName("tist");
        var keEl = t1.getElementsByClassName("kesk");
        var toEl = t1.getElementsByClassName("tors");
        var peEl = t1.getElementsByClassName("perj");
        var laEl = t1.getElementsByClassName("laun");
        var suEl = t1.getElementsByClassName("sunn");
    }
    if(vik == 46){
        let t1 = document.getElementById("taulu46");
        var maEl = t1.getElementsByClassName("mnt");
        var tiEl = t1.getElementsByClassName("tist");
        var keEl = t1.getElementsByClassName("kesk");
        var toEl = t1.getElementsByClassName("tors");
        var peEl = t1.getElementsByClassName("perj");
        var laEl = t1.getElementsByClassName("laun");
        var suEl = t1.getElementsByClassName("sunn");
    }
    if(vik == 47){
        let t1 = document.getElementById("taulu47");
        var maEl = t1.getElementsByClassName("mnt");
        var tiEl = t1.getElementsByClassName("tist");
        var keEl = t1.getElementsByClassName("kesk");
        var toEl = t1.getElementsByClassName("tors");
        var peEl = t1.getElementsByClassName("perj");
        var laEl = t1.getElementsByClassName("laun");
        var suEl = t1.getElementsByClassName("sunn");
    }
    if(vik == 48){
        let t1 = document.getElementById("taulu48");
        var maEl = t1.getElementsByClassName("mnt");
        var tiEl = t1.getElementsByClassName("tist");
        var keEl = t1.getElementsByClassName("kesk");
        var toEl = t1.getElementsByClassName("tors");
        var peEl = t1.getElementsByClassName("perj");
        var laEl = t1.getElementsByClassName("laun");
        var suEl = t1.getElementsByClassName("sunn");
    }
    if(vik == 49){
        let t1 = document.getElementById("taulu49");
        var maEl = t1.getElementsByClassName("mnt");
        var tiEl = t1.getElementsByClassName("tist");
        var keEl = t1.getElementsByClassName("kesk");
        var toEl = t1.getElementsByClassName("tors");
        var peEl = t1.getElementsByClassName("perj");
        var laEl = t1.getElementsByClassName("laun");
        var suEl = t1.getElementsByClassName("sunn");
    }
    if(vik == 50){
        let t1 = document.getElementById("taulu50");
        var maEl = t1.getElementsByClassName("mnt");
        var tiEl = t1.getElementsByClassName("tist");
        var keEl = t1.getElementsByClassName("kesk");
        var toEl = t1.getElementsByClassName("tors");
        var peEl = t1.getElementsByClassName("perj");
        var laEl = t1.getElementsByClassName("laun");
        var suEl = t1.getElementsByClassName("sunn");
    }
    if(vik == 51){
        let t1 = document.getElementById("taulu51");
        var maEl = t1.getElementsByClassName("mnt");
        var tiEl = t1.getElementsByClassName("tist");
        var keEl = t1.getElementsByClassName("kesk");
        var toEl = t1.getElementsByClassName("tors");
        var peEl = t1.getElementsByClassName("perj");
        var laEl = t1.getElementsByClassName("laun");
        var suEl = t1.getElementsByClassName("sunn");
    }
    if(vik == 52){
        let t1 = document.getElementById("taulu52");
        var maEl = t1.getElementsByClassName("mnt");
        var tiEl = t1.getElementsByClassName("tist");
        var keEl = t1.getElementsByClassName("kesk");
        var toEl = t1.getElementsByClassName("tors");
        var peEl = t1.getElementsByClassName("perj");
        var laEl = t1.getElementsByClassName("laun");
        var suEl = t1.getElementsByClassName("sunn");
    }

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
            if(vik == 1){
                let t1 = document.getElementById("taulu1");
                let t2 = document.getElementById("taulu2");
                var suEl = t1.getElementsByClassName("sunn");
                var maEl = t2.getElementsByClassName("mnt");
            }
            if(vik == 2){
                let t1 = document.getElementById("taulu2");
                let t2 = document.getElementById("taulu3");
                var suEl = t1.getElementsByClassName("sunn");
                var maEl = t2.getElementsByClassName("mnt");
            }
            if(vik == 3){
                let t1 = document.getElementById("taulu3");
                let t2 = document.getElementById("taulu4");
                var suEl = t1.getElementsByClassName("sunn");
                var maEl = t2.getElementsByClassName("mnt");
            }
            if(vik == 4){
                let t1 = document.getElementById("taulu4");
                let t2 = document.getElementById("taulu5");
                var suEl = t1.getElementsByClassName("sunn");
                var maEl = t2.getElementsByClassName("mnt");
            }
            if(vik == 5){
                let t1 = document.getElementById("taulu5");
                let t2 = document.getElementById("taulu6");
                var suEl = t1.getElementsByClassName("sunn");
                var maEl = t2.getElementsByClassName("mnt");
            }
            if(vik == 6){
                let t1 = document.getElementById("taulu6");
                let t2 = document.getElementById("taulu7");
                var suEl = t1.getElementsByClassName("sunn");
                var maEl = t2.getElementsByClassName("mnt");
            }
            if(vik == 7){
                let t1 = document.getElementById("taulu7");
                let t2 = document.getElementById("taulu8");
                var suEl = t1.getElementsByClassName("sunn");
                var maEl = t2.getElementsByClassName("mnt");
            }
            if(vik == 8){
                let t1 = document.getElementById("taulu8");
                let t2 = document.getElementById("taulu9");
                var suEl = t1.getElementsByClassName("sunn");
                var maEl = t2.getElementsByClassName("mnt");
            }
            if(vik == 9){
                let t1 = document.getElementById("taulu9");
                let t2 = document.getElementById("taulu10");
                var suEl = t1.getElementsByClassName("sunn");
                var maEl = t2.getElementsByClassName("mnt");
            }
            if(vik == 10){
                let t1 = document.getElementById("taulu10");
                let t2 = document.getElementById("taulu11");
                var suEl = t1.getElementsByClassName("sunn");
                var maEl = t2.getElementsByClassName("mnt");
            }
            if(vik == 11){
                let t1 = document.getElementById("taulu11");
                let t2 = document.getElementById("taulu12");
                var suEl = t1.getElementsByClassName("sunn");
                var maEl = t2.getElementsByClassName("mnt");
            }
            if(vik == 12){
                let t1 = document.getElementById("taulu12");
                let t2 = document.getElementById("taulu13");
                var suEl = t1.getElementsByClassName("sunn");
                var maEl = t2.getElementsByClassName("mnt");
            }
            if(vik == 13){
                let t1 = document.getElementById("taulu13");
                let t2 = document.getElementById("taulu14");
                var suEl = t1.getElementsByClassName("sunn");
                var maEl = t2.getElementsByClassName("mnt");
            }
            if(vik == 14){
                let t1 = document.getElementById("taulu14");
                let t2 = document.getElementById("taulu15");
                var suEl = t1.getElementsByClassName("sunn");
                var maEl = t2.getElementsByClassName("mnt");
            }
            if(vik == 15){
                let t1 = document.getElementById("taulu15");
                let t2 = document.getElementById("taulu16");
                var suEl = t1.getElementsByClassName("sunn");
                var maEl = t2.getElementsByClassName("mnt");
            }
            if(vik == 16){
                let t1 = document.getElementById("taulu16");
                let t2 = document.getElementById("taulu17");
                var suEl = t1.getElementsByClassName("sunn");
                var maEl = t2.getElementsByClassName("mnt");
            }
            if(vik == 17){
                let t1 = document.getElementById("taulu17");
                let t2 = document.getElementById("taulu18");
                var suEl = t1.getElementsByClassName("sunn");
                var maEl = t2.getElementsByClassName("mnt");
            }
            if(vik == 18){
                let t1 = document.getElementById("taulu18");
                let t2 = document.getElementById("taulu19");
                var suEl = t1.getElementsByClassName("sunn");
                var maEl = t2.getElementsByClassName("mnt");
            }
            if(vik == 19){
                let t1 = document.getElementById("taulu19");
                let t2 = document.getElementById("taulu20");
                var suEl = t1.getElementsByClassName("sunn");
                var maEl = t2.getElementsByClassName("mnt");
            }
            if(vik == 20){
                let t1 = document.getElementById("taulu20");
                let t2 = document.getElementById("taulu21");
                var suEl = t1.getElementsByClassName("sunn");
                var maEl = t2.getElementsByClassName("mnt");
            }
            if(vik == 21){
                let t1 = document.getElementById("taulu21");
                let t2 = document.getElementById("taulu22");
                var suEl = t1.getElementsByClassName("sunn");
                var maEl = t2.getElementsByClassName("mnt");
            }
            if(vik == 22){
                let t1 = document.getElementById("taulu22");
                let t2 = document.getElementById("taulu23");
                var suEl = t1.getElementsByClassName("sunn");
                var maEl = t2.getElementsByClassName("mnt");
            }
            if(vik == 23){
                let t1 = document.getElementById("taulu23");
                let t2 = document.getElementById("taulu24");
                var suEl = t1.getElementsByClassName("sunn");
                var maEl = t2.getElementsByClassName("mnt");
            }
            if(vik == 24){
                let t1 = document.getElementById("taulu24");
                let t2 = document.getElementById("taulu25");
                var suEl = t1.getElementsByClassName("sunn");
                var maEl = t2.getElementsByClassName("mnt");
            }
            if(vik == 25){
                let t1 = document.getElementById("taulu25");
                let t2 = document.getElementById("taulu26");
                var suEl = t1.getElementsByClassName("sunn");
                var maEl = t2.getElementsByClassName("mnt");
            }
            if(vik == 26){
                let t1 = document.getElementById("taulu26");
                let t2 = document.getElementById("taulu27");
                var suEl = t1.getElementsByClassName("sunn");
                var maEl = t2.getElementsByClassName("mnt");
            }
            if(vik == 27){
                let t1 = document.getElementById("taulu27");
                let t2 = document.getElementById("taulu28");
                var suEl = t1.getElementsByClassName("sunn");
                var maEl = t2.getElementsByClassName("mnt");
            }
            if(vik == 28){
                let t1 = document.getElementById("taulu28");
                let t2 = document.getElementById("taulu29");
                var suEl = t1.getElementsByClassName("sunn");
                var maEl = t2.getElementsByClassName("mnt");
            }
            if(vik == 29){
                let t1 = document.getElementById("taulu29");
                let t2 = document.getElementById("taulu30");
                var suEl = t1.getElementsByClassName("sunn");
                var maEl = t2.getElementsByClassName("mnt");
            }
            if(vik == 30){
                let t1 = document.getElementById("taulu30");
                let t2 = document.getElementById("taulu31");
                var suEl = t1.getElementsByClassName("sunn");
                var maEl = t2.getElementsByClassName("mnt");
            }
            if(vik == 31){
                let t1 = document.getElementById("taulu31");
                let t2 = document.getElementById("taulu32");
                var suEl = t1.getElementsByClassName("sunn");
                var maEl = t2.getElementsByClassName("mnt");
            }
            if(vik == 32){
                let t1 = document.getElementById("taulu32");
                let t2 = document.getElementById("taulu33");
                var suEl = t1.getElementsByClassName("sunn");
                var maEl = t2.getElementsByClassName("mnt");
            }
            if(vik == 33){
                let t1 = document.getElementById("taulu33");
                let t2 = document.getElementById("taulu34");
                var suEl = t1.getElementsByClassName("sunn");
                var maEl = t2.getElementsByClassName("mnt");
            }
            if(vik == 34){
                let t1 = document.getElementById("taulu34");
                let t2 = document.getElementById("taulu35");
                var suEl = t1.getElementsByClassName("sunn");
                var maEl = t2.getElementsByClassName("mnt");
            }
            if(vik == 35){
                let t1 = document.getElementById("taulu35");
                let t2 = document.getElementById("taulu36");
                var suEl = t1.getElementsByClassName("sunn");
                var maEl = t2.getElementsByClassName("mnt");
            }
            if(vik == 36){
                let t1 = document.getElementById("taulu36");
                let t2 = document.getElementById("taulu37");
                var suEl = t1.getElementsByClassName("sunn");
                var maEl = t2.getElementsByClassName("mnt");
            }
            if(vik == 37){
                let t1 = document.getElementById("taulu37");
                let t2 = document.getElementById("taulu38");
                var suEl = t1.getElementsByClassName("sunn");
                var maEl = t2.getElementsByClassName("mnt");
            }
            if(vik == 38){
                let t1 = document.getElementById("taulu38");
                let t2 = document.getElementById("taulu39");
                var suEl = t1.getElementsByClassName("sunn");
                var maEl = t2.getElementsByClassName("mnt");
            }
            if(vik == 39){
                let t1 = document.getElementById("taulu39");
                let t2 = document.getElementById("taulu40");
                var suEl = t1.getElementsByClassName("sunn");
                var maEl = t2.getElementsByClassName("mnt");
            }
            if(vik == 40){
                let t1 = document.getElementById("taulu40");
                let t2 = document.getElementById("taulu41");
                var suEl = t1.getElementsByClassName("sunn");
                var maEl = t2.getElementsByClassName("mnt");
            }
            if(vik == 41){
                let t1 = document.getElementById("taulu41");
                let t2 = document.getElementById("taulu42");
                var suEl = t1.getElementsByClassName("sunn");
                var maEl = t2.getElementsByClassName("mnt");
            }
            if(vik == 42){
                let t1 = document.getElementById("taulu42");
                let t2 = document.getElementById("taulu43");
                var suEl = t1.getElementsByClassName("sunn");
                var maEl = t2.getElementsByClassName("mnt");
            }
            if(vik == 43){
                let t1 = document.getElementById("taulu43");
                let t2 = document.getElementById("taulu44");
                var suEl = t1.getElementsByClassName("sunn");
                var maEl = t2.getElementsByClassName("mnt");
            }
            if(vik == 44){
                let t1 = document.getElementById("taulu44");
                let t2 = document.getElementById("taulu45");
                var suEl = t1.getElementsByClassName("sunn");
                var maEl = t2.getElementsByClassName("mnt");
            }
            if(vik == 45){
                let t1 = document.getElementById("taulu45");
                let t2 = document.getElementById("taulu46");
                var suEl = t1.getElementsByClassName("sunn");
                var maEl = t2.getElementsByClassName("mnt");
            }
            if(vik == 46){
                let t1 = document.getElementById("taulu46");
                let t2 = document.getElementById("taulu47");
                var suEl = t1.getElementsByClassName("sunn");
                var maEl = t2.getElementsByClassName("mnt");
            }
            if(vik == 47){
                let t1 = document.getElementById("taulu47");
                let t2 = document.getElementById("taulu48");
                var suEl = t1.getElementsByClassName("sunn");
                var maEl = t2.getElementsByClassName("mnt");
            }
            if(vik == 48){
                let t1 = document.getElementById("taulu48");
                let t2 = document.getElementById("taulu49");
                var suEl = t1.getElementsByClassName("sunn");
                var maEl = t2.getElementsByClassName("mnt");
            }
            if(vik == 49){
                let t1 = document.getElementById("taulu49");
                let t2 = document.getElementById("taulu50");
                var suEl = t1.getElementsByClassName("sunn");
                var maEl = t2.getElementsByClassName("mnt");
            }
            if(vik == 50){
                let t1 = document.getElementById("taulu50");
                let t2 = document.getElementById("taulu51");
                var suEl = t1.getElementsByClassName("sunn");
                var maEl = t2.getElementsByClassName("mnt");
            }
            if(vik == 51){
                let t1 = document.getElementById("taulu51");
                let t2 = document.getElementById("taulu52");
                var suEl = t1.getElementsByClassName("sunn");
                var maEl = t2.getElementsByClassName("mnt");
            }
            if(vik == 52){
                let t1 = document.getElementById("taulu52");
                let t2 = document.getElementById("taulu1");
                var suEl = t1.getElementsByClassName("sunn");
                var maEl = t2.getElementsByClassName("mnt");
            }

            var suEl3 = Array.from(suEl).slice(aikax,24);
            var suEl4 = Array.from(maEl).slice(0,aikay+1);
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
//var tlk = [];
//const taulukot = [t1,t2];
/*switch(taulukot){
    case vik === 1:
        t1.style.display = "table";
        break;
    case vik === 2:
        t1.style.display = "none";
        break;
}*/


/*function kopio(){
    munTaulu = document.getElementById("taulu1");
    munKlooni = munTaulu.cloneNode(true);
    document.body.appendChild(munKlooni);
    munKlooni.style.display = "none";
*///}
/*function varCr(){
    var taulut = [];
    for(var i = 1; i<=52; i++){
        taulut[i] = kopio();
        //taulut[i].style.display = "none";
    }
    /*tt1 = taulut[1];
    tt2 = taulut[2];
    var hhh = kopio(munKlooni);
    kopio();
    //document.body.appendChild(hhh);
    //document.body.appendChild(tt1);
}*/

/*const taulut = [];
for(var i = 0; i<=51; i++){
    munTaulu = document.getElementById("taulu1");
    munKlooni = munTaulu.cloneNode(true);
    munKlooni.id = "taulu1";
    document.body.appendChild(munKlooni);
    munKlooni.style.display = "none";
    taulut.push(munKlooni);
}*/

window.onload = function(){
    let t2 = document.getElementById("taulu2");
    let t3 = document.getElementById("taulu3");
    let t4 = document.getElementById("taulu4");
    let t5 = document.getElementById("taulu5");
    let t6 = document.getElementById("taulu6");
    let t7 = document.getElementById("taulu7");
    let t8 = document.getElementById("taulu8");
    let t9 = document.getElementById("taulu9");
    let t10 = document.getElementById("taulu10");
    let t11 = document.getElementById("taulu11");
    let t12 = document.getElementById("taulu12");
    let t13 = document.getElementById("taulu13");
    let t14 = document.getElementById("taulu14");
    let t15 = document.getElementById("taulu15");
    let t16 = document.getElementById("taulu16");
    let t17 = document.getElementById("taulu17");
    let t18 = document.getElementById("taulu18");
    let t19 = document.getElementById("taulu19");
    let t20 = document.getElementById("taulu20");
    let t21 = document.getElementById("taulu21");
    let t22 = document.getElementById("taulu22");
    let t23 = document.getElementById("taulu23");
    let t24 = document.getElementById("taulu24");
    let t25 = document.getElementById("taulu25");
    let t26 = document.getElementById("taulu26");
    let t27 = document.getElementById("taulu27");
    let t28 = document.getElementById("taulu28");
    let t29 = document.getElementById("taulu29");
    let t30 = document.getElementById("taulu30");
    let t31 = document.getElementById("taulu31");
    let t32 = document.getElementById("taulu32");
    let t33 = document.getElementById("taulu33");
    let t34 = document.getElementById("taulu34");
    let t35 = document.getElementById("taulu35");
    let t36 = document.getElementById("taulu36");
    let t37 = document.getElementById("taulu37");
    let t38 = document.getElementById("taulu38");
    let t39 = document.getElementById("taulu39");
    let t40 = document.getElementById("taulu40");
    let t41 = document.getElementById("taulu41");
    let t42 = document.getElementById("taulu42");
    let t43 = document.getElementById("taulu43");
    let t44 = document.getElementById("taulu44");
    let t45 = document.getElementById("taulu45");
    let t46 = document.getElementById("taulu46");
    let t47 = document.getElementById("taulu47");
    let t48 = document.getElementById("taulu48");
    let t49 = document.getElementById("taulu49");
    let t50 = document.getElementById("taulu50");
    let t51 = document.getElementById("taulu51");
    let t52 = document.getElementById("taulu52");



    t2.style.display = "none";
    t3.style.display = "none";
    t4.style.display = "none";
    t5.style.display = "none";
    t6.style.display = "none";
    t7.style.display = "none";
    t8.style.display = "none";
    t9.style.display = "none";
    t10.style.display = "none";
    t11.style.display = "none";
    t12.style.display = "none";
    t13.style.display = "none";
    t14.style.display = "none";
    t15.style.display = "none";
    t16.style.display = "none";
    t17.style.display = "none";
    t18.style.display = "none";
    t19.style.display = "none";
    t20.style.display = "none";
    t21.style.display = "none";
    t22.style.display = "none";
    t23.style.display = "none";
    t24.style.display = "none";
    t25.style.display = "none";
    t26.style.display = "none";
    t27.style.display = "none";
    t28.style.display = "none";
    t29.style.display = "none";
    t30.style.display = "none";
    t31.style.display = "none";
    t32.style.display = "none";
    t33.style.display = "none";
    t34.style.display = "none";
    t35.style.display = "none";
    t36.style.display = "none";
    t37.style.display = "none";
    t38.style.display = "none";
    t39.style.display = "none";
    t40.style.display = "none";
    t41.style.display = "none";
    t42.style.display = "none";
    t43.style.display = "none";
    t44.style.display = "none";
    t45.style.display = "none";
    t46.style.display = "none";
    t47.style.display = "none";
    t48.style.display = "none";
    t49.style.display = "none";
    t50.style.display = "none";
    t51.style.display = "none";
    t52.style.display = "none";
}

document.getElementById("vvv").onclick = function(){
    vik = viikko.value;
    vik = Number(vik);

    /*switch (vik){
        case 1:
            t1.style.display = "table";
            for(var i = 0; i <= taulut.length; i++){
                taulut[i].style.display = "none";
            }
            break;
        case 2:
            taulut[0].style.display = "table";
            t1.style.display = "none";
            for(var i = 1; i <= taulut.length; i++){
                taulut[i].style.display = "none";
            }
            break;
        case 3:
            break;
    }*/
    /*(() => {
            t2;
        })();
        /*for(let i = 0; i < taulut.length; i++){
            taulut[i].style.display = "none";
        }*/
    /*(() => {
            t1;
        })();
        /*for(let i = 1; i < taulut.length; i++){
            taulut[i].style.display = "none";
        }*/
    /*for(let i = 2; i < taulut.length; i++){
            taulut[i].style.display = "none";
        }*/

    let t1 = document.getElementById("taulu1");
    let t2 = document.getElementById("taulu2");
    let t3 = document.getElementById("taulu3");
    let t4 = document.getElementById("taulu4");
    let t5 = document.getElementById("taulu5");
    let t6 = document.getElementById("taulu6");
    let t7 = document.getElementById("taulu7");
    let t8 = document.getElementById("taulu8");
    let t9 = document.getElementById("taulu9");
    let t10 = document.getElementById("taulu10");
    let t11 = document.getElementById("taulu11");
    let t12 = document.getElementById("taulu12");
    let t13 = document.getElementById("taulu13");
    let t14 = document.getElementById("taulu14");
    let t15 = document.getElementById("taulu15");
    let t16 = document.getElementById("taulu16");
    let t17 = document.getElementById("taulu17");
    let t18 = document.getElementById("taulu18");
    let t19 = document.getElementById("taulu19");
    let t20 = document.getElementById("taulu20");
    let t21 = document.getElementById("taulu21");
    let t22 = document.getElementById("taulu22");
    let t23 = document.getElementById("taulu23");
    let t24 = document.getElementById("taulu24");
    let t25 = document.getElementById("taulu25");
    let t26 = document.getElementById("taulu26");
    let t27 = document.getElementById("taulu27");
    let t28 = document.getElementById("taulu28");
    let t29 = document.getElementById("taulu29");
    let t30 = document.getElementById("taulu30");
    let t31 = document.getElementById("taulu31");
    let t32 = document.getElementById("taulu32");
    let t33 = document.getElementById("taulu33");
    let t34 = document.getElementById("taulu34");
    let t35 = document.getElementById("taulu35");
    let t36 = document.getElementById("taulu36");
    let t37 = document.getElementById("taulu37");
    let t38 = document.getElementById("taulu38");
    let t39 = document.getElementById("taulu39");
    let t40 = document.getElementById("taulu40");
    let t41 = document.getElementById("taulu41");
    let t42 = document.getElementById("taulu42");
    let t43 = document.getElementById("taulu43");
    let t44 = document.getElementById("taulu44");
    let t45 = document.getElementById("taulu45");
    let t46 = document.getElementById("taulu46");
    let t47 = document.getElementById("taulu47");
    let t48 = document.getElementById("taulu48");
    let t49 = document.getElementById("taulu49");
    let t50 = document.getElementById("taulu50");
    let t51 = document.getElementById("taulu51");
    let t52 = document.getElementById("taulu52");

    if(vik == 1){
        
        t1.style.display = "table";
        t2.style.display = "none";
        t3.style.display = "none";
        t4.style.display = "none";
        t5.style.display = "none";
        t6.style.display = "none";
        t7.style.display = "none";
        t8.style.display = "none";
        t9.style.display = "none";
        t10.style.display = "none";
        t11.style.display = "none";
        t12.style.display = "none";
        t13.style.display = "none";
        t14.style.display = "none";
        t15.style.display = "none";
        t16.style.display = "none";
        t17.style.display = "none";
        t18.style.display = "none";
        t19.style.display = "none";
        t20.style.display = "none";
        t21.style.display = "none";
        t22.style.display = "none";
        t23.style.display = "none";
        t24.style.display = "none";
        t25.style.display = "none";
        t26.style.display = "none";
        t27.style.display = "none";
        t28.style.display = "none";
        t29.style.display = "none";
        t30.style.display = "none";
        t31.style.display = "none";
        t32.style.display = "none";
        t33.style.display = "none";
        t34.style.display = "none";
        t35.style.display = "none";
        t36.style.display = "none";
        t37.style.display = "none";
        t38.style.display = "none";
        t39.style.display = "none";
        t40.style.display = "none";
        t41.style.display = "none";
        t42.style.display = "none";
        t43.style.display = "none";
        t44.style.display = "none";
        t45.style.display = "none";
        t46.style.display = "none";
        t47.style.display = "none";
        t48.style.display = "none";
        t49.style.display = "none";
        t50.style.display = "none";
        t51.style.display = "none";
        t52.style.display = "none";
    }
    else if(vik == 2){
        
        t1.style.display = "none";
        t2.style.display = "table";
        t3.style.display = "none";
        t4.style.display = "none";
        t5.style.display = "none";
        t6.style.display = "none";
        t7.style.display = "none";
        t8.style.display = "none";
        t9.style.display = "none";
        t10.style.display = "none";
        t11.style.display = "none";
        t12.style.display = "none";
        t13.style.display = "none";
        t14.style.display = "none";
        t15.style.display = "none";
        t16.style.display = "none";
        t17.style.display = "none";
        t18.style.display = "none";
        t19.style.display = "none";
        t20.style.display = "none";
        t21.style.display = "none";
        t22.style.display = "none";
        t23.style.display = "none";
        t24.style.display = "none";
        t25.style.display = "none";
        t26.style.display = "none";
        t27.style.display = "none";
        t28.style.display = "none";
        t29.style.display = "none";
        t30.style.display = "none";
        t31.style.display = "none";
        t32.style.display = "none";
        t33.style.display = "none";
        t34.style.display = "none";
        t35.style.display = "none";
        t36.style.display = "none";
        t37.style.display = "none";
        t38.style.display = "none";
        t39.style.display = "none";
        t40.style.display = "none";
        t41.style.display = "none";
        t42.style.display = "none";
        t43.style.display = "none";
        t44.style.display = "none";
        t45.style.display = "none";
        t46.style.display = "none";
        t47.style.display = "none";
        t48.style.display = "none";
        t49.style.display = "none";
        t50.style.display = "none";
        t51.style.display = "none";
        t52.style.display = "none";    

        
    }
    else if(vik == 3){

        t1.style.display = "none";
        t2.style.display = "none";
        t3.style.display = "table";
        t4.style.display = "none";
        t5.style.display = "none";
        t6.style.display = "none";
        t7.style.display = "none";
        t8.style.display = "none";
        t9.style.display = "none";
        t10.style.display = "none";
        t11.style.display = "none";
        t12.style.display = "none";
        t13.style.display = "none";
        t14.style.display = "none";
        t15.style.display = "none";
        t16.style.display = "none";
        t17.style.display = "none";
        t18.style.display = "none";
        t19.style.display = "none";
        t20.style.display = "none";
        t21.style.display = "none";
        t22.style.display = "none";
        t23.style.display = "none";
        t24.style.display = "none";
        t25.style.display = "none";
        t26.style.display = "none";
        t27.style.display = "none";
        t28.style.display = "none";
        t29.style.display = "none";
        t30.style.display = "none";
        t31.style.display = "none";
        t32.style.display = "none";
        t33.style.display = "none";
        t34.style.display = "none";
        t35.style.display = "none";
        t36.style.display = "none";
        t37.style.display = "none";
        t38.style.display = "none";
        t39.style.display = "none";
        t40.style.display = "none";
        t41.style.display = "none";
        t42.style.display = "none";
        t43.style.display = "none";
        t44.style.display = "none";
        t45.style.display = "none";
        t46.style.display = "none";
        t47.style.display = "none";
        t48.style.display = "none";
        t49.style.display = "none";
        t50.style.display = "none";
        t51.style.display = "none";
        t52.style.display = "none";
    }
    else if(vik == 4){

        t1.style.display = "none";
        t2.style.display = "none";
        t3.style.display = "none";
        t4.style.display = "table";
        t5.style.display = "none";
        t6.style.display = "none";
        t7.style.display = "none";
        t8.style.display = "none";
        t9.style.display = "none";
        t10.style.display = "none";
        t11.style.display = "none";
        t12.style.display = "none";
        t13.style.display = "none";
        t14.style.display = "none";
        t15.style.display = "none";
        t16.style.display = "none";
        t17.style.display = "none";
        t18.style.display = "none";
        t19.style.display = "none";
        t20.style.display = "none";
        t21.style.display = "none";
        t22.style.display = "none";
        t23.style.display = "none";
        t24.style.display = "none";
        t25.style.display = "none";
        t26.style.display = "none";
        t27.style.display = "none";
        t28.style.display = "none";
        t29.style.display = "none";
        t30.style.display = "none";
        t31.style.display = "none";
        t32.style.display = "none";
        t33.style.display = "none";
        t34.style.display = "none";
        t35.style.display = "none";
        t36.style.display = "none";
        t37.style.display = "none";
        t38.style.display = "none";
        t39.style.display = "none";
        t40.style.display = "none";
        t41.style.display = "none";
        t42.style.display = "none";
        t43.style.display = "none";
        t44.style.display = "none";
        t45.style.display = "none";
        t46.style.display = "none";
        t47.style.display = "none";
        t48.style.display = "none";
        t49.style.display = "none";
        t50.style.display = "none";
        t51.style.display = "none";
        t52.style.display = "none";
    }
    else if(vik == 5){

        t1.style.display = "none";
        t2.style.display = "none";
        t3.style.display = "none";
        t4.style.display = "none";
        t5.style.display = "table";
        t6.style.display = "none";
        t7.style.display = "none";
        t8.style.display = "none";
        t9.style.display = "none";
        t10.style.display = "none";
        t11.style.display = "none";
        t12.style.display = "none";
        t13.style.display = "none";
        t14.style.display = "none";
        t15.style.display = "none";
        t16.style.display = "none";
        t17.style.display = "none";
        t18.style.display = "none";
        t19.style.display = "none";
        t20.style.display = "none";
        t21.style.display = "none";
        t22.style.display = "none";
        t23.style.display = "none";
        t24.style.display = "none";
        t25.style.display = "none";
        t26.style.display = "none";
        t27.style.display = "none";
        t28.style.display = "none";
        t29.style.display = "none";
        t30.style.display = "none";
        t31.style.display = "none";
        t32.style.display = "none";
        t33.style.display = "none";
        t34.style.display = "none";
        t35.style.display = "none";
        t36.style.display = "none";
        t37.style.display = "none";
        t38.style.display = "none";
        t39.style.display = "none";
        t40.style.display = "none";
        t41.style.display = "none";
        t42.style.display = "none";
        t43.style.display = "none";
        t44.style.display = "none";
        t45.style.display = "none";
        t46.style.display = "none";
        t47.style.display = "none";
        t48.style.display = "none";
        t49.style.display = "none";
        t50.style.display = "none";
        t51.style.display = "none";
        t52.style.display = "none";
    }
    else if(vik == 6){

        t1.style.display = "none";
        t2.style.display = "none";
        t3.style.display = "none";
        t4.style.display = "none";
        t5.style.display = "none";
        t6.style.display = "table";
        t7.style.display = "none";
        t8.style.display = "none";
        t9.style.display = "none";
        t10.style.display = "none";
        t11.style.display = "none";
        t12.style.display = "none";
        t13.style.display = "none";
        t14.style.display = "none";
        t15.style.display = "none";
        t16.style.display = "none";
        t17.style.display = "none";
        t18.style.display = "none";
        t19.style.display = "none";
        t20.style.display = "none";
        t21.style.display = "none";
        t22.style.display = "none";
        t23.style.display = "none";
        t24.style.display = "none";
        t25.style.display = "none";
        t26.style.display = "none";
        t27.style.display = "none";
        t28.style.display = "none";
        t29.style.display = "none";
        t30.style.display = "none";
        t31.style.display = "none";
        t32.style.display = "none";
        t33.style.display = "none";
        t34.style.display = "none";
        t35.style.display = "none";
        t36.style.display = "none";
        t37.style.display = "none";
        t38.style.display = "none";
        t39.style.display = "none";
        t40.style.display = "none";
        t41.style.display = "none";
        t42.style.display = "none";
        t43.style.display = "none";
        t44.style.display = "none";
        t45.style.display = "none";
        t46.style.display = "none";
        t47.style.display = "none";
        t48.style.display = "none";
        t49.style.display = "none";
        t50.style.display = "none";
        t51.style.display = "none";
        t52.style.display = "none";
    }
    else if(vik == 7){

        t1.style.display = "none";
        t2.style.display = "none";
        t3.style.display = "none";
        t4.style.display = "none";
        t5.style.display = "none";
        t6.style.display = "none";
        t7.style.display = "table";
        t8.style.display = "none";
        t9.style.display = "none";
        t10.style.display = "none";
        t11.style.display = "none";
        t12.style.display = "none";
        t13.style.display = "none";
        t14.style.display = "none";
        t15.style.display = "none";
        t16.style.display = "none";
        t17.style.display = "none";
        t18.style.display = "none";
        t19.style.display = "none";
        t20.style.display = "none";
        t21.style.display = "none";
        t22.style.display = "none";
        t23.style.display = "none";
        t24.style.display = "none";
        t25.style.display = "none";
        t26.style.display = "none";
        t27.style.display = "none";
        t28.style.display = "none";
        t29.style.display = "none";
        t30.style.display = "none";
        t31.style.display = "none";
        t32.style.display = "none";
        t33.style.display = "none";
        t34.style.display = "none";
        t35.style.display = "none";
        t36.style.display = "none";
        t37.style.display = "none";
        t38.style.display = "none";
        t39.style.display = "none";
        t40.style.display = "none";
        t41.style.display = "none";
        t42.style.display = "none";
        t43.style.display = "none";
        t44.style.display = "none";
        t45.style.display = "none";
        t46.style.display = "none";
        t47.style.display = "none";
        t48.style.display = "none";
        t49.style.display = "none";
        t50.style.display = "none";
        t51.style.display = "none";
        t52.style.display = "none";
    }
    else if(vik == 8){

        t1.style.display = "none";
        t2.style.display = "none";
        t3.style.display = "none";
        t4.style.display = "none";
        t5.style.display = "none";
        t6.style.display = "none";
        t7.style.display = "none";
        t8.style.display = "table";
        t9.style.display = "none";
        t10.style.display = "none";
        t11.style.display = "none";
        t12.style.display = "none";
        t13.style.display = "none";
        t14.style.display = "none";
        t15.style.display = "none";
        t16.style.display = "none";
        t17.style.display = "none";
        t18.style.display = "none";
        t19.style.display = "none";
        t20.style.display = "none";
        t21.style.display = "none";
        t22.style.display = "none";
        t23.style.display = "none";
        t24.style.display = "none";
        t25.style.display = "none";
        t26.style.display = "none";
        t27.style.display = "none";
        t28.style.display = "none";
        t29.style.display = "none";
        t30.style.display = "none";
        t31.style.display = "none";
        t32.style.display = "none";
        t33.style.display = "none";
        t34.style.display = "none";
        t35.style.display = "none";
        t36.style.display = "none";
        t37.style.display = "none";
        t38.style.display = "none";
        t39.style.display = "none";
        t40.style.display = "none";
        t41.style.display = "none";
        t42.style.display = "none";
        t43.style.display = "none";
        t44.style.display = "none";
        t45.style.display = "none";
        t46.style.display = "none";
        t47.style.display = "none";
        t48.style.display = "none";
        t49.style.display = "none";
        t50.style.display = "none";
        t51.style.display = "none";
        t52.style.display = "none";
    }
    else if(vik == 9){

        t1.style.display = "none";
        t2.style.display = "none";
        t3.style.display = "none";
        t4.style.display = "none";
        t5.style.display = "none";
        t6.style.display = "none";
        t7.style.display = "none";
        t8.style.display = "none";
        t9.style.display = "table";
        t10.style.display = "none";
        t11.style.display = "none";
        t12.style.display = "none";
        t13.style.display = "none";
        t14.style.display = "none";
        t15.style.display = "none";
        t16.style.display = "none";
        t17.style.display = "none";
        t18.style.display = "none";
        t19.style.display = "none";
        t20.style.display = "none";
        t21.style.display = "none";
        t22.style.display = "none";
        t23.style.display = "none";
        t24.style.display = "none";
        t25.style.display = "none";
        t26.style.display = "none";
        t27.style.display = "none";
        t28.style.display = "none";
        t29.style.display = "none";
        t30.style.display = "none";
        t31.style.display = "none";
        t32.style.display = "none";
        t33.style.display = "none";
        t34.style.display = "none";
        t35.style.display = "none";
        t36.style.display = "none";
        t37.style.display = "none";
        t38.style.display = "none";
        t39.style.display = "none";
        t40.style.display = "none";
        t41.style.display = "none";
        t42.style.display = "none";
        t43.style.display = "none";
        t44.style.display = "none";
        t45.style.display = "none";
        t46.style.display = "none";
        t47.style.display = "none";
        t48.style.display = "none";
        t49.style.display = "none";
        t50.style.display = "none";
        t51.style.display = "none";
        t52.style.display = "none";
    }
    else if(vik == 10){

        t1.style.display = "none";
        t2.style.display = "none";
        t3.style.display = "none";
        t4.style.display = "none";
        t5.style.display = "none";
        t6.style.display = "none";
        t7.style.display = "none";
        t8.style.display = "none";
        t9.style.display = "none";
        t10.style.display = "table";
        t11.style.display = "none";
        t12.style.display = "none";
        t13.style.display = "none";
        t14.style.display = "none";
        t15.style.display = "none";
        t16.style.display = "none";
        t17.style.display = "none";
        t18.style.display = "none";
        t19.style.display = "none";
        t20.style.display = "none";
        t21.style.display = "none";
        t22.style.display = "none";
        t23.style.display = "none";
        t24.style.display = "none";
        t25.style.display = "none";
        t26.style.display = "none";
        t27.style.display = "none";
        t28.style.display = "none";
        t29.style.display = "none";
        t30.style.display = "none";
        t31.style.display = "none";
        t32.style.display = "none";
        t33.style.display = "none";
        t34.style.display = "none";
        t35.style.display = "none";
        t36.style.display = "none";
        t37.style.display = "none";
        t38.style.display = "none";
        t39.style.display = "none";
        t40.style.display = "none";
        t41.style.display = "none";
        t42.style.display = "none";
        t43.style.display = "none";
        t44.style.display = "none";
        t45.style.display = "none";
        t46.style.display = "none";
        t47.style.display = "none";
        t48.style.display = "none";
        t49.style.display = "none";
        t50.style.display = "none";
        t51.style.display = "none";
        t52.style.display = "none";
    }
    else if(vik == 11){

        t1.style.display = "none";
        t2.style.display = "none";
        t3.style.display = "none";
        t4.style.display = "none";
        t5.style.display = "none";
        t6.style.display = "none";
        t7.style.display = "none";
        t8.style.display = "none";
        t9.style.display = "none";
        t10.style.display = "none";
        t11.style.display = "table";
        t12.style.display = "none";
        t13.style.display = "none";
        t14.style.display = "none";
        t15.style.display = "none";
        t16.style.display = "none";
        t17.style.display = "none";
        t18.style.display = "none";
        t19.style.display = "none";
        t20.style.display = "none";
        t21.style.display = "none";
        t22.style.display = "none";
        t23.style.display = "none";
        t24.style.display = "none";
        t25.style.display = "none";
        t26.style.display = "none";
        t27.style.display = "none";
        t28.style.display = "none";
        t29.style.display = "none";
        t30.style.display = "none";
        t31.style.display = "none";
        t32.style.display = "none";
        t33.style.display = "none";
        t34.style.display = "none";
        t35.style.display = "none";
        t36.style.display = "none";
        t37.style.display = "none";
        t38.style.display = "none";
        t39.style.display = "none";
        t40.style.display = "none";
        t41.style.display = "none";
        t42.style.display = "none";
        t43.style.display = "none";
        t44.style.display = "none";
        t45.style.display = "none";
        t46.style.display = "none";
        t47.style.display = "none";
        t48.style.display = "none";
        t49.style.display = "none";
        t50.style.display = "none";
        t51.style.display = "none";
        t52.style.display = "none";
    }
    else if(vik == 12){

        t1.style.display = "none";
        t2.style.display = "none";
        t3.style.display = "none";
        t4.style.display = "none";
        t5.style.display = "none";
        t6.style.display = "none";
        t7.style.display = "none";
        t8.style.display = "none";
        t9.style.display = "none";
        t10.style.display = "none";
        t11.style.display = "none";
        t12.style.display = "table";
        t13.style.display = "none";
        t14.style.display = "none";
        t15.style.display = "none";
        t16.style.display = "none";
        t17.style.display = "none";
        t18.style.display = "none";
        t19.style.display = "none";
        t20.style.display = "none";
        t21.style.display = "none";
        t22.style.display = "none";
        t23.style.display = "none";
        t24.style.display = "none";
        t25.style.display = "none";
        t26.style.display = "none";
        t27.style.display = "none";
        t28.style.display = "none";
        t29.style.display = "none";
        t30.style.display = "none";
        t31.style.display = "none";
        t32.style.display = "none";
        t33.style.display = "none";
        t34.style.display = "none";
        t35.style.display = "none";
        t36.style.display = "none";
        t37.style.display = "none";
        t38.style.display = "none";
        t39.style.display = "none";
        t40.style.display = "none";
        t41.style.display = "none";
        t42.style.display = "none";
        t43.style.display = "none";
        t44.style.display = "none";
        t45.style.display = "none";
        t46.style.display = "none";
        t47.style.display = "none";
        t48.style.display = "none";
        t49.style.display = "none";
        t50.style.display = "none";
        t51.style.display = "none";
        t52.style.display = "none";
    }
    else if(vik == 13){

        t1.style.display = "none";
        t2.style.display = "none";
        t3.style.display = "none";
        t4.style.display = "none";
        t5.style.display = "none";
        t6.style.display = "none";
        t7.style.display = "none";
        t8.style.display = "none";
        t9.style.display = "none";
        t10.style.display = "none";
        t11.style.display = "none";
        t12.style.display = "none";
        t13.style.display = "table";
        t14.style.display = "none";
        t15.style.display = "none";
        t16.style.display = "none";
        t17.style.display = "none";
        t18.style.display = "none";
        t19.style.display = "none";
        t20.style.display = "none";
        t21.style.display = "none";
        t22.style.display = "none";
        t23.style.display = "none";
        t24.style.display = "none";
        t25.style.display = "none";
        t26.style.display = "none";
        t27.style.display = "none";
        t28.style.display = "none";
        t29.style.display = "none";
        t30.style.display = "none";
        t31.style.display = "none";
        t32.style.display = "none";
        t33.style.display = "none";
        t34.style.display = "none";
        t35.style.display = "none";
        t36.style.display = "none";
        t37.style.display = "none";
        t38.style.display = "none";
        t39.style.display = "none";
        t40.style.display = "none";
        t41.style.display = "none";
        t42.style.display = "none";
        t43.style.display = "none";
        t44.style.display = "none";
        t45.style.display = "none";
        t46.style.display = "none";
        t47.style.display = "none";
        t48.style.display = "none";
        t49.style.display = "none";
        t50.style.display = "none";
        t51.style.display = "none";
        t52.style.display = "none";
    }
    else if(vik == 14){

        t1.style.display = "none";
        t2.style.display = "none";
        t3.style.display = "none";
        t4.style.display = "none";
        t5.style.display = "none";
        t6.style.display = "none";
        t7.style.display = "none";
        t8.style.display = "none";
        t9.style.display = "none";
        t10.style.display = "none";
        t11.style.display = "none";
        t12.style.display = "none";
        t13.style.display = "none";
        t14.style.display = "table";
        t15.style.display = "none";
        t16.style.display = "none";
        t17.style.display = "none";
        t18.style.display = "none";
        t19.style.display = "none";
        t20.style.display = "none";
        t21.style.display = "none";
        t22.style.display = "none";
        t23.style.display = "none";
        t24.style.display = "none";
        t25.style.display = "none";
        t26.style.display = "none";
        t27.style.display = "none";
        t28.style.display = "none";
        t29.style.display = "none";
        t30.style.display = "none";
        t31.style.display = "none";
        t32.style.display = "none";
        t33.style.display = "none";
        t34.style.display = "none";
        t35.style.display = "none";
        t36.style.display = "none";
        t37.style.display = "none";
        t38.style.display = "none";
        t39.style.display = "none";
        t40.style.display = "none";
        t41.style.display = "none";
        t42.style.display = "none";
        t43.style.display = "none";
        t44.style.display = "none";
        t45.style.display = "none";
        t46.style.display = "none";
        t47.style.display = "none";
        t48.style.display = "none";
        t49.style.display = "none";
        t50.style.display = "none";
        t51.style.display = "none";
        t52.style.display = "none";
    }
    else if(vik == 15){

        t1.style.display = "none";
        t2.style.display = "none";
        t3.style.display = "none";
        t4.style.display = "none";
        t5.style.display = "none";
        t6.style.display = "none";
        t7.style.display = "none";
        t8.style.display = "none";
        t9.style.display = "none";
        t10.style.display = "none";
        t11.style.display = "none";
        t12.style.display = "none";
        t13.style.display = "none";
        t14.style.display = "none";
        t15.style.display = "table";
        t16.style.display = "none";
        t17.style.display = "none";
        t18.style.display = "none";
        t19.style.display = "none";
        t20.style.display = "none";
        t21.style.display = "none";
        t22.style.display = "none";
        t23.style.display = "none";
        t24.style.display = "none";
        t25.style.display = "none";
        t26.style.display = "none";
        t27.style.display = "none";
        t28.style.display = "none";
        t29.style.display = "none";
        t30.style.display = "none";
        t31.style.display = "none";
        t32.style.display = "none";
        t33.style.display = "none";
        t34.style.display = "none";
        t35.style.display = "none";
        t36.style.display = "none";
        t37.style.display = "none";
        t38.style.display = "none";
        t39.style.display = "none";
        t40.style.display = "none";
        t41.style.display = "none";
        t42.style.display = "none";
        t43.style.display = "none";
        t44.style.display = "none";
        t45.style.display = "none";
        t46.style.display = "none";
        t47.style.display = "none";
        t48.style.display = "none";
        t49.style.display = "none";
        t50.style.display = "none";
        t51.style.display = "none";
        t52.style.display = "none";
    }
    else if(vik == 16){

        t1.style.display = "none";
        t2.style.display = "none";
        t3.style.display = "none";
        t4.style.display = "none";
        t5.style.display = "none";
        t6.style.display = "none";
        t7.style.display = "none";
        t8.style.display = "none";
        t9.style.display = "none";
        t10.style.display = "none";
        t11.style.display = "none";
        t12.style.display = "none";
        t13.style.display = "none";
        t14.style.display = "none";
        t15.style.display = "none";
        t16.style.display = "table";
        t17.style.display = "none";
        t18.style.display = "none";
        t19.style.display = "none";
        t20.style.display = "none";
        t21.style.display = "none";
        t22.style.display = "none";
        t23.style.display = "none";
        t24.style.display = "none";
        t25.style.display = "none";
        t26.style.display = "none";
        t27.style.display = "none";
        t28.style.display = "none";
        t29.style.display = "none";
        t30.style.display = "none";
        t31.style.display = "none";
        t32.style.display = "none";
        t33.style.display = "none";
        t34.style.display = "none";
        t35.style.display = "none";
        t36.style.display = "none";
        t37.style.display = "none";
        t38.style.display = "none";
        t39.style.display = "none";
        t40.style.display = "none";
        t41.style.display = "none";
        t42.style.display = "none";
        t43.style.display = "none";
        t44.style.display = "none";
        t45.style.display = "none";
        t46.style.display = "none";
        t47.style.display = "none";
        t48.style.display = "none";
        t49.style.display = "none";
        t50.style.display = "none";
        t51.style.display = "none";
        t52.style.display = "none";
    }
    else if(vik == 17){

        t1.style.display = "none";
        t2.style.display = "none";
        t3.style.display = "none";
        t4.style.display = "none";
        t5.style.display = "none";
        t6.style.display = "none";
        t7.style.display = "none";
        t8.style.display = "none";
        t9.style.display = "none";
        t10.style.display = "none";
        t11.style.display = "none";
        t12.style.display = "none";
        t13.style.display = "none";
        t14.style.display = "none";
        t15.style.display = "none";
        t16.style.display = "none";
        t17.style.display = "table";
        t18.style.display = "none";
        t19.style.display = "none";
        t20.style.display = "none";
        t21.style.display = "none";
        t22.style.display = "none";
        t23.style.display = "none";
        t24.style.display = "none";
        t25.style.display = "none";
        t26.style.display = "none";
        t27.style.display = "none";
        t28.style.display = "none";
        t29.style.display = "none";
        t30.style.display = "none";
        t31.style.display = "none";
        t32.style.display = "none";
        t33.style.display = "none";
        t34.style.display = "none";
        t35.style.display = "none";
        t36.style.display = "none";
        t37.style.display = "none";
        t38.style.display = "none";
        t39.style.display = "none";
        t40.style.display = "none";
        t41.style.display = "none";
        t42.style.display = "none";
        t43.style.display = "none";
        t44.style.display = "none";
        t45.style.display = "none";
        t46.style.display = "none";
        t47.style.display = "none";
        t48.style.display = "none";
        t49.style.display = "none";
        t50.style.display = "none";
        t51.style.display = "none";
        t52.style.display = "none";
    }
    else if(vik == 18){

        t1.style.display = "none";
        t2.style.display = "none";
        t3.style.display = "none";
        t4.style.display = "none";
        t5.style.display = "none";
        t6.style.display = "none";
        t7.style.display = "none";
        t8.style.display = "none";
        t9.style.display = "none";
        t10.style.display = "none";
        t11.style.display = "none";
        t12.style.display = "none";
        t13.style.display = "none";
        t14.style.display = "none";
        t15.style.display = "none";
        t16.style.display = "none";
        t17.style.display = "none";
        t18.style.display = "table";
        t19.style.display = "none";
        t20.style.display = "none";
        t21.style.display = "none";
        t22.style.display = "none";
        t23.style.display = "none";
        t24.style.display = "none";
        t25.style.display = "none";
        t26.style.display = "none";
        t27.style.display = "none";
        t28.style.display = "none";
        t29.style.display = "none";
        t30.style.display = "none";
        t31.style.display = "none";
        t32.style.display = "none";
        t33.style.display = "none";
        t34.style.display = "none";
        t35.style.display = "none";
        t36.style.display = "none";
        t37.style.display = "none";
        t38.style.display = "none";
        t39.style.display = "none";
        t40.style.display = "none";
        t41.style.display = "none";
        t42.style.display = "none";
        t43.style.display = "none";
        t44.style.display = "none";
        t45.style.display = "none";
        t46.style.display = "none";
        t47.style.display = "none";
        t48.style.display = "none";
        t49.style.display = "none";
        t50.style.display = "none";
        t51.style.display = "none";
        t52.style.display = "none";
    }
    else if(vik == 19){

        t1.style.display = "none";
        t2.style.display = "none";
        t3.style.display = "none";
        t4.style.display = "none";
        t5.style.display = "none";
        t6.style.display = "none";
        t7.style.display = "none";
        t8.style.display = "none";
        t9.style.display = "none";
        t10.style.display = "none";
        t11.style.display = "none";
        t12.style.display = "none";
        t13.style.display = "none";
        t14.style.display = "none";
        t15.style.display = "none";
        t16.style.display = "none";
        t17.style.display = "none";
        t18.style.display = "none";
        t19.style.display = "table";
        t20.style.display = "none";
        t21.style.display = "none";
        t22.style.display = "none";
        t23.style.display = "none";
        t24.style.display = "none";
        t25.style.display = "none";
        t26.style.display = "none";
        t27.style.display = "none";
        t28.style.display = "none";
        t29.style.display = "none";
        t30.style.display = "none";
        t31.style.display = "none";
        t32.style.display = "none";
        t33.style.display = "none";
        t34.style.display = "none";
        t35.style.display = "none";
        t36.style.display = "none";
        t37.style.display = "none";
        t38.style.display = "none";
        t39.style.display = "none";
        t40.style.display = "none";
        t41.style.display = "none";
        t42.style.display = "none";
        t43.style.display = "none";
        t44.style.display = "none";
        t45.style.display = "none";
        t46.style.display = "none";
        t47.style.display = "none";
        t48.style.display = "none";
        t49.style.display = "none";
        t50.style.display = "none";
        t51.style.display = "none";
        t52.style.display = "none";
    }
    else if(vik == 20){

        t1.style.display = "none";
        t2.style.display = "none";
        t3.style.display = "none";
        t4.style.display = "none";
        t5.style.display = "none";
        t6.style.display = "none";
        t7.style.display = "none";
        t8.style.display = "none";
        t9.style.display = "none";
        t10.style.display = "none";
        t11.style.display = "none";
        t12.style.display = "none";
        t13.style.display = "none";
        t14.style.display = "none";
        t15.style.display = "none";
        t16.style.display = "none";
        t17.style.display = "none";
        t18.style.display = "none";
        t19.style.display = "none";
        t20.style.display = "table";
        t21.style.display = "none";
        t22.style.display = "none";
        t23.style.display = "none";
        t24.style.display = "none";
        t25.style.display = "none";
        t26.style.display = "none";
        t27.style.display = "none";
        t28.style.display = "none";
        t29.style.display = "none";
        t30.style.display = "none";
        t31.style.display = "none";
        t32.style.display = "none";
        t33.style.display = "none";
        t34.style.display = "none";
        t35.style.display = "none";
        t36.style.display = "none";
        t37.style.display = "none";
        t38.style.display = "none";
        t39.style.display = "none";
        t40.style.display = "none";
        t41.style.display = "none";
        t42.style.display = "none";
        t43.style.display = "none";
        t44.style.display = "none";
        t45.style.display = "none";
        t46.style.display = "none";
        t47.style.display = "none";
        t48.style.display = "none";
        t49.style.display = "none";
        t50.style.display = "none";
        t51.style.display = "none";
        t52.style.display = "none";
    }
    else if(vik == 21){

        t1.style.display = "none";
        t2.style.display = "none";
        t3.style.display = "none";
        t4.style.display = "none";
        t5.style.display = "none";
        t6.style.display = "none";
        t7.style.display = "none";
        t8.style.display = "none";
        t9.style.display = "none";
        t10.style.display = "none";
        t11.style.display = "none";
        t12.style.display = "none";
        t13.style.display = "none";
        t14.style.display = "none";
        t15.style.display = "none";
        t16.style.display = "none";
        t17.style.display = "none";
        t18.style.display = "none";
        t19.style.display = "none";
        t20.style.display = "none";
        t21.style.display = "table";
        t22.style.display = "none";
        t23.style.display = "none";
        t24.style.display = "none";
        t25.style.display = "none";
        t26.style.display = "none";
        t27.style.display = "none";
        t28.style.display = "none";
        t29.style.display = "none";
        t30.style.display = "none";
        t31.style.display = "none";
        t32.style.display = "none";
        t33.style.display = "none";
        t34.style.display = "none";
        t35.style.display = "none";
        t36.style.display = "none";
        t37.style.display = "none";
        t38.style.display = "none";
        t39.style.display = "none";
        t40.style.display = "none";
        t41.style.display = "none";
        t42.style.display = "none";
        t43.style.display = "none";
        t44.style.display = "none";
        t45.style.display = "none";
        t46.style.display = "none";
        t47.style.display = "none";
        t48.style.display = "none";
        t49.style.display = "none";
        t50.style.display = "none";
        t51.style.display = "none";
        t52.style.display = "none";
    }
    else if(vik == 22){

        t1.style.display = "none";
        t2.style.display = "none";
        t3.style.display = "none";
        t4.style.display = "none";
        t5.style.display = "none";
        t6.style.display = "none";
        t7.style.display = "none";
        t8.style.display = "none";
        t9.style.display = "none";
        t10.style.display = "none";
        t11.style.display = "none";
        t12.style.display = "none";
        t13.style.display = "none";
        t14.style.display = "none";
        t15.style.display = "none";
        t16.style.display = "none";
        t17.style.display = "none";
        t18.style.display = "none";
        t19.style.display = "none";
        t20.style.display = "none";
        t21.style.display = "none";
        t22.style.display = "table";
        t23.style.display = "none";
        t24.style.display = "none";
        t25.style.display = "none";
        t26.style.display = "none";
        t27.style.display = "none";
        t28.style.display = "none";
        t29.style.display = "none";
        t30.style.display = "none";
        t31.style.display = "none";
        t32.style.display = "none";
        t33.style.display = "none";
        t34.style.display = "none";
        t35.style.display = "none";
        t36.style.display = "none";
        t37.style.display = "none";
        t38.style.display = "none";
        t39.style.display = "none";
        t40.style.display = "none";
        t41.style.display = "none";
        t42.style.display = "none";
        t43.style.display = "none";
        t44.style.display = "none";
        t45.style.display = "none";
        t46.style.display = "none";
        t47.style.display = "none";
        t48.style.display = "none";
        t49.style.display = "none";
        t50.style.display = "none";
        t51.style.display = "none";
        t52.style.display = "none";
    }
    else if(vik == 23){

        t1.style.display = "none";
        t2.style.display = "none";
        t3.style.display = "none";
        t4.style.display = "none";
        t5.style.display = "none";
        t6.style.display = "none";
        t7.style.display = "none";
        t8.style.display = "none";
        t9.style.display = "none";
        t10.style.display = "none";
        t11.style.display = "none";
        t12.style.display = "none";
        t13.style.display = "none";
        t14.style.display = "none";
        t15.style.display = "none";
        t16.style.display = "none";
        t17.style.display = "none";
        t18.style.display = "none";
        t19.style.display = "none";
        t20.style.display = "none";
        t21.style.display = "none";
        t22.style.display = "none";
        t23.style.display = "table";
        t24.style.display = "none";
        t25.style.display = "none";
        t26.style.display = "none";
        t27.style.display = "none";
        t28.style.display = "none";
        t29.style.display = "none";
        t30.style.display = "none";
        t31.style.display = "none";
        t32.style.display = "none";
        t33.style.display = "none";
        t34.style.display = "none";
        t35.style.display = "none";
        t36.style.display = "none";
        t37.style.display = "none";
        t38.style.display = "none";
        t39.style.display = "none";
        t40.style.display = "none";
        t41.style.display = "none";
        t42.style.display = "none";
        t43.style.display = "none";
        t44.style.display = "none";
        t45.style.display = "none";
        t46.style.display = "none";
        t47.style.display = "none";
        t48.style.display = "none";
        t49.style.display = "none";
        t50.style.display = "none";
        t51.style.display = "none";
        t52.style.display = "none";
    }
    else if(vik == 24){

        t1.style.display = "none";
        t2.style.display = "none";
        t3.style.display = "none";
        t4.style.display = "none";
        t5.style.display = "none";
        t6.style.display = "none";
        t7.style.display = "none";
        t8.style.display = "none";
        t9.style.display = "none";
        t10.style.display = "none";
        t11.style.display = "none";
        t12.style.display = "none";
        t13.style.display = "none";
        t14.style.display = "none";
        t15.style.display = "none";
        t16.style.display = "none";
        t17.style.display = "none";
        t18.style.display = "none";
        t19.style.display = "none";
        t20.style.display = "none";
        t21.style.display = "none";
        t22.style.display = "none";
        t23.style.display = "none";
        t24.style.display = "table";
        t25.style.display = "none";
        t26.style.display = "none";
        t27.style.display = "none";
        t28.style.display = "none";
        t29.style.display = "none";
        t30.style.display = "none";
        t31.style.display = "none";
        t32.style.display = "none";
        t33.style.display = "none";
        t34.style.display = "none";
        t35.style.display = "none";
        t36.style.display = "none";
        t37.style.display = "none";
        t38.style.display = "none";
        t39.style.display = "none";
        t40.style.display = "none";
        t41.style.display = "none";
        t42.style.display = "none";
        t43.style.display = "none";
        t44.style.display = "none";
        t45.style.display = "none";
        t46.style.display = "none";
        t47.style.display = "none";
        t48.style.display = "none";
        t49.style.display = "none";
        t50.style.display = "none";
        t51.style.display = "none";
        t52.style.display = "none";
    }
    else if(vik == 25){

        t1.style.display = "none";
        t2.style.display = "none";
        t3.style.display = "none";
        t4.style.display = "none";
        t5.style.display = "none";
        t6.style.display = "none";
        t7.style.display = "none";
        t8.style.display = "none";
        t9.style.display = "none";
        t10.style.display = "none";
        t11.style.display = "none";
        t12.style.display = "none";
        t13.style.display = "none";
        t14.style.display = "none";
        t15.style.display = "none";
        t16.style.display = "none";
        t17.style.display = "none";
        t18.style.display = "none";
        t19.style.display = "none";
        t20.style.display = "none";
        t21.style.display = "none";
        t22.style.display = "none";
        t23.style.display = "none";
        t24.style.display = "none";
        t25.style.display = "table";
        t26.style.display = "none";
        t27.style.display = "none";
        t28.style.display = "none";
        t29.style.display = "none";
        t30.style.display = "none";
        t31.style.display = "none";
        t32.style.display = "none";
        t33.style.display = "none";
        t34.style.display = "none";
        t35.style.display = "none";
        t36.style.display = "none";
        t37.style.display = "none";
        t38.style.display = "none";
        t39.style.display = "none";
        t40.style.display = "none";
        t41.style.display = "none";
        t42.style.display = "none";
        t43.style.display = "none";
        t44.style.display = "none";
        t45.style.display = "none";
        t46.style.display = "none";
        t47.style.display = "none";
        t48.style.display = "none";
        t49.style.display = "none";
        t50.style.display = "none";
        t51.style.display = "none";
        t52.style.display = "none";
    }
    else if(vik == 26){

        t1.style.display = "none";
        t2.style.display = "none";
        t3.style.display = "none";
        t4.style.display = "none";
        t5.style.display = "none";
        t6.style.display = "none";
        t7.style.display = "none";
        t8.style.display = "none";
        t9.style.display = "none";
        t10.style.display = "none";
        t11.style.display = "none";
        t12.style.display = "none";
        t13.style.display = "none";
        t14.style.display = "none";
        t15.style.display = "none";
        t16.style.display = "none";
        t17.style.display = "none";
        t18.style.display = "none";
        t19.style.display = "none";
        t20.style.display = "none";
        t21.style.display = "none";
        t22.style.display = "none";
        t23.style.display = "none";
        t24.style.display = "none";
        t25.style.display = "none";
        t26.style.display = "table";
        t27.style.display = "none";
        t28.style.display = "none";
        t29.style.display = "none";
        t30.style.display = "none";
        t31.style.display = "none";
        t32.style.display = "none";
        t33.style.display = "none";
        t34.style.display = "none";
        t35.style.display = "none";
        t36.style.display = "none";
        t37.style.display = "none";
        t38.style.display = "none";
        t39.style.display = "none";
        t40.style.display = "none";
        t41.style.display = "none";
        t42.style.display = "none";
        t43.style.display = "none";
        t44.style.display = "none";
        t45.style.display = "none";
        t46.style.display = "none";
        t47.style.display = "none";
        t48.style.display = "none";
        t49.style.display = "none";
        t50.style.display = "none";
        t51.style.display = "none";
        t52.style.display = "none";
    }
    else if(vik == 27){

        t1.style.display = "none";
        t2.style.display = "none";
        t3.style.display = "none";
        t4.style.display = "none";
        t5.style.display = "none";
        t6.style.display = "none";
        t7.style.display = "none";
        t8.style.display = "none";
        t9.style.display = "none";
        t10.style.display = "none";
        t11.style.display = "none";
        t12.style.display = "none";
        t13.style.display = "none";
        t14.style.display = "none";
        t15.style.display = "none";
        t16.style.display = "none";
        t17.style.display = "none";
        t18.style.display = "none";
        t19.style.display = "none";
        t20.style.display = "none";
        t21.style.display = "none";
        t22.style.display = "none";
        t23.style.display = "none";
        t24.style.display = "none";
        t25.style.display = "none";
        t26.style.display = "none";
        t27.style.display = "table";
        t28.style.display = "none";
        t29.style.display = "none";
        t30.style.display = "none";
        t31.style.display = "none";
        t32.style.display = "none";
        t33.style.display = "none";
        t34.style.display = "none";
        t35.style.display = "none";
        t36.style.display = "none";
        t37.style.display = "none";
        t38.style.display = "none";
        t39.style.display = "none";
        t40.style.display = "none";
        t41.style.display = "none";
        t42.style.display = "none";
        t43.style.display = "none";
        t44.style.display = "none";
        t45.style.display = "none";
        t46.style.display = "none";
        t47.style.display = "none";
        t48.style.display = "none";
        t49.style.display = "none";
        t50.style.display = "none";
        t51.style.display = "none";
        t52.style.display = "none";
    }
    else if(vik == 28){

        t1.style.display = "none";
        t2.style.display = "none";
        t3.style.display = "none";
        t4.style.display = "none";
        t5.style.display = "none";
        t6.style.display = "none";
        t7.style.display = "none";
        t8.style.display = "none";
        t9.style.display = "none";
        t10.style.display = "none";
        t11.style.display = "none";
        t12.style.display = "none";
        t13.style.display = "none";
        t14.style.display = "none";
        t15.style.display = "none";
        t16.style.display = "none";
        t17.style.display = "none";
        t18.style.display = "none";
        t19.style.display = "none";
        t20.style.display = "none";
        t21.style.display = "none";
        t22.style.display = "none";
        t23.style.display = "none";
        t24.style.display = "none";
        t25.style.display = "none";
        t26.style.display = "none";
        t27.style.display = "none";
        t28.style.display = "table";
        t29.style.display = "none";
        t30.style.display = "none";
        t31.style.display = "none";
        t32.style.display = "none";
        t33.style.display = "none";
        t34.style.display = "none";
        t35.style.display = "none";
        t36.style.display = "none";
        t37.style.display = "none";
        t38.style.display = "none";
        t39.style.display = "none";
        t40.style.display = "none";
        t41.style.display = "none";
        t42.style.display = "none";
        t43.style.display = "none";
        t44.style.display = "none";
        t45.style.display = "none";
        t46.style.display = "none";
        t47.style.display = "none";
        t48.style.display = "none";
        t49.style.display = "none";
        t50.style.display = "none";
        t51.style.display = "none";
        t52.style.display = "none";
    }
    else if(vik == 29){

        t1.style.display = "none";
        t2.style.display = "none";
        t3.style.display = "none";
        t4.style.display = "none";
        t5.style.display = "none";
        t6.style.display = "none";
        t7.style.display = "none";
        t8.style.display = "none";
        t9.style.display = "none";
        t10.style.display = "none";
        t11.style.display = "none";
        t12.style.display = "none";
        t13.style.display = "none";
        t14.style.display = "none";
        t15.style.display = "none";
        t16.style.display = "none";
        t17.style.display = "none";
        t18.style.display = "none";
        t19.style.display = "none";
        t20.style.display = "none";
        t21.style.display = "none";
        t22.style.display = "none";
        t23.style.display = "none";
        t24.style.display = "none";
        t25.style.display = "none";
        t26.style.display = "none";
        t27.style.display = "none";
        t28.style.display = "none";
        t29.style.display = "table";
        t30.style.display = "none";
        t31.style.display = "none";
        t32.style.display = "none";
        t33.style.display = "none";
        t34.style.display = "none";
        t35.style.display = "none";
        t36.style.display = "none";
        t37.style.display = "none";
        t38.style.display = "none";
        t39.style.display = "none";
        t40.style.display = "none";
        t41.style.display = "none";
        t42.style.display = "none";
        t43.style.display = "none";
        t44.style.display = "none";
        t45.style.display = "none";
        t46.style.display = "none";
        t47.style.display = "none";
        t48.style.display = "none";
        t49.style.display = "none";
        t50.style.display = "none";
        t51.style.display = "none";
        t52.style.display = "none";
    }
    else if(vik == 30){

        t1.style.display = "none";
        t2.style.display = "none";
        t3.style.display = "none";
        t4.style.display = "none";
        t5.style.display = "none";
        t6.style.display = "none";
        t7.style.display = "none";
        t8.style.display = "none";
        t9.style.display = "none";
        t10.style.display = "none";
        t11.style.display = "none";
        t12.style.display = "none";
        t13.style.display = "none";
        t14.style.display = "none";
        t15.style.display = "none";
        t16.style.display = "none";
        t17.style.display = "none";
        t18.style.display = "none";
        t19.style.display = "none";
        t20.style.display = "none";
        t21.style.display = "none";
        t22.style.display = "none";
        t23.style.display = "none";
        t24.style.display = "none";
        t25.style.display = "none";
        t26.style.display = "none";
        t27.style.display = "none";
        t28.style.display = "none";
        t29.style.display = "none";
        t30.style.display = "table";
        t31.style.display = "none";
        t32.style.display = "none";
        t33.style.display = "none";
        t34.style.display = "none";
        t35.style.display = "none";
        t36.style.display = "none";
        t37.style.display = "none";
        t38.style.display = "none";
        t39.style.display = "none";
        t40.style.display = "none";
        t41.style.display = "none";
        t42.style.display = "none";
        t43.style.display = "none";
        t44.style.display = "none";
        t45.style.display = "none";
        t46.style.display = "none";
        t47.style.display = "none";
        t48.style.display = "none";
        t49.style.display = "none";
        t50.style.display = "none";
        t51.style.display = "none";
        t52.style.display = "none";
    }
    else if(vik == 31){

        t1.style.display = "none";
        t2.style.display = "none";
        t3.style.display = "none";
        t4.style.display = "none";
        t5.style.display = "none";
        t6.style.display = "none";
        t7.style.display = "none";
        t8.style.display = "none";
        t9.style.display = "none";
        t10.style.display = "none";
        t11.style.display = "none";
        t12.style.display = "none";
        t13.style.display = "none";
        t14.style.display = "none";
        t15.style.display = "none";
        t16.style.display = "none";
        t17.style.display = "none";
        t18.style.display = "none";
        t19.style.display = "none";
        t20.style.display = "none";
        t21.style.display = "none";
        t22.style.display = "none";
        t23.style.display = "none";
        t24.style.display = "none";
        t25.style.display = "none";
        t26.style.display = "none";
        t27.style.display = "none";
        t28.style.display = "none";
        t29.style.display = "none";
        t30.style.display = "none";
        t31.style.display = "table";
        t32.style.display = "none";
        t33.style.display = "none";
        t34.style.display = "none";
        t35.style.display = "none";
        t36.style.display = "none";
        t37.style.display = "none";
        t38.style.display = "none";
        t39.style.display = "none";
        t40.style.display = "none";
        t41.style.display = "none";
        t42.style.display = "none";
        t43.style.display = "none";
        t44.style.display = "none";
        t45.style.display = "none";
        t46.style.display = "none";
        t47.style.display = "none";
        t48.style.display = "none";
        t49.style.display = "none";
        t50.style.display = "none";
        t51.style.display = "none";
        t52.style.display = "none";
    }
    else if(vik == 32){

        t1.style.display = "none";
        t2.style.display = "none";
        t3.style.display = "none";
        t4.style.display = "none";
        t5.style.display = "none";
        t6.style.display = "none";
        t7.style.display = "none";
        t8.style.display = "none";
        t9.style.display = "none";
        t10.style.display = "none";
        t11.style.display = "none";
        t12.style.display = "none";
        t13.style.display = "none";
        t14.style.display = "none";
        t15.style.display = "none";
        t16.style.display = "none";
        t17.style.display = "none";
        t18.style.display = "none";
        t19.style.display = "none";
        t20.style.display = "none";
        t21.style.display = "none";
        t22.style.display = "none";
        t23.style.display = "none";
        t24.style.display = "none";
        t25.style.display = "none";
        t26.style.display = "none";
        t27.style.display = "none";
        t28.style.display = "none";
        t29.style.display = "none";
        t30.style.display = "none";
        t31.style.display = "none";
        t32.style.display = "table";
        t33.style.display = "none";
        t34.style.display = "none";
        t35.style.display = "none";
        t36.style.display = "none";
        t37.style.display = "none";
        t38.style.display = "none";
        t39.style.display = "none";
        t40.style.display = "none";
        t41.style.display = "none";
        t42.style.display = "none";
        t43.style.display = "none";
        t44.style.display = "none";
        t45.style.display = "none";
        t46.style.display = "none";
        t47.style.display = "none";
        t48.style.display = "none";
        t49.style.display = "none";
        t50.style.display = "none";
        t51.style.display = "none";
        t52.style.display = "none";
    }
    else if(vik == 33){

        t1.style.display = "none";
        t2.style.display = "none";
        t3.style.display = "none";
        t4.style.display = "none";
        t5.style.display = "none";
        t6.style.display = "none";
        t7.style.display = "none";
        t8.style.display = "none";
        t9.style.display = "none";
        t10.style.display = "none";
        t11.style.display = "none";
        t12.style.display = "none";
        t13.style.display = "none";
        t14.style.display = "none";
        t15.style.display = "none";
        t16.style.display = "none";
        t17.style.display = "none";
        t18.style.display = "none";
        t19.style.display = "none";
        t20.style.display = "none";
        t21.style.display = "none";
        t22.style.display = "none";
        t23.style.display = "none";
        t24.style.display = "none";
        t25.style.display = "none";
        t26.style.display = "none";
        t27.style.display = "none";
        t28.style.display = "none";
        t29.style.display = "none";
        t30.style.display = "none";
        t31.style.display = "none";
        t32.style.display = "none";
        t33.style.display = "table";
        t34.style.display = "none";
        t35.style.display = "none";
        t36.style.display = "none";
        t37.style.display = "none";
        t38.style.display = "none";
        t39.style.display = "none";
        t40.style.display = "none";
        t41.style.display = "none";
        t42.style.display = "none";
        t43.style.display = "none";
        t44.style.display = "none";
        t45.style.display = "none";
        t46.style.display = "none";
        t47.style.display = "none";
        t48.style.display = "none";
        t49.style.display = "none";
        t50.style.display = "none";
        t51.style.display = "none";
        t52.style.display = "none";
    }
    else if(vik == 34){

        t1.style.display = "none";
        t2.style.display = "none";
        t3.style.display = "none";
        t4.style.display = "none";
        t5.style.display = "none";
        t6.style.display = "none";
        t7.style.display = "none";
        t8.style.display = "none";
        t9.style.display = "none";
        t10.style.display = "none";
        t11.style.display = "none";
        t12.style.display = "none";
        t13.style.display = "none";
        t14.style.display = "none";
        t15.style.display = "none";
        t16.style.display = "none";
        t17.style.display = "none";
        t18.style.display = "none";
        t19.style.display = "none";
        t20.style.display = "none";
        t21.style.display = "none";
        t22.style.display = "none";
        t23.style.display = "none";
        t24.style.display = "none";
        t25.style.display = "none";
        t26.style.display = "none";
        t27.style.display = "none";
        t28.style.display = "none";
        t29.style.display = "none";
        t30.style.display = "none";
        t31.style.display = "none";
        t32.style.display = "none";
        t33.style.display = "none";
        t34.style.display = "table";
        t35.style.display = "none";
        t36.style.display = "none";
        t37.style.display = "none";
        t38.style.display = "none";
        t39.style.display = "none";
        t40.style.display = "none";
        t41.style.display = "none";
        t42.style.display = "none";
        t43.style.display = "none";
        t44.style.display = "none";
        t45.style.display = "none";
        t46.style.display = "none";
        t47.style.display = "none";
        t48.style.display = "none";
        t49.style.display = "none";
        t50.style.display = "none";
        t51.style.display = "none";
        t52.style.display = "none";
    }
    else if(vik == 35){

        t1.style.display = "none";
        t2.style.display = "none";
        t3.style.display = "none";
        t4.style.display = "none";
        t5.style.display = "none";
        t6.style.display = "none";
        t7.style.display = "none";
        t8.style.display = "none";
        t9.style.display = "none";
        t10.style.display = "none";
        t11.style.display = "none";
        t12.style.display = "none";
        t13.style.display = "none";
        t14.style.display = "none";
        t15.style.display = "none";
        t16.style.display = "none";
        t17.style.display = "none";
        t18.style.display = "none";
        t19.style.display = "none";
        t20.style.display = "none";
        t21.style.display = "none";
        t22.style.display = "none";
        t23.style.display = "none";
        t24.style.display = "none";
        t25.style.display = "none";
        t26.style.display = "none";
        t27.style.display = "none";
        t28.style.display = "none";
        t29.style.display = "none";
        t30.style.display = "none";
        t31.style.display = "none";
        t32.style.display = "none";
        t33.style.display = "none";
        t34.style.display = "none";
        t35.style.display = "table";
        t36.style.display = "none";
        t37.style.display = "none";
        t38.style.display = "none";
        t39.style.display = "none";
        t40.style.display = "none";
        t41.style.display = "none";
        t42.style.display = "none";
        t43.style.display = "none";
        t44.style.display = "none";
        t45.style.display = "none";
        t46.style.display = "none";
        t47.style.display = "none";
        t48.style.display = "none";
        t49.style.display = "none";
        t50.style.display = "none";
        t51.style.display = "none";
        t52.style.display = "none";
    }
    else if(vik == 36){

        t1.style.display = "none";
        t2.style.display = "none";
        t3.style.display = "none";
        t4.style.display = "none";
        t5.style.display = "none";
        t6.style.display = "none";
        t7.style.display = "none";
        t8.style.display = "none";
        t9.style.display = "none";
        t10.style.display = "none";
        t11.style.display = "none";
        t12.style.display = "none";
        t13.style.display = "none";
        t14.style.display = "none";
        t15.style.display = "none";
        t16.style.display = "none";
        t17.style.display = "none";
        t18.style.display = "none";
        t19.style.display = "none";
        t20.style.display = "none";
        t21.style.display = "none";
        t22.style.display = "none";
        t23.style.display = "none";
        t24.style.display = "none";
        t25.style.display = "none";
        t26.style.display = "none";
        t27.style.display = "none";
        t28.style.display = "none";
        t29.style.display = "none";
        t30.style.display = "none";
        t31.style.display = "none";
        t32.style.display = "none";
        t33.style.display = "none";
        t34.style.display = "none";
        t35.style.display = "none";
        t36.style.display = "table";
        t37.style.display = "none";
        t38.style.display = "none";
        t39.style.display = "none";
        t40.style.display = "none";
        t41.style.display = "none";
        t42.style.display = "none";
        t43.style.display = "none";
        t44.style.display = "none";
        t45.style.display = "none";
        t46.style.display = "none";
        t47.style.display = "none";
        t48.style.display = "none";
        t49.style.display = "none";
        t50.style.display = "none";
        t51.style.display = "none";
        t52.style.display = "none";
    }
    else if(vik == 37){

        t1.style.display = "none";
        t2.style.display = "none";
        t3.style.display = "none";
        t4.style.display = "none";
        t5.style.display = "none";
        t6.style.display = "none";
        t7.style.display = "none";
        t8.style.display = "none";
        t9.style.display = "none";
        t10.style.display = "none";
        t11.style.display = "none";
        t12.style.display = "none";
        t13.style.display = "none";
        t14.style.display = "none";
        t15.style.display = "none";
        t16.style.display = "none";
        t17.style.display = "none";
        t18.style.display = "none";
        t19.style.display = "none";
        t20.style.display = "none";
        t21.style.display = "none";
        t22.style.display = "none";
        t23.style.display = "none";
        t24.style.display = "none";
        t25.style.display = "none";
        t26.style.display = "none";
        t27.style.display = "none";
        t28.style.display = "none";
        t29.style.display = "none";
        t30.style.display = "none";
        t31.style.display = "none";
        t32.style.display = "none";
        t33.style.display = "none";
        t34.style.display = "none";
        t35.style.display = "none";
        t36.style.display = "none";
        t37.style.display = "table";
        t38.style.display = "none";
        t39.style.display = "none";
        t40.style.display = "none";
        t41.style.display = "none";
        t42.style.display = "none";
        t43.style.display = "none";
        t44.style.display = "none";
        t45.style.display = "none";
        t46.style.display = "none";
        t47.style.display = "none";
        t48.style.display = "none";
        t49.style.display = "none";
        t50.style.display = "none";
        t51.style.display = "none";
        t52.style.display = "none";
    }
    else if(vik == 38){

        t1.style.display = "none";
        t2.style.display = "none";
        t3.style.display = "none";
        t4.style.display = "none";
        t5.style.display = "none";
        t6.style.display = "none";
        t7.style.display = "none";
        t8.style.display = "none";
        t9.style.display = "none";
        t10.style.display = "none";
        t11.style.display = "none";
        t12.style.display = "none";
        t13.style.display = "none";
        t14.style.display = "none";
        t15.style.display = "none";
        t16.style.display = "none";
        t17.style.display = "none";
        t18.style.display = "none";
        t19.style.display = "none";
        t20.style.display = "none";
        t21.style.display = "none";
        t22.style.display = "none";
        t23.style.display = "none";
        t24.style.display = "none";
        t25.style.display = "none";
        t26.style.display = "none";
        t27.style.display = "none";
        t28.style.display = "none";
        t29.style.display = "none";
        t30.style.display = "none";
        t31.style.display = "none";
        t32.style.display = "none";
        t33.style.display = "none";
        t34.style.display = "none";
        t35.style.display = "none";
        t36.style.display = "none";
        t37.style.display = "none";
        t38.style.display = "table";
        t39.style.display = "none";
        t40.style.display = "none";
        t41.style.display = "none";
        t42.style.display = "none";
        t43.style.display = "none";
        t44.style.display = "none";
        t45.style.display = "none";
        t46.style.display = "none";
        t47.style.display = "none";
        t48.style.display = "none";
        t49.style.display = "none";
        t50.style.display = "none";
        t51.style.display = "none";
        t52.style.display = "none";
    }
    else if(vik == 39){

        t1.style.display = "none";
        t2.style.display = "none";
        t3.style.display = "none";
        t4.style.display = "none";
        t5.style.display = "none";
        t6.style.display = "none";
        t7.style.display = "none";
        t8.style.display = "none";
        t9.style.display = "none";
        t10.style.display = "none";
        t11.style.display = "none";
        t12.style.display = "none";
        t13.style.display = "none";
        t14.style.display = "none";
        t15.style.display = "none";
        t16.style.display = "none";
        t17.style.display = "none";
        t18.style.display = "none";
        t19.style.display = "none";
        t20.style.display = "none";
        t21.style.display = "none";
        t22.style.display = "none";
        t23.style.display = "none";
        t24.style.display = "none";
        t25.style.display = "none";
        t26.style.display = "none";
        t27.style.display = "none";
        t28.style.display = "none";
        t29.style.display = "none";
        t30.style.display = "none";
        t31.style.display = "none";
        t32.style.display = "none";
        t33.style.display = "none";
        t34.style.display = "none";
        t35.style.display = "none";
        t36.style.display = "none";
        t37.style.display = "none";
        t38.style.display = "none";
        t39.style.display = "table";
        t40.style.display = "none";
        t41.style.display = "none";
        t42.style.display = "none";
        t43.style.display = "none";
        t44.style.display = "none";
        t45.style.display = "none";
        t46.style.display = "none";
        t47.style.display = "none";
        t48.style.display = "none";
        t49.style.display = "none";
        t50.style.display = "none";
        t51.style.display = "none";
        t52.style.display = "none";
    }
    else if(vik == 40){

        t1.style.display = "none";
        t2.style.display = "none";
        t3.style.display = "none";
        t4.style.display = "none";
        t5.style.display = "none";
        t6.style.display = "none";
        t7.style.display = "none";
        t8.style.display = "none";
        t9.style.display = "none";
        t10.style.display = "none";
        t11.style.display = "none";
        t12.style.display = "none";
        t13.style.display = "none";
        t14.style.display = "none";
        t15.style.display = "none";
        t16.style.display = "none";
        t17.style.display = "none";
        t18.style.display = "none";
        t19.style.display = "none";
        t20.style.display = "none";
        t21.style.display = "none";
        t22.style.display = "none";
        t23.style.display = "none";
        t24.style.display = "none";
        t25.style.display = "none";
        t26.style.display = "none";
        t27.style.display = "none";
        t28.style.display = "none";
        t29.style.display = "none";
        t30.style.display = "none";
        t31.style.display = "none";
        t32.style.display = "none";
        t33.style.display = "none";
        t34.style.display = "none";
        t35.style.display = "none";
        t36.style.display = "none";
        t37.style.display = "none";
        t38.style.display = "none";
        t39.style.display = "none";
        t40.style.display = "table";
        t41.style.display = "none";
        t42.style.display = "none";
        t43.style.display = "none";
        t44.style.display = "none";
        t45.style.display = "none";
        t46.style.display = "none";
        t47.style.display = "none";
        t48.style.display = "none";
        t49.style.display = "none";
        t50.style.display = "none";
        t51.style.display = "none";
        t52.style.display = "none";
    }
    else if(vik == 41){

        t1.style.display = "none";
        t2.style.display = "none";
        t3.style.display = "none";
        t4.style.display = "none";
        t5.style.display = "none";
        t6.style.display = "none";
        t7.style.display = "none";
        t8.style.display = "none";
        t9.style.display = "none";
        t10.style.display = "none";
        t11.style.display = "none";
        t12.style.display = "none";
        t13.style.display = "none";
        t14.style.display = "none";
        t15.style.display = "none";
        t16.style.display = "none";
        t17.style.display = "none";
        t18.style.display = "none";
        t19.style.display = "none";
        t20.style.display = "none";
        t21.style.display = "none";
        t22.style.display = "none";
        t23.style.display = "none";
        t24.style.display = "none";
        t25.style.display = "none";
        t26.style.display = "none";
        t27.style.display = "none";
        t28.style.display = "none";
        t29.style.display = "none";
        t30.style.display = "none";
        t31.style.display = "none";
        t32.style.display = "none";
        t33.style.display = "none";
        t34.style.display = "none";
        t35.style.display = "none";
        t36.style.display = "none";
        t37.style.display = "none";
        t38.style.display = "none";
        t39.style.display = "none";
        t40.style.display = "none";
        t41.style.display = "table";
        t42.style.display = "none";
        t43.style.display = "none";
        t44.style.display = "none";
        t45.style.display = "none";
        t46.style.display = "none";
        t47.style.display = "none";
        t48.style.display = "none";
        t49.style.display = "none";
        t50.style.display = "none";
        t51.style.display = "none";
        t52.style.display = "none";
    }
    else if(vik == 42){

        t1.style.display = "none";
        t2.style.display = "none";
        t3.style.display = "none";
        t4.style.display = "none";
        t5.style.display = "none";
        t6.style.display = "none";
        t7.style.display = "none";
        t8.style.display = "none";
        t9.style.display = "none";
        t10.style.display = "none";
        t11.style.display = "none";
        t12.style.display = "none";
        t13.style.display = "none";
        t14.style.display = "none";
        t15.style.display = "none";
        t16.style.display = "none";
        t17.style.display = "none";
        t18.style.display = "none";
        t19.style.display = "none";
        t20.style.display = "none";
        t21.style.display = "none";
        t22.style.display = "none";
        t23.style.display = "none";
        t24.style.display = "none";
        t25.style.display = "none";
        t26.style.display = "none";
        t27.style.display = "none";
        t28.style.display = "none";
        t29.style.display = "none";
        t30.style.display = "none";
        t31.style.display = "none";
        t32.style.display = "none";
        t33.style.display = "none";
        t34.style.display = "none";
        t35.style.display = "none";
        t36.style.display = "none";
        t37.style.display = "none";
        t38.style.display = "none";
        t39.style.display = "none";
        t40.style.display = "none";
        t41.style.display = "none";
        t42.style.display = "table";
        t43.style.display = "none";
        t44.style.display = "none";
        t45.style.display = "none";
        t46.style.display = "none";
        t47.style.display = "none";
        t48.style.display = "none";
        t49.style.display = "none";
        t50.style.display = "none";
        t51.style.display = "none";
        t52.style.display = "none";
    }
    else if(vik == 43){

        t1.style.display = "none";
        t2.style.display = "none";
        t3.style.display = "none";
        t4.style.display = "none";
        t5.style.display = "none";
        t6.style.display = "none";
        t7.style.display = "none";
        t8.style.display = "none";
        t9.style.display = "none";
        t10.style.display = "none";
        t11.style.display = "none";
        t12.style.display = "none";
        t13.style.display = "none";
        t14.style.display = "none";
        t15.style.display = "none";
        t16.style.display = "none";
        t17.style.display = "none";
        t18.style.display = "none";
        t19.style.display = "none";
        t20.style.display = "none";
        t21.style.display = "none";
        t22.style.display = "none";
        t23.style.display = "none";
        t24.style.display = "none";
        t25.style.display = "none";
        t26.style.display = "none";
        t27.style.display = "none";
        t28.style.display = "none";
        t29.style.display = "none";
        t30.style.display = "none";
        t31.style.display = "none";
        t32.style.display = "none";
        t33.style.display = "none";
        t34.style.display = "none";
        t35.style.display = "none";
        t36.style.display = "none";
        t37.style.display = "none";
        t38.style.display = "none";
        t39.style.display = "none";
        t40.style.display = "none";
        t41.style.display = "none";
        t42.style.display = "none";
        t43.style.display = "table";
        t44.style.display = "none";
        t45.style.display = "none";
        t46.style.display = "none";
        t47.style.display = "none";
        t48.style.display = "none";
        t49.style.display = "none";
        t50.style.display = "none";
        t51.style.display = "none";
        t52.style.display = "none";
    }
    else if(vik == 44){

        t1.style.display = "none";
        t2.style.display = "none";
        t3.style.display = "none";
        t4.style.display = "none";
        t5.style.display = "none";
        t6.style.display = "none";
        t7.style.display = "none";
        t8.style.display = "none";
        t9.style.display = "none";
        t10.style.display = "none";
        t11.style.display = "none";
        t12.style.display = "none";
        t13.style.display = "none";
        t14.style.display = "none";
        t15.style.display = "none";
        t16.style.display = "none";
        t17.style.display = "none";
        t18.style.display = "none";
        t19.style.display = "none";
        t20.style.display = "none";
        t21.style.display = "none";
        t22.style.display = "none";
        t23.style.display = "none";
        t24.style.display = "none";
        t25.style.display = "none";
        t26.style.display = "none";
        t27.style.display = "none";
        t28.style.display = "none";
        t29.style.display = "none";
        t30.style.display = "none";
        t31.style.display = "none";
        t32.style.display = "none";
        t33.style.display = "none";
        t34.style.display = "none";
        t35.style.display = "none";
        t36.style.display = "none";
        t37.style.display = "none";
        t38.style.display = "none";
        t39.style.display = "none";
        t40.style.display = "none";
        t41.style.display = "none";
        t42.style.display = "none";
        t43.style.display = "none";
        t44.style.display = "table";
        t45.style.display = "none";
        t46.style.display = "none";
        t47.style.display = "none";
        t48.style.display = "none";
        t49.style.display = "none";
        t50.style.display = "none";
        t51.style.display = "none";
        t52.style.display = "none";
    }
    else if(vik == 45){

        t1.style.display = "none";
        t2.style.display = "none";
        t3.style.display = "none";
        t4.style.display = "none";
        t5.style.display = "none";
        t6.style.display = "none";
        t7.style.display = "none";
        t8.style.display = "none";
        t9.style.display = "none";
        t10.style.display = "none";
        t11.style.display = "none";
        t12.style.display = "none";
        t13.style.display = "none";
        t14.style.display = "none";
        t15.style.display = "none";
        t16.style.display = "none";
        t17.style.display = "none";
        t18.style.display = "none";
        t19.style.display = "none";
        t20.style.display = "none";
        t21.style.display = "none";
        t22.style.display = "none";
        t23.style.display = "none";
        t24.style.display = "none";
        t25.style.display = "none";
        t26.style.display = "none";
        t27.style.display = "none";
        t28.style.display = "none";
        t29.style.display = "none";
        t30.style.display = "none";
        t31.style.display = "none";
        t32.style.display = "none";
        t33.style.display = "none";
        t34.style.display = "none";
        t35.style.display = "none";
        t36.style.display = "none";
        t37.style.display = "none";
        t38.style.display = "none";
        t39.style.display = "none";
        t40.style.display = "none";
        t41.style.display = "none";
        t42.style.display = "none";
        t43.style.display = "none";
        t44.style.display = "none";
        t45.style.display = "table";
        t46.style.display = "none";
        t47.style.display = "none";
        t48.style.display = "none";
        t49.style.display = "none";
        t50.style.display = "none";
        t51.style.display = "none";
        t52.style.display = "none";
    }
    else if(vik == 46){

        t1.style.display = "none";
        t2.style.display = "none";
        t3.style.display = "none";
        t4.style.display = "none";
        t5.style.display = "none";
        t6.style.display = "none";
        t7.style.display = "none";
        t8.style.display = "none";
        t9.style.display = "none";
        t10.style.display = "none";
        t11.style.display = "none";
        t12.style.display = "none";
        t13.style.display = "none";
        t14.style.display = "none";
        t15.style.display = "none";
        t16.style.display = "none";
        t17.style.display = "none";
        t18.style.display = "none";
        t19.style.display = "none";
        t20.style.display = "none";
        t21.style.display = "none";
        t22.style.display = "none";
        t23.style.display = "none";
        t24.style.display = "none";
        t25.style.display = "none";
        t26.style.display = "none";
        t27.style.display = "none";
        t28.style.display = "none";
        t29.style.display = "none";
        t30.style.display = "none";
        t31.style.display = "none";
        t32.style.display = "none";
        t33.style.display = "none";
        t34.style.display = "none";
        t35.style.display = "none";
        t36.style.display = "none";
        t37.style.display = "none";
        t38.style.display = "none";
        t39.style.display = "none";
        t40.style.display = "none";
        t41.style.display = "none";
        t42.style.display = "none";
        t43.style.display = "none";
        t44.style.display = "none";
        t45.style.display = "none";
        t46.style.display = "table";
        t47.style.display = "none";
        t48.style.display = "none";
        t49.style.display = "none";
        t50.style.display = "none";
        t51.style.display = "none";
        t52.style.display = "none";
    }
    else if(vik == 47){

        t1.style.display = "none";
        t2.style.display = "none";
        t3.style.display = "none";
        t4.style.display = "none";
        t5.style.display = "none";
        t6.style.display = "none";
        t7.style.display = "none";
        t8.style.display = "none";
        t9.style.display = "none";
        t10.style.display = "none";
        t11.style.display = "none";
        t12.style.display = "none";
        t13.style.display = "none";
        t14.style.display = "none";
        t15.style.display = "none";
        t16.style.display = "none";
        t17.style.display = "none";
        t18.style.display = "none";
        t19.style.display = "none";
        t20.style.display = "none";
        t21.style.display = "none";
        t22.style.display = "none";
        t23.style.display = "none";
        t24.style.display = "none";
        t25.style.display = "none";
        t26.style.display = "none";
        t27.style.display = "none";
        t28.style.display = "none";
        t29.style.display = "none";
        t30.style.display = "none";
        t31.style.display = "none";
        t32.style.display = "none";
        t33.style.display = "none";
        t34.style.display = "none";
        t35.style.display = "none";
        t36.style.display = "none";
        t37.style.display = "none";
        t38.style.display = "none";
        t39.style.display = "none";
        t40.style.display = "none";
        t41.style.display = "none";
        t42.style.display = "none";
        t43.style.display = "none";
        t44.style.display = "none";
        t45.style.display = "none";
        t46.style.display = "none";
        t47.style.display = "table";
        t48.style.display = "none";
        t49.style.display = "none";
        t50.style.display = "none";
        t51.style.display = "none";
        t52.style.display = "none";
    }
    else if(vik == 48){

        t1.style.display = "none";
        t2.style.display = "none";
        t3.style.display = "none";
        t4.style.display = "none";
        t5.style.display = "none";
        t6.style.display = "none";
        t7.style.display = "none";
        t8.style.display = "none";
        t9.style.display = "none";
        t10.style.display = "none";
        t11.style.display = "none";
        t12.style.display = "none";
        t13.style.display = "none";
        t14.style.display = "none";
        t15.style.display = "none";
        t16.style.display = "none";
        t17.style.display = "none";
        t18.style.display = "none";
        t19.style.display = "none";
        t20.style.display = "none";
        t21.style.display = "none";
        t22.style.display = "none";
        t23.style.display = "none";
        t24.style.display = "none";
        t25.style.display = "none";
        t26.style.display = "none";
        t27.style.display = "none";
        t28.style.display = "none";
        t29.style.display = "none";
        t30.style.display = "none";
        t31.style.display = "none";
        t32.style.display = "none";
        t33.style.display = "none";
        t34.style.display = "none";
        t35.style.display = "none";
        t36.style.display = "none";
        t37.style.display = "none";
        t38.style.display = "none";
        t39.style.display = "none";
        t40.style.display = "none";
        t41.style.display = "none";
        t42.style.display = "none";
        t43.style.display = "none";
        t44.style.display = "none";
        t45.style.display = "none";
        t46.style.display = "none";
        t47.style.display = "none";
        t48.style.display = "table";
        t49.style.display = "none";
        t50.style.display = "none";
        t51.style.display = "none";
        t52.style.display = "none";
    }
    else if(vik == 49){

        t1.style.display = "none";
        t2.style.display = "none";
        t3.style.display = "none";
        t4.style.display = "none";
        t5.style.display = "none";
        t6.style.display = "none";
        t7.style.display = "none";
        t8.style.display = "none";
        t9.style.display = "none";
        t10.style.display = "none";
        t11.style.display = "none";
        t12.style.display = "none";
        t13.style.display = "none";
        t14.style.display = "none";
        t15.style.display = "none";
        t16.style.display = "none";
        t17.style.display = "none";
        t18.style.display = "none";
        t19.style.display = "none";
        t20.style.display = "none";
        t21.style.display = "none";
        t22.style.display = "none";
        t23.style.display = "none";
        t24.style.display = "none";
        t25.style.display = "none";
        t26.style.display = "none";
        t27.style.display = "none";
        t28.style.display = "none";
        t29.style.display = "none";
        t30.style.display = "none";
        t31.style.display = "none";
        t32.style.display = "none";
        t33.style.display = "none";
        t34.style.display = "none";
        t35.style.display = "none";
        t36.style.display = "none";
        t37.style.display = "none";
        t38.style.display = "none";
        t39.style.display = "none";
        t40.style.display = "none";
        t41.style.display = "none";
        t42.style.display = "none";
        t43.style.display = "none";
        t44.style.display = "none";
        t45.style.display = "none";
        t46.style.display = "none";
        t47.style.display = "none";
        t48.style.display = "none";
        t49.style.display = "table";
        t50.style.display = "none";
        t51.style.display = "none";
        t52.style.display = "none";
    }
    else if(vik == 50){

        t1.style.display = "none";
        t2.style.display = "none";
        t3.style.display = "none";
        t4.style.display = "none";
        t5.style.display = "none";
        t6.style.display = "none";
        t7.style.display = "none";
        t8.style.display = "none";
        t9.style.display = "none";
        t10.style.display = "none";
        t11.style.display = "none";
        t12.style.display = "none";
        t13.style.display = "none";
        t14.style.display = "none";
        t15.style.display = "none";
        t16.style.display = "none";
        t17.style.display = "none";
        t18.style.display = "none";
        t19.style.display = "none";
        t20.style.display = "none";
        t21.style.display = "none";
        t22.style.display = "none";
        t23.style.display = "none";
        t24.style.display = "none";
        t25.style.display = "none";
        t26.style.display = "none";
        t27.style.display = "none";
        t28.style.display = "none";
        t29.style.display = "none";
        t30.style.display = "none";
        t31.style.display = "none";
        t32.style.display = "none";
        t33.style.display = "none";
        t34.style.display = "none";
        t35.style.display = "none";
        t36.style.display = "none";
        t37.style.display = "none";
        t38.style.display = "none";
        t39.style.display = "none";
        t40.style.display = "none";
        t41.style.display = "none";
        t42.style.display = "none";
        t43.style.display = "none";
        t44.style.display = "none";
        t45.style.display = "none";
        t46.style.display = "none";
        t47.style.display = "none";
        t48.style.display = "none";
        t49.style.display = "none";
        t50.style.display = "table";
        t51.style.display = "none";
        t52.style.display = "none";
    }
    else if(vik == 51){

        t1.style.display = "none";
        t2.style.display = "none";
        t3.style.display = "none";
        t4.style.display = "none";
        t5.style.display = "none";
        t6.style.display = "none";
        t7.style.display = "none";
        t8.style.display = "none";
        t9.style.display = "none";
        t10.style.display = "none";
        t11.style.display = "none";
        t12.style.display = "none";
        t13.style.display = "none";
        t14.style.display = "none";
        t15.style.display = "none";
        t16.style.display = "none";
        t17.style.display = "none";
        t18.style.display = "none";
        t19.style.display = "none";
        t20.style.display = "none";
        t21.style.display = "none";
        t22.style.display = "none";
        t23.style.display = "none";
        t24.style.display = "none";
        t25.style.display = "none";
        t26.style.display = "none";
        t27.style.display = "none";
        t28.style.display = "none";
        t29.style.display = "none";
        t30.style.display = "none";
        t31.style.display = "none";
        t32.style.display = "none";
        t33.style.display = "none";
        t34.style.display = "none";
        t35.style.display = "none";
        t36.style.display = "none";
        t37.style.display = "none";
        t38.style.display = "none";
        t39.style.display = "none";
        t40.style.display = "none";
        t41.style.display = "none";
        t42.style.display = "none";
        t43.style.display = "none";
        t44.style.display = "none";
        t45.style.display = "none";
        t46.style.display = "none";
        t47.style.display = "none";
        t48.style.display = "none";
        t49.style.display = "none";
        t50.style.display = "none";
        t51.style.display = "table";
        t52.style.display = "none";
    }
    else if(vik == 52){

        t1.style.display = "none";
        t2.style.display = "none";
        t3.style.display = "none";
        t4.style.display = "none";
        t5.style.display = "none";
        t6.style.display = "none";
        t7.style.display = "none";
        t8.style.display = "none";
        t9.style.display = "none";
        t10.style.display = "none";
        t11.style.display = "none";
        t12.style.display = "none";
        t13.style.display = "none";
        t14.style.display = "none";
        t15.style.display = "none";
        t16.style.display = "none";
        t17.style.display = "none";
        t18.style.display = "none";
        t19.style.display = "none";
        t20.style.display = "none";
        t21.style.display = "none";
        t22.style.display = "none";
        t23.style.display = "none";
        t24.style.display = "none";
        t25.style.display = "none";
        t26.style.display = "none";
        t27.style.display = "none";
        t28.style.display = "none";
        t29.style.display = "none";
        t30.style.display = "none";
        t31.style.display = "none";
        t32.style.display = "none";
        t33.style.display = "none";
        t34.style.display = "none";
        t35.style.display = "none";
        t36.style.display = "none";
        t37.style.display = "none";
        t38.style.display = "none";
        t39.style.display = "none";
        t40.style.display = "none";
        t41.style.display = "none";
        t42.style.display = "none";
        t43.style.display = "none";
        t44.style.display = "none";
        t45.style.display = "none";
        t46.style.display = "none";
        t47.style.display = "none";
        t48.style.display = "none";
        t49.style.display = "none";
        t50.style.display = "none";
        t51.style.display = "none";
        t52.style.display = "table";
    }
}