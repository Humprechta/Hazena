
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
//side open
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("mySidenav").style.zIndex = "99";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
// Set the date we're counting down to
var countDownDate = new Date("Jan 1, 2022 00:00:25").getTime();

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
  }if (distance < -3600) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "Zápas již proběhl...";
  }
}, 1000);