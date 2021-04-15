var buttons = document.querySelectorAll('.television_channel a');

for(var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function(e) {
    document.querySelector('.television_screen iframe').src = this.href;
    e.preventDefault();
  });
}

$("button").click(function() {
  $("div").remove(".television_screen");
  $("div").remove(".power_wrapper");
  $("div").remove(".channel_wrapper");

});


