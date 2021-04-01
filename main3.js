

function getInputValue2(){
var inputVal = document.getElementById("nom").value;

var inputVal1 = document.getElementById("prenom").value;
var inputVal2 = document.getElementById("ville").value;
var inputVal3= document.getElementById("number").value;
var r1=/[0123456789]{10}/g;//regex avec classe caractére recherche de numero entre 0et 9 entre crochet c la limite des chiffre
var res1= inputVal3.match(r1)
if(res1==null){
  alert("votre numéro de téléphone est faux, veuillez le commencer par ex: '07xxxxx'");
}else{;//filtrer le regex
      alert("le prénom entré est : " + inputVal +"\n" + "le nom entré est : " + inputVal1 +"\n" +"la ville entré est : " + inputVal2+
    "\n" + "le numéro de téléphone est :" + res1);
    alert("merci de votre participation,à bientôt");
}};
