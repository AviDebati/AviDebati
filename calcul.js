function display(num){
document.getElementById("show").value+=num;
}
function solve(){
    let x=document.getElementById("show").value;
    let y=eval(x);
    document.getElementById("show").value=y;
}
function clr(){
    document.getElementById("show").value=" ";
}