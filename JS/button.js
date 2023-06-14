var a=document.getElementById('a').value;
var b=document.getElementById('b').value;
document.getElementById('+').onclick=function(){
    var rs=parseFloat(a)+parseFloat(b);
    document.getElementById('rs').value=rs;
}
document.getElementById('-').onclick=function(){
    var rs=parseFloat(a)-parseFloat(b);
    document.getElementById('rs').value=rs;
}
document.getElementById('/').onclick=function(){
    var rs=parseFloat(a)/parseFloat(b);
    document.getElementById('rs').value=rs;
}
document.getElementById('*').onclick=function(){
    var rs=parseFloat(a)*parseFloat(b);
    document.getElementById('rs').value=rs;
}