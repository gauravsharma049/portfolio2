let dark = false;
let navbar = document.getElementById('navbar');
let navlink = document.getElementsByClassName('nav-link');
let navimg = document.getElementById('navlogo');
let darMod = document.getElementById("darkmode");
let body = document.getElementsByTagName('body')[0];

let darkmodhint = document.getElementsByClassName('darkModeHint')[0];



for(let i=0; i<navlink.length; i++){
            
    navlink[i].style.color = '#0e1133'
}

function darkmode(){
        setcolor();
}

function setcolor(){
    if(!dark){

        darMod.style.textAlign = 'right';
        navbar.style.backgroundColor = 'black';
        document.getElementsByClassName('darkmodeinside')[0].style.backgroundColor = 'white'
        darMod.style.backgroundColor = 'black';
        dark = true;


        for(let i=0; i<navlink.length; i++){
            navlink[i].style.color = 'white'
        }
        navimg.src = 'logo2.png';
        darMod.style.boxShadow = '1px 0px 5px white';
        body.style.backgroundColor = '#1e1c1c';
        body.style.color = 'white';
    }
    else{

        document.getElementsByClassName('darkmodeinside')[0].style.backgroundColor = 'black';
        darMod.style.backgroundColor = 'white';
        darMod.style.textAlign = 'left';
        navbar.style.backgroundColor = '#b8dde3';
        
        dark=false;


        for(let i=0; i<navlink.length; i++){
            
            navlink[i].style.color = '#0e1133';
        }
        navimg.src = 'logo.png';
        darMod.style.boxShadow = '1px 0px 5px black';
        body.style.backgroundColor = 'white';
        body.style.color = 'black';
    }
}



function showHint(){
    darkmodhint.style.visibility = 'visible';
}



function hideHint(){
    darkmodhint.style.visibility = 'hidden';
}