let multi, K = 1000, M = K*K, B = M*K, T = B*K, Qa = T*K,Qi = Qa*K;
const c1 = [
  K,M,B,T,Qa,Qa*K],c2 = [
  "K","M","B","T","Qa","Qi"];
const imagens = [
"https://media.discordapp.net/attachments/1284907515381022720/1284907548956164157/1726416194404.png?ex=66f97a68&is=66f828e8&hm=f22cdb371b19a0dc82a9471c20e302b32ee2e802e81ff666af563113b5df6c88&","https://media.discordapp.net/attachments/1284907515381022720/1284907560758935653/1726415930890.png?ex=66f97a6a&is=66f828ea&hm=6bba2eecb54d9b5ee62f9c2778f8609c72ab6678367daf5922c900bea0bd3b6f&","https://media.discordapp.net/attachments/1284907515381022720/1284907587845754951/1726415667233.png?ex=66f97a71&is=66f828f1&hm=445f1981d80decf63722ff626d0082674663346db2ea3af09408dda007deff29&","https://media.discordapp.net/attachments/1284907515381022720/1284907600340717802/1726415624630.png?ex=66f97a74&is=66f828f4&hm=592c176965b8433aa08cc220f96611db0dd4fd1f7a4df77f20f5159628b62a1f&"," https://cdn.discordapp.com/attachments/1284907515381022720/1284907612428570644/1726415593244.png?ex=66f97a77&is=66f828f7&hm=50cd5e7c9a20b757be60e8003a99f94db4cc406a81c78522d0763aee89f93868&","https://cdn.discordapp.com/attachments/1284907515381022720/1284907647669244086/1726415809605.png?ex=66f97a7f&is=66f828ff&hm=e73b4dc54178279aa48a4910c087b75f0581b2a9b676bbde2f39199dee698d71&","https://cdn.discordapp.com/attachments/1284907515381022720/1284907659912417431/1726416062824.png?ex=66f97a82&is=66f82902&hm=970f6fdaff9fa52858db9ddc91123bb4e0a2fda7b1408985d4a0d279c95c0f7f&","https://cdn.discordapp.com/attachments/1284907515381022720/1284907668791889983/1726415861342.png?ex=66f97a84&is=66f82904&hm=3f5c91e01dfa3c157ec809918d3389a8c0b9c69ccdb0cdc8daacce3fd3b5c828&","https://cdn.discordapp.com/attachments/1284907515381022720/1284907946832302133/1726416317893.png?ex=66f97ac6&is=66f82946&hm=92f5975cb716859a04ec9543bd8b1f71dfb9b9057c08fcec7cd6304953b59ddd&","https://cdn.discordapp.com/attachments/1284907515381022720/1284907965211738112/1726415220361.png?ex=66f97acb&is=66f8294b&hm=781fc8ec83aa31a8b054eb8a60cf4acf40a600eb2922497a2861dbf67f4ce17b&","https://cdn.discordapp.com/attachments/1284907515381022720/1284907988162969651/1726414436947.png?ex=66f97ad0&is=66f82950&hm=b831d7bcffa69c95f2533f823e15a4ea7b770785f1ccf2c98f5a7091d9739805&","https://cdn.discordapp.com/attachments/1284907515381022720/1284908033058537502/1726414387541.png?ex=66f97adb&is=66f8295b&hm=df5f13879b31c34309b911fc719994417fe93da7af18e30a974e62f1aa62988c&","https://cdn.discordapp.com/attachments/1284907515381022720/1284908063349800960/1726415537277.png?ex=66f97ae2&is=66f82962&hm=1724b1ba11b97440b3262fe90f7390d2b83800855417b27877511c0292ea46cc&","https://cdn.discordapp.com/attachments/1284907515381022720/1284908104584269918/1726414480528.png?ex=66f97aec&is=66f8296c&hm=7faac5505f7bb7d90194628ab8f01647ad3e3a989b96b47871ab2a2e1111e329&","https://cdn.discordapp.com/attachments/1284907515381022720/1284908210674733187/1726414355789.png?ex=66f97b05&is=66f82985&hm=e773983b68866bdab1a46bb53722353f3f48c4fc98e6599cfe7fb89e1ce6ed4a&","https://cdn.discordapp.com/attachments/1284907515381022720/1284908230148882473/1726414324022.png?ex=66f97b0a&is=66f8298a&hm=18449f640021fef776cca559d33ed464af6d43248332848290d938154faccfb0&","https://cdn.discordapp.com/attachments/1284907515381022720/1284908366178816050/1726414835953.png?ex=66f97b2a&is=66f829aa&hm=6aaabe25b403f2807bf33856d66e1c8a3f4995c8396f17f45824e15060ab4e88&","https://cdn.discordapp.com/attachments/1284907515381022720/1284913371245838366/1726415171244.png?ex=66f97fd4&is=66f82e54&hm=bcac2f9e28cf6bbdf5905bed28edd32f83b336f8fad63bb689b925b9ce917a37&","https://cdn.discordapp.com/attachments/1284907515381022720/1284913393442095184/1726414913015.png?ex=66f97fd9&is=66f82e59&hm=c9cff0175ac65d077e90864268c64f116f47d92914d99ae31e4d62a95e66da77&","https://cdn.discordapp.com/attachments/1284907515381022720/1284913410760376371/1726415306541.png?ex=66f97fdd&is=66f82e5d&hm=7cc2b2512977efb3d823e5bf3f4ea05bc1c3c691ca082a87c3851e42e4291ae7&","https://cdn.discordapp.com/attachments/1284907515381022720/1285019391649648722/1726415034396.png?ex=66f9e291&is=66f89111&hm=1f3efaaf82ffbeebc2e6653ae6919bcb0ebdd0d819853a4da33f894e6c67906d&","https://cdn.discordapp.com/attachments/1284907515381022720/1284913420126388254/1726417558602.png?ex=66f97fdf&is=66f82e5f&hm=0264af423ab74cd333e63d61d5a7a9b50f93423999290e76baccf82a6c1e2209&","https://cdn.discordapp.com/attachments/1284907515381022720/1284913473884782602/1726414584760.png?ex=66f97fec&is=66f82e6c&hm=03cd5281a83ba2f6445a1fd8546f66d22b8ae28cd7b8eade945ec074cc84c1e1&","https://cdn.discordapp.com/attachments/1284907515381022720/1284913498564067510/1726415086729.png?ex=66f97ff2&is=66f82e72&hm=ca245c68705908a98f1ee6831b23e98381afed9a440a468c30ffa4ff710b4acc&","https://cdn.discordapp.com/attachments/1284907515381022720/1284913531933823047/1726414788894.png?ex=66f97ffa&is=66f82e7a&hm=3ef0aba219bd1300eb1edf1c64740198378f4ef71daed0ce1612b187a9c4a936&","https://cdn.discordapp.com/attachments/1284907515381022720/1284913584387788892/1726414718013.png?ex=66f98007&is=66f82e87&hm=25606a99c4e144ff4463baeb443929fcd19c19faa44c5271472821b6ce58c855&"
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
