const canvas = document.getElementById('lazo');
const ctx = canvas.getContext('2d');

canvas.width = document.body.offsetWidth;

const w = canvas.width;
const h = canvas.height;

ctx.fillStyle = '#000';
ctx.fillRect(0,0,w,h);

//? Dividimos el lienzo en 40 columns
const cols = Math.floor(w/20)+1;
// const col = Math.floor(h/20)+1;

//? En posicion Y indicamos que pintamos desde arriba y que cada columna inice en 0
const posicionY = Array(cols).fill(0);

const matrix = ()  =>{
ctx.fillStyle = '#0001';
ctx.fillRect(0,0,w,h);
ctx.fillStyle = '#12eaf1';
// ctx.fillStyle = '#0F0';
ctx.font = '15pt monospace';
posicionY.forEach((y,ind)=>{
const txt = String.fromCharCode(Math.random()*128);
const x = ind * 20;
ctx.fillText(txt,x,y)
if(y > 100 + Math.random()*10000){
    posicionY[ind] = 0;
}else{
    posicionY[ind] = y + 20;
}
});


}
setInterval(matrix,50);