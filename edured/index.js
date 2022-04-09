window.onscroll = function addclassname(){
    let newclass =  document.getElementById('navbar');
    newclass.addclassname = 'sticky-navbar';
        if(isTop()){
            newclass.style.backgroundColor = '#b8dde3'
            console.log("is at top")
        }
    
    if(window.scrollY >5){
        newclass.style.backgroundColor = 'pink';
    }


}
function isTop() {
    return window.pageYOffset == 0;
}