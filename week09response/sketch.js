let theButton = document.getElementById('btn');
theButton.addEventListener('click', redirect);

function redirect() {
    location.href = 'print.html';

}

var modal = document.getElementById("myModal");

var btn = document.getElementById("myBtn");

var span = document.getElementsByClassName("close")[0];

//open popup
btn.onclick = function() {
  modal.style.display = "block";
}

//close popup
span.onclick = function() {
  modal.style.display = "none";
}

// click out window
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

