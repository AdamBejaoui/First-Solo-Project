 
 var myimg = document.getElementById("img")
 var firstImg = myimg.src
var ind = 0
var imgs= ["https://www.pcworld.com/wp-content/uploads/2023/04/IMG_20190615_214330.jpg?quality=50&strip=all&w=1024","https://techbeastz.com/wp-content/uploads/2022/06/How-Much-Does-a-Gaming-PC-Weigh.jpg","https://globalcomputers.pk/wp-content/uploads/2021/07/Perks-Of-Having-A-Custom-Gaming-PC.jpeg","https://5.imimg.com/data5/SI/LI/FK/SELLER-8118327/gaming-desktop-pc-custom-built-cpu--500x500.jpg"]

var imgInterval;

 myimg.onmouseenter= function (){
    imgInterval = setInterval(function(){
        if (ind===imgs.length){
            myimg.src = firstImg
            ind = 0
          } else {
            myimg.src = imgs[ind]
          }
          ind = ind+1
    }, 1000)
 }

 myimg.onmouseleave = function() {
    clearInterval(imgInterval)
 }
// this code is gonna make the images change when the mouse enter.


$(".navbar").on({
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


$(".contacts a").on({
    mouseenter: function () {
        $(this).css("color", "yellow")
    },
    mouseleave: function () {
        $(this).css("color", "white")
    }
});

$("#discord").on('click',function(){
    window.location.href='http://discordapp.com/users/486549178462371840'

})

$("#gmail").on('click',function(){
    window.location.href='http://ahmedmhmoud@gmail.com'

})

$("#github").on('click',function(){
    window.location.href='https://github.com/AdamBejaoui'

})

$("#shopbag").on({
    mouseenter: function () {
        $(this).css("color", "yellow")
    },
    mouseleave: function () {
        $(this).css("color", "white")
    }
});


$("#shopbag").on('click',function(){
    window.location.href='http://127.0.0.1:5500/shoppingcart/shopping.html'

})
