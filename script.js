let multi, K = 1000, M = K*K, B = M*K, T = B*K, Qa = T*K,Qi = Qa*K;
const c1 = [
  K,M,B,T,Qa,Qa*K],c2 = [
  "K","M","B","T","Qa","Qi"];
const imagens = ["https://media.discordapp.net/attachments/1284907515381022720/1284907548956164157/1726416194404.png?ex=66e856e8&is=66e70568&hm=70d29f08f00751d32a992aac6548322a829d9517fe972e13d7b6e23fe59a70ec&","https://media.discordapp.net/attachments/1284907515381022720/1284907560758935653/1726415930890.png?ex=66e856ea&is=66e7056a&hm=5150b8171b781cc828732601cfa711064c030d06329e9050c2fdd7b64f61ef18&","https://media.discordapp.net/attachments/1284907515381022720/1284907587845754951/1726415667233.png?ex=66e856f1&is=66e70571&hm=bd81cf68a8e24d70ea898cc805160e4d9683292714162a9d4c8a5da863c7705d&","https://media.discordapp.net/attachments/1284907515381022720/1284907600340717802/1726415624630.png?ex=66e856f4&is=66e70574&hm=9d0eb2dcb03840aac55b24192083a64f93782c10d1d5d1c64b8fba50f089d2ba&","https://media.discordapp.net/attachments/1284907515381022720/1284907612428570644/1726415593244.png?ex=66e856f7&is=66e70577&hm=a117f40c5e186acb718f83b935e9c18fbc04f4fdaa941acfcf15588df740aca3&","https://media.discordapp.net/attachments/1284907515381022720/1284907647669244086/1726415809605.png?ex=66e856ff&is=66e7057f&hm=f90d2106e15c8a572e97674df50f7527e5fc1a962295a7fb0da8451aee753329&","https://media.discordapp.net/attachments/1284907515381022720/1284907659912417431/1726416062824.png?ex=66e85702&is=66e70582&hm=c145b599e397acd251ae62ca8a0bfe289c571efdc821d497a1f111afad24d24c&","https://media.discordapp.net/attachments/1284907515381022720/1284907668791889983/1726415861342.png?ex=66e85704&is=66e70584&hm=e5361da4268e1ecfccde70503c948ac91d6143293d20d15cf4f50bc04a756e3a&","https://media.discordapp.net/attachments/1284907515381022720/1284907946832302133/1726416317893.png?ex=66e85746&is=66e705c6&hm=f88dca8f107654f7a4ffdfcbb001b0361773dff1ed2d2314b9ad933a4fb6facf&","https://media.discordapp.net/attachments/1284907515381022720/1284907965211738112/1726415220361.png?ex=66e8574b&is=66e705cb&hm=e0c305e99c7d2de08b81587b0e85c7df2219548f2aac51757d4ebb598bf80313&","https://media.discordapp.net/attachments/1284907515381022720/1284907988162969651/1726414436947.png?ex=66e85750&is=66e705d0&hm=a53ed27653450b7e7a2c837ff037dd0eb8fda6cc1433f144916c9c050eaed819&","https://media.discordapp.net/attachments/1284907515381022720/1284908033058537502/1726414387541.png?ex=66e8575b&is=66e705db&hm=100664170221670445c8462a37e6743918a48af1dba1e9562da94c5e8c939820&","https://media.discordapp.net/attachments/1284907515381022720/1284908063349800960/1726415537277.png?ex=66e85762&is=66e705e2&hm=1fde5d637fca73888bf1b841c360f84a43bbd4c4b4a269c78ffc8dccd6046cb3&","https://media.discordapp.net/attachments/1284907515381022720/1284908210674733187/1726414355789.png?ex=66e85785&is=66e70605&hm=7af5abca844776afe06bd1e1690c81df3a15e68f3cc50ba334a9ddad3c22ea91&","https://media.discordapp.net/attachments/1284907515381022720/1284908104584269918/1726414480528.png?ex=66e8576c&is=66e705ec&hm=f2b363e268b89800f46e6866716392bfb9ed3df1c28de7a413cc34588d5ce639&","https://media.discordapp.net/attachments/1284907515381022720/1284908230148882473/1726414324022.png?ex=66e8578a&is=66e7060a&hm=09bd9963a714ba0f342f037f16a51113991f4aa8928ca9306b153016ca25cc9f&","https://media.discordapp.net/attachments/1284907515381022720/1284908366178816050/1726414835953.png?ex=66e857aa&is=66e7062a&hm=8d1cdd8ca2e5472e0ab987af4baa59cea36ad54c5b158d733505fb279416faa9&","https://media.discordapp.net/attachments/1284907515381022720/1284913371245838366/1726415171244.png?ex=66e85c54&is=66e70ad4&hm=71730a7f7b61178b54bfb541c218302b89e4b59ca0ea0d836316dbe55e1e3abe&","https://media.discordapp.net/attachments/1284907515381022720/1284913393442095184/1726414913015.png?ex=66e85c59&is=66e70ad9&hm=51be22639db976f4424e444baea7c26e97eae1f2bab429ceadf511ba55255d94&","https://media.discordapp.net/attachments/1284907515381022720/1284913410760376371/1726415306541.png?ex=66e85c5d&is=66e70add&hm=d149e9a0d1bdc2b86d784a9f10610ea7443ee7afde871bf86ac78b91231e7e05&","https://media.discordapp.net/attachments/1284907515381022720/1284913420126388254/1726417558602.png?ex=66e85c5f&is=66e70adf&hm=3c2b1b394327971df606bb40a9b8e53b98fbbba686b7b11693110088f70c1eac&","https://media.discordapp.net/attachments/1284907515381022720/1284913473884782602/1726414584760.png?ex=66e85c6c&is=66e70aec&hm=3b58a901c064182cedf1daa676d38a365b8b5702d0aa663db54247b70a8e7ba4&","https://media.discordapp.net/attachments/1284907515381022720/1284913498564067510/1726415086729.png?ex=66e85c72&is=66e70af2&hm=cb3126c64da82b0e3a731867652c5c4f7274b1fcf05e738ddf954495cc98aca4&","https://media.discordapp.net/attachments/1284907515381022720/1284913531933823047/1726414788894.png?ex=66e85c7a&is=66e70afa&hm=df5185fd912039860c90254b92157c94be7943e210032f631c5cc55e36e24445&","https://media.discordapp.net/attachments/1284907515381022720/1284913584387788892/1726414718013.png?ex=66e85c87&is=66e70b07&hm=a24b14f1178ee26548861b7e87519be2e0e823f6fc349d0242dac76938b8fdb1&"
]
const multiplier = [
580000,500000,420000,370000,330000,290000,245000,170000,110000,70000,50000,35000,28500,22000,16000,9000,9500,6500,4000,3100,2600,2000,1400,1000,700
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
