
// var textNadpis = document.getElementById("Nadpis_TXT").value;
 let textNadpisJs = "ss";
//let textNadpis ="V sobotu 27.11.2021 jsme odehráli náročné utkání s Duklou Praha. ggWPPRACECEKA"; 
  
     //$("g").append("<div class='novinky' id='testJS1'><img class ='imgss' src='Obrazek1.jpg' alt='<h4>"+textNadpisJs+"</h4> Od začátku utkání jsme prohrávali, ale nevzdávali njsme se a bojovali celých 60 minut.<br> První polovinu utkání jsme prohráli o 11 branek a věděli jsme, že do druhé poloviny musíme něco změnit. Začali jsme v útoku hrát v 7 hráčích bez brankáře, a to na soupeře platilo. Obdrželi jsme sice 4 góly do prázdné branky, ale jinak se hra vyrovnala a celý druhý poločas jsme prohráli jen o 5 branek. Na křídle se nejvíce dařilo Vojtovi Váchovi a spojce Janu Kristovi. Celkově je nejpozitivnějším ten fakt,<br> že se na produktivitě družstva podílelo hned 9 hráčů. Týmový výkon je základem úspěchu. Konečný výsledek je vzhledem k marodce našeho týmu přijatelný. sobotu 27.11.2021 jsme odehráli náročné utkání s Duklou Praha. Od začátku utkání jsme prohrávali, ale nevzdávali \njsme se a bojovali celých 60 minut. První polovinu utkání jsme prohráli o 11 branek a věděli jsme, že do druhé poloviny musíme něco změnit. Začali jsme v útoku hrát v 7 hráčích bez brankáře, a to na soupeře platilo. Obdrželi jsme sice 4 góly do prázdné branky, ale jinak se hra vyrovnala a celý druhý poločas  sobotu 27.11.2021 jsme odehráli náročné utkání s Duklou Praha. Od začátku utkání jsme prohrávali, ale nevzdávali \njsme se a bojovali...... kzs '></div>");
let nadpiss  ="s";
let texts = "";
let gols = "";
let urls  ="";
let mistos ="";
let tymos = "";
let zkTxT = "";
let zkTxTGene = "";
let users = "";
let psswds = "";

var x = document.getElementById("ChcuPridat");
	x.style.display = "none";

function myFunctionPrihlas() {
  
  users = $("#user_name").val();
  psswds = $("#psswd").val();
  
  if(users == "hazena" && psswds == "uvaly"){
	  var x = document.getElementById("ChcuPridat");
	x.style.display = "block";
	document.getElementById("hlaskaPrihaseni").innerHTML = "Uspěšně přihlášeno...";

  }else{
	  
	  document.getElementById("hlaskaPrihaseni").innerHTML = "Špatné heslo/jmeno";
	  
  }
}

document.getElementById("Upload").style.display = "none";

$("#ChcuPridat").click(function(){
		var x = document.getElementById("ChcuPridat");
	x.style.display = "none";
	document.getElementById("Upload").style.display = "block";
  $("f").append("<br>Nadpis: <textarea id='Nadpis'>");
$("f").append("<br>Text: <textarea id='TextOS'>");
$("f").append("<br>Goly: <textarea id='Goly'>");
$("f").append("<br>Misto&čas: <textarea id='Misto'>");
$("f").append("<br>Tym:  <select name='cars' id='tymos'><option value='Přípravka'>Přípravka</option><option value='Minižáci'>Minižáci</option><option value='Mladší žáci'>Mladší žáci</option><option value='Starší žáaci'>Starší žáaci</option><option value='Mladší dorost'>Mladší dorost</option><option value='Starší dorost'>Starší dorost</option><option value='Muži A'>Muži A</option><option value='Muži B'>Muži B</option></select>");
$("f").append("<p>URL Obrazku: <input type='text' id='URL' value=''></p>");
});

$("#Upload").click(function(){
	nadpiss = $("#Nadpis").val();
texts = $("#TextOS").val();
zkTxT = $("#TextOS").val();

if(zkTxT.length >= 200){
if(zkTxT.length >= 1301){
	document.getElementById("caption").style.fontSize = "14px";
}
for (var i = 0; i < 200; i++) {
	  
	  
    zkTxTGene += zkTxT[i]	;

	}
	zkTxTGene += "..."
	}else{
	zkTxTGene = zkTxT;
}


gols = $("#Goly").val();
urls = $("#URL").val();
 mistos = $("#Misto").val();
tymos = $("#tymos").val();
$("g").append("<div class='novinky' id='testJS1' style='margin-top:20px;'><img class ='imgss' src="+urls+" alt='<h4>"+nadpiss+"</h4>"+texts+"<br><br><i>"+gols+"</i><div><p class='red'>"+tymos+"</p><p class='Nadpis'>"+nadpiss+"</p><p class='text'>"+zkTxTGene+"</p></div></div>");
function load_js()
   {
      var head= document.getElementsByTagName('head')[0];
      var script= document.createElement('script');
      script.src= 'index_js.js';
      head.appendChild(script);
   }
   load_js();

});