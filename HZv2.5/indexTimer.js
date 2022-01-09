//----------------------------- timer ---------------------------
// Set the date we're counting down to
var countDownDate = new Date("Jan 11, 2022 00:00:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
   
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "Zápas nyní probíhá";
  }if (distance < -7200) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "Zápas již proběhl...";
  }
}, 1000);

document.getElementById("js_Text_Nadpis").innerHTML = "Příměstský tábor Sportovní příměstský tábor určený pro děti od 2. do 5. třídy v termínu 12. – 16. 7. 2021 - Stále volné termíny!!";
document.getElementById("js_Sbal_but").style.display = "none";
document.getElementById("chcuCenter").style.margin = "auto";
document.getElementById("chcuCenter").style.textAlign = "center";

function myFunctiontlacitko() {
  document.getElementById("js_Text_Upo").innerHTML = "Do Úval se již podruhé sjedou olympionici z celého světa, aby se zúčastnili XXXIII. Olympijských her. Všichni už se letošní olympiády nemohou dočkat! Očekává se účast špičkových sportovců z celého světa, kteří mezi sebou budou měřit své síly. Na program olympijských her se přidávají nové disciplíny! Účastníci budou mít možnost soupeřit i v mnoha míčových sportech pod hlavičkou jednotlivých zemí. Sportovní událost tohoto roku je tady!<br>Cena 3000 Kč na turnus. V případě nekonání akce garantujeme 100 % vrácení uhrazené částky. V ceně jsou zahrnutí trenéři, sportovní hala a tělocvična, obědy v restauraci Na Dobrým místě, svačiny a pitný režim po celou dobu akce.<br><a href='https://www.seznam.cz/'><img src='logo.png' width='100' height='129'/></a><br>Pro více informací klikněte na logo...";
  document.getElementById("js_Rozbal_but").style.display = "none"
  document.getElementById("js_Sbal_but").style.display = "block"
  document.getElementById("js_Sbal_but").style.margin = "auto";
}
function myFunctiontlacitkoSbal() {
  document.getElementById("js_Text_Upo").innerHTML = "";
  document.getElementById("js_Rozbal_but").style.display = "block"
  document.getElementById("js_Sbal_but").style.display = "none"
  document.getElementById("js_Rozbal_but").style.margin = "auto";
}

//var node = document.createElement("DIV");
//var textnode = document.createTextNode("<img class ='imgss' src='Obrazek1.jpg' alt='<h4>V sobotu 27.11.2021 jsme odehráli náročné utkání s Duklou Praha.</h4> Od začátku utkání jsme prohrávali, ale nevzdávali njsme se a bojovali celých 60 minut.<br> První polovinu utkání jsme prohráli o 11 branek a věděli jsme, že do druhé poloviny musíme něco změnit. Začali jsme v útoku hrát v 7 hráčích bez brankáře, a to na soupeře platilo. Obdrželi jsme sice 4 góly do prázdné branky, ale jinak se hra vyrovnala a celý druhý poločas jsme prohráli jen o 5 branek. Na křídle se nejvíce dařilo Vojtovi Váchovi a spojce Janu Kristovi. Celkově je nejpozitivnějším ten fakt,<br> že se na produktivitě družstva podílelo hned 9 hráčů. Týmový výkon je základem úspěchu. Konečný výsledek je vzhledem k marodce našeho týmu přijatelný. sobotu 27.11.2021 jsme odehráli náročné utkání s Duklou Praha. Od začátku utkání jsme prohrávali, ale nevzdávali \njsme se a bojovali celých 60 minut. První polovinu utkání jsme prohráli o 11 branek a věděli jsme, že do druhé poloviny musíme něco změnit. Začali jsme v útoku hrát v 7 hráčích bez brankáře, a to na soupeře platilo. Obdrželi jsme sice 4 góly do prázdné branky, ale jinak se hra vyrovnala a celý druhý poločas  sobotu 27.11.2021 jsme odehráli náročné utkání s Duklou Praha. Od začátku utkání jsme prohrávali, ale nevzdávali \njsme se a bojovali...... kzs '>");
//node.appendChild(textnode);
//document.getElementById("testJS1").appendChild(textnode);

//let textNadpis ="V sobotu 27.11.2021 jsme odehráli náročné utkání s Duklou Praha. ggWPPRACECEKA"; 
  
 // for (var i = 0; i < 4; i++) {

	
  
     //$("g").append("<div class='novinky' id='testJS1'><img class ='imgss' src='Obrazek1.jpg' alt='<h4>"+textNadpis+"</h4> Od začátku utkání jsme prohrávali, ale nevzdávali njsme se a bojovali celých 60 minut.<br> První polovinu utkání jsme prohráli o 11 branek a věděli jsme, že do druhé poloviny musíme něco změnit. Začali jsme v útoku hrát v 7 hráčích bez brankáře, a to na soupeře platilo. Obdrželi jsme sice 4 góly do prázdné branky, ale jinak se hra vyrovnala a celý druhý poločas jsme prohráli jen o 5 branek. Na křídle se nejvíce dařilo Vojtovi Váchovi a spojce Janu Kristovi. Celkově je nejpozitivnějším ten fakt,<br> že se na produktivitě družstva podílelo hned 9 hráčů. Týmový výkon je základem úspěchu. Konečný výsledek je vzhledem k marodce našeho týmu přijatelný. sobotu 27.11.2021 jsme odehráli náročné utkání s Duklou Praha. Od začátku utkání jsme prohrávali, ale nevzdávali \njsme se a bojovali celých 60 minut. První polovinu utkání jsme prohráli o 11 branek a věděli jsme, že do druhé poloviny musíme něco změnit. Začali jsme v útoku hrát v 7 hráčích bez brankáře, a to na soupeře platilo. Obdrželi jsme sice 4 góly do prázdné branky, ale jinak se hra vyrovnala a celý druhý poločas  sobotu 27.11.2021 jsme odehráli náročné utkání s Duklou Praha. Od začátku utkání jsme prohrávali, ale nevzdávali \njsme se a bojovali...... kzs '></div>");
//}


//document.getElementById("testJS").innerHTML = "<img class ='imgss' src='Obrazek1.jpg' alt='<h4>V sobotu 27.11.2021 jsme odehráli náročné utkání s Duklou Praha.</h4> Od začátku utkání jsme prohrávali, ale nevzdávali njsme se a bojovali celých 60 minut.<br> První polovinu utkání jsme prohráli o 11 branek a věděli jsme, že do druhé poloviny musíme něco změnit. Začali jsme v útoku hrát v 7 hráčích bez brankáře, a to na soupeře platilo. Obdrželi jsme sice 4 góly do prázdné branky, ale jinak se hra vyrovnala a celý druhý poločas jsme prohráli jen o 5 branek. Na křídle se nejvíce dařilo Vojtovi Váchovi a spojce Janu Kristovi. Celkově je nejpozitivnějším ten fakt,<br> že se na produktivitě družstva podílelo hned 9 hráčů. Týmový výkon je základem úspěchu. Konečný výsledek je vzhledem k marodce našeho týmu přijatelný. sobotu 27.11.2021 jsme odehráli náročné utkání s Duklou Praha. Od začátku utkání jsme prohrávali, ale nevzdávali \njsme se a bojovali celých 60 minut. První polovinu utkání jsme prohráli o 11 branek a věděli jsme, že do druhé poloviny musíme něco změnit. Začali jsme v útoku hrát v 7 hráčích bez brankáře, a to na soupeře platilo. Obdrželi jsme sice 4 góly do prázdné branky, ale jinak se hra vyrovnala a celý druhý poločas  sobotu 27.11.2021 jsme odehráli náročné utkání s Duklou Praha. Od začátku utkání jsme prohrávali, ale nevzdávali \njsme se a bojovali...... kzs '>";
