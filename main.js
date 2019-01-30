function insert(num){
    document.form.screen.value = document.form.screen.value+num
}
function equal(){
    var exp = document.form.screen.value;
    if(exp){
        document.form.screen.value = eval(exp);
    }
   
}
function clean(){
    document.form.screen.value = "";
}
function back(){
    var exp = document.form.screen.value;
    document.form.screen.value = exp.substring(0, exp.length-1);
}

