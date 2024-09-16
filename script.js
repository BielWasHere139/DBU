let multi, K = 1000, M = K*K, B = M*K, T = B*K, Qa = T*K,Qi = Qa*K;
const c1 = [
  K,M,B,T,Qa,Qa*K],c2 = [
  "K","M","B","T","Qa","Qi"];
const imagens = [
"Gogeta Ssjbui.png","Goku Ssjr.png","Gogeta Lbssj4.png","Goku Lbssj4.png","Vegeta Lbssj4.png","Whis.png","Bills.png","Goku Ui.png","VegetaGoD.png","Vegito Ssjg.png","Broly.png","Goku Ssjb.png","Kai Fist Master.png","Goku Ssj2.png","Perfect Cell.png","Frieza.png","Kaio Student.png","Vegeta Ssj2.png","Top X Fighter.png","Citizen.png","Nappa.png","Raditz.png","Turtle S. Student.png","Kid Gohan.png","Krillin","X Fighter Trainer.png"
]
const multiplier = [
580000,500000,420000,370000,330000,290000,245000,170000,110000,70000,50000,35000,28500,22000,16000,9000,9500,6500,4000,3500,3100,2600,2000,1400,1000,700
]
var contagem = 0,n=0
function funcao() {
  var numero = document.getElementById("numero").value;
  multi = numero/5+1;
  var resultado = multi*multiplier[contagem];
  var multi = document.getElementById("numero2").value;
  resultado*=multi
  if(resultado>=c1[0]) {
    while(resultado>=c1[n+1] && n<c1.length) {
      n++
    }
document.getElementById("resposta").innerHTML = "Stats-Gain: " +(resultado/c1[n]).toFixed(2)+c2[n];
    n=0;
if(resultado/Qi>=9.22) 
    {
document.getElementById("resposta").innerHTML = "Stats-Gain: 9.22Qn";
    }
  }
  else {
document.getElementById("resposta").innerHTML = "Stats-Gain: "+resultado;
  }
  if(resultado<0) {
    document.getElementById("resposta").innerHTML = "Stats-Gain: 0"
  }
  return false;
}
function mais() {
  contagem--
    if (contagem == -1) {
      contagem = imagens.length-1
    }
  document.getElementById("imagem").src = imagens[contagem]
  funcao()
}
function menos() {
  contagem++
  if (contagem == imagens.length) {
    contagem = 0
  }
  document.getElementById("imagem").src = imagens[contagem]
  funcao()
}
