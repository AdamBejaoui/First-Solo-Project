$(".navbar").on({
    mouseenter: function () {
        $(this).css("color", "yellow")
    },
    mouseleave: function () {
        $(this).css("color", "white")
    }
});

$("#shopbag").on({
    mouseenter: function () {
        $(this).css("color", "yellow")
    },
    mouseleave: function () {
        $(this).css("color", "white")
    }
});

$("#gamingpc").on('click',function(){
  window.location.href='http://127.0.0.1:5500/gaming%20desktop%20pc/desktop.html'

})
$("#Monitor").on('click',function(){
  window.location.href='http://127.0.0.1:5500/monitor/monitor.html'

})
$("#Keyboard").on('click',function(){
  window.location.href='http://127.0.0.1:5500/gaming%20keyboard/keyboard.html'

})
$("#Mouse").on('click',function(){
  window.location.href='http://127.0.0.1:5500/gaming%20mouse/mouse.htm'

})
$("#Home").on('click',function(){
  window.location.href='http://127.0.0.1:5500/firstpage/firstpage.html'

})

$(document).ready(function() {
    $(".change-quantity").click(function() {
      var inputElement = $(this).siblings("input");
      var currentValue = parseInt(inputElement.val());
      var change = parseInt($(this).data("change"));
  
      if (!isNaN(currentValue) && !isNaN(change)) {
        var newValue = currentValue + change;
        if (newValue >= 1) {
          inputElement.val(newValue);
        }
      }
    });
  });

  $("#shopbag").on('click',function(){
    window.location.href='http://127.0.0.1:5500/shoppingcart/shopping.html'

})
