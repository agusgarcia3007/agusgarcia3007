let display = document.getElementById('display');
 

function dis(val){
    display.value += val ;
    
}
function resolver(){
    let x = display.value;
    let y = eval(x);
    display.value=y;
}
function del(){
    display.value='';

}

