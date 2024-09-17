let multi, K = 1000, M = K*K, B = M*K, T = B*K, Qa = T*K,Qi = Qa*K;
const c1 = [
  K,M,B,T,Qa,Qa*K],c2 = [
  "K","M","B","T","Qa","Qi"];
const imagens = [
"https://media.discordapp.net/attachments/1284907515381022720/1284907548956164157/1726416194404.png?ex=66e9a868&is=66e856e8&hm=38a569b0f82a46c8026952446ab55b9760058833092156e6dbb25945f717c491&","https://media.discordapp.net/attachments/1284907515381022720/1284907560758935653/1726415930890.png?ex=66e9a86a&is=66e856ea&hm=f43e3d8ce97fec90ff614e88a6c91a80359d10be68fe66c1fad759210c308493&","https://media.discordapp.net/attachments/1284907515381022720/1284907587845754951/1726415667233.png?ex=66e9a871&is=66e856f1&hm=269c1b56e02fa078b931beadf3fe5776665614722d5999a420e06736f0c126e7&","https://media.discordapp.net/attachments/1284907515381022720/1284907600340717802/1726415624630.png?ex=66e9a874&is=66e856f4&hm=d6b7799a6c0adc72c211dbf61ce4130595fcf5377f9dffbda226379e4ec43728&","https://media.discordapp.net/attachments/1284907515381022720/1284907612428570644/1726415593244.png?ex=66e9a877&is=66e856f7&hm=8c79e41e0c0ccf3540cb1e5aeed2b6861d101b86937cc1fd39c9b1266787849a&","https://media.discordapp.net/attachments/1284907515381022720/1284907647669244086/1726415809605.png?ex=66e9a87f&is=66e856ff&hm=7ca40c7a9ee034debe9e055bcea04074fcda3d70ce0f4c32e77154d4e9a5451b&","https://media.discordapp.net/attachments/1284907515381022720/1284907659912417431/1726416062824.png?ex=66e9a882&is=66e85702&hm=520bf67adf558011cd2a65fc9cc36e7b5a2f18a7265c0a480618647e38dd8cbe&","https://media.discordapp.net/attachments/1284907515381022720/1284907668791889983/1726415861342.png?ex=66e9a884&is=66e85704&hm=005c448c796fc1de02104cd597d066b23bdca11a8a7bf45f1de9b4cb74850e2b&","https://media.discordapp.net/attachments/1284907515381022720/1284907946832302133/1726416317893.png?ex=66e9a8c6&is=66e85746&hm=40bab8bb8daf99ce18309116b148a9f660ba6ae1ed44aae4914cccc759d84f9c&"
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
