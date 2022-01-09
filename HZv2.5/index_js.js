

/*navigation bar*/
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className == "topnav") {
	  document.getElementById("pozvanka").style.padding = "0px 0px 0px 0px";
    x.className += " responsive";
  } else {
	  document.getElementById("pozvanka").style.padding = "47px 0px 0px 0px";
    x.className = "topnav";
  }
}

/*GALLERY*/
// Get the modal
var modal = document.getElementById("myModal");
var TxtFoto = document.getElementById("txtFoto");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementsByClassName("imgss");
var modalImg = document.getElementById("img01");

var captionText = document.getElementById("caption");
//-webkit-filter: blur(2px);
var value = 99;
  for (var i = 0; i < img.length; i++) {
	  
	  
    img[i].onclick = function(){	
	modal.style.display = "block";
	TxtFoto.style.display = "block";
	modalImg.src = this.src;
	captionText.innerHTML = this.alt;
	}	
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
document.getElementsByClassName("close")[0].style.zIndex = "13";

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
    TxtFoto.style.display = "none";
}
//side open
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("mySidenav").style.zIndex = "99";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

//scroll on top
var mybutton = document.getElementById("nahoruu");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
