
/*navigation bar*/
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

/*GALLERY*/
// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementsByClassName("imgss");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

  for (var i = 0; i < img.length; i++) {
    img[i].onclick = function(){
	modal.style.display = "block";
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
}