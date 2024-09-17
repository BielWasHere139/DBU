let multi, K = 1000, M = K*K, B = M*K, T = B*K, Qa = T*K,Qi = Qa*K;
const c1 = [
  K,M,B,T,Qa,Qa*K],c2 = [
  "K","M","B","T","Qa","Qi"];
const imagens = [
"https://media.discordapp.net/attachments/1284907515381022720/1284907548956164157/1726416194404.png?ex=66e9a868&is=66e856e8&hm=38a569b0f82a46c8026952446ab55b9760058833092156e6dbb25945f717c491&","https://media.discordapp.net/attachments/1284907515381022720/1284907560758935653/1726415930890.png?ex=66e9a86a&is=66e856ea&hm=f43e3d8ce97fec90ff614e88a6c91a80359d10be68fe66c1fad759210c308493&","https://media.discordapp.net/attachments/1284907515381022720/1284907587845754951/1726415667233.png?ex=66e9a871&is=66e856f1&hm=269c1b56e02fa078b931beadf3fe5776665614722d5999a420e06736f0c126e7&","https://media.discordapp.net/attachments/1284907515381022720/1284907600340717802/1726415624630.png?ex=66e9a874&is=66e856f4&hm=d6b7799a6c0adc72c211dbf61ce4130595fcf5377f9dffbda226379e4ec43728&","https://media.discordapp.net/attachments/1284907515381022720/1284907612428570644/1726415593244.png?ex=66e9a877&is=66e856f7&hm=8c79e41e0c0ccf3540cb1e5aeed2b6861d101b86937cc1fd39c9b1266787849a&","https://media.discordapp.net/attachments/1284907515381022720/1284907647669244086/1726415809605.png?ex=66e9a87f&is=66e856ff&hm=7ca40c7a9ee034debe9e055bcea04074fcda3d70ce0f4c32e77154d4e9a5451b&","https://media.discordapp.net/attachments/1284907515381022720/1284907659912417431/1726416062824.png?ex=66e9a882&is=66e85702&hm=520bf67adf558011cd2a65fc9cc36e7b5a2f18a7265c0a480618647e38dd8cbe&","https://media.discordapp.net/attachments/1284907515381022720/1284907668791889983/1726415861342.png?ex=66e9a884&is=66e85704&hm=005c448c796fc1de02104cd597d066b23bdca11a8a7bf45f1de9b4cb74850e2b&","https://media.discordapp.net/attachments/1284907515381022720/1284907946832302133/1726416317893.png?ex=66e9a8c6&is=66e85746&hm=40bab8bb8daf99ce18309116b148a9f660ba6ae1ed44aae4914cccc759d84f9c&","https://media.discordapp.net/attachments/1284907515381022720/1284907965211738112/1726415220361.png?ex=66e9a8cb&is=66e8574b&hm=1a8da90350ffdb7ea7f7b1b1036d2f1482b8d42b976091fa92223506f5af86e3&","https://media.discordapp.net/attachments/1284907515381022720/1284907988162969651/1726414436947.png?ex=66e9a8d0&is=66e85750&hm=e73d81c8d94f28e6d84cf34048103f528cde500a106bf1e67f61de674a6d1c2f&","https://media.discordapp.net/attachments/1284907515381022720/1284908033058537502/1726414387541.png?ex=66e9a8db&is=66e8575b&hm=c6c339f5285013f10a1cc4395097b8d1d9b1a803f724361810db2288b64f4e3f&","https://media.discordapp.net/attachments/1284907515381022720/1284908063349800960/1726415537277.png?ex=66e9a8e2&is=66e85762&hm=d013688d03195f35a4930a621d027fba1dc6a8a6c448e83af8490412ab11a6eb&","https://media.discordapp.net/attachments/1284907515381022720/1284908104584269918/1726414480528.png?ex=66e9a8ec&is=66e8576c&hm=798baea7a74ec41d156c1b7f204216130adabe60a4250481f17518ad2e076d63&","https://media.discordapp.net/attachments/1284907515381022720/1284908210674733187/1726414355789.png?ex=66e9a905&is=66e85785&hm=8cf84fc22d7467472a9880dd20c21ff30892b427f6717619b50c861724ea15bc&","https://media.discordapp.net/attachments/1284907515381022720/1284908210674733187/1726414355789.png?ex=66e9a905&is=66e85785&hm=8cf84fc22d7467472a9880dd20c21ff30892b427f6717619b50c861724ea15bc&","https://media.discordapp.net/attachments/1284907515381022720/1284908230148882473/1726414324022.png?ex=66e9a90a&is=66e8578a&hm=2cdfbb9aa9ad6a5ea2f2ec5ec504543494a316e344809072ad97eea57e1a0625&","https://media.discordapp.net/attachments/1284907515381022720/1284908366178816050/1726414835953.png?ex=66e9a92a&is=66e857aa&hm=b1071e4bd190a6e46cf6ba8747d6f74ef216cf548188fbc884969615bd4da5e7&","https://media.discordapp.net/attachments/1284907515381022720/1284913371245838366/1726415171244.png?ex=66e9add4&is=66e85c54&hm=0bf9c5ddcf5749b579a19a74f3e3fa4f99fdf246efbf648447158f1864932b55&","https://media.discordapp.net/attachments/1284907515381022720/1284913393442095184/1726414913015.png?ex=66e9add9&is=66e85c59&hm=8a3165bae6759b3dce813aefe67ebf3710d5663a87bffd2dbb883da2a8ce6034&","https://media.discordapp.net/attachments/1284907515381022720/1284913410760376371/1726415306541.png?ex=66e9addd&is=66e85c5d&hm=0bd729b6b730945bc6c6a7c553848220c6dc58fef6d6cfdd2727d10efd288753&","https://media.discordapp.net/attachments/1284907515381022720/1285019391649648722/1726415034396.png?ex=66ea1091&is=66e8bf11&hm=743b3e0bc97f2b9ec259ee726913891e2fa5ddd13daf9bc5be057d5776db4ab1&","https://media.discordapp.net/attachments/1284907515381022720/1284913420126388254/1726417558602.png?ex=66e9addf&is=66e85c5f&hm=b7440d26b071ecd1bf201417331f84388e28e146bb836bf7772d92016696832a&","https://media.discordapp.net/attachments/1284907515381022720/1284913473884782602/1726414584760.png?ex=66e9adec&is=66e85c6c&hm=e9cb3c326735f57aebd8b2e4b8c85f3bd1b19aa8bc6142e1264f7282838f0f1e&","https://media.discordapp.net/attachments/1284907515381022720/1284913498564067510/1726415086729.png?ex=66e9adf2&is=66e85c72&hm=fd8f6b2578f12f3d8d061f8530ef71544576698ba15bb2042fb6bdc8459ff66f&","https://media.discordapp.net/attachments/1284907515381022720/1284913531933823047/1726414788894.png?ex=66e9adfa&is=66e85c7a&hm=6f7bf830497ad13d76967ae8179102f919f71a301b7f8df19315941760bf371f&","https://media.discordapp.net/attachments/1284907515381022720/1284913584387788892/1726414718013.png?ex=66e9ae07&is=66e85c87&hm=6755952973257ccc1e24f715d203f80fd06bc63a1bc848b9226c6bf665f1ce5b&"
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
